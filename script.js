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
const additionBtn = document.querySelector('.add');
const substractionBtn = document.querySelector('.sub');
const multiplicationBtn = document.querySelector('.mul');
const divisionBtn = document.querySelector('.div');

// Getting Variables
// const variables = function() {
     
// }

// Getting Result
const totalValue = function(total) {
      document.querySelector('.result').textContent = total;
}

// Addition
const add = function() {
// 1. Getting inputs from the user
      const num1 = Number(document.querySelector('.num1').value);
      const num2 = Number(document.querySelector('.num2').value);
      const a = num1 + num2 ;
      totalValue(a);
}

const sub = function() {
      // 1. Getting inputs from the user
      const num1 = Number(document.querySelector('.num1').value);
      const num2 = Number(document.querySelector('.num2').value);
      const a = num1 - num2 ;
      totalValue(a);
}

const mul = function() {
      // 1. Getting inputs from the user
      const num1 = Number(document.querySelector('.num1').value);
      const num2 = Number(document.querySelector('.num2').value);
      const a = num1 * num2 ;
      totalValue(a);
}

const div = function() {
      // 1. Getting inputs from the user
      const num1 = Number(document.querySelector('.num1').value);
      const num2 = Number(document.querySelector('.num2').value);
      const a = num1 / num2 ;
      totalValue(a);
}

additionBtn.addEventListener('click', add)
substractionBtn.addEventListener('click', sub)
multiplicationBtn.addEventListener('click', mul)
divisionBtn.addEventListener('click', div)