import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { pixabayFetch } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
export const gallery = document.querySelector('.gallery');
export let q = '';

const formBtn = document.querySelector('.form-button');
const formInp = document.querySelector('.form-input');

formInp.addEventListener('input', () => {
  q = formInp.value.trim();
});

formBtn.addEventListener('click', e => {
  e.preventDefault();
  if (q) {
    pixabayFetch()
      .then(data => renderGallery(data))
      .catch(error => console.log(error));
  }
});
