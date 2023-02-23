const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://nlp-translation.p.rapidapi.com/v1/translate?text=Hello%2C%20world!!&to=es&from=en");
xhr.setRequestHeader("X-RapidAPI-Key", "SIGN-UP-FOR-KEY");
xhr.setRequestHeader("X-RapidAPI-Host", "nlp-translation.p.rapidapi.com");

xhr.send(data);