import { Timestamp} from '@firebase/firestore-types';

//Firebase uses Timestamp,so i need it to convert it with date pipe 

export interface IPost {
    uid: string;
    imgLoc: string;
    imgSrc: string;
    comments: any[];
    creationDate: Timestamp;
    description: string;
    tags: string;
    title: string;
    category: string;
    creator: string;
    id: string;

}