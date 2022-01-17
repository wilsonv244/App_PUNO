import React, { Component, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal } from '@ionic/react';
const Deustua: React.FC = () =>{
    return(
  
        <IonGrid>
                <IonRow>
                    <IonCol className="ion-text-center">
                        <IonCard>
                            <img src='../../assets/images/map.png' alt="Activity"/>
                            <IonCardHeader>
                                <IonCardSubtitle>Ubicacion</IonCardSubtitle>
                                <IonCardTitle>Se encuentra Ubicado</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Está ubicado en la cuadra 2 del Jr. Independencia, a seis cuadras de la Plaza de Armas.</p>
                                <IonItem lines="none">
                                <IonButton color="danger">Agregar Valoracion del Lugar</IonButton>
                                   
                                    {/* { !activity.isCompleted ?
                                    :
                                    <IonIcon color="success" className={classes.CenterElement} icon={checkmarkOutline} />
                                    } */}
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                        </IonCol>

                    </IonRow>
            </IonGrid>
     

    );
}
export default Deustua;