/******************************************************************************
 *  Execution       :   1. default node          : cmd> node deckOfcards.js
 *                      2. if nodemon installed  : cmd> nodemon deckOfcards.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To print the cards received by 4 players using 2D array.
 *
 *  @description    : To initialize deck of cards having suit and Rank then shuffle the cards using 
                      Random method and then distribute 9 Cards to 4 Players and Print the Cards the 
                      received by the 4 Players.
 *  @file           : deckOfcards.js
 *  @overview       : To print shuffeled deck of cards.
 *  @author         : satya bhargav         <satyabhargav.puli@gmail.com>
 *  @version        : 1.0
 *  @since          : 
 *
 ******************************************************************************/
var read = require('readline-sync')
var access = require('../../Utility/utilityDataStructures');
var ut = require('../../Utility/utility')
var T = require('util')
function deckCards() {
    try {
        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        /**
         * @description:To calculate length of suits and values
         */
        var cards = suit.length * rank.length;
        /**
         * to create new array of deck
         */
        var cardarr = [];
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                cardarr.push(temp + rank[j] + suit[i])
            }
        }
        /**
        * shuffle deck.
        */
        for (let i = 0; i < cards; i++) {
            var num = Math.floor(Math.random() * cards)
            /**
             * swapping
             */
            var temp = cardarr[i]
            cardarr[i] = cardarr[num];
            cardarr[num] = temp;
        }
        /**
         * @description:Create LinkedList object for each player.
         */
        var player1 = new access.LinledListQueue;
        var player2 = new access.LinledListQueue;
        var player3 = new access.LinledListQueue;
        var player4 = new access.LinledListQueue;
        /**
         * @description:Enqueue all the cards in queue using linkedlistqueue.
         */
        for (let i = 0; i < cardarr.length; i++) {
            if (i >= 0 && i < 13)
                player1.enQueue(cardarr[i])
            else if (i >= 13 && i < 26)
                player2.enQueue(cardarr[i])
            else if (i >= 26 && i < 39)
                player3.enQueue(cardarr[i])
            else
                player4.enQueue(cardarr[i]);
        }
        /**
         * @description:Sort all the deck of cards using sorting method.
         */
        var data = player1.printList()
        var arr = data.split(" ")
        console.log(" unsorted 1 :" + "  [  " + arr + "  ]  ");
        var arr10 = ut.bubble(arr);
        console.log("player 1 :" + "  [  " + arr10 + "  ]  ");
        var data1 = player2.printList()
        var arr1 = data1.split(" ")
        console.log(" unsorted 2 :" + "  [  " + arr1 + "  ]  ");
        var arr11 = ut.bubble(arr1)
        console.log("player 2 :" + "  [  " + arr11 + "  ]  ")
        var data2 = player3.printList()
        var arr2 = data2.split(" ")
        console.log(" unsorted 3 :" + "  [  " + arr2 + "  ]  ");
        var arr12 = ut.bubble(arr2)
        console.log("player 3 :" + "  [  " + arr12 + "  ]  ")
        var data3 = player4.printList()
        var arr3 = data3.split(" ")
        console.log(" unsorted 4 :" + "  [  " + arr3 + "  ]  ");
        var arr13 = ut.bubble(arr3)
        console.log("player 4 :" + "  [  " + arr13 + "  ]  ");
    } catch (err) {
        console.log(err.message);
    }
} deckCards();