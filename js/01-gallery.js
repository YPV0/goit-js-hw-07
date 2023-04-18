import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryRef.addEventListener("click", onImgClick);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join("");
}

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox
    .create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`
    )
    .show();
}
