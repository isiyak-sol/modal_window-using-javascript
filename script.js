'use-strict'
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal-btn');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

const openModal = function() {
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
}
openModalBtn.addEventListener('click', openModal)

const closeModal = function() {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
}
closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)


// Calculator Part
