import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from '@ionic/react';
import './Section.css';

interface SectionProps {
  title: string;
  imageURL: string;
}

const Section: React.FC<SectionProps> = ({ title, imageURL, children }) => {
  return (
    <div>
      <ion-card id="section-card">
        <ion-card-header>
          <ion-card-title id="section-title">
            <strong>{title}</strong>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
        	<p id="section-paragraph">{children}</p>
          <br />
          <ion-img id="section-img" src={imageURL} />
        </ion-card-content>
      </ion-card>
    </div>
  );
};

export default Section;
