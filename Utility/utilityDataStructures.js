/***********************************************************
 *
 * Execution     :Default node      cmd>node utilityDataStructures.js
 * Purpose       :To deploy all the business logic.
 * 
 *@description 
 * 
 *
 *@file          :utilityDataStructures.js
 *@overview      :All the business logic are coded here.
 *@author name   :Satya bhargav <Satyabhargav.puli@gmail.com>
 *@version       :1.0
 *@since         :29/03/2019
 * 
 ***********************************************************/
var utility = require('../Utility/utility')
class Node {
    /**
     * 
     * Node has to variable data,next.Data will point to current data 
     * and next will point to the next node. 
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/****************UnOrdered LinkedList & Ordered LinkedList. ******************* */
class LinkedList {
    /**
     * LinkedList has two varibles head,size 
     * head will always point to first node and size will be zero if no node object is created.
     */
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        var node = new Node(data)
        /**
         * add method by accepting the data it will create new node object.
         */
        var current;
        if (this.head == null) {
            this.head = node;
            /**
             * Condition is used to check weather the head is pointing to null.
             */
        }
        else {
            current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    isEmpty() {
        /**
         * Condition to check the size is zero or not.
         */
        if (this.size == 0)
            return true
        else
            return false;
    }
    remove(data) {
        var temp = this.head
        var t = null
        while (temp != null) {
            if (temp.data == data) {
                if (t == null) {
                    this.head = temp.next
                }
                else {
                    t.next = temp.next
                }
                this.size--
                return temp.data;
            }
            t = temp
            temp = temp.next
        }
        return -1
    }


    search(data) {
        /*
         *contain function searches for the item in the list
         *it needs the item and returns boolean value
         */
        if (this.head == null) {
            console.log("List is empty");
        }
        else {
            var temp = this.head;
            while (temp) {
                if (temp.data == data) {
                    return true;
                }
                else
                    temp = temp.next;
            }
            return false;
        }
    }
    print() {
        var temp = this.head;
        var str = "";
        while (temp) {
            /**
             * Loop till temp is equal to null.
             */
            str += temp.data + " ";
            temp = temp.next;
        }
        return str;
    }
    indexOf(data) {
        var count = 0;
        var temp = this.head;
        while (temp != null) {
            if (temp.data === data)
                return count;
            count++;
            temp = temp.next;

        }
        return -1;
    }
    addPos(arr, num) {
        console.log(num + "  in addpos")
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[0] >= num)
                return 0
            else if (arr[i] < num && arr[i + 1] > num) {
                return i + 1
            }
        }
        return arr.length
    }
    /**
     * 
     *insert element at the position index of the list 
     * 
     */
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            /**
             *  creates a new node 
             */
            var node = new Node(element);
            var curr, prev;
            curr = this.head;
            /**
             * add the element to the first index 
             */
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
                /**
                 *  iterate over the list to find the position to insert 
                 */
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                /**
                 * 
                 * adding an element 
                 */
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    printele() {

        var temp = this.head
        while (temp) {
            var st = ""
            st = st + "name: " + temp.data.name + ", share:" + temp.data.share + ",price: " + temp.data.price
            console.log(st);
            temp = temp.next
        }

    }
    printShares() {
    var arr = [];
    if (this.head == null) {
      return null;
    } else {
      var temp = this.head;
      while (temp) {
        arr.push(temp.data);
        temp = temp.next;
      }
      return arr;
    }
  }
  /**
   * To remove the share from the stock
   * @param {any} element 
   */
  removeStock(element) {
    var temp = this.head;
    var prev = null;
    // iterate over the list
    while (temp != null) {
      // comparing element & if found then remove
      var stock = temp.data;
      if (stock.name == element ||stock.symbol==element) {
        if (prev == null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        /**
         * To decrement the size of the LinkedList
         */
        this.size--;
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return -1;
  }

}
/****************************************Stack*********************************************/
/**
 * 1.Simple Balanced Parentheses.
 * 
 * @description:Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations.
 *              Ensure parentheses must appear in a balanced fashion.
 * 
 * @purpose :   To balance paranthesis  in the mathematical expression.
 * 
 * @param:      Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. 
 *              At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced.
 */
/***************************Balanced Parentheses***************************** */
class Stack {
    constructor() {
        this.item = [];
        this.capacity;
        this.top = -1;
        this.size = 0;
    }
    size() {
        return this.size;
    }
    isEmpty() {
        /**
         * Condition to check the size is zero.
         */
        if (this.size == 0)
            return true;
        else
            return false;
    }
    push(data) {
        /**
         * Condition to  check the top is less then 1 if it is stack overflow.
         */
        if (this.top == this.capacity - 1) {
            console.log("Stack overflow");
            return;
        }
        this.size++;
        this.item[++this.top] = data;
    }
    pop() {
        /**
        * Condition to  check the top is less then 1 if it is stack is empty.
        */
        if (this.top == this.capacity - 1)
            console.log("Stack is empty");
        this.size--;
        return this.item.pop();
    }
    peek() {
        if (this.top == -1)
            console.log("Stack is empty");
        else
            return this.item[top];
    }
    print() {
        var st = ""
        var temp = this.top
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
}
/***********************************StackLinkedList************************************ */
class StackLinkedList {

    constructor() {
        this.size = 0
        this.head = null;
    }
    size() {

        return this.size
    }
    isEmpty() {
        /**
         * Condition to check the size is zero.
         */
        return top == null;
    }
    push(data) {
        var n = new Node(data)
        if (this.head == null) {
            this.head = n
            this.size++
        }
        else {
            var temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = n
            this.size++
        }
    }
    pop() {
        if (this.head == null) {
            console.log("Stack underflow");
            return null;
        }
        var curr = this.head;
        var pre = this.head;
        if (curr.next == null) {
            this.head = null;
            return curr.data;
        }
        while (curr.next) {
            pre = curr;
            curr = curr.next;
        }
        var data = curr.data
        pre.next = null;
        this.size--;
        return data;
    }
    peek() {
        // check for empty stack 
        if (!isEmpty()) {
            return high.data;
        }
        else {
            console.log("Stack empty");
            return -1;
        }
    }
    print() {
        var st = ""
        var temp = this.head
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
    printShares() {
        var arr = [];
        if (this.head == null) {
          return null;
        } else {
          var temp = this.head;
          while (temp) {
            arr.push(temp.data);
            temp = temp.next;
          }
          return arr;
        }
}
}
/**************************************LinledListQueue************************************ */
class LinledListQueue {
    constructor() {
        this.tail = null;
        this.head = null;
    }
    /**
     * To add an element into the rear of the queue.
     * @param {any} item
     */
    enQueue(item) {
        /**
         * Create a node by passing the item
         */
        let node = new Node(item);
        /**
         * If there are no head and tail, point the data to head and tail
         */
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            /**
             * We just move the tail pointer.
             */
            this.tail.next = node;
            this.tail = node;
        }
    }
    /**
     * To remove an item from the queue.
     */
    deQueue() {
        if (!this.head) {
            return "No item";
        } else {
            let itemToPop = this.head;
            this.head = this.head.next;
            return itemToPop.data;
        }
    }
    /**
     *return true if the queue is empty.
     */
    isEmpty() {
        return this.size() < 1;
    }
    /**
     * Returns the size of the queue
     */
    size() {
        let current = this.head;
        let counter = 0;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }
    printList() {
        var st = ""
        var temp = this.head
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
}
/***************************************Queue******************************************* */
/**
 * 1.Simulate Banking Cash Counter
 * 
 * @description:Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
 *              Have an input panel to add people to Queue to either deposit or withdraw money and dequeue
 *              the people. Maintain the Cash Balance.
 * 
 * @purpose:    To create bank cash counter where amount is deposited and withdrawn from the account.
 * 
 * @param:      Queue Class to enqueue and dequeue people to either deposit or withdraw money and maintain the cash balance
 */
/*************************Simulate Banking Cash Counter************************* */
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(data) {
        /**
         * 
         * adding element to the queue
         * 
         */
        this.items.push(data)
    }
    deEqueue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    isEmpty() {
        /**
         * 
         *return true if the queue is empty. 
         * 
         */
        return this.items.length == 0;
    }
    printList() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

/******************************************deQueue********************************************** */
class deQueue {
    constructor() {
        this.items = []
    }
    addFront(data) {
        /**
         * Adds the data to first element.
         */
        this.items.unshift(data)
    }
    addRear(data) {
        /**
         * Adds the data to last element.
         */
        this.items.push(data)
    }
    removeFront() {
        if (this.isEmpty())
            return "underFlow"
        /**
         * Removes the first element.
         */
       
         return this.items.shift()
    }
    removeRear() {
        /**
         * Removes the top element.
         */
        return this.items.pop()
    }
    isEmpty() {
        /**
         * 
         *return true if the queue is empty. 
         * 
         */
        return this.items.length == 0;
    }
}
module.exports = {
    LinkedList, Stack, Queue, deQueue, StackLinkedList, LinledListQueue,
    /************************binaryTree************************* */
    /**
     * 1.Binary Tree.
     * 
     * @description:First line will contain an integer, T, number of test cases. Then T lines follow, where each line represent a test case.
     *              Each test case consists a single integer, N, where N is the number of nodes in the binary search tree. 
     * 
     * @purpose:    Given N nodes, each having unique value ranging from [1, N], how many different binary search tree can be created using all of them
     * 
     * @param:      For each test case, find the number of different binary search trees that can be created using these nodes. 
     */
    binaryTree(num) {
        var fact = 1;
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    },
    /*****************************isPrime***************************** */
    isPrime(i, j) {
        var flag = 0;
        k = 0;
        var prime = [];

        for (var index1 = i; index1 <= j; index1++) {
            for (var index2 = 2; index2 < index1; index2++) {
                if (index1 % index2 == 0) {
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = index1;
            }
        }
        return prime;
    },
    /****************************dArray***************************** */
    dArray() {
        var arr = [];
        var arr2 = [];
        var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        for (let i = 2; i < 1000; i++) {
            if (utility.isPrime(i)) {
                arr.push(i);
            }
        }
        var range = 100, k = 0;
        /**
         * Loop to find anagram and push it to stack.
         */
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (utility.isAnagram(arr[i], arr[j])) {
                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);

                            arr2.push(arr[i])
                            arr2.push(arr[j])
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }
                }
            }
        }
        console.log("The Number which are prime and anagram ");
        var req = require('util')
        for (let i = 0; i < array.length; i++) {

            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j]);
                if (j == 0) {
                    req.print(" => ");
                } else {
                    if (j != array[i].length - 1)
                        req.print(",")
                }
            }
            console.log();
        }
        return arr2
    },

}
