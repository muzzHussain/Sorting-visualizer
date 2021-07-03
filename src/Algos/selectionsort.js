function selectionSortAnimation(array){

    const sequence = []
    const n = array.length
    const a = array.slice()

    for(let i=0; i<n; ++i) {

        let min = i;

        for(let j=i+1; j<n; ++j) {

            sequence.push([j, j+1, "comp"])
            if(a[j] < a[min]){
                min = j;
            }
        }

        sequence.push([i, i+1, "comp"])
        if(min !== i) {
            sequence.push([i, i+1, "swap"])

            let temp = a[i]
            a[i] = a[i+1]
            a[i+1] = temp
        }
        sequence.push([i, i+1, "comp"])
    }

    return sequence
}

export default selectionSortAnimation