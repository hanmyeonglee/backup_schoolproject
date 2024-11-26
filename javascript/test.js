import { getFetch } from "./utils.js";

setTimeout(async () => {
	await getFetch({}, "http://localhost/static/default.html")
	.then(async res => await res.text())
	.then(html => {
	    document.querySelector("div.mainpage").innerHTML = html;
	});
}, 2000);
