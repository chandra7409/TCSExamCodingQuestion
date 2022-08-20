class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
        this.maxSize = 5;
    }
    size() {
        return this.top + 1;

    }
    isEmpty() {
        return this.top <= -1;

    }
    push(element) {
        if (this.top + 1 >= this.maxSize) {
            throw new Error("stack overflow");
        }
        this.top + 1;
        this.data[this.top] = element;
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("stack  underflow");
        }
        this.top--;
    }
    peek() { //top element of the stack
        if (this.isEmpty()) {
            throw new Error("stack  underflow");
        }
        return this.data[this.top];

    }
    insertElementAtBottom(value) {
        if (this.isEmpty()) { //base case
            this.push(value);
            return;
        }

        let x = this.peek();
        this.pop();
        this.insertElementAtBottom(value);
        this.push(x);
    }

    reverse() {
        if (this.isEmpty()) {
            return;
        }
        let temp = this.peek();
        this.pop();
        this.reverse();
        this.insertElementAtBottom(temp);
    }

}
let myStack = new Stack();
myStack.push(10);
//console.log(myStack.peek());
myStack.push(20);
//console.log(myStack.peek());
myStack.push(30);
//console.log(myStack.peek());

// console.log(myStack.peek());
myStack.pop();
// console.log(myStack.peek());
myStack.pop();
// console.log(myStack.peek());
myStack.push(100);
// console.log(myStack.peek());
myStack.pop();
// console.log("size", myStack.size());
// console.log(myStack.peek());
myStack.pop();
//console.log("size", myStack.size());
if (!myStack.isEmpty()) {
    myStack.pop();
    console.log(myStack.peek());
}

myStack.push(200);
myStack.push(201);
myStack.push(202);
myStack.push(203);
//myStack.push(204);

// myStack.push(205);