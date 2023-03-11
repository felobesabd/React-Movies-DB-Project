import { MOVIES } from "../types/type"
import axios from "axios"

export const actionsMov = ()=> {
    return async (dis)=> {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=230fed787589329873ff16441e1cc9fb&language=ar")
        dis({type: MOVIES , data:res.data.results, pages:res.data.total_pages})
    }
}

export const actionsMovSearch = (word)=> {
    return async (sea)=> {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=230fed787589329873ff16441e1cc9fb&query=${word}&language=en`)
        console.log(res);
        sea({type: MOVIES , data:res.data.results, pages:res.data.total_pages})
    }
}

export const actionsMovPages = (numPage)=> {
    return async (pag)=> {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=230fed787589329873ff16441e1cc9fb&language=en&page=${numPage}`)
        pag({type: MOVIES , data:res.data.results, pages:res.data.total_pages})
    }
}