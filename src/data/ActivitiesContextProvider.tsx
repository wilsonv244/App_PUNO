import React, { useState } from 'react';
import ActivitiesContext, { Activity, ActivitiesContextModel, ActivityType } from './activities-context';

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>([
        {
            id: Math.random().toString(),
            title: 'Archipiélago de Wiñaymarca-Isla Anapia',
            description: 'Isla Flotante de Puno',
            historia: "Wiñaymarca tiene hermosas playas tanto de arena como de piedra menuda. Sus pobladores aún conservan sus costumbres ancestrales y la pesca es una de sus principales actividades.",
            hour: '23:00',
            activityType: 'islas',
            imageUrl: '/assets/images/isla1.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Islas Flotantes de Urus',
            description: 'Los uros son un pueblo que se reparte entre Bolivia y Perú',
            historia: "Islas artificiales hechas de totora que cubren parte de la superficie del lago. Aquí se mantienen vivas las tradiciones y costumbres, como la pesca artesanal.",
            hour: '9:00',
            activityType: 'islas',
            imageUrl: '/assets/images/isla2.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Peninsula de Capachica',
            description: 'Una gran peninsula que esta ubicado en Puno.',
            historia: "Fusión de turismo vivencial y aventura. Una zona llena de tradiciones, costumbres en medio del lago navegable más alto del mundo",
            hour: '19:00',
            activityType: 'city',
            imageUrl: '/assets/images/capachica.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Isla Amantani',
            historia: "Lugar para experimentar costumbres ancestrales como la forma de vida de sus pobladores y para deleitarse con paisajes maravillosos como el lago en todo su esplendor.",
            description: 'La isla de Amantaní, perteneciente al distrito del mismo nombre en la Región de Puno',
            hour: '19:00',
            activityType: 'city',
            imageUrl: '/assets/images/amantani.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Arco Deustua',
            historia: "Monumento histórico construido por los puneños bajo la dirección del General Alejandro Deustua, en honor a la memoria de los peruanos que lucharon en las batallas de Junín y Ayacucho. Está ubicado en la cuadra 2 del Jr. Independencia, a seis cuadras de la Plaza de Armas.",
            description: 'Una gran vista desde lo alto de la Isla',
            hour: '8:00-17:00',
            activityType: 'city',
            imageUrl: '/assets/images/arco.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'CCerro Huajsapata',
            historia: "Desde este mirador natural se contempla la ciudad de Puno y el lago Titicaca. En la cima se encuentra el monumento al Inca Manco Cápac, fundador del imperio incaico. Está a cuatro cuadras de la Plaza de Armas.",
            description: 'Un gran cerro desde la cuidad',
            hour: '19:00',
            activityType: 'city',
            imageUrl: '/assets/images/cerro.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Museo Naval',
            historia: "En su interior se exhiben piezas de gran valor histórico de la Guerra del Pacífico, reliquias de navegación marina y antiguos manuscritos del almirante Miguel Grau.",
            description: 'La Marina de Guerra del Perú representada por la Dirección de Intereses Marítimos',
            hour: '10:00 - 15:00',
            activityType: 'city',
            imageUrl: '/assets/images/museo.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Catedral de Puno',
            historia: "Destaca por su estilo barroco mestizo, la fachada principal presenta relieves labrados en granito con motivos andinos. La basílica cuenta con el Cristo de la Bala, único en el Perú. Asimismo, ha sido declarada como Patrimonio Cultural de la Nación. Está ubicada en la Plaza de Armas.",
            description: 'Se encuentra ubicada al lado oeste de la Plaza de Armas, es decir en el corazón mismo de la ciudad',
            hour: 'Todo el Día',
            activityType: 'city',
            imageUrl: '/assets/images/catedral.jpg',
            isCompleted: false
        }
    ]);
    
   

    const addActivity = (title: string, description: string,historia: string, activityType: ActivityType) => {
        let imageUrl = '';
        switch(activityType) {
            case 'islas':
                imageUrl = '/assets/images/urus.jpg'
                break;
            case 'city':
                imageUrl = '/assets/images/puno.jpg'
                break;
            case 'distritos':
                imageUrl = '/assets/images/distritos.jpg'
                break;
            default:
                imageUrl = '/assets/images/work.jpg'
                break;
        };

        const activityDate = new Date();
        const hour = activityDate.getHours() + ':' + activityDate.getMinutes();

        const addActivity: Activity = {
            id: Math.random().toString(),
            title,
            description,
            historia,
            hour,
            activityType,
            imageUrl,
            isCompleted: false
        };

        setActivities(currActivities => {
            return [...currActivities, addActivity]
        })
        
    };
    //creando el metodo de actividad completada
    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            //actividiades actuales.
            const updatedActivities = [...currActivities];//extrae las actividades y los pone en un nuevo arreglo
            //obtener el index, con el findIndex
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            //una nueva constante que extrae
            // las nuevas variables y marcar como completada
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
            //comparar la actividad con la actualizada
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };

    const activitiesContext: ActivitiesContextModel = {
        activities,
     
        addActivity,
        completeActivity
    };

    return (
        //pasamos como valor el activitieContext
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContextProvider;