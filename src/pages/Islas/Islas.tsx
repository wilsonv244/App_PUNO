import React, { Component, useContext } from "react";
import ActivitiesContext from "../../data/activities-context";
import { IonHeader, IonToolbar,IonButtons, IonMenuButton, IonTitle, IonPage,IonContent, IonGrid, IonRow, IonCol, IonCard,
IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem,IonButton, IonIcon } from "@ionic/react";
const Islas: React.FC =() =>{
    const activitiesCtxt = useContext(ActivitiesContext);
        return(
            <React.Fragment>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot='start'>
                                <IonMenuButton />
                            </IonButtons>
                            <IonTitle>Wat'a</IonTitle>
                        </IonToolbar>
                        
                    </IonHeader>
                        <IonContent>
                            <IonGrid>
                                { activitiesCtxt.activities.map(activity => (
                                    <IonRow key={activity.id}>
                                        <IonCol className="ion-text-center">
                                            <IonCard>
                                                <img src={activity.imageUrl} alt="Activity"/>
                                                <IonCardHeader>
                                                    <IonCardSubtitle>{activity.hour}</IonCardSubtitle>
                                                    <IonCardTitle>{activity.title}</IonCardTitle>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                    <p>{activity.description}</p>
                                                    <p>{activity.historia}</p>
                                                    <IonItem lines="none">
                                                        
                                                    </IonItem>
                                                </IonCardContent>
                                            </IonCard>
                                        </IonCol>
                                    </IonRow>
                                ))
                                }
                            </IonGrid>
                    </IonContent>


                </IonPage>

            </React.Fragment>
        );
    
}
export default Islas;