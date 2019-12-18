import { Action } from '@ngrx/store';
import { Book } from '../../models/book';


export const LIKE_BOOK = 'Like Book';
// export const LIKE_BOOK_SUCCESS = 'Like Book Success';
// export const LIKE_BOOK_FAIL = 'Like Book Fail';
export const UNLIKE_BOOK = 'Unlike Book';
// export const UNLIKE_BOOK_SUCCESS = 'Unlike Book Success';
// export const UNLIKE_BOOK_FAIL = 'Unlike Book Fail';
// export const GET_FAVS = 'Get_favorites';
// export const GET_FAVS_SUCCESS = 'Get_favorites Success';
// export const GET_FAVS_FAIL = 'Get_favorites Fail';


export class LikeBookAction implements Action {
    readonly type = LIKE_BOOK;

    constructor(public payload: Book) { }
}

// export class LikeBookSuccessAction implements Action {
//     readonly type = LIKE_BOOK_SUCCESS;

//     constructor(public payload: Book) { }
// }

// export class LikeBookFailAction implements Action {
//     readonly type = LIKE_BOOK_FAIL;

//     constructor(public payload: Book) { }
// }


export class UnlikeBookAction implements Action {
    readonly type = UNLIKE_BOOK;

    constructor(public payload: Book) { }
}

// export class UnlikeBookSuccessAction implements Action {
//     readonly type = UNLIKE_BOOK_SUCCESS;

//     constructor(public payload: Book) { }
// }

// export class UnlikeBookFailAction implements Action {
//     readonly type = UNLIKE_BOOK_FAIL;

//     constructor(public payload: Book) { }
// }

// export class GetFavsAction implements Action {
//     readonly type = GET_FAVS;
// }

// export class GetFavsSuccessAction implements Action {
//     readonly type = GET_FAVS_SUCCESS;

//     constructor(public payload: Book[]) { }
// }

// export class GetFavsFailAction implements Action {
//     readonly type = GET_FAVS_FAIL;

//     constructor(public payload: any) { }
// }


export type Actions
    = LikeBookAction
    // | LikeBookSuccessAction
    // | LikeBookFailAction
    | UnlikeBookAction
    // | UnlikeBookSuccessAction
    // | UnlikeBookFailAction
    // | GetFavsAction
    // | GetFavsSuccessAction
    // | GetFavsFailAction;
