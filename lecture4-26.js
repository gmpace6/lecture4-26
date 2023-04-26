const theDiv = document.getElementById('container');

let newbornPElement = document.createElement('p')


newbornPElement.innerHTML = "Hello, World!"
newbornPElement.setAttribute('id', 'lil-johnny')

theDiv.appendChild(newbornPElement)