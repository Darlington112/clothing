const bar = document.getElementById('hamburger');
const navBar = document.getElementById('nav-list');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        navBar.classList.add('open')
    })
}

if (close) {
    close.addEventListener('click', () => {
        navBar.classList.remove('open')
    })
}



// search
const search = () => {
    const searchBar = document.getElementById('search-bar').value.toLowerCase();
    const productList = document.getElementById('product-container')
    const product = document.querySelectorAll('.product')
    const productName = document.querySelectorAll('.product-name')
    

    for (let i = 0; i < productName.length; i++){

        let match = product[i].querySelectorAll('.product-name')[0]

        if (match) {
            let textValue = match.textContent || match.innerHtml
    
            if (textValue.toLowerCase().indexOf(searchBar) > -1) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none';

            }
        }

    }
  
}

// Accordion
const content = document.getElementsByClassName('contentBox')

for (let i = 0; i < content.length; i++){
    content[i].addEventListener('click', function () {
        content[i].classList.toggle('show')
    })
}




