export interface Book {
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
