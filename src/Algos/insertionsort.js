
function InsertionSortAnimation(array) {

    const sequence = []
    const n = array.length
    const arr = array.slice()

    for(let i=1; i<n; ++i) {
        var key = arr[i]
        var j = i - 1

        while(j>=0 & arr[j] > key) {
            sequence.push([j, j+1, "comp"])
            arr[j+1] = arr[j]
            sequence.push([j+1, arr[j], "over"])
            sequence.push([j, j+1, "comp"])
            j = j - 1
        }

        arr[j+1] = key
        sequence.push([j+1, key, "over"])
    }

    return sequence
}

export default InsertionSortAnimation