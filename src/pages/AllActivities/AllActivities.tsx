import React, { useContext, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal, IonIcon } from '@ionic/react';
import ActivitiesContext, { Activity } from '../../data/activities-context';
import classes from './AllActivities.module.css';
import CompleteModalActivity from '../../components/CompleteActivityModal';
import { checkmarkOutline } from 'ionicons/icons';

const AllActivities: React.FC = () => {
    //Definir un estado, para saber cuando se va ha mostrar el modal
    const [activityToComplete, setActivityToComplete] = useState<Activity>();

    const activitiesCtxt = useContext(ActivitiesContext);
    //metodo para abrir el modal cuando existe una actividad
    const openCompleteModal = (activity: Activity) => {
        setActivityToComplete(activity);
    };
    //metodo 
    const closeModal = () => {
        setActivityToComplete(undefined);
    };

    return (
        <React.Fragment>
            <IonModal isOpen={!!activityToComplete}>

                {/* exportando la accion de completar modal */}
                <CompleteModalActivity activity={activityToComplete as Activity} dismissModal={closeModal}/>
            </IonModal>

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Tukuy Kiti Puno</IonTitle>
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
                                            <IonCardSubtitle>Hora de atencion: {activity.hour}</IonCardSubtitle>
                                            <IonCardTitle>{activity.title}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p>{activity.description}</p>
                                            {/* <p>{activity.historia}</p> */}
                                            <IonItem lines="none">
                                            <IonButton color="danger">Agregar Favorito</IonButton>
                                                { !activity.isCompleted ?
                                                <IonButton
                                                    className={classes.CenterElement}
                                                    color="success"
                                                    onClick={() => openCompleteModal(activity)}>
                                                    Rikuy Asman
                                                </IonButton>
                                                :
                                                <IonIcon color="success" className={classes.CenterElement} icon={checkmarkOutline} />
                                                }
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
};

export default AllActivities;