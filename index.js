// Code your solution here
function findMatching(arr, str){
    return arr.filter(element => element.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str){
    return arr.filter(element => element.startsWith(str));
}

function matchName(arr, str){
    return arr.filter(element => element.name === str)
}