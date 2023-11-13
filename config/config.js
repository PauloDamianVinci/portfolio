
import profile from './profile.png';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Paulo Vinci",
	links: [
		{
			title: "Acerca de",
			link: "#about",
		},
		{
			title: "Proyectos",
			link: "#projects",
		},
		{
			title: "Contacto",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hola, soy Paulo",
	description: "Un entusiasta de la tecnología.",
	image: profile.src,
	buttons: [
		{
			title: "Contacto",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "CV",
			link: "https://drive.google.com/file/d/1se7aSl0iyDUHg4uFJacFGNbYq4-DE05Y/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "¿Quién soy?",
	description: [
		"Soy un apasionado por la tecnología en general, la cual se me da con naturalidad. Con 25 años de Analista de Sistemas y mucho camino recorrido desarrollando programas en Visual Basic 6 y .NET, decidí actualizarme.",
		"Hace unos años no necesitabas más que Visual Basic, MS-Access y creatividad para desarrollar un sistema completo. Hoy en día los requerimientos son muy diferentes y considero que se debe tener un catálogo más grande en el abanico de herramientas, si uno quiere destacar. En este momento ya completé el Bootcamp Fullstack Developer en Henry, donde sumé experiencia y nuevos conocimientos de programación.",
		"Cuando no estoy programando, disfruto de conocer y probar aplicaciones relacionadas con la inteligencia artificial. Soy un entusiasta. No llego a imaginar hasta dónde nos cambiará la vida en el futuro. Por ahora me asombro creando fotografías de personas virtuales.",
	],
}

export const work = {
	title: "¿Qué hago?",
	cards: [
		{
			title: "Desarrollo web",
			description: "Creo sitios estáticos usando Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Proyectos",
	cards: [
		{
			title: " PI Videogames",
			description: "Hace tiempo atrás, los desarrollos quedaban guardados en diskettes dentro de una caja fuerte. Afortunadamente hoy puedo mostrar, al menos, mi proyecto integrador PI Videogames. Se trata de mi proyecto individual, aplicando exclusivamente los conocimientos y tecnologías incluidas en la cursada (React, React Router, Redux Toolkit, Styled components, CSS modules, Express, Sequelize, PostgreSQL, Axios). Temática: videojuegos.",
			icons: [
				{
					icon: faChrome,
					link: "https://client-jet-omega.vercel.app",
				},
				{
					icon: faGithub,
					link: "https://github.com/PauloDamianVinci/videogames",
				},
			]
		},
	],
}

export const contact = {
	title: "Contacto",
	description: "Pueden contactarme por correo electrónico a paulodamianvinci@gmail.com.",
	buttons: [
		{
			title: "Mail",
			link: "mailto:paulodamianvinci@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Paulo Vinci | Full stack developer | JavaScript | Reactjs developer",
	description: "Desarrollo sitios web. Analista de sistemas nivel terciario.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Paulo Vinci",
	description: "Full stack developer | JavaScript | Reactjs Developer",
	cards: [
		// {
		// 	title: "My website",
		// 	link: "https://hashirshoaeb.com/",
		// },
		{
			title: "PI Videogames",
			link: "https://client-jet-omega.vercel.app",
		},
		{
			title: "My GitHub",
			link: "https://github.com/PauloDamianVinci/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/paulo-damian-vinci/",
		},
	]
}