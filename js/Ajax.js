
function getMessage() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://openweathermap.org/data/2.5/forecast/daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a");
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var data = JSON.parse(xhr.responseText);
				showMessage(data);
			} else {
				alert("error"+xhr.status);
			}
		}
	}
}
function showMessage(data) {
	document.querySelector("#date").innerHTML = data.city.name;
	for (var i = 0; i < data.list.length; i++) {
		var d = new Date(data.list[i].dt * 1000).toLocaleDateString();
		d = d.split("/");
		console.log(d[0]+"年"+d[1]+"月"+d[2]+"日");
	}
}
document.querySelector("#getData").addEventListener("click",getMessage);