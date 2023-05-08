$(() => {
	class Personaje {
		constructor(nombre, estatura, peso) {
			this.nombre = nombre;
			this.estatura = estatura;
			this.peso = peso;
		}
	}

	const obtenerPersonaje = async (id, row, color) => {
		try {
			let response = await fetch(`https://swapi.dev/api/people/${id}`);
			let personaje = await response.json();
			generarPersonaje(personaje, row, color);
			console.log(color);
		} catch (error) {
			console.log(error);
		}
	};
	const generarPersonaje = (personaje, row, color) => {
		let char = new Personaje(personaje.name, personaje.height, personaje.mass);
		console.log(char);
		generarCard(char, row, color);
	};
	const generarCard = (pers, row, color) => {
		console.log(color);
		$(row).append(`
	    <div class="col-12 col-md-6 col-lg-4">
	        <div
	            class="single-timeline-content d-flex wow fadeInLeft 2021"
	            data-wow-delay="0.3s"
	            style="
	                visibility: visible;
	                animation-delay: 0.3s;
	                animation-name: fadeInLeft;
	            "
	        >
	            <div
	                class="timeline-icon"
	                style="background-color: ${color}"
	            >
	                <i class="fa fa-address-card" aria-hidden="true"></i>
	            </div>
	            <div class="timeline-text">
	                <h6>${pers.nombre}</h6>
	                <p>
	                    Altura: ${pers.estatura}cm. Peso: ${pers.peso}kg
	                </p>
	            </div>
	            </div>
	        </div>
	    </div>
	    `);
	};
	function* generador1(i, row, color) {
		yield obtenerPersonaje(i, row, color);
		i++;
		yield obtenerPersonaje(i, row, color);
		i++;
		yield obtenerPersonaje(i, row, color);
		i++;
		yield obtenerPersonaje(i, row, color);
		i++;
		yield obtenerPersonaje(i, row, color);
	}
	let gen1 = generador1(1, '.firstRow', 'salmon');
	let gen2 = generador1(6, '.secondRow', 'lightgreen');
	let gen3 = generador1(11, '.thirdRow', 'lightskyblue');
	$('#generador1').on('click', () => {
		// !gen1.next().done ? gen1.next() : console.log('No hay mas personajes');
		gen1.next();
	});
	$('#generador2').on('click', () => {
		// !gen2.next().done ? gen1.next() : console.log('No hay mas personajes');
		gen2.next();
	});
	$('#generador3').on('click', () => {
		// !gen3.next().done ? gen1.next() : console.log('No hay mas personajes');
		gen3.next();
	});
	// class Personaje {
	// 	constructor(nombre, estatura, peso) {
	// 		this.nombre = nombre;
	// 		this.estatura = estatura;
	// 		this.peso = peso;
	// 	}
	// }

	// const obtenerPersonaje = async (id, row, color) => {
	// 	try {
	// 		let response = await fetch(`https://swapi.dev/api/people/${id}`);
	// 		let personaje = await response.json();
	// 		return personaje;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// const generarPersonaje = (personaje, row, color) => {
	// 	let char = new Personaje(personaje.name, personaje.height, personaje.mass);
	// 	console.log(char);
	// 	generarCard(char, row, color);
	// };
	// const generarCard = (pers, row, color) => {
	// 	console.log(color);
	// 	$(row).append(`
	//     <div class="col-12 col-md-6 col-lg-4">
	//         <div
	//             class="single-timeline-content d-flex wow fadeInLeft 2021"
	//             data-wow-delay="0.3s"
	//             style="
	//                 visibility: visible;
	//                 animation-delay: 0.3s;
	//                 animation-name: fadeInLeft;
	//             "
	//         >
	//             <div
	//                 class="timeline-icon"
	//                 style="background-color: ${color}"
	//             >
	//                 <i class="fa fa-address-card" aria-hidden="true"></i>
	//             </div>
	//             <div class="timeline-text">
	//                 <h6>${pers.nombre}</h6>
	//                 <p>
	//                     Altura: ${pers.estatura}cm. Peso: ${pers.peso}kg
	//                 </p>
	//             </div>
	//             </div>
	//         </div>
	//     </div>
	//     `);
	// };
	// function* generador1(i) {
	// 	yield i;
	// 	i++;
	// 	yield i;
	// 	i++;
	// 	yield i;
	// 	i++;
	// 	yield i;
	// 	i++;
	// 	yield i;
	// }
	// let gen1 = generador1(1, '.firstRow', 'salmon');
	// let gen2 = generador1(6, '.secondRow', 'lightgreen');
	// let gen3 = generador1(11, '.thirdRow', 'lightskyblue');
	// $('#generador1').on('click', () => {
	// 	console.log(gen1.next().value);
	// });
	// $('#generador2').on('click', () => {
	// 	!gen2.next().done
	// 		? console.log(gen1.next().value)
	// 		: console.log('No hay mas personajes');
	// });
	// $('#generador3').on('click', () => {
	// 	!gen3.next().done
	// 		? console.log(gen1.next().value)
	// 		: console.log('No hay mas personajes');
	// });
});
