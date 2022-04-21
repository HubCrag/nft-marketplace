const searchOpen = document.querySelector('.search-open')
const searchClose = document.querySelector('.search-close')
const searchForm = document.querySelector('.search-form')


searchOpen.addEventListener('click', (e) => {
    searchForm.classList.add('is-active')
})
searchClose.addEventListener('click', (e) => {
    searchForm.classList.remove('is-active')
})