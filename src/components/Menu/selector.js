import { createSelector } from 'reselect';

const getMenuState = state => state.menu;

export const getIsMenuLoaded = createSelector(
    state => getMenuState(state),
    menuState => menuState.isMenuLoaded
);

export const getMenuData = createSelector(
    state => getMenuState(state),
    menuState => menuState.data
);
