function CheckForm(){

	var field_name = document.getElementById('name');
	var field_email = document.getElementById('email');
	var field_phone = document.getElementById('phone');
	var field_country = document.getElementById('country');

  if (field_name.value.length < 2){
  	alert ("Name is too short !");
  	return false;
  }
  else if (field_name.value.match(/[a-zA-Zа-яА-Я]/)==null){
  	alert ("The name can only contain letters !");
  	return false;
  }

  if (field_email.value.match(/^\w+(['\.\-\+]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)==null){
  	alert ("Please enter a valid Email !");
  	return false;
  }

  if (field_phone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)==null){
  	alert ("Please enter a valid Phone Number !");
  	return false;
  }
  else if (field_phone.value.length < 6){
  	alert ("Phone Number is too short !");
  	return false;
  }

  if (field_country.value.length < 2){
  	alert ("Please enter a valid Country !");
  	return false;
  }
  else if (field_country.value.match(/[a-zA-Zа-яА-Я]/)==null){
  	alert ("Please enter a valid Country !");
  	return false;
  }
}