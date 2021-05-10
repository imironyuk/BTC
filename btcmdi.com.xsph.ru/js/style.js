const theme = document.querySelector("#theme");
const gr1 = document.querySelector("#btc1");
const gr2 = document.querySelector("#btc");
// Значение для переменной "theme" по умолчанию "dark.css"
if (!localStorage.theme) localStorage.theme = "css/dark.css"
// Определяем значение переменной "herf" на значение сохраненное локально в: "localStorage.theme"
theme.href = localStorage.theme 

	document.getElementById("switchMode").onclick = function () {

		// Если текущий урл содержит "dark.css"
		if (theme.getAttribute("href") == "css/dark.css") {

				gr1.className ="tview-chart";
				gr2.className ="tview-chart1";
				theme.href = "css/light.css";
				var theme_cookie = "css/light.css";
				var gt = '"tview-chart"';
				var gt1 = '"tview-chart1"';
				
				
		} else {

				gr1.className ="tview-chart1";
				gr2.className ="tview-chart";
				theme.href = "css/dark.css";
				var theme_cookie = "css/dark.css";
				var gt = '"tview-chart1"';
				var gt1 = '"tview-chart"';
		}

		localStorage.setItem('theme', theme_cookie);
		localStorage.setItem('gr1', gt);
		localStorage.setItem('gr2', gt1);

};
