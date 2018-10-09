import {
    MENU_IS_LOADED
} from './actions';
import {
    MenuReducer
} from './reducer';

describe('Menu reducer', () => {
    describe('MENU_IS_LOADED', () => {
        it('is', () => {
            const action = {
                type: MENU_IS_LOADED
            };
            expect(MenuReducer(null, action).isMenuLoaded).toEqual(true);
        });
    });
});
