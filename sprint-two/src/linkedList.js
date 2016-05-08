var LinkedList = function(){
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Needed help on this point.  Still not sure why a var has t be created and I can't just use Node(value) in each of the if statements.  Is it because that would create a new new node each time?
    var tempTail = Node(value);
    //If the head is null, then it becomes both a head and the tail (only one object)
    if (list.head === null) {
      list.head = tempTail;
    }
    //if the tail is defined, then it's next is changed from null to the new tail.  It's title as tail will be reassigned in the next step
    if (list.tail !== null) {
      list.tail.next = tempTail;
    }
    //either way, the new node becomes the tail
    list.tail = tempTail;

  };
//---------------------------------------------


  list.removeHead = function(){
    //make a var that holds the head and can be returned after head is removed
    var removedHead = list.head;
    //go to head.next and save as the new head.  
    list.head = list.head.next
    //return head
    //got to return the head's value to pass the tests
    return removedHead.value;

  };

//---------------------------------------------

  list.contains = function(target){
    //make a val set to a boolean to return
    var checker = false;
    //make a recursive function that will look for the target
    var recurseList = function(node) {
      //base case: find the target and return true
      if (node.value === target) {
        checker = true;
        return;
      }
      //end recursion, if not found, just return
      if (node.next === null) {
        return;
      }
      //start recursion
      return recurseList(node.next)
    };
    //call recursive function.
    recurseList(list.head)
    return checker
  };



  return list;
};

//---------------------------------------------

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */