function CheckForm() {

	var field_login = document.getElementById('log');
	var field_Pass = document.getElementById('pass');

	if (field_login.value == "") {
		alert ("Введите логин !"); 
		return false;
	}

	if (field_Pass.value == ""){
		alert ("Введите пароль !");
		return false;
	}

	return true;
}



function CheckFormReg() {

	var field_name = document.getElementById('name'); 
	var field_name2 = document.getElementById('name2');
	var field_email = document.getElementById('email'); 
	var form_inf = document.FormReg;
	var field_password = document.getElementById('password'); 
	var field_password2 = document.getElementById('password2'); 

	if (field_name.value == "") {
		alert ("Введите имя"); 
		return false;
	}
	else if (field_name.value.length < 2) {
		alert ("Имя слишком короткое");
		return false;
	}
	else if (field_name.value.match(/[a-zA-Zа-яА-Я]/)==null){
		alert ("Имя может содержать только буквы"); 
		return false;
	}

	if (field_name2.value == "") {
		alert ("Введите фамилию"); 
		return false;
	}
	else if (field_name2.value.length < 2) {
		alert ("Фамилия слишком короткая");
		return false;
	}
	else if (field_name2.value.match(/[a-zA-Zа-яА-Я]/)==null) {
		alert ("Фамилия может содержать только буквы"); 
		return false;
	}


	if (field_email.value == "") {
		alert ("Введите email !"); 
		return false;
	}
	else if (field_email.value.match(/^\w+(['\.\-\+]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)==null) {
		alert ("Введите корректный email"); 
		return false;
	}
	

	if ( ( form_inf.sex[0].checked == false ) && ( form_inf.sex[1].checked == false ) )
	{
		alert ( "Пожалуйста, выберите Ваш пол: Мужской или Женский" );
		return false;
	}


	if (field_password.value == "") {
		alert ("Введите пароль !"); 
		return false;
	}
	else if (field_password.value.length < 8) {
		alert ("Пароль должен быть не меньше 8 символов");
		return false;
	}

	if (field_password2.value == "") {
		alert ("Повторите пароль !"); 
		return false;
	}

	if (field_password.value != field_password2.value){
		alert ("Пароли не совпадают"); 
		return false;
	}

	if (form_inf.obr.checked == false){
		alert ( "Пожалуйста, примите согласие" );
		return false;
	}


	return true;
}

