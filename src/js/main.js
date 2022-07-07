// source
import darkMode from "./dark-mode.js";
import { fetchingData, getCard } from "./library.js";
import { getPoster, getDetail, getErrorData } from "./html.js";

const Element = {
	dark: document.querySelector(".theme-switch__checkbox"),
	sliderIcon: document.querySelector(".theme-switch__image"),
	header: document.querySelector(".container__header"),
	searchBarContainer: document.querySelector(".search-bar-container"),
	searchBarContainerInput: document.querySelector(
		".search-bar-container__search-bar-input"
	),
	searchIcon: document.querySelector(".search-bar-container__search-icon"),
	area: document.querySelector(".area"),
	bgModalBox: document.querySelector(".bg-modal-box"),
	imagePosterContainer: document.querySelector(".image-poster-container"),
	contentDetail: document.querySelector(".content-modal__split"),
	buttonClose: document.querySelector(".button-close__button"),
};

// dark mode handling
let mode = undefined;
Element.dark.addEventListener("click", function () {
	mode = this.checked;
	if (mode == true) {
		Element.sliderIcon.setAttribute("src", "../image/night-mode.png");
		darkMode(mode);
	} else {
		Element.sliderIcon.setAttribute("src", "../image/day-mode.png");
		darkMode(mode);
	}
});

// card, search
// keyboard enter Search shortcut
Element.searchBarContainerInput.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		Element.searchIcon.click();
	} else return;
});

// button seach click
Element.searchIcon.addEventListener("click", async () => {
	setTimeout(() => {
		setTimeout(() => {
			Element.header.classList.add("container__header--direction--up");
		}, 300);
		Element.searchBarContainer.classList.add(
			"header__search-bar-container--direction-up"
		);
	}, 100);

	const [{ area }, data] = [
		Element,
		await fetchingData(Element.searchBarContainerInput.value, "s"),
	];
	// error fetch API
	if (data === "Error") return;
	// return from function so that code in below not execution

	setTimeout(() => {
		if ("Error" in data) {
			// error data statement
			const error = getErrorData(data, "s");

			if (area.classList.contains("area--effect")) {
				area.innerHTML = error;
			} else {
				area.classList.add("area--effect");
				area.innerHTML = error;
			}
		} else {
			// success data statement
			area.classList.remove("area--effect");
			area.innerHTML = getCard(data, mode);
		}
	}, 500);
});

// event binding
document.addEventListener("click", async (event) => {
	// read more movie button
	if (event.target.classList.contains("button-container__button")) {
		const detail = await fetchingData(
			event.target.getAttribute("data-id"),
			"i"
		);
		// error fetch API
		if (detail === "Error") return;
		// return from function so that code in below not execution

		if ("Error" in detail) {
			// error data statement
			Element.bgModalBox.classList.add("bg-modal-box--pop");
			Element.contentDetail.classList.add("content-modal--error");
			Element.contentDetail.innerHTML = getErrorData(detail, "i");
		} else {
			// success data statement
			Element.bgModalBox.classList.add("bg-modal-box--pop");
			Element.imagePosterContainer.innerHTML = getPoster(detail, mode);
			Element.contentDetail.innerHTML = getDetail(detail, mode);
		}
	}
});

// modal-box close
Element.buttonClose.addEventListener("click", () => {
	Element.contentDetail.classList.remove("content-modal--error");
	Element.bgModalBox.classList.remove("bg-modal-box--pop");
	Element.imagePosterContainer.innerHTML = "";
	Element.contentDetail.innerHTML = "";
});
