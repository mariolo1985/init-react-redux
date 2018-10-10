import {
    MENU_IS_LOADED,
    SET_MENU_DATA,
    setMenuData,
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

    describe('setMenuData', () => {
        it('returns SET_MENU_DATA', () => {
            const data = {
                services: []
            };

            const mockAction = {
                type: SET_MENU_DATA,
                data
            };
            const result = setMenuData(data);
            const dispatch = jest.fn();
            result(dispatch, () => { });
            expect(dispatch).toBeCalledWith({
                ...mockAction
            });
        });
    });
});
