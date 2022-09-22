const sharebtn = document.querySelector('.share-button')
const shareOption = document.querySelector('.share-option')

sharebtn.addEventListener('click', function() {
 
    shareOption.classList.toggle('active')
})
