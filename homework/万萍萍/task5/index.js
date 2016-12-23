showAlert();

function showAlert()
{
	console.log("log：测试js");
}

var txt = document.getElementById("txt");
txt.style.textAlgin = "justify";
txt.style.letterSpacing = "-.15em";
txt.innerHTML = txt.innerHTML.split("").join(" ");