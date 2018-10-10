export const MENU_IS_LOADED = 'MENU_IS_LOADED';
export const SET_MENU_DATA = 'SET_MENU_DATA';

export const setMenuIsLoaded = () => ({
    type: MENU_IS_LOADED
});

export const setMenuData = (data) => {
    return (dispatch) => {
        dispatch({
            type: SET_MENU_DATA,
            data
        });
    };
};
