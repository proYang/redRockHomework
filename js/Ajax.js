
function getMessage() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://api.openweathermap.org/data/2.5/forecast/city?id=1814906&APPID=1111111111");
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var data = JSON.parse(xhr.responseText);
				console.log(data);
			} else {
				alert("error"+xhr.status);
			}
		}
	}
}
document.querySelector("#getData").addEventListener("click",getMessage);