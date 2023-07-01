const testData : number[] = [1,2,3,4,5,6,7,8,9.10]

/**
 * Binary Search
 * O(logn)
 * @param data :number[]
 * @param search :number
 * @returns number
 */
function binarySearch(data:number[], search:number){
    let lowIndex = 0
    let highIndex = data.length - 1
    let midIndex = Math.floor((lowIndex + highIndex) / 2)

    while(lowIndex <= highIndex){
        if(data[midIndex] === search){
            return midIndex
        }else if(search < data[midIndex]){
            highIndex = midIndex - 1
        }else{
            lowIndex = midIndex + 1
        }
        midIndex = Math.floor((lowIndex + highIndex) / 2)
    }
    return undefined
}


console.log(binarySearch(testData, 10))