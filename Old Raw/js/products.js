// Arrays used in generating the shop

Product = new Array();
Description = new Array();
Price = new Array();
Picture = new Array();
Colour = new Array();
Size = new Array();


// How many entries will be displayed per page

var perb=3;

// The recipient's email address

var receiver="webmaster@somewhere.com";

// Your currency

var currency="€";
var devider=",";

var ie = (typeof window.ActiveXObject != 'undefined');
var moz = (typeof document.implementation != 'undefined') && 
  (typeof document.implementation.createDocument != 'undefined');

if (moz)

{
document.write('<script src="js/mozilla.js"></script>');
}

else if (ie)

{
document.write('<script src="js/ie.js"></script>');
}