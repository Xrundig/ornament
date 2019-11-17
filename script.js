let main = document.querySelector('.main');
for(let i = 0; i < 100; i++){
	let shape = document.createElement('div');
	shape.className = 'shape';
	shape.style.width = '50px';
	shape.style.height = '50px';
	shape.style.marginLeft = '25px';
	shape.style.marginTop = '25px';
	shape.style.backgroundColor = 'black';
	main.appendChild(shape);
	calculateRow(shape);
}

function calculateRow (shape){
	if('romb'){
		let width = parseInt(shape.style.width);
		let height = parseInt(shape.style.height);
		let diagonal = (Math.sqrt(Math.pow(width, 2) + Math.pow(height,2))).toFixed(2);
		let element = diagonal + parseInt(shape.style.marginLeft);
		let mainWidth = parseInt(main.offsetWidth);
		let row = (mainWidth/diagonal).toFixed();
		console.log(row);
	}
	
}

