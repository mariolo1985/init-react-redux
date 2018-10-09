import {
    MENU_IS_LOADED,
    setMenuIsLoaded
} from './actions';


describe('Menu actions', () => {
    describe('setMenuIsLoaded', () => {
        it('returns MENU_IS_LOADED', () => {
            const mockAction = {
                type: MENU_IS_LOADED
            };
            expect(setMenuIsLoaded()).toEqual(mockAction);
        });
    });
});
