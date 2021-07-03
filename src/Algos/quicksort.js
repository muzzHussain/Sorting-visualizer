function QuickSortAnimation(array) {

    const sequence = []
    const a = array.slice()

    const low = 0, high = array.length-1
    quickSortHelper(a, low, high, sequence)
    return sequence
}


function quickSortHelper(a, low, high, sequence) {
    if(low < high) {
        const pi = partition(a, low, high, sequence);
        quickSortHelper(a, low, pi-1, sequence);
        quickSortHelper(a, pi + 1, high, sequence)
    }
}

function partition(a, low, high, sequence) {
    let pivot = a[high]
    let i = (low - 1);

    for( let j = low; j <= high - 1; ++j) {
        sequence.push([j, high, "comp"])
        if(a[j] < pivot) {
            ++i; 
            let temp = a[i]
            a[i] = a[j]
            a[j] = temp
            sequence.push([i, j, "swap"])
        } 
        sequence.push([j, high, "comp"])
    }

    let temp = a[i+1]
    a[i+1] = a[high]
    a[high] = temp
    sequence.push([i+1, high, "swap"])
    return (i+1);
}

export default QuickSortAnimation