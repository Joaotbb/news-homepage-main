console.log('hellofoda-se')

//  Variable creation
const hamburguer = document.querySelector('.hamburguer')
const mobileMenu = document.querySelector('.mobileMenu')
const closebtn = document.querySelector('.closebtn')

// Create functions

const openModal = function () {
  console.log('menu clicked')
  mobileMenu.classList.remove('hidden')
  document.body.classList.add('overflow-y-hidden')
}

const closeModal = function () {
  console.log('menu closed')
  mobileMenu.classList.add('hidden')
  document.body.classList.remove('overflow-y-hidden')
}

// Event listeners
hamburguer.addEventListener('click', openModal)
closebtn.addEventListener('click', closeModal)
