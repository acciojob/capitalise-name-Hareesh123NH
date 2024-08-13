//your JS code here. If required.
function toupper() {
	let name=document.getElementById("fname");
	name.value=name.value.toUpperCase();
	console.log(name.value);
}


window.onload=function() {
	document.getElementById("fname").addEventListener("blur",toupper);
};