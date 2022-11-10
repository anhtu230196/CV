const backdrop = document.getElementsByClassName('backdrop')
const modal = document.getElementById('modal')
const yesButton = document.querySelector('.yes-button')
const noButton = document.querySelector('.no-button')

const heartContainer = document.querySelector('.heart-content')

yesButton.addEventListener('click', function(){
  window.location = '/heart.html'
})

noButton.addEventListener('mouseover', function(){
  const randomHeight = Math.floor(Math.random() * 40) + 30
  const randomWidth = Math.floor(Math.random() * 40) + 30
  console.log(randomHeight)
  modal.style.top = `${randomHeight}%`
  modal.style.left = `${randomWidth}%`
})

noButton.addEventListener('click', function() {
  const randomHeight = Math.floor(Math.random() * 40) + 30
  const randomWidth = Math.floor(Math.random() * 40) + 30
  console.log(randomHeight)
  modal.style.top = `${randomHeight}%`
  modal.style.left = `${randomWidth}%`
})