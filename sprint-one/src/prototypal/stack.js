var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);

  obj.index = 0

  return obj;
};

var stackMethods = {};


stackMethods.size = function() {
  return this.index;
}

stackMethods.push = function(val) {
  return this[this.index++] = val;
}

stackMethods.pop = function() {
  if(this.size()) {
    return this[--this.index];
  }
}

// var myStack = Stack();

// myStack.push('hello')
// myStack.push('world')
// console.log(myStack.pop())