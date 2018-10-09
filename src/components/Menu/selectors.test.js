import {
    getIsMenuLoaded
} from './selector';

const menuState = {
    menu: {
        isMenuLoaded: false
    }
};

describe('Menu selectors', () => {
    describe('getIsMenuLoaded()', () => {
        it('should return isMenuLoaded value', () => {
            expect(getIsMenuLoaded(menuState)).toEqual(menuState.menu.isMenuLoaded);
        });
    });
});
