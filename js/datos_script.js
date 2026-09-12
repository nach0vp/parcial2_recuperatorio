//declaro una array con los diferentes datos
let datos = ['Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.',
			'Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.',
			'Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.',
			'Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.',
			'Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.',
			'Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.',
			'Publicó libros fundamentales sobre programación creativa como Processing: A Programming Handbook for Visual Designers and Artists.',
			'Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA (Universidad de California, Los Ángeles).',
			'Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.',
			'Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series.']

//esta funcion es para tomar unos de los datos del array al azar
function datoRandom() {
		let indice = Math.floor(Math.random() * datos.length);
		return datos[indice];}

//para que funcione el boton y pueda mostrar el dato al azar que hace la anterior funcion
let botonDato = document.querySelector('#dato');

botonDato.addEventListener('click', function(){
		let retorno = datoRandom();
		let parrafo = document.querySelector('#datosCuriosos');
		parrafo.innerText = '"' + retorno + '"';}
		);