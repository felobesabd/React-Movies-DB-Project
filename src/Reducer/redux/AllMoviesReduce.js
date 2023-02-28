import { movies } from "../types/type"

export const allMovies = (state = {movie: [], pageCount: 0}, action) => {
    switch (action.type) {
        case movies:
            return {movie: action.data, pageCount: action.pages}
        default:
            return state;
    }
}