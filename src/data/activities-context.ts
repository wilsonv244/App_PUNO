import React from 'react';

export type ActivityType = 'islas' | 'city' | 'distritos';

export interface Activity {
    id: string;
    title: string;
    historia: string;
    description: string;
    hour: string;
    activityType: ActivityType;
    imageUrl: string;
    isCompleted: boolean;
}

export interface ActivitiesContextModel {

    activities: Activity[];
    
    addActivity: (title: string,historia: string, description: string, activityType: ActivityType) => void;
    completeActivity: (activityId: string) => void;
}
//todos los metodos funcionanando
const ActivitiesContext = React.createContext<ActivitiesContextModel>({
    activities: [],
    addActivity: () => {},
    completeActivity: () => {}
});

export default ActivitiesContext;