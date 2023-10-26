import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainContainer from '../components/MainContainer';
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
        <MainContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
