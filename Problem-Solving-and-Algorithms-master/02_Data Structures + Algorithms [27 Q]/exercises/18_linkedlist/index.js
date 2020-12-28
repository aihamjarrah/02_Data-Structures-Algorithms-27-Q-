// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
        this.counter = 0;

    }
    
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node
        }
        this.head.next = node
        
    }
    size(){
        while(this.head.next){
            this.counter++;

        }
        return counter
    }
    getFirst(){
        return this.head
    }
    getLast(){
        
    }
    clear(){
        while(this.head){
            if(this.head.next){
                this.head.next = null
            }
            this.head = null
        }
        
    }
    removeFirst(){
        this.head = null
    }
    removeLast(){
        
    }
    insertLast(data){

    }
}

module.exports = { Node, LinkedList };
