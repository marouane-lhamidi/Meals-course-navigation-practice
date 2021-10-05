import {MEALS} from "../../Data/dummy-data";
import {TOGGLE_FAVORITE, TOGGLE_FILTER} from "../Actions/mealsActions";

const firstValues = {
    meals : MEALS,
    filterMeals : MEALS,
    favorites : []
}

const mealsReducer = (state = firstValues, action) =>{
    switch (action.type){
        case TOGGLE_FAVORITE :
            const indexSelectorMeal = state.favorites.findIndex(meal => meal.id === action.id);
            if (indexSelectorMeal >= 0){
                 const updatedTable = [ ...state.favorites];
                updatedTable.splice(indexSelectorMeal,1);
                return {...state, favorites: updatedTable}
            }else {
                const selectedMeal = state.meals.find(item => item.id === action.id);
                return {...state, favorites: state.favorites.concat(selectedMeal)}
            }

        case TOGGLE_FILTER :
            const ourFilters = action.Filters;
            const updatedFilters = state.meals.filter(meal => {
                if (meal.isGlutenFree && !ourFilters.glutenFree)
                    return false
                if (meal.isVegan && !ourFilters.vegan)
                    return false
                if (meal.isVegetarian && !ourFilters.vegetarian)
                    return false
                if (meal.isLactoseFree && !ourFilters.lactoseFree)
                    return false

                return true
            })
            return {...state, filterMeals : updatedFilters}
        default :
            return state
    }
}


export default mealsReducer;