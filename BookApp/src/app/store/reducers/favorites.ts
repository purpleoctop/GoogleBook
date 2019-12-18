import { Book } from '../../models/book';
import * as favbooks from '../actions/favorites';



export interface State {
    favBooks: Book[]
};

const initialState: State = {
    favBooks: []
};

export function reducer(state = initialState, action: favbooks.Actions): State {
    switch (action.type as any) {
        case favbooks.LikeBookAction: {
            const book = action.payload;
            return Object.assign({}, state, {
                favbooks: state.favBooks.push(book)
            });
        }

        case favbooks.LikeBookAction: {
            const book = action.payload;
            return Object.assign({}, state, {
                favbooks: state.favBooks.filter(x => x !== book)
            });
        }

        default: {
            return state;
        }
    }
}

// export const getFavBooks = (state: State) => state.favBooks;
