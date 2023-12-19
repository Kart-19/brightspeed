const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://imdb8.p.rapidapi.com/actors/get-bio?nconst=nm0001667');
xhr.setRequestHeader('X-RapidAPI-Key', '20817b2e63msh365edfbe78a5adbp150a2cjsnb7e561c01059');
xhr.setRequestHeader('X-RapidAPI-Host', 'imdb8.p.rapidapi.com');

xhr.send(data);