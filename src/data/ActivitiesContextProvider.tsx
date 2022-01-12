import React, { useState } from 'react';
import ActivitiesContext, { Activity, ActivitiesContextModel, ActivityType } from './activities-context';

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities, setActivities] = useState<Activity[]>([
        {
            id: Math.random().toString(),
            title: 'My daily sleep',
            description: 'Sleep through the night after a day of quarantine',
            hour: '23:00',
            activityType: 'rest',
            imageUrl: '/assets/images/rest.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Hard work',
            description: 'Work in the projects I have at Tribalyte',
            hour: '9:00',
            activityType: 'work',
            imageUrl: '/assets/images/work.jpg',
            isCompleted: false
        },
        {
            id: Math.random().toString(),
            title: 'Play ping pong',
            description: 'Play a ping pong match on the hall table!',
            hour: '19:00',
            activityType: 'hobby',
            imageUrl: '/assets/images/hobby.jpg',
            isCompleted: false
        }
    ]);

    const addActivity = (title: string, description: string, activityType: ActivityType) => {
        let imageUrl = '';
        switch(activityType) {
            case 'rest':
                imageUrl = '/assets/images/rest.jpg'
                break;
            case 'hobby':
                imageUrl = '/assets/images/hobby.jpg'
                break;
            case 'work':
                imageUrl = '/assets/images/work.jpg'
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