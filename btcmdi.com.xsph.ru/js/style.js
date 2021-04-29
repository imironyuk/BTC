// Селектор кнопки .toggle-theme

const btn = document.querySelector("switchMode");

// Селектор таблицы стилей <link>

const theme = document.querySelector("#theme");

// Клик по кнопке

document.getElementById("switchMode").onclick = function () {

	// Если текущий урл содержит "light-theme.css"

	if (theme.getAttribute("href") == "css/light.css") {

		// тогда переключим его на "dark-theme.css"

		theme.href = "css/dark.css";

			var theme_cookie = "dark";

		// Иначе

	} else {

		// переключаем его на "light-theme.css"

		theme.href = "css/light.css";

			var theme_cookie = "light";
	}

	// Создаем cookie, чтобы затем проверять ее на сервере

	localStorage.setItem = "theme=" + theme_cookie ;

};