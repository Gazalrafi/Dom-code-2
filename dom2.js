//traversing the dom

var itemList=document.querySelector('#items');


parentnode
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor='lightgrey';
console.log(itemList.parentNode.parentNode);//div class container
console.log(itemList.parentNode.parentNode.parentNode); //body

//parent element

console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='lightgrey';
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);

//child node

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstchild

console.log(itemList.firstChild)

//first element child

console.log(itemList.firstChild)
itemList.firstElementChild.textContent='Hello 1';

//lastChild

console.log(itemList.lastChild)

//last element child

console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='Hello 4';

//nextSibling
console.log(itemList.nextSibling)

//nextElementSibling
console.log(itemList.nextElementSibling)

//previousSibling
console.log(itemList.previousSibling)

//previousElementSibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color='green';

//createElement
//create a div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';

//add attributes
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText=document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv)
newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);

// var newNode=document.createElement('li');
// var textNode=document.createTextNode('Hello world');
// newNode.appendChild(textNode);












