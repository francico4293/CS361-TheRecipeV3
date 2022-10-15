import {
    RESULTS,
    PAGE,
    RECIPE_RESULTS_REQUEST,
    RECIPE_RESULTS_SUCCESS,
    RECIPE_RESULTS_FAILURE,
    RECIPE_PAGE_CHANGE_REQUEST,
    RECIPE_PAGE_CHANGE_SUCCESS
} from '../constants/recipeConstants';

export const recipeResultsActions = (searchQuery) => {
    return async function(dispatch) {
        dispatch({ type: RECIPE_RESULTS_REQUEST });

        try {
            const response = await fetch(
                `${process.env.REACT_APP_SPOONACULAR_ROOT}/recipes/complexSearch` + 
                `?apiKey=${process.env.REACT_APP_API_KEY}&number=100&query=${searchQuery}`
            );
            
            if (response.status === 200) {
                const responseResults = await response.json();
                dispatch({ type: RECIPE_RESULTS_SUCCESS, payload: responseResults.results });
                sessionStorage.setItem(RESULTS, JSON.stringify(responseResults.results));
            }
        } catch (err) {

        }
    }
}

export const recipeResultsPageRequestAction = () => {
    return { type: RECIPE_PAGE_CHANGE_REQUEST };
}

export const recipeResultsPageSuccessAction = (page) => {
    sessionStorage.setItem(PAGE, page);
    return { type: RECIPE_PAGE_CHANGE_SUCCESS, payload: page };
}
