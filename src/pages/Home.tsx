import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainContainer from '../components/MainContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title id="header-title">
          	<strong>Bem-Vindo ao Meu Site!</strong>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <MainContainer />
      </ion-content>
    </ion-page>
  );
};

export default Home;
