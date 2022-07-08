export default function darkMode(mode) {
	const Element = {
		// body
		page: document.querySelector(".page"),

		// header
		header: document.querySelector(".header"),
		titleBox: document.querySelector(".title-box__title"),
		descriptionThis: document.querySelector(".title-box__title-desc"),
		searchBar: document.querySelector(".search-bar-container__search-bar"),
		searchIcon: document.querySelector(".search-bar-container__search-icon"),

		// card
		card: document.querySelectorAll(".card"),
		image: document.querySelectorAll(".card__image-container"),
		img: document.querySelectorAll(".card__image"),
		descriptionH3: document.querySelectorAll(".card__title"),
		descriptionP: document.querySelectorAll(".card__year"),
		detailButton: document.querySelectorAll(".button-container__button"),

		// modal box
		modalBox: document.querySelector(".modal-box"),
		contentModal: document.querySelector(".content-modal"),
		buttonClose: document.querySelector(".button-close__button"),

		// switch mode
		containerSlider: document.querySelector(".theme-switch"),
		sliderTitle: document.querySelector(".theme-switch__slider"),
	};

	if (Element.card.length > 1) {
		let arrayElement = [];
		if (Element.card[0].classList.contains("secondary-d")) {
			arrayElement = [
				Element.card.forEach((ele) => ele.classList.remove("secondary-d")),
				Element.image.forEach((ele) => ele.classList.remove("primary-d")),
				Element.img.forEach((ele) => ele.classList.remove("img-filter-d")),
				Element.descriptionH3.forEach((ele) =>
					ele.classList.remove("c-white")
				),
				Element.descriptionP.forEach((ele) =>
					ele.classList.remove("optional-d")
				),
				Element.detailButton.forEach((ele) =>
					ele.classList.remove("accent-d", "c-black", "btn-hov")
				),
			];
		} else if (mode) {
			arrayElement = [
				Element.card.forEach((ele) => ele.classList.add("secondary-d")),
				Element.image.forEach((ele) => ele.classList.add("primary-d")),
				Element.img.forEach((ele) => ele.classList.add("img-filter-d")),
				Element.descriptionH3.forEach((ele) =>
					ele.classList.add("c-white")
				),
				Element.descriptionP.forEach((ele) =>
					ele.classList.add("optional-d")
				),
				Element.detailButton.forEach((ele) =>
					ele.classList.add("accent-d", "c-black", "btn-hov")
				),
			];
		}
	}

	const elementTransfrom = [
		[Element.page, Element.header, Element.modalBox].map((ele) => {
			if (mode) ele.classList.add("bg-d");
			else ele.classList.remove("bg-d");
		}),
	];

	if (mode) {
		Element.titleBox.classList.add("c-primary-d");
		Element.descriptionThis.classList.add("optional-d");
		Element.searchBar.classList.add("secondary-d", "c-white");
		Element.searchIcon.classList.add("accent-d", "icon-btn-d");
		Element.containerSlider.classList.add("primary-d");
		Element.sliderTitle.classList.add("c-black");
		Element.buttonClose.classList.add("accent-d", "button-dark");
	} else {
		Element.titleBox.classList.remove("c-primary-d");
		Element.descriptionThis.classList.remove("optional-d");
		Element.searchBar.classList.remove("secondary-d", "c-white");
		Element.searchIcon.classList.remove("accent-d", "icon-btn-d");
		Element.containerSlider.classList.remove("primary-d");
		Element.sliderTitle.classList.remove("c-black");
		Element.buttonClose.classList.remove("accent-d", "button-dark");
	}
}
