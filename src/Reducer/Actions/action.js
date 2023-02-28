import { movies } from "../types/type"
import axios from "axios"

export const actionsMov = ()=> {
    return async (dis)=> {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=230fed787589329873ff16441e1cc9fb&language=en")
        dis({type: movies , data:res.data.results, pages:res.data.total_pages})
    }
}

export const actionsMovSearch = (word)=> {
    return async (sea)=> {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=230fed787589329873ff16441e1cc9fb&query=${word}&language=ar&page=1&include_adult=false`)
        sea({type: movies , data:res.data.results, pages:res.data.total_pages})
    }
}

export const actionsMovPages = (numPage)=> {
    return async (pag)=> {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=230fed787589329873ff16441e1cc9fb&language=en-US&page=${numPage}`)
        pag({type: movies , data:res.data.results, pages:res.data.total_pages})
    }
}