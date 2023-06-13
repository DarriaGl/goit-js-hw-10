import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const catImage = document.getElementById('cat-image');
const breedName = document.getElementById('breed-name');
const breedDescription = document.getElementById('breed-description');
const breedTemperament = document.getElementById('breed-temperament');

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.selectedValue;

  showLoader();

  fetchCatByBreed(selectedBreedId)
    .then(cat => {
      displayCatInfo(cat);
    })
    .catch(() => {
      hideLoader();
      showError();
    });
});

document.addEventListener('DOMContentLoaded', () => {
  showLoader();

  fetchBreeds()
    .then(breeds => {
      populateBreedSelect(breeds);

      hideLoader();
    })
    .catch(() => {
      hideLoader();
      showError();
    });
});

function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });

  new SlimSelect({
    select: breedSelect,
    showSearch: true,
  });
}

function displayCatInfo(cat) {
  catImage.src = cat.url;
  breedName.textContent = cat.breeds[0].name;
  breedDescription.textContent = cat.breeds[0].description;
  breedTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

  catInfo.style.display = 'block';
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}
