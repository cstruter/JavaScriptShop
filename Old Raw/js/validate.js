function validRequired(formField,fieldLabel)
{
	var result = true;
	
	if (formField.value == "")
	{
		alert('Please enter a value for the "' + fieldLabel +'" field.');
		formField.focus();
		result = false;
	}
	
	return result;
}
function isEmailAddr(email)
{
  var result = false;
  var theStr = new String(email);
  var index = theStr.indexOf("@");
  if (index > 0)
  {
    var pindex = theStr.indexOf(".",index);
    if ((pindex > index+1) && (theStr.length > pindex+1))
	result = true;
  }
  return result;
}

function validEmail(formField,fieldLabel,required)
{
	var result = true;
	
	if (required && !validRequired(formField,fieldLabel))
		result = false;

	if (result && ((formField.value.length < 3) || !isEmailAddr(formField.value)) )
	{
		alert("Please enter a complete email address in the form: yourname@yourdomain.com");
		formField.focus();
		result = false;
	}
   
  return result;

}



function validateForm(theForm)
{
	if (!validRequired(theForm.fname,"First Name"))
		return false;

if (!validRequired(theForm.lname,"Last Name"))
		return false;

	if (!validEmail(theForm.email,"Email Address",true))
		return false;

	if (!validRequired(theForm.tel,"Telephone Number"))
		return false;	

slink();

	return true;
}





// Use for worldpay



function XvalidateForm(theForm)
{

if (!validRequired(theForm.name,"Name"))
		return false;

if (!validRequired(theForm.address,"Address"))
		return false;

	if (!validEmail(theForm.email,"Email Address",true))
		return false;

	if (!validRequired(theForm.country,"Country"))
		return false;	
}