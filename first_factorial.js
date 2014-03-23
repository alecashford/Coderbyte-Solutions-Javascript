function FirstFactorial(num) { 

var newnum = 1;
for(var i = num; i > 0; i--) {
    newnum *= i;
}
  return newnum; 
}   

FirstFactorial(readline());           
