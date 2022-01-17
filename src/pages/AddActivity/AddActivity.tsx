// useRef nos permite acceder a nuestros datos por medio de un INput
import React, { useRef, useContext, useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonButtons,
    IonMenuButton,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
    IonToast,
} from '@ionic/react';
import ActivitiesContext, { ActivityType } from '../../data/activities-context';
//Es similar al Router, nos permite controlar la navegacion en las componentes
import { useHistory } from 'react-router-dom';

const AddActivity: React.FC = () => {

    const history = useHistory();
    //creamos el HOOK
    const activitiesCtxt = useContext(ActivitiesContext);
    //Creando un Hook, tipo string
    const [toastMsg, setToastMsg] = useState<string>('');
    //use Ref, conectar a nuestros inputs creados, dependiendo con
    //el tipo de dato que se haya creado
    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const historiaInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
    //
    //crearemos una metodo para sacar el valor de dicho elemento
    const addActivity = () => {
        //Extrae los datos de los input
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const historia = historiaInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;

        if (title && description && activityType) {
            activitiesCtxt.addActivity(title,historia, description, activityType);
            setToastMsg('The activity has been saved!');
            //reemplazar nuestra navegacion actual hacia la ... 
            history.replace('/all-activities');
        }
    };

    return (
        <React.Fragment>
                {/* isOpen, solo se muestre por un momento */}
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={4000} color="medium" onDidDismiss={() => setToastMsg('')}/>

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Yapay Kiti</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='ion-text-center'>
                                <IonSegment ref={activityTypeInput}>
                                    <IonSegmentButton value='islas'>
                                        <IonLabel>Wat'a</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='city'>
                                        <IonLabel>Jatun llaqta Puno</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='distritos'>
                                        <IonLabel>Distritos</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Titulo del Lugar
                                    </IonLabel>
                                    <IonInput ref={titleInput} type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Descripcion del Lugar
                                    </IonLabel>
                                    <IonInput ref={descriptionInput} type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>
                                        Comentarios
                                    </IonLabel>
                                    <IonInput ref={historiaInput} type='text'></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className='ion-text-center ion-margin-top'>
                                {/* mandamos a que se llame a la funcion por medio del boton  */}
                                <IonButton expand='block' fill='outline' onClick={addActivity}>
                                    Add activity
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default AddActivity;
