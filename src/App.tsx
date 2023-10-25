import React, { useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  setupIonicReact
} from '@ionic/react';

// TODO: Deletar esse App.css da pasta theme e distribuir o css que tem nele entre os arquivos de css dos containers
import './theme/App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [imageURL, setImageURL] = useState('src/assets/images/logo.jpg');

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem-vindo ao Meu Site</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Este é um parágrafo de exemplo.</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonButton expand="full" color="primary" onClick={onClick}>
          Clique Aqui
        </IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Seção Importante</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Esta é uma seção com conteúdo relevante.</p>
          </IonCardContent>
        </IonCard>
        <IonImg src={imageURL} style={{ width: '25%' }} />
      </IonContent>
    </IonPage>
  );
};

export default App;
