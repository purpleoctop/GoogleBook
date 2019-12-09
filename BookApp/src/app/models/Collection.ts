import { Book } from './Book';

export interface Collection {
    items:[{
        id: string;
    volumeInfo: {
        authors: string[];
        averageRating: number;
        categories: string[];
        description: string;
        imageLinks: {
            thumbnail: string
        };
        title: string;
        subtitle: string;
        publsher: string;
        publishedDate: string;
    }
    }]
}
