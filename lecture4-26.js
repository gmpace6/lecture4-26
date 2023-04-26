let formElement = document.querySelector('#the-form')

let formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log('button clicked event happened')
}

formElement.addEventListener('submit', formSubmitHandler)