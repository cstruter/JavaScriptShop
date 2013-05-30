function loadXML(file)

{
xmlDoc = document.implementation.createDocument("","",null);
xmlDoc.async=false;
xmlDoc.load(file);
xmlObj = xmlDoc.getElementsByTagName("CD");
}

function quarrays()

{

for(var i=0; i<xmlObj.length; i++) 

{

Product[i]=xmlObj[i].getElementsByTagName("PRODUCT")[0].childNodes[0].nodeValue;
Description[i]=xmlObj[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue;
Price[i]=xmlObj[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
Picture[i]=xmlObj[i].getElementsByTagName("PICTURE")[0].childNodes[0].nodeValue;

}

}