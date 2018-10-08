import { createSelector } from 'reselect';

export const getIsMenuLoaded = createSelector(
    (state) => {
        console.log('state', state);
        return true;
    }
);
