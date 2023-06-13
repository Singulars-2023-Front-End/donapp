const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		emailsNewsletter: [],
		profile: {
		  username: "David",
		  rating: 4.3,
		  image: "https://randomuser.me/api/portraits/men/73.jpg",
		  city: "Barcelona",
		},
		donations: [
		  {
			name: "Ropa de invierno",
			description: "Abrigos, bufandas y guantes para proteger del frío.",
			imageURL: "https://ejemplo.com/ropa_invierno.jpg",
			productStatus: "usado",
			publishedDate: "2023-05-10",
		  },
		  {
			name: "Juguetes educativos",
			description: "Juguetes didácticos para el aprendizaje de los niños.",
			imageURL: "https://ejemplo.com/juguetes_educativos.jpg",
			productStatus: "nuevo",
			publishedDate: "2023-05-12",
		  },
		  {
			name: "Muebles de cocina",
			description: "Mesa y sillas para equipar una cocina comunitaria.",
			imageURL: "https://ejemplo.com/muebles_cocina.jpg",
			productStatus: "deteriorado",
			publishedDate: "2023-05-15",
		  },
		  {
			name: "Libros de literatura",
			description:
			  "Novelas clásicas y contemporáneas para fomentar la lectura.",
			imageURL: "https://ejemplo.com/libros_literatura.jpg",
			productStatus: "usado",
			publishedDate: "2023-05-18",
		  },
		  {
			name: "Material escolar",
			description: "Cuadernos, lápices y mochilas para estudiantes.",
			imageURL: "https://ejemplo.com/material_escolar.jpg",
			productStatus: "nuevo",
			publishedDate: "2023-05-20",
		  },
		  {
			name: "Electrodomésticos",
			description:
			  "Pequeños electrodomésticos como licuadoras y tostadoras.",
			imageURL: "https://ejemplo.com/electrodomesticos.jpg",
			productStatus: "usado",
			publishedDate: "2023-05-23",
		  },
		  {
			name: "Ropa de bebé",
			description: "Ropa y accesorios para recién nacidos y bebés.",
			imageURL: "https://ejemplo.com/ropa_bebe.jpg",
			productStatus: "nuevo",
			publishedDate: "2023-05-25",
		  },
		  {
			name: "Artículos deportivos",
			description:
			  "Balones, raquetas y equipos para actividades deportivas.",
			imageURL: "https://ejemplo.com/articulos_deportivos.jpg",
			productStatus: "usado",
			publishedDate: "2023-05-28",
		  },
		  {
			name: "Instrumentos musicales",
			description:
			  "Guitarras, teclados y otros instrumentos para la música.",
			imageURL: "https://ejemplo.com/instrumentos_musicales.jpg",
			productStatus: "usado",
			publishedDate: "2023-05-30",
		  },
		  {
			name: "Ropa de cama",
			description: "Sábanas, mantas y almohadas para camas.",
			imageURL: "https://ejemplo.com/ropa_cama.jpg",
			productStatus: "deteriorado",
			publishedDate: "2023-06-02",
		  },
		],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		  /**
					  fetch().then().then(data => setStore({ "foo": data.bar }))
				  */
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
	  },
	  addNewsletterEmail(email) {
		//get the store
		// Obten la variable que contiene todas las variables globales
		const store = getStore();
  
		// Añadir el nuevo elemento a la variable global (emailsNewsletter); esta función recibe un 'email' nuevo. Tengo que crear una nueva copia del array original y añadir el nuevo email con el operador de spread
		const updatedEmails = [...store.emailsNewsletter, email];
  
		// update the global store
		// actualizamos la variable global emailsNewsletter con el nuevo valor
		setStore({
		  emailsNewsletter: updatedEmails,
		});
	  },
	};
  };
  
  export default getState;  
