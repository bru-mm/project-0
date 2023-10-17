import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TestContainer from '../components/TestContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem-Vindo ao Meu Site!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TestContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
