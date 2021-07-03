
function MergeSortAnimation(array) {

    const sequence = []
    if(array.length <= 1) return array
    const auxiliaryArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, sequence)
    return sequence
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, sequence){
    
    if(startIdx === endIdx) return
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, sequence)
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, sequence)
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, sequence)
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, sequence){
    let k = startIdx
    let i = startIdx
    let j = middleIdx + 1

    while(i <= middleIdx && j <= endIdx){

        sequence.push([i, j, "comp"])
        sequence.push([i, j, "comp"])
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            sequence.push([k, auxiliaryArray[i], "over"])
            mainArray[k++] = auxiliaryArray[i++]
        }
        else {
            sequence.push([k, auxiliaryArray[j], "over"])
            mainArray[k++] = auxiliaryArray[j++]
        }
    }

    while(i <= middleIdx) {
        sequence.push([i, i, "comp"])
        sequence.push([i, i, "comp"])
        sequence.push([k, auxiliaryArray[i]])
        mainArray[k++] = auxiliaryArray[i++]
    }

    while(j <= endIdx) {
        sequence.push([j, j, "comp"])
        sequence.push([j, j, "comp"])
        sequence.push([k, auxiliaryArray[j], "over"])
        mainArray[k++] = auxiliaryArray[j++]
    }
}

export default MergeSortAnimation