import { MENU_IS_LOADED, SET_MENU_DATA } from './actions';

export const MenuReducer = (state = {}, action) => {
    switch (action.type) {
        case MENU_IS_LOADED:
            return {
                ...state,
                isMenuLoaded: true
            };

        case SET_MENU_DATA:
            return {
                ...state,
                data: action.data
            }

        default:
            return {
                ...state,
                data: {},
                isMenuLoaded: false
            };
    }
};
