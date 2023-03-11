import { MOVIES } from "../types/type"

const init = {movie: [], pageCount: 0}

export const allMovies = (state = init, action) => {
    switch (action.type) {
        case MOVIES:
            return {movie: action.data, pageCount: action.pages}
        default:
            return state;
    }
}