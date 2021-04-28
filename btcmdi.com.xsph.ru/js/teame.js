	
	var btn = document.getElementById("switchMode");
	var link = document.getElementById("theme");
	btn.addEventListener("click", function () { ChangeTheme(); });
	function ChangeTheme() {
	  let lightTheme = "css/light.css";
	  let darkTheme = "css/dark.css";
	  var currTheme = link.getAttribute("href");
	  var theme = "";

		if(currTheme == lightTheme) {
			currTheme = darkTheme;
			theme = "dark";
		}
		else {   
			currTheme = lightTheme;
			theme = "light";
		}
		link.setAttribute("href", currTheme);
		Save(theme);
		function Save(theme)
		{
		var Request = new XMLHttpRequest();
		Request.open("GET", "./themes.php?theme=" + theme, true); // путь к php файлу отвечающий за сохранение
		Request.send();
		}
	};