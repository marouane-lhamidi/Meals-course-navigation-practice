export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const TOGGLE_FILTER = 'TOGGLE_FILTER'

export const togglefavorite = (id) => {
    return {
        type : TOGGLE_FAVORITE,
        id
    }
}
export const togglefilter = Filters => {
    return {
        type : TOGGLE_FILTER,
        Filters
    }
}
