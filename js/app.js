(function(window) {

  /*
   * Create a function named setMyLightGreen
   * which takes zero arguments
   * and does not return a value.
   *
   * declare a variable named lightId
   * and assign it's value to the context's dataset.lightId property
   *
   * use a dom method to select an element where it's ID matches the value of lightId
   * on this dom element, set the className to 'light-green'
   */
function setMyLightGreen(){
  var lightId = this.dataset.lightId;
  document.getElementById(lightId).className = "light-green";
}


  /*
   * Create a function named setMyLightClass
   * which takes two arguments: event, desiredClass
   * and does not return a value.
   *
   * declare a variable named lightId
   * and assign it's value to the context's dataset.lightId property
   *
   * use a dom method to select an element where it's ID matches the value of lightId
   * on this dom element, set the className to the value of desiredClass
   */
function setMyLightClass(event, desiredClass){
  var lightId = this.dataset.lightId;
  document.getElementById(lightId).className = desiredClass;
}
  /*
   * Declare 15 constants btn1, btn2, btn3, ...
   * use a dom element selector method to assign each const
   * to the button that has an id of the same name.
   */
btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");
btn6 = document.getElementById("btn6");
btn7 = document.getElementById("btn7");
btn8 = document.getElementById("btn8");
btn9 = document.getElementById("btn9");
btn10 = document.getElementById("btn10");
btn11 = document.getElementById("btn11");
btn12 = document.getElementById("btn12");
btn13 = document.getElementById("btn13");
btn14 = document.getElementById("btn14");
btn15 = document.getElementById("btn15");


  /*
   * Add a click event listener to btn1
   * the handler method will be an anonymous function expression
   * the body of the event handler function
   * will invoke the setMyLightGreen function
   * using the Function prototype method: apply
   * to set the context to the correct object (the current context)
   */

btn1.addEventListener("click", function(){
  setMyLightGreen.apply(this);
});

  /*
   * Add a click event listener to btn2
   * the handler method will be a fat arrow function expression
   * the body of the event handler function
   * will invoke the setMyLightGreen function
   * using the Function prototype method: apply
   * to set the context to the correct object
   */

btn2.addEventListener("click", () => {
  setMyLightGreen.apply(btn2);

});


  /*
   * Add a click event listener to btn3
   * the handler method will be a reference to the setMyLightGreen function
   */

btn3.addEventListener("click", function(){
  setMyLightGreen.call(btn3);

});

  /*
   * Add a click event listener to btn4
   * the handler method will be an anonymous function expression
   *   that takes one argument, event
   * the body of the event handler function
   * will invoke the setMyLightClass function
   * using the Function prototype method: apply
   * to set the context to the correct object (the current context)
   *   and passing two aditional arguments, event and 'light-green'
   */

btn4.addEventListener("click", function(event){
  setMyLightClass.apply(btn4, [event, "light-green"]);

});

  /*
   * Add a click event listener to btn5
   * the handler method will be a fat arrow function expression
   *   that takes one argument, event
   * the body of the event handler function
   * will invoke the setMyLightClass function
   * using the Function prototype method: apply
   * to set the context to the correct object
   *   and passing two aditional arguments, event and 'light-green'
   */
btn5.addEventListener("click", (event) => {
  setMyLightClass.apply(btn5, [event, "light-green"]);
});

  /*
   * Add a click event listener to btn6
   * the handler method will be an anonymous function expression
   * the body of the event handler function
   * will invoke the setMyLightGreen function
   * using the Function prototype method: call
   * to set the context to the correct object (the current context)
   */
btn6.addEventListener("click", function(){
  setMyLightGreen.call(btn6, "light-green");

});

  /*
   * Add a click event listener to btn7
   * the handler method will be a fat arrow function expression
   * the body of the event handler function
   * will invoke the setMyLightGreen function
   * using the Function prototype method: call
   * to set the context to the correct object
   */
btn7.addEventListener("click", () => {
  setMyLightGreen.call(btn7, "light-green");
});

  /*
   * Add a click event listener to btn8
   * the handler method will be an anonymous function expression
   *   that takes one argument, event
   * the body of the event handler function
   * will invoke the setMyLightClass function
   * using the Function prototype method: call
   * to set the context to the correct object (the current context)
   *   and passing two aditional arguments, event and 'light-green'
   */

btn8.addEventListener("click", function(event){
  setMyLightClass.call(btn8, event, "light-green");
});
  /*
   * Add a click event listener to btn9
   * the handler method will be a fat arrow function expression
   *   that takes one argument, event
   * the body of the event handler function
   * will invoke the setMyLightClass function
   * using the Function prototype method: call
   * to set the context to the correct object
   *   and passing two aditional arguments, event and 'light-green'
   */

btn9.addEventListener("click", (event) => {
  setMyLightClass.call(btn9, event, "light-green");
});
  /*
   * Declare a new const named setLight10Green
   * assign it's value to a reference to the function setMyLightGreen
   * using the Function prototype method: bind
   * to set the context to the btn10 object
   */
setLight10Green = setMyLightGreen.bind(btn10, "light-green");

  /*
   * Add a click event listener to btn10
   * the handler method will be an anonymous function expression
   * the body of the event handler function
   * will invoke the setLight10Green function
   */
btn10.addEventListener("click", function(){
  setLight10Green();
});

  /*
   * Declare a new const named setLight11Green
   * assign it's value to a reference to the function setMyLightClass
   * using the Function prototype method: bind
   * to set the context to the btn11 object
   *   passing 2 additional hardcoded arguments:
   *     null, 'light-green'
   */


  /*
   * Add a click event listener to btn11
   * the handler method will be an anonymous function expression
   * the body of the event handler function
   * will invoke the setLight11Green function
   */


  /*
   * Declare a new const named setLight12Class
   * assign it's value to a reference to the function setMyLightClass
   * using the Function prototype method: bind
   * to set the context to the btn12 object
   */


  /*
   * Add a click event listener to btn12
   * the handler method will be an anonymous function expression
   *   that takes one argument, event
   * the body of the event handler function
   * will invoke the setLight12Class function
   *   passing 2 additional arguments
   *     event, 'light-green'
   */


  /*
   * Add a click event listener to btn13
   * the handler method will be an anonymous function expression
   *   that takes one argument, event
   * the body of the event handler function
   * will not create any new variables
   * will invoke the Function prototype method, bind
   * on the setMyLightClass function
   *   passing only 1 argument, the current context
   * this results in a new function expression,
   *   invoke this function expression passing 2 arguments
   *     event, 'light-green'
   */


  /*
   * Add a click event listener to btn14
   * the handler method will be a function expression
   * that is the result of invoking the Function prototype method, bind
   * on the setMyLightGreen function
   */


  /*
   * Add a click event listener to btn15
   * Using just one function invocation and the Function prototype method, bind
   * How would you use the setMyLightClass method ?
   *
   * Hint: Do not declare a new function expression as an event handler.
   */


}(window));
