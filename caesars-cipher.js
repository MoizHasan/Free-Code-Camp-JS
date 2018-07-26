function rot13(str) { 
  //loop through string char by char
  var cipher = '';
  var n = '';
  for (var i = 0; i < str.length; i++) {
    //add 13 to bit value
    n = str.charCodeAt(i);
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
	    n += 13;
	  //wrap around    
	    if (n > 90) {
		    n = n - 26;
	    }
    }    
    //push to new string.
    cipher += String.fromCharCode(n);
  }  
  return cipher;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");