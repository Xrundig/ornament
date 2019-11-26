'use strict'

let main = document.querySelector('.main');
main.style.width = '100%';
main.style.height = '200%';

let mainForm = document.querySelector('.mainForm');
mainForm.onsubmit = function (event){
	event.preventDefault();
	generatePicture();
}
let itemWidth;
let itemHeight;
let itemColor;
let itemMarginLeft;
let itemMarginTop;

function generatePicture(){
	itemWidth = document.querySelector('.itemWidth').value || 50;
	itemHeight = document.querySelector('.itemHeight').value || 50;
	itemColor = document.querySelector('.itemColor').value || 'black';
	itemMarginLeft = document.querySelector('.itemMarginLeft').value || 10;
	itemMarginTop = document.querySelector('.itemMarginTop').value || 10;	
	let rowEnd = 1;
	let row = calculateRow();
	console.log(row);
	let rowBlock;
	createRow();
	for(let i = 0; i < 200; i++){
		let shape = document.createElement('div');
		shape.style.width = itemWidth + 'px';
		shape.style.height = itemHeight + 'px';
		shape.style.marginLeft = itemMarginLeft + 'px';
		shape.style.marginTop = itemMarginTop + 'px';
		shape.className = 'shape';		
		shape.style.backgroundColor = itemColor;
		shape.number = i;
		if('round'){
			round(shape);
		}
		rowBlock.appendChild(shape);
		if(row == rowEnd){
			itemWidth -= 5;
			itemHeight -= 5;
			itemMarginLeft += 2;
			itemMarginTop +=2;
			row = calculateRow();
			createRow();
			rowEnd = 0;
			console.log(itemWidth);
		}
	rowEnd++;
	}



	function createRow(){
		rowBlock = document.createElement('div');
		rowBlock.className = 'rowBlock';
		main.appendChild(rowBlock);
	}

	function round (shape){
		shape.style.borderRadius = '50%';
	}


	function calculateRow (){
		let mainWidth = parseInt(main.offsetWidth);
		if(false){   /* romb */
			let diagonal = (Math.sqrt(Math.pow(itemWidth, 2) + Math.pow(itemHeight,2))).toFixed(2);
			let element = diagonal + itemMarginLeft;	
			let row = (mainWidth/diagonal).toFixed();
		}
		if('round'){

			let rowItem = Math.floor(+mainWidth/(+itemWidth + itemMarginLeft));
			console.log(rowItem);
			return rowItem;
		}
		
	}
}


