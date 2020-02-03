function add(arr, start){
    if(start<0){
        return 0;
    }
    return add(arr, start-1)+arr[start]
}

function createTestArr(count){
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr[i] = i;
    }
    return arr;
}

for (let i = 0; i < 100000; i++) {
    let arr = createTestArr(i)
    try {
        let result = add(arr, arr.length-1)
    } catch (error) {
        console.error(error);
        
        console.log("Some error happend "+ i);
        break
    }
}

