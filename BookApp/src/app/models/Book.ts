export interface Book {
        authors: string[];
        averageRating: number;
        categories: string[];
        description: string;
        imageLinks: {
            thumbnail: string
        };
        title: string;
        publishedDate: string;

}
