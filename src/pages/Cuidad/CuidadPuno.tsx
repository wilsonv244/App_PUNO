import React, { Component, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButtons, IonMenuButton, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal } from '@ionic/react';
import Deustua from "../Lugares/Deustua";
import { NavLink } from "react-router-dom";
const CuidadPuno: React.FC = () =>{
    // state = {
    //     count: 0,
    //     cerrarModa: false
    // } 
        const TipoModal = () =>{
            
        }

        const [mostrar, MostrarAlerta] = useState(true);
        const [count, setCount] = useState(0); 
        const [showModal, setShowModal] = useState(false);

     
        return(
            <React.Fragment>
                <IonModal isOpen={showModal}>
                    <IonContent title="">
                        <Deustua/>

                    <p>LE DISTE UN TOTAL DE:{count} PUNTOS</p>
                    </IonContent>
                    <IonButton onClick={()=> setCount(count+1)}> Agregar Valoracion</IonButton>
                    <IonButton onClick={()=> setShowModal(false)}> Cerrar Modal</IonButton>
                </IonModal>
                <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Lugares de la Jatun llaqta Puno</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                            <IonRow>
                                <IonCol className="ion-text-center">
                                    <IonCard>
                                        <img src='../../assets/images/arco.jpg' alt="Activity"/>
                                        <IonCardHeader>
                                            <IonCardSubtitle title="">Cuidad Puno</IonCardSubtitle>
                                            <IonCardTitle>Arco Deustua</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p className="parrafo">Una gran vista desde lo alto de la Isla</p>
                                            <p>Monumento hist??rico construido por los pune??os bajo la direcci??n del General Alejandro Deustua, en honor a la memoria de los peruanos que lucharon en las batallas de Jun??n y Ayacucho. Est?? ubicado en la cuadra 2 del Jr. Independencia, a seis cuadras de la Plaza de Armas.</p>
                                            <IonItem lines="none">
                                            {mostrar?
                                            (
                                                <IonButton color="danger"
    
                                                    onClick={()=>MostrarAlerta(false)}
                                                >Marcar como Favorito</IonButton>

                                            ) :(
                                                <IonButton expand="block" fill="outline">Agregado a Favoritos</IonButton>
                                            )
                                            }
                                            {/* <NavLink  to="/arco-deustua">Inicio</NavLink> */}
                                                <IonButton routerLink="/arco-deustua"
                                                color ="success" onClick={()=>setShowModal(true)}
                                                
                                                >
                                                    VER M??S
                                                </IonButton>
                                                {/* { !activity.isCompleted ?
                                                :
                                                <IonIcon color="success" className={classes.CenterElement} icon={checkmarkOutline} />
                                                } */}
                                            </IonItem>
                                        </IonCardContent>
                                    </IonCard>
                                    <IonCard>
                                        <img src='../../assets/images/cerro.jpg' alt="Activity"/>
                                        <IonCardHeader>
                                            <IonCardSubtitle>Cuidad Puno</IonCardSubtitle>
                                            <IonCardTitle>CCerro Huajsapata</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p className="parrafo">Un gran cerro desde la cuidad</p>
                                            <p>Desde este mirador natural se contempla la ciudad de Puno y el lago Titicaca. En la cima se encuentra el monumento al Inca Manco C??pac, fundador del imperio incaico. Est?? a cuatro cuadras de la Plaza de Armas.</p>
                                            <IonItem lines="none">
                                            {mostrar?
                                            (
                                                <IonButton color="danger"
    
                                                    onClick={()=>MostrarAlerta(false)}
                                                >Marcar como Favorito</IonButton>

                                            ) :(
                                                <IonButton expand="block" fill="outline">Agregado a Favoritos</IonButton>
                                            )
                                            }
                                            {/* <NavLink  to="/arco-deustua">Inicio</NavLink> */}
                                                <IonButton routerLink="/arco-deustua"
                                                color ="success" onClick={()=>setShowModal(true)}
                                                
                                                >
                                                    VER M??S
                                                </IonButton>
                                                {/* { !activity.isCompleted ?
                                                :
                                                <IonIcon color="success" className={classes.CenterElement} icon={checkmarkOutline} />
                                                } */}
                                            </IonItem>
                                        </IonCardContent>
                                    </IonCard>
                                    <IonCard>
                                        <img src='../../assets/images/museo.jpg' alt="Activity"/>
                                        <IonCardHeader>
                                            <IonCardSubtitle>Jatun llaqta Puno</IonCardSubtitle>
                                            <IonCardTitle>Museo Naval</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p className="parrafo">La Marina de Guerra del Per?? representada por la Direcci??n de Intereses Mar??timos</p>
                                            <p>En su interior se exhiben piezas de gran valor hist??rico de la Guerra del Pac??fico, reliquias de navegaci??n marina y antiguos manuscritos del almirante Miguel Grau.</p>
                                            <IonItem lines="none">
                                            {mostrar?
                                            (
                                                <IonButton color="danger"
    
                                                    onClick={()=>MostrarAlerta(false)}
                                                >Marcar como Favorito</IonButton>

                                            ) :(
                                                <IonButton expand="block" fill="outline">Agregado a Favoritos</IonButton>
                                            )
                                            }
                                            {/* <NavLink  to="/arco-deustua">Inicio</NavLink> */}
                                                <IonButton routerLink="/arco-deustua"
                                                color ="success" onClick={()=>setShowModal(true)}
                                                
                                                >
                                                    VER M??S
                                                </IonButton>
                                                {/* { !activity.isCompleted ?
                                                :
                                                <IonIcon color="success" className={classes.CenterElement} icon={checkmarkOutline} />
                                                } */}
                                            </IonItem>
                                        </IonCardContent>
                                    </IonCard>
                                    <IonCard>
                                        <img src='../../assets/images/arco.jpg' alt="Activity"/>
                                        <IonCardHeader>
                                            <IonCardSubtitle>Jatun llaqta Puno</IonCardSubtitle>
                                            <IonCardTitle>Museo Buque YARAVI</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p className="parrafo">Una gran vista desde lo alto de la Isla</p>
                                            <p>Es una nave de hierro construida en Gran Breta??a en la d??cada de 1860. Fue trasladada desde las costas del Pac??fico hasta el altiplano en un total de 2 766 piezas. Est?? ubicado en el Puerto del Lago Titicaca.</p>
                                            <IonItem lines="none">
                                            {mostrar?
                                            (
                                                <IonButton color="danger"
    
                                                    onClick={()=>MostrarAlerta(false)}
                                                >Marcar como Favorito</IonButton>

                                            ) :(
                                                <IonButton expand="block" fill="outline">Agregado a Favoritos</IonButton>
                                            )
                                            }
                                            {/* <NavLink  to="/arco-deustua">Inicio</NavLink> */}
                                                <IonButton routerLink="/arco-deustua"
                                                color ="success" onClick={()=>setShowModal(true)}
                                                
                                                >
                                                    VER M??S
                                                </IonButton>
                                                {/* { !activity.isCompleted ?
                                                :
                                                <IonIcon color="success" className={classes.CenterElement} icon={checkmarkOutline} />
                                                } */}
                                            </IonItem>
                                        </IonCardContent>
                                    </IonCard>
                                    <IonCard>
                                        <img src='../../assets/images/catedral.JPG' alt="Activity"/>
                                        <IonCardHeader>
                                            <IonCardSubtitle>Jatun llaqta Puno</IonCardSubtitle>
                                            <IonCardTitle>Catedral de Puno</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p className="parrafo">Se encuentra ubicada al lado oeste de la Plaza de Armas, es decir en el coraz??n mismo de la ciudad</p>
                                            <p>Destaca por su estilo barroco mestizo, la fachada principal presenta relieves labrados en granito con motivos andinos. La bas??lica cuenta con el Cristo de la Bala, ??nico en el Per??. Asimismo, ha sido declarada como Patrimonio Cultural de la Naci??n. Est?? ubicada en la Plaza de Armas.</p>
                                            <IonItem lines="none">
                                            {mostrar?
                                            (
                                                <IonButton color="danger"
    
                                                    onClick={()=>MostrarAlerta(false)}
                                                >Marcar como Favorito</IonButton>

                                            ) :(
                                                <IonButton expand="block" fill="outline">Agregado a Favoritos</IonButton>
                                            )
                                            }
                                            {/* <NavLink  to="/arco-deustua">Inicio</NavLink> */}
                                                <IonButton routerLink="/arco-deustua"
                                                color ="success" onClick={()=>setShowModal(true)}
                                                
                                                >
                                                    VER M??S
                                                </IonButton>
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
                </IonContent>
            </IonPage>
        </React.Fragment>
        );
    
}
export default CuidadPuno;