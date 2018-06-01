import {
    DETAIL_FETCH_ERROR,
    DETAILS_FETCHED,
    DETAILS_IS_LOADING,
    SEARCH_KEYWORD_CHANGED,
} from "../actions/faculty_profiles.actions";


const initialState = {
    searchKeyword: "",
    facultyDetails: {
        isLoading: false,
        errors: null,
    },
};

export function facultyProfiles(state = initialState, action) {
    switch (action.type) {
        case SEARCH_KEYWORD_CHANGED:
            return {
                ...state,
                searchKeyword: action.searchKeyword,
            };
        case DETAILS_IS_LOADING:
            return {
                ...state,
                facultyDetails: {
                    isLoading: true,
                    errors: null,
                },
            };
        case DETAILS_FETCHED:
            return {
                ...state,
                facultyDetails: {
                    isLoading: false,
                    errors: null,
                },
            };
        case DETAIL_FETCH_ERROR:
            return {
                ...state,
                facultyDetails: {
                    isLoading: false,
                    errors: action.errors,
                },
            };
        default:
            return state;
    }
}