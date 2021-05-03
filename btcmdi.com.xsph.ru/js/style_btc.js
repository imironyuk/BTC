
document.getElementById("switch").onclick = function() {
	let dan = document.getElementById("btc1");
	let gen = document.getElementById("btc");

		gen.classList.toggle("tview-chart1");
			var gen_cookie = "tview-chart1"
		dan.classList.toggle("tview-chart");
			var dan_cookie = "tview-chart"
		dan.classList.toggle("tview-chart1");
			var the_cookie = "tview-chart1"
		gen.classList.toggle("tview-chart");
	localStorage.setItem('gent', gen_cookie);
	localStorage.setItem('dant', dan_cookie);
	localStorage.setItem('thet', the_cookie);
}
