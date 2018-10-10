import {
    MENU_IS_LOADED,
    SET_MENU_DATA
} from './actions';
import {
    MenuReducer
} from './reducer';

describe('Menu reducer', () => {
    describe('MENU_IS_LOADED', () => {
        it('checking property: isMenuLoaded', () => {
            const action = {
                type: MENU_IS_LOADED
            };
            expect(MenuReducer(null, action).isMenuLoaded).toEqual(true);
        });
    });

    describe('SET_MENU_DATA', () => {
        it('check property: data', () => {
            const data = {
                services: []
            };

            const action = {
                type: SET_MENU_DATA,
                data: { ...data }
            };
            expect(MenuReducer(null, action).data).toEqual(data);
        });
    });
});
