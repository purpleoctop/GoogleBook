
export interface Book {
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
        language: string,
        pageCount: number
    }
}
