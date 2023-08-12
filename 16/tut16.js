let element = document.createElement('li');
element.className = 'childul';
element.id = 'createdLi';

element.setAttribute('title','mytitle');
// element.innerText = 'Hello, This is created by harry';
element.innerHTML = '<b> Hello, This is created by harry</b>';
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);