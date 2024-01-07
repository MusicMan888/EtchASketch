const container = document.querySelector('.gridCnt');
const userGrdSize = document.querySelector('.user-in');
const submit = document.querySelector('.submit');
const u_prompt = document.querySelector('.prompt');
const userCopy = document.querySelector('.user-copy');
const clearBtn = document.querySelector('.clear-btn');


userGrdSize.addEventListener('focus', usrPrompt);
userGrdSize.addEventListener('keyup', dispGridDm);
submit.addEventListener('click', createGrid);
clearBtn.addEventListener('click', clrGrid);



// ----------------program--------------------
createGrid();
drawEnable(); 
// ---------------functions-------------------

function dispGridDm(){
  
  let yDm = userGrdSize.value;
  userCopy.textContent = "x " + yDm;
}

function usrPrompt(){
  u_prompt.textContent = "Enter a number between 10 and 99";
}

function createGrid(){
console.log("enter createGrid()")
  let num = userGrdSize.value;
  console.log(num);
  // if num < 0 - works
  if(num < 0 || num > 99 || isNaN(num)){
    u_prompt.textContent = "Make sure it's a number between 10 and 99";
  } else {
    //clear values
    u_prompt.textContent = "";
    userCopy.textContent = "";
    userGrdSize.value = "";
    container.innerHTML = "";

    //make default 16 x 16 grid 
    if (num == 0 || num > 99 || num == ""){
      u_prompt.textContent = "Default grid is: 16 X 16";
      for(let a = 0; a < 16; a++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let b = 0; b < 16; b++){
          let column = document.createElement('div');
          column.classList.add('column');
          row.appendChild(column);
        }
      }
    } else {
        if(num < 10 || num > 99 || isNaN(num)){
          u_prompt.textContent = "Make sure it's a number between 10 and 99";
          for(let a = 0; a < 16; a++){
            let row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
            for(let b = 0; b < 16; b++){
              let column = document.createElement('div');
              column.classList.add('column')
              row.appendChild(column);
            }
          }
        } else {
          u_prompt.textContent = "User grid is: " + num + " X " + num;
          for (let a = 0; a < num; a++){
            let row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
            for(let b = 0; b < num; b++){
              let column = document.createElement('div');
              column.classList.add('column')
              row.appendChild(column);
            }
          }
        } 
      
      }
  }
  drawEnable();
} 

function drawEnable(){
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++){
    columns[i].addEventListener('mouseover', changeColor);
  }
}

function changeColor() {
  let blkRadio = document.getElementById('black');
  let redRadio = document.getElementById('red');
  let bluRadio = document.getElementById('blue');
  let grnRadio = document.getElementById('green');
  let rndRadio = document.getElementById('random');
  let eraRadio = document.getElementById('erase');

  if (blkRadio.checked){
    this.style.backgroundColor = '#2e2b2b';
    } 
    else if(redRadio.checked){
      this.style.backgroundColor = '#da2d2d';
    }
    else if(bluRadio.checked){
      this.style.backgroundColor = '#2214e2';
    }
    else if(grnRadio.checked){
      this.style.backgroundColor = '#07641c';
    }
    else if(eraRadio.checked){
      this.style.backgroundColor = '';
    }
    else if(rndRadio.checked){
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.style.backgroundColor = "#" + randomColor;
    }
}
function clrGrid(){
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++){
    columns[i].style.backgroundColor= '';
  }
}