const theme = document.querySelector("#theme");


// Значение для переменной "theme" по умолчанию "dark.css"
if (!localStorage.theme) localStorage.theme = "css/dark.css"

// Определяем значение переменной "herf" на значение сохраненное локально в: "localStorage.theme"
theme.href = localStorage.theme

	document.getElementById("switchMode").onclick = function () {

		// Если текущий урл содержит "dark.css"
		if (theme.getAttribute("href") == "css/dark.css") {
		let gr2 = document.querySelector("#btc");
		let gr1 = document.querySelector("#btc1");
				gr2.classList.remove("tview-chart");
				gr2.classList.add("tview-chart1");
				gr1.classList.remove("tview-chart1");
				gr1.classList.add("tview-chart");
				theme.href = "css/light.css";
				var theme_cookie = "css/light.css";
				
				
		} else {
		let gr1 = document.querySelector("#btc1");
		let gr2 = document.querySelector("#btc");
				gr2.classList.remove("tview-chart1");
				gr2.classList.add("tview-chart");
				gr1.classList.remove("tview-chart");
				gr1.classList.add("tview-chart1");
				theme.href = "css/dark.css";
				var theme_cookie = "css/dark.css";
		}

		localStorage.setItem('theme', theme_cookie);

	};