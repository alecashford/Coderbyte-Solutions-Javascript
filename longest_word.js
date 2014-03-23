//There's definitely an easier way to do this, but it works.

var punct = ".,-_&/?!\"\'/".split("");

function LongestWord(sen) {

    for(var i = 0; i < sen.length; i++) {
        for(var j = 0; j < punct.length; j++) {
            if (sen[i] == punct[j]) {
                sen = sen.replace(sen[i], "");
                i -= 1;   
            }
        }
    }
    
    sen = sen.split(" ");
    sen.sort(function(a, b) { 
    return b.length - a.length; 
});
    
return sen[0]; 
         
}

LongestWord(readline());           
