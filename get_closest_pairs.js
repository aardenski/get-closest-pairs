function getClosestPairs(array1, array2, target) {

    let combinedArray = [];
    // each from first with each from second
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            combinedArray.push([array1[i], array2[j]]);
        }
    }
    // array of the elements and their sums 
    let diffArray = [];

    for (let i in combinedArray) {
        let pair = {
            element1: combinedArray[i][0],
            element2: combinedArray[i][1],
            sum: (combinedArray[i][0] + combinedArray[i][1])
        }
        diffArray.push(pair);
    }
    // sorting the array by descending sum
    diffArray.sort(function (a, b) { return b.sum - a.sum; })

    let final = [];
    let diff = 0;

    for (let i in diffArray) {
        for (let j in diffArray) {
            if (diffArray[j].sum === target + diff || diffArray[j].sum === target - diff) {
                final.push([diffArray[j].element1, diffArray[j].element2]);

            }
        }
        if (final.length > 0) {
            console.log(final);
            return;
        }
        diff++;
    }
}
getClosestPairs([7, 4, 1, 10], [4, 5, 8, 7], 13);