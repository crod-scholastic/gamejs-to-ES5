let arr = [1, 2, 3];
arr.forEach((e) => {console.log(e)});

class Test {
    constructor(){
        this.property = 4;
    }
    hello(){
        console.log("HELLO");
    }
}

let t = new Test();
console.log(t.property);
t.hello();