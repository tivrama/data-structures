var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // make a new stack
  var obj = {};
  // extend with methods
  obj.index = 0;
  obj.size = stackMethods.size
  obj.pop = stackMethods.pop
  obj.push = stackMethods.push
  // console.log('obj: ', obj);
  // console.log('methods: ', Stack.stackMethods);
  // return the object we've built
  return obj;
};

stackMethods = {};

// create an index to access in our methods
// stackMethods.index = 0;

// 1. Check size
stackMethods.size = function(){
  return this.index;
};

// 2. Push
stackMethods.push = function(value){
  // 1. add a key-value pair to the stack, 2. increment the index
  this[this.index++] = value;
};

// 3. Pop
stackMethods.pop = function(){
  // 1. decrement the index, 2. return the last indexed item
  // this.index = this.index - 1;
  if( this.size()) {
    return this[--this.index];
  }
};

// var myStack = Stack();
// myStack.push('hello');
// myStack.push('world');

// console.log(myStack.pop())