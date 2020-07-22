function validateform(){  
	var email=document.myform.email;  
	var password=document.myform.password;  
	var phone=document.myform.mobilenumber;
	var date=document.myform.dateOfBirth;
	
	if (email.value==null || email.value==""){  
		alert("Name can't be blank");  
		email.focus();
		return false;  
	}else if(password.value.length<6){  
		alert("Password must be at least 6 characters long.");  
		password.focus();
		return false;  
	}else if(phone.value==""){
		alert("please Enter the Mobile Number");
		phone.focus();
		return false;
	}else if(isNaN(phone.value)){
		alert("Enter the valid Mobile Number(Like : 9566137117)");
		phone.focus();
		return false;
	}else if(phone.value.length!=10){
		alert(" Your Mobile Number must be of length 10");
		phone.select();
		return false;
	}else if(date.value==""){
		alert("DateOfBirth can't be blank");  
		date.focus();
		return false;
	}
}
