import { MENU_IS_LOADED } from './actions';

export const MenuReducer = (state = {}, action) => {
    switch (action.type) {
        case MENU_IS_LOADED:
            return {
                ...state,
                isMenuLoaded: true
            };

        default:
            return state;
    }
};
