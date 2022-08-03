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
h2.classList.add('blog')
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident illum qui quisquam itaque deleniti earum vitae nemo consequuntur quis maxime quo voluptas explicabo a tempore dolores, magni ipsum, sapiente nihil.';
div.appendChild(h2);
div.appendChild(p);

// innerhtml add 
const div2 = document.createElement('div')
div2.innerHTML = `
<h2>Blog-6</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident illum qui quisquam itaque deleniti earum vitae nemo </p>
`
div.appendChild(div2)

// evnet handler 
const text = document.getElementById('script');
text.style.display = 'none'
function details() {
    const text = document.getElementById('script');
    text.style.display = 'block'
}

