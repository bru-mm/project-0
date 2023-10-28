import React, { useState, useEffect } from 'react';
import { IonButton } from '@ionic/react';
import Section from './Section.tsx';
import './MainContainer.css';

const MainContainer: React.FC = () => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
  	const fetchAllCountries = async () => {
  		const jsonData = await fetch('https://restcountries.com/v3.1/all?fields=name')
  			.then((response) => response.json());
  		const allCountryNames = jsonData.map((country) => country.name.common);
  		setCountries(allCountryNames);
  	}
  	
  	fetchAllCountries();
	}, []);
  
  const firstSection = {
    title: 'Seção Importante',
    imageURL: 'src/assets/images/logo.jpg',
    description: 'Esta é uma seção com conteúdo relevante.',
  };

  const [sections, setSections] = useState([firstSection]);

	// Usado para mostrar um gif de carregando enquanto o fetch está sendo feito
	const [loading, setLoading] = useState(false);

  const onClick = async () => {
  	// Gera uma seção com uma imagem aleatória, no contexto do tópico, e um Bacon Ipsum
  	const fetchRandomSection = async (topic) => {
			return {
				title: topic,
				imageURL: await fetch('https://source.unsplash.com/random/?' + topic)
					.then((response) => response.url),
				description: await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1')
					.then((response) => response.json()),
			};
		};
  
  	const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  	
  	setLoading(true);
  	const newSection = await fetchRandomSection(randomCountry)
  		.finally(() => setLoading(false));
    
    setSections((prevSections) => [newSection, ...prevSections]);
  };

  return (
    <div id="main-container">
      <p id="main-paragraph">Este é um parágrafo de exemplo.</p>
      <div id="main-button-container">
		    <ion-button onClick={onClick} id="main-button">
		      Clique Aqui
		    </ion-button>
		    {loading && <ion-img id="loading-img" src={"src/assets/images/loading.gif"} />}
      </div>
      <div id="main-sections-container">
		    {sections.map((section, index) => (
		      <Section key={index} title={section.title} imageURL={section.imageURL}>
		        {section.description}
		      </Section>
		    ))}
		   </div>
    </div>
  );
};

export default MainContainer;
