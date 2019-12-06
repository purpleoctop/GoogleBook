import { Book } from './Book';

export interface Collection {
    items: [{
        volumeInfo: Book;
    }];
}
