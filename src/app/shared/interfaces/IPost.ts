import { Timestamp} from '@firebase/firestore-types';

export interface IPost {
    uid: string;
    imgLoc: string;
    imgSrc: string;
    comments: any[];
    creationDate: Timestamp;
    description: string;
    tags: string;
    title: string;
}