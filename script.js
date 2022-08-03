// get all element by tagname
const allHeading2 = document.getElementsByTagName('h2');
for (const h2 of allHeading2) {
    console.log(h2.innerHTML)
}

const allParagraph = document.getElementsByTagName('p');
for (const p of allParagraph) {
    console.log(p.innerText);
}

// get specific element by id 
const highlight = document.getElementById('highlight');
highlight.style.color = 'yellow';
highlight.innerText = 'Bandarban Tour - 2022';
highlight.style.margin = '2rem'

// get element by css property with query selector 
const query = document.querySelector('.blog');
const queryAll = document.querySelectorAll('.blog');

// create element and add element 
const div = document.getElementById('blog-parents');
const h2 = document.createElement('h2');
h2.innerText = 'Blog-5';
div.appendChild(h2);


