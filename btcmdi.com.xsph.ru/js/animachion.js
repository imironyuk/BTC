window.onload = function(){
	document.getElementById("switchMode").onclick = function () {
		let themere = document.getElementById("themere");

		if (themere.getAttribute("href") == "css/light-mode.css") 
		{
			themere.href = "css/dark-mode.css";
		}else{
			themere.href = "css/light-mode.css"; 
		}
	}
}