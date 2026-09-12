//para la galeria primero hago un array de obhetos con las imagenes e info de las obras
let obras = [
		{
			imagen: 'img/untitled.jpg',
			nombre: 'Untitled',
			año: 2019
		},
		{
			imagen: 'img/path.jpg',
			nombre: 'Path',
			año: 2002
		},
		{
			imagen: 'img/signal_noise.jpg',
			nombre: 'Signal to Noise',
			año: 2013
		},
		{
			imagen: 'img/in_silico.jpg',
			nombre: 'In Silico',
			año: 2025
		},
		{
			imagen: 'img/still_life.jpg',
			nombre: 'Still Life',
			año: 2015
		}
	];


//luego utilizo una estructura repetitiva para que genere las obras en un orden
let galeria = document.querySelector('#galeria');

for (let i = 0; i < obras.length; i++) {
	galeria.innerHTML += '<div class="obra">' + '<img src="' + obras[i].imagen + '">' + '<p>' + obras[i].nombre + '</p>' + '<p>' + obras[i].año + '</p>' + '</div>';
}


//boton de cambiar de tamaño las obras
let botonDiseño = document.querySelector('#cambioDiseño');

botonDiseño.addEventListener('click', function(){
	let galeria = document.querySelector('#galeria');
	galeria.style.display = 'block';

	let obrasGaleria = document.querySelectorAll('#galeria .obra');
	for (let i = 0; i < obrasGaleria.length; i++) {
		obrasGaleria[i].style.width = '40rem';}
});