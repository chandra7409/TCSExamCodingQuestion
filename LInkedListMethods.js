class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }
    appendFirst(element) {
        let head = new Node(element, this.head)
        this.head = head
        this.length++
    }
    let list = new LinkedList()

    //using the append first method of the linked list class
    list.appendFirst(10)
    list.appendFirst(15)
    print() {
            let current = this.head
            while (current) {
                console.log(current.element)
                current = current.next
            }
        }
        // add another element to the linked list
    list.appendFirst(15)
    list.appendFirst(20)

    //Run the print method
    List.print()

    //result logged to the conso
    isEmpty() {
        return this.length === 0
    }
    getHead() {
        return this.head
    }


}