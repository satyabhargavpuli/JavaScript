/*****************************************************************************************
 * 
 * 
 * Purpose      :   Stack implementation.
 * 
 * @description
 * 
 * @file        :   stackutil.js
 * @overview    :   Stack implementation push pop peek and display function.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   23-03-2019
 * 
 * *************************************************************************************/
// *************************************** Stack ***************************************/
 class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }

    stack(capacity) {
        this.capacity = capacity;
        var t = new items[capacity];
    }

    push(data) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.items[++this.top] = data;
    }

    pop() 
    {
        if (this.top == -1)
            console.log("stack is empty");
            this.size--;
        return this.items[this.top--];
    }

    peak() {
        if (this.top == -1)
            console.log("stack is empty");
        else
            console.log(this.items[top]);

    }

    getSize()
    {
        return this.size;

    }

    isempty() {
        if (size == 0)
            return true;
        else
            return false;

    }

    display() {
        var st = "";
        for (let i = 0; i < this.size; i++) {
            st = st + " " + items[i];
        }
    }

    reversStack(items) {
        var newstack = new Stack;
        var n = this.getSize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }
    
}
//*************************************** Stacks ***********************************************
// Stack operations using exception handling(try,catch).
class SNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  /**@description:stack class 
   * @param      :push
  */
  class Stacks {
    constructor() {
      this.top = null;
    }
       push(item) {
      try {
        let node = new SNode(item);
        if (this.top) {
          node.next = this.top;
          this.top = node;
        } else {
          this.top = node;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * @param :pop method
     */

    pop() {
      try {
        if (this.top) {
          let itemToPop = this.top;
          this.top = this.top.next;
          return itemToPop.data;
        } else {
          console.log("Stack is empty!");
          return false;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
      /**
     * @param :peak method
     */

    peak() {
      try {
        if (this.top) {
          return this.top.data;
        } else {
          return null;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
      /**
     * @param :isEmpty method
     * @description:it is used to check whether the given stack is empty or not
     */

    isEmpty() {
      return this.length > 1;
    }
  /**
     * @param :size method
     */
    size() {
      let current = this.top;
      let counter = 0;
      while (current) {
        counter++;
        current = current.next;
      }
      return counter;
    }
  /**
     * @param :print method
     */
    print() {
      try {
        var string = "";
        var temp = this.top;
        while (temp != null) {
          string = string + " " + temp.data;
          temp = temp.next;
        }
        return string;
      } catch (error) {
        console.log(error.message);
      }
    }

    printShares(){
      var arr = [];
      if (this.top == null) {
        return null;
      } else {
        var temp = this.top;
        while (temp) {
          arr.push(temp.data);
          temp = temp.next;
        }
        return arr;
      }
    }
  /**
     * @param :removeStock method
     */
    removeStock(element) {
      var temp = this.top;
      var prev = null;
      while (temp != null) {
       var stock = temp.data;
        if (stock.name == element || stock.symbol == element) {
          if (prev == null) {
            this.top = temp.next;
          } else {
            prev.next = temp.next;
          }
          this.size--;
          return temp.data;
        }
        prev = temp;
        temp = temp.next;
      }
      return -1;
    }
  }
module.exports={Stack,Stacks}
// *************************************** End *************************************/