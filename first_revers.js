function FirstReverse(str) {
  var newlist = str.split("");
  newlist.reverse();
  var final = newlist.join("");
  
  return final; 
}

FirstReverse(readline());
