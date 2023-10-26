import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
import Section from './Section.tsx';
import './MainContainer.css';

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

export default MainContainer;
