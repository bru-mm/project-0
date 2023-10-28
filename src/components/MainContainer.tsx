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
  	const newSection = await fetchRandomSection(randomCountry);
    setSections((prevSections) => [newSection, ...prevSections]);
  };

  return (
    <div id="main-container">
      <p id="main-paragraph">Este é um parágrafo de exemplo.</p>
      <ion-button onClick={onClick} id="main-button">
        Clique Aqui
      </ion-button>
      <div id="main-sections">
		    {sections.map((section, index) => (
		      <Section key={index} title={section.title} imageURL={section.imageURL}>
		        {section.description}
		      </Section>
		    ))}
		   </div>
    </div>
  );
};

/*
const MainContainer: React.FC = () => {
  const [imageURL, setImageURL] = useState('src/assets/images/logo.jpg');

	// TODO: Fazer uma lista HTML de Sections pra quando for clicado no botão, adiciona mais uma
	//       Section com título e descrição sendo os dados da request mais a imagem aleatória  
	// TODO: Talvez se eu adicionar mais um componente SectionList vai resolver esses problemas de
	//       css. Tentar pesquisar os templates (criar um novo projeto pra ver) porque parece que
	//       tinha um template que tinha um componente Item e um componente ItemList ou algo do
	//       gênero.
  const onClick = async () => {  
    try {
      const response = await fetch('https://source.unsplash.com/random');
      if (response.ok) {
        const newImageURL = response.url;
        setImageURL(newImageURL);
      } else {
        console.error('Error fetching image:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div className="container" part="container">
      <p part="paragraph">Este é um parágrafo de exemplo.</p>
      <IonButton onClick={onClick} part="button">
        Clique Aqui
      </IonButton>
      <Section title="Seção Importante" imageURL={imageURL}>
        Esta é uma seção com conteúdo relevante.
      </Section>
    </div>
  );
};
*/

export default MainContainer;
