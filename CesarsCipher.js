var a = 65;
var z = 90;
var m = 77;

function isLetter(charCode){
  if(charCode >= a && charCode <= z){
    return true;
  }
}

function shiftCode(charCode){
  return (charCode <= m) ? charCode + 13 : charCode - 13;
}

function rot13(str) {
 var shiftedStr = '';
  
  for(var charIndex in str){
     
    var charCode = str.charCodeAt(charIndex);
    charCode = isLetter(charCode) ? shiftCode(charCode) : charCode;  
    shiftedStr += String.fromCharCode(charCode);
       
  }
  return shiftedStr;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
