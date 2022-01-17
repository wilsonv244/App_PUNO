import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuToggle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/AllActivities';
import AddActivity from './pages/AddActivity/AddActivity';
import {business, compass, location, add} from 'ionicons/icons';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';
import Islas from './pages/Islas/Islas';
import CuidadPuno from './pages/Cuidad/CuidadPuno';
import Deustua from './pages/Lugares/Deustua';
const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonMenu contentId='scheduleAppM1'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Schedule App</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink="/all-activities" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={location}/>
                                <IonLabel>Tukuy Kiti Puno</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/islas" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={compass}/>
                                <IonLabel>Wat'a</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/cuidad" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={business}/>
                                <IonLabel>Jatun llaqta</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/agregar-lugar" routerDirection="none" lines="none">
                                <IonIcon color="medium" slot="start" icon={add}/>
                                <IonLabel>Yapay Kiti</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
            <ActivitiesContextProvider>
                <IonRouterOutlet id="scheduleAppM1">
                    {/* <BrowserRouter> */}
                        {/* <Switch> */}
                            <Route path='/all-activities' component={AllActivities} exact />
                            <Route path='/islas' component={Islas} exact />
                            <Route path='/cuidad' component={CuidadPuno} exact />
                            <Route path='/agregar-lugar' component={AddActivity} exact />
                            {/* <Route path='/arco-deustua' component={Deustua} exact /> */}
                            <Redirect to='/all-activities' />

                        {/* </Switch> */}
                    {/* </BrowserRouter> */}
                </IonRouterOutlet>
            </ActivitiesContextProvider>
        </IonReactRouter>
    </IonApp>
);
export default App;
