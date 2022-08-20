class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    printLinkedList() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}



const insertBefore = (data, value, doublyLinkedList) => {
    let newNode = new Node(value); // Create a new node
    let head = doublyLinkedList.head;
    while (head.next != null && head.data != data) {
        head = head.next;
    }
    if (head != null && head.data == data) {
        let prev = head.previous;
        if (prev != null)
            prev.next = newNode;
        head.prev = newNode;
        newNode.prev = prev;
        newNode.next = head;
        if (prev == null) doublyLinkedList.head = newNode;
        doublyLinkedList.length++;
    }
}

const insertAfter = (data, value, doublyLinkedList) => {
    let newNode = new Node(value); // Create a new node
    let head = doublyLinkedList.head;
    while (head.next != null && head.data != data) {
        head = head.next;
    }
    if (head != null && head.data == data) {
        let next = head.next;
        if (next != null)
            next.prev = newNode;
        head.next = newNode;
        newNode.next = next;
        newNode.prev = head;
        doublyLinkedList.length++;
    }
}

const searchData = (data, doublyLinkedList) => {
    let head = doublyLinkedList.head;
    while (head.next != null && head.data != data) {
        head = head.next;
    }
    if (head != null && head.data == data) {
        return true;
    } else false;
}


doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.head = new Node(1);
insertBefore(1, 2, doublyLinkedList);
doublyLinkedList.printLinkedList();
insertAfter(1, 3, doublyLinkedList);
doublyLinkedList.printLinkedList();
console.log(searchData(3, doublyLinkedList));