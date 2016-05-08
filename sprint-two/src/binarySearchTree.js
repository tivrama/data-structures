var BinarySearchTree = function(value){

  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  
  tree.insert = function(insertVal) {
    //base case
    //if the value we are adding is less then the tree we are in and there is nothing to the left
    if(insertVal < tree.value && tree.left === null) {
        //create a new tree on the left 
        tree.left = BinarySearchTree(insertVal);
    }

    else if(insertVal > tree.value && tree.right === null) {
        //create a new tree on the right 
        tree.right = BinarySearchTree(insertVal);      
    }
    else if(insertVal < tree.value) {
      //recusivly call the left side to run again 
      tree.left.insert(insertVal);
    }
    else if(insertVal > tree.value) {
      //recusivly call the right side to run again 
      tree.right.insert(insertVal);
    }
  }


tree.contains = function(containsVal) {
  // base case
  if (containsVal === tree.value) {
    return true;
  }
  //if target is less than current nodes val, then look left
  else if(containsVal < tree.value) {
    //if left has no branch, return false
    if(tree.left === null) {
      return false;
    //otherwise, recurse on this branch
    } else {
      return tree.left.contains(containsVal);
    }
  }
  //if target is less than current nodes val, then look right
  else if (containsVal > tree.value) {
    //if right has no branch, return false
    if(tree.right === null) {
      return false;
    //otherwise, recurse on this branch
    } else {
      return tree.right.contains(containsVal);
    }
  } 
};




tree.depthFirstLog = function(callback) {
  //just callback on whatever node I am at
  callback(tree.value);
  //if there is a left brach, recurse left
  if (tree.left !== null) {
    return tree.left.depthFirstLog(callback);
  }
  //if there is a right branch, recurse right
  if (tree.right !== null) {
    return tree.right.depthFirstLog(callback)
  }

};


return tree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
