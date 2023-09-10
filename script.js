const container = document.querySelector('.gridCnt');

let divNmbr = 256;

for (let i = 0; i < divNmbr; i++) {
  const divs = document.createElement('div');
  divs.classList.add('items');
  // divs.innerHTML = i + 1
  container.appendChild(divs);
}