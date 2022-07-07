export function getErrorData(data, keyword) {
	if (keyword === "s") {
		return `<h2 class="error">${data.Error}</h2>\n<p class="error-description">make sure the title is correct</p>`;
	} else if (keyword === "i") {
		return `<h3 class="t-error-modalbox">Error</h3>\n<p class="d-error-modalbox">${data.Error}</p>`;
	} else {
		return `<p style="font: .9em Poppins Regular">Unknown Type Error</p>`;
	}
}

export function getErrorFetch(message, keyword) {
	if (keyword === "s") {
		return `<h2 class="error">Error</h2>\n<p class="error-description">${message}</p>`;
	} else if (keyword === "i") {
		return `<h3 class="t-error-modalbox">Error</h3>\n<p class="d-error-modalbox">${message}</p>`;
	} else {
		return `<p style="font: .9em Poppins Regular">Unknown Type Error</p>`;
	}
}

export function card(data, status) {
	if (status) {
		// night mode
		return `<div class="card area__card secondary-d" data-id="${data.imdbID}">
					<div class="card__image-container primary-d">
						<img src="${data.Poster}" alt="Poster" loading="lazy" class="card__image img-filter-d">
					</div>
					<div class="card__description-wrapper">
						<h3 class="card__title c-white">${data.Title}</h3>
						<p class="card__year optional-d">${data.Year}</p>
					</div>
					 <div class="button-container">
						<button class="button-container__button accent-d c-black" data-id="${data.imdbID}">Read More</button>
					</div>
				</div>`;
	} else {
		// day mode
		return `<div class="card area__card" data-id="${data.imdbID}">
					<div class="card__image-container">
						<img src="${data.Poster}" alt="Poster" loading="lazy" class="card__image">
					</div>
					<div class="card__description-wrapper">
						<h3 class="card__title">${data.Title}</h3>
						<p class="card__year">${data.Year}</p>
					</div>
					 <div class="button-container">
						<button class="button-container__button" data-id="${data.imdbID}">Read More</button>
					</div>
				</div>`;
	}
}

export function getDetail(data, status) {
	if (status) {
		// night mode
		return `<h3 class="content-modal__title-modal secondary-d c-white">${
			data?.Title ?? "unknown"
		}</h3>
					<div class="content-modal__list-group secondary-d c-white">
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Writer</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Writer ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Country</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Country ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Language</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Language ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Actors</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Actors ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Genre</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Genre ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Year</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Year ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Rating</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Ratings[0]?.Value ?? "unknown"}</p>
						</div>
					</div>
					<p class="content-modal__short-plot secondary-d c-white">${
						data?.Plot ?? "unknown"
					}</p>
				`;
	} else {
		// day mode
		return `<h3 class="content-modal__title-modal">${
			data?.Title ?? "unknown"
		}</h3>
					<div class="content-modal__list-group">
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Writer</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Writer ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Country</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Country ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Language</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Language ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Actors</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Actors ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Genre</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Genre ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Year</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Year ?? "unknown"}</p>
						</div>
						<div class="content-modal__row-item">
							<span class="content-modal__connect">Rating</span>
							<span class="content-modal__connect"> : </span>
							<p>${data?.Ratings[0]?.Value ?? "unknown"}</p>
						</div>
					</div>
					<p class="content-modal__short-plot">${data?.Plot ?? "unknown"}</p>
					`;
	}
}

export function getPoster(data, status) {
	if (status) {
		return `<img src="${data?.Poster}" alt="Poster" class="image-poster-container__image-poster img-filter-d">`;
	} else {
		return `<img src="${data?.Poster}" alt="Poster" class="image-poster-container__image-poster">`;
	}
}
