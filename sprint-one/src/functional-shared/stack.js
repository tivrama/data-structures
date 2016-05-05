var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // make a new stack
  var giraffe = {};
  // extend with methods
  _.extend(giraffe, stackMethods);
  // console.log('giraffe: ', giraffe);
  // console.log('methods: ', Stack.stackMethods);
  // return the object we've built
  return giraffe;
};

stackMethods = {};

// create an index to access in our methods
stackMethods.index = 0;

// 1. Check size
stackMethods.size = function(){
  return this.index;
};

// 2. Push
stackMethods.push = function(value){
  // 1. add a key-value pair to the stack, 2. increment the index
  Stack[this.index++] = value;
};

// 3. Pop
stackMethods.pop = function(){
  // 1. decrement the index, 2. return the last indexed item
  // this.index = this.index - 1;
  // console.log(this.size());
  if( this.size()) {
    return Stack[--this.index];
  }
};

