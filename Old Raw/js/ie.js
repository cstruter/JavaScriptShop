// Load XML File

function loadXML(file)

{

var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

  xmlDoc.async="false";
  xmlDoc.load(file);
  xmlObj=xmlDoc.documentElement;

}

function quarrays()

{

for (i=0;i<xmlObj.childNodes.length;i++)

{

Product[i]=xmlObj.childNodes[i].childNodes(0).firstChild.text;
Description[i]=xmlObj.childNodes[i].childNodes(1).firstChild.text;
Price[i]=xmlObj.childNodes[i].childNodes(2).firstChild.text;
Picture[i]=xmlObj.childNodes[i].childNodes(3).firstChild.text;

}

}