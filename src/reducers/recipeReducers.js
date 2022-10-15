import { 
    RECIPE_RESULTS_REQUEST,
    RECIPE_RESULTS_SUCCESS,
    RECIPE_RESULTS_FAILURE,
    RECIPE_PAGE_CHANGE_REQUEST,
    RECIPE_PAGE_CHANGE_SUCCESS
} from '../constants/recipeConstants';

export const recipeResultsReducer = (state = { resultsLoading: false, results: [] }, action) => {
    switch (action.type) {
        case RECIPE_RESULTS_REQUEST:
            return { resultsLoading: true, results: state.results };
        case RECIPE_RESULTS_SUCCESS:
            return { resultsLoading: false, results: action.payload };
        default:
            return state;
    }
}

export const recipeResultsPageReducer = (state = { pageLoading: false, page: 0 }, action) => {
    switch (action.type) {
        case RECIPE_PAGE_CHANGE_REQUEST:
            return { pageLoading: true, page: state.page };
        case RECIPE_PAGE_CHANGE_SUCCESS:
            return { pageLoading: false, page: action.payload };
        default:
            return state;
    }
}
