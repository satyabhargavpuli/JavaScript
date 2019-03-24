/*****************************************************************************************
 * Execution    :   1. cmd> node queueutil.js
 *                   
 * 
 * Purpose      :   Queue implementation.
 * 
 * @description
 * 
 * @file        :   queueutil.js
 * @overview    :   Queue implementation enqueue dequeue and display function.
 * @author      :   Satya bhargav <Satyabhargav.puli@gmail.com>
 * @version     :   1.0
 * @since       :   12-02-2019
 * 
 * *************************************************************************************/
// ************************************ Queue ******************************************/
 class Queue {

    constructor() {
        this.items = [];
        this.size = 0;
        this.capacity;
        this.front = -1;
        this.rear = -1;
    }
    stack(capacity) {
        this.capacity = capacity;
        var t = new items[capacity];
    }

    enque(data) {
        console.log(data);
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        if (this.front == -1) {
            this.front++;
        }
        this.size++;
        this.items[++this.rear] = data;

    }

    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var ele = this.items[this.front++];
        console.log(this.front)
        this.size--;
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return ele;
    }

    getSize() {
        return this.size;

    }

    isempty() {
        if (size == 0)
            return true;
        else
            return false;

    }

    display() {
        var res = "";
        for (var i = this.front; i <= this.rear; i++) {
            var res = res + this.items[i];
            if (i < this.rear) {
                res = res + ",";
            }

        }
        return res;
    }

}

// **************************************** Deque ***************************************
class Deque {
    constructor() {
      this.items = [];
    }

    addFront(element) {
      this.items.unshift(element);
    }
    
    addRear(element) {
      this.items.push(element);
    }
    
    removeFront() {
      if (this.isEmpty()) return "underFlow";
      return this.items.shift();
    }
    
    removeRear() {
      return this.items.pop();
    }
    
    isEmpty() {
      return this.items.length == 0;
    }
    
    size() {
      return this.items.length;
    }
  }

//********************************** QueueLinked ***************************************/

class Node
{
    constructor(element)
    {
        this.element=element;
        this.next=null;
    }
}

class QueueLinked
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    enqueue(element)
    {
        var n =new Node(element)
        if(this.head==null)
        {
            this.head=n;
            this.size++;
            return
        }
        else
        {
            var current=this.head;
            while(current.next)
            {
                current=current.next
            }
            this.size++;
            current.next=n;
        }
    }

    dequeue()
    {
        if(this.size==0)
        {
            console.log("Queue is empty");
            return;
        }
        var n = this.head.element;
        this.head=this.head.next;
        this.size--;
        return n;
    }
    print() {
        try {
          var string = "";
          var temp = this.head;
          while (temp) {
            string = string + " " + temp.data;
            temp = temp.next;
          }
          return string;
        } catch (error) {
          console.log(error.message);
        }
      }
      
    getelement()
    {
        var curr = this.head;
        var str="";
        while (curr)
        {
            str=str+curr.element;
            if(curr.next!=null)
            {
                str=str+"";

            }
            curr=curr.next;
        }
        return str;
    }

    size()
    {
        return this.size;
    }
    isEmpty()
    {
        if(this.size=0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    displayAnagram(){
        if(this.head==null){
            console.log("No element present ");
            return;
        }
        console.log(" The numbers which are Prime and anagram ");
        var pre=this.head;
        var curr=pre.next;
        var dis=require('util');
    
        while(curr){
               dis.print(pre.element);
            if(pre.next!=null){
                dis.print(" ==> ")
            }
            dis.print(curr.element);
            dis.print(',');
            pre=curr;
            curr=curr.next;
        }
    
    }
    addAscending(){
        var main=this.head;
          var mainHead=null;
        while(main){
         var n=new Node(main.element);
         var flag=true;
         if(mainHead==null){
           
             mainHead=n;
          this.head=mainHead;
    
         }else{
             var pre=mainHead,curr=mainHead;
             if(curr.next==null){
                 if(n.element<curr.element){
                     n.next=curr;
                     mainHead=n;
                     flag=false;
                 }
             }
             while(curr&&flag){
               if(n.element<curr.element){
                   pre.next=n;
                   n.next=curr;
                   flag=false;
               }
    
                 pre=curr;
                 curr=curr.next;
             }
             if(flag){
                 pre.next=n;
             }
         }
         
            main=main.next;
    
        }
        return this.head=mainHead;
    }
    getData(){
        var curr=this.head;
        var str="";
        while(curr){
            str=str+curr.element;
            if(curr.next!=null){
                str=str+" ";
            }
            curr=curr.next;
        }
        return str;
    }
    makeBlank(){
        this.head=null;
    }
    
}

module.exports = { Queue,Deque,QueueLinked,

    monthof(m) {
        switch (m) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;

        }
    }

}
// **************************************** end ***************************************/