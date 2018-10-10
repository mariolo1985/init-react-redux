import {
    getIsMenuLoaded,
    getMenuData
} from './selector';

const menuState = {
    menu: {
        data: [],
        isMenuLoaded: false
    }
};

describe('Menu selectors', () => {
    describe('getIsMenuLoaded()', () => {
        it('should return isMenuLoaded value', () => {
            expect(getIsMenuLoaded(menuState)).toEqual(menuState.menu.isMenuLoaded);
        });
    });

    describe('getMenuData()', () => {
        it('should return data value', () => {
            expect(getMenuData(menuState)).toEqual(menuState.menu.data);
        });
    });
});
