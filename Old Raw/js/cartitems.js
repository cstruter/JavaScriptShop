// Menu items

function cartitems()

{

items=
'<table border="1" width="550" cellspacing="0" cellpadding="0" bordercolor="#FFFFFF">'+
'<tr bordercolor="#000000" bgcolor="#C0C0C0" align="center">'+
'<td class="but1" onmouseover="this.className=\'but2\';" onmouseout="this.className=\'but1\';" onclick=location="index.htm" width="78">Home</td>'+
'<td bgcolor="#FFFFFF" bordercolor="#FFFFFF" width="78">&nbsp;</td>'+
'<td class="but1" onmouseover="this.className=\'but2\';" onmouseout="this.className=\'but1\';" onclick=location="cart.htm" width="78">Products</td>'+
'<td bgcolor="#FFFFFF" bordercolor="#FFFFFF" width="78">&nbsp;</td>'+
'<td class="but1" onmouseover="this.className=\'but2\';" onmouseout="this.className=\'but1\';" onclick=location="view.htm" width="78">View Cart</td>'+
'<td bgcolor="#FFFFFF" bordercolor="#FFFFFF" width="79">&nbsp;</td>'+
'<td class="but1" onmouseover="this.className=\'but2\';" onmouseout="this.className=\'but1\';" onclick=location="send.htm" width="79">Check Out</td>'+
'</tr></table>';

document.write(items);

}


// Display Amount due

function cent(geld,skeiding)

{

geld+='';

dat = new Array();

dat=geld.split(".");

if (dat[1]==undefined) dat[1]="00";

else

{

dat[1]=dat[1].substring(0,2)
if (dat[1].length==1) dat[1]+="0";

}

return (dat[0]+skeiding+dat[1]);
}
