import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";


const galleryList = document.querySelector(".gallery");

const galleryItemsMap = galleryItems
	.map((item) => {
		galleryList.insertAdjacentHTML(
			"beforeend",
			`<div class="gallery__item">
			<a class="gallery__link" href="${item.original}">
			<img 
			class="gallery__image"
			src="${item.preview}"
      		data-source="${item.original}"
			alt="${item.description}"
			/>
			</a>
			</div`
			);
		})
		.join("");
        
        new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });