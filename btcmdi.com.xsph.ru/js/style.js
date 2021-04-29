	// Селектор кнопки 

	const btn = document.querySelector("#switchMode");

	// Селектор таблицы стилей <link>

	const theme = document.querySelector("#theme");
	
if (!localStorage.theme) localStorage.theme = "css/dark.css"
theme.href = localStorage.theme

	

	// Клик по кнопке

	document.getElementById("switchMode").onclick = function () {

		// Если текущий урл содержит "light.css"

		if (theme.getAttribute("href") == "css/dark.css") {

			// тогда переключим его на "dark.css"

			theme.href = "css/light.css";

				var theme_cookie = "css/light.css";

			// Иначе

		} else {

			// переключаем его на "light.css"

			theme.href = "css/dark.css";

				var theme_cookie = "css/dark.css";
		}

			
		// Пример использования:
		localStorage.setItem('theme',theme_cookie);
			

	};
