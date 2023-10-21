// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line
document.querySelector('.gallery').innerHTML = galleryItems.map(({preview,original,description}) =>
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
new SimpleLightbox('.gallery a',
    {
        captionPosition: 'bottom',
        captionDelay: 250,
        captionsData:'alt',
    });