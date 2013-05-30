// Create Email

function slink()
{
body=document.form1.products.value+'%0A';
body=body+'First Name: '+document.form1.fname.value+'%0A'+'Last Name: ';
body=body+document.form1.lname.value+'%0A'+'Email: ';
body=body+document.form1.email.value+'%0A'+'Address: ';
body=body+document.form1.add1.value+'%0A';
body=body+document.form1.add2.value+'%0A'+'Telephone: ';
body=body+document.form1.tel.value+'%0A'+'Cellphone: ';
body=body+document.form1.cell.value+'%0A';
subject=document.form1.subject.value;
alert("Sending");
document.location='mailto:'+receiver+'?subject='+subject+'&amp;body='+body;

}

