function computeFileType(fileName) {
    const arr = fileName.split('.')
    return arr[arr.length-1]
}