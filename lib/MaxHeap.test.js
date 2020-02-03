let {MaxHeap} = require('./MaxHeap')

 class TestMaxheap {
    test(){
        console.log(MaxHeap);
        
        let heap = new MaxHeap();
        for (let i = 0; i < 100; i++) {
            heap.add(i)
        }
        
        for (let i = 0; i < 4; i++) {
            let h = heap.extract()
            console.log(h);
        }
        console.log(heap);
    }
}

let testInst = new TestMaxheap();
testInst.test();
