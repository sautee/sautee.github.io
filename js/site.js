let date = new Date();
const paragraph = document.createElement('p');

paragraph.textContent = date;
document.body.appendChild(paragraph);

const container = document.getElementsByClassName('container');
paragraph.textContent = container[0].innerText;
document.body.appendChild(paragraph);
