window.onload = function () {
	var email = document.forms[0].Email;
	var password = document.forms[0].password;
	email.addEventListener("blur",function () {
		var patt = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
		if(!patt.test(email.value)) {
			alert("Email格式错误！");
		}
	});
	password.addEventListener("blur",function () {
		var patt = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
		if(!patt.test(email.value)) {
			alert("密码格式不符合要求！");
		}
	});
}
