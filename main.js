/**
 * Function Expressions
 */
function cool(){

}

var doSomethingCool = function(saying){
  console.log('that was ' + saying);
};

console.log(doSomethingCool);

doSomethingCool('awesome!!!!!');
doSomethingCool('cool...');

// doSomethingCool();
document.querySelector('button').addEventListener('click', function(){
  doSomethingCool('nice button press');
});

(function test(){
  console.log('hey, i ran right away!');
}());


/**
 * Scope
 */
(function(){
  var accountBalance = 100;

  function makeWithdraw(){
    // var accountBalance = 10;
    var savingsBalance = 10;

    console.log(savingsBalance);

    accountBalance = accountBalance - 20;

    console.log("Here's your $20. Your balance", accountBalance);

    return 20;
  }

  // console.log(savingsBalance);

  makeWithdraw();
  setTimeout(makeWithdraw, 5000);
}());

/*
 * Hoisting
 */

console.log(vroom);
// vroom();

var vroom = function (){
  console.log("wow... that's fast!");
};

vroom();

(function(){
  "use strict";

  var car;

  console.log(car);

  car = 'peel p50';

  console.log(car);

}());

add()
multiply()
divide()

function addedNumbers(){

  // var addedNumbers = add();
  // multiply(addedNumbers, 3);
  // divide()

  var add = function(){

  };

  var multiply = function(){

  };

  add()


}


function add(){

}

function multiply(){

}

function divide(){

}



var dog = {
  tail: 'wag',
  bark: function(){
    console.log('woof');
  }
};

dog.bark()
