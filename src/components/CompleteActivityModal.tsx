import React, { useContext } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton } from '@ionic/react';
import ActivitiesContext, { Activity } from '../data/activities-context';

interface CompleteModalActivityProps {
    // son las Props que se utilizaran
    activity: Activity;
    //creando un metodo
    dismissModal: () => void;
}
//El modal de la aplicacion 
const CompleteModalActivity: React.FC<CompleteModalActivityProps> = (props) => {
    // Usamos el context(ActivitiesContext) para tener acceso a todas las funcioens que este posee
    const activitiesCtxt = useContext(ActivitiesContext);
    //crear metodo para confirmar tarea
    const confirmCompletion = (activityId: string) => {
        activitiesCtxt.completeActivity(activityId);
        //encargar de des asignar la actividad//Cerrar el modal
        props.dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                        <IonImg src={props.activity.imageUrl} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            <h2>{props.activity.title}</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            <p>{props.activity.historia}</p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>
                                ¿Quieres Agregar este Lugar como Favorito?
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        {/* Cerrara el modla con el props.dismissclick */}
                        <IonButton color='danger' fill='clear' onClick={props.dismissModal}>
                            Cancel
                        </IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        {/* Pasar el Id de la actividad que se ha creado */}
                        <IonButton color='primary' fill='clear' onClick={() => confirmCompletion(props.activity.id)}>
                            Agregar Favorito
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteModalActivity;
