'use strict'

/*let main = document.querySelector('.main');
main.style.width = '100%';
main.style.height = '200%';*/

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
let itemShape;
let main;

function generatePicture(){
	itemWidth = document.querySelector('.itemWidth').value || 50;
	itemHeight = document.querySelector('.itemHeight').value || 50;
	itemColor = document.querySelector('.itemColor').value || 'black';
	itemMarginLeft = document.querySelector('.itemMarginLeft').value || 10;
	itemMarginTop = document.querySelector('.itemMarginTop').value || 10;
	let selectShape = document.getElementById('figure');
	itemShape = selectShape.options[selectShape.selectedIndex].text;
	if(main){
		let deleteMain = document.querySelector('.main');
		document.body.removeChild(deleteMain);
	}
	console.log(main);
	main = document.createElement('div');
	main.className = 'main';
	main.style.width = (document.querySelector('.mainWidth').value + 'px') || '100%';
	main.style.height = (document.querySelector('.mainHeight').value + 'px') || '100%';
	document.body.appendChild(main);
	console.log(main);
	let rowEnd = 1;
	let row = calculateRow();
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
		if(itemShape === 'Round'){
			round(shape);
		}
		if(itemShape === 'Romb'){
			romb(shape);
		}
		rowBlock.appendChild(shape);
		if(row == rowEnd){
			itemWidth = +itemWidth - 5;
			itemHeight = +itemHeight - 5;
			itemMarginLeft = +itemMarginLeft + 2;
			itemMarginTop =+itemMarginTop + 2;
			row = calculateRow();
			createRow();
			rowEnd = 0;
			console.log(row);
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

	function romb(shape){
		shape.style.transform = 'rotate(5deg)';
	}


	function calculateRow (){
		let mainWidth = parseInt(main.offsetWidth);
		if(itemShape === 'Romb'){ 
			let diagonal = (Math.sqrt(Math.pow(+itemWidth, 2) + Math.pow(+itemHeight,2))).toFixed(2);
			let element = diagonal + (+itemMarginLeft);	
			let rowItem = (mainWidth/diagonal).toFixed();
			return rowItem;
		}
		if(itemShape === 'Round' || 'Square'){
			let rowItem = Math.floor(+mainWidth/(+itemWidth + (+itemMarginLeft)));
			console.log(rowItem);
			return rowItem;
		}
		
	}
}


