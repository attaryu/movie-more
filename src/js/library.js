import { card, getErrorFetch } from "./html.js";

export function getCard(object, mode) {
	return object.Search.map((miniData) => card(miniData, mode)).join("");
}

export function fetchingData(value, keyword) {
	return fetch(`http://www.omdbapi.com/?apikey=56e086b4&${keyword}=${value}`)
		.then((response) => response.json())
		.catch((message) => {
			console.error(message);
			const [bgOut, contentModal, area] = [
				document.querySelector(".bg-modal-box"),
				document.querySelector(".content-modal__split"),
				document.querySelector(".area"),
			];

			console.log(contentModal);

			if (keyword === "i") {
				bgOut.classList.add("bg-modal-box--pop");
				contentModal.classList.add("content-modal--error");
				contentModal.innerHTML = getErrorFetch(message, keyword);
			} else if (keyword === "s") {
				area.classList.add("area--effect");
				area.innerHTML = getErrorFetch(message, keyword);
			}

			return "Error";
		});
}
