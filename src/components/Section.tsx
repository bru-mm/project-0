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
    <div className="section" part="section">
      <IonCard part="card">
        <IonCardHeader>
          <IonCardTitle part="card-title">
            <strong>{title}</strong>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent part="content">
          <p>{children}</p>
          <IonImg src={imageURL} part="image" />
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Section;
