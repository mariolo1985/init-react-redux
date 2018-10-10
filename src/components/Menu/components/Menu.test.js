import React from 'react';
import { Provider } from 'react-redux';
import { render, shallow } from 'enzyme';
import { Menu } from '..';
import store from '../../../redux/store';

describe('Footer component', () => {
    let menuRenderCopy;
    let menuShallowCopy;
    beforeEach(() => {
        menuRenderCopy = render(
            <Provider store={store}>
                <Menu />
            </Provider>
        );

        menuShallowCopy = shallow(
            <Provider store={store}>
                <Menu />
            </Provider>
        );
    });

    describe('Initial Render', () => {
        it('Renders correctly', () => {
            expect(menuRenderCopy.find(Menu)).toMatchSnapshot();
        });
    });

    describe('Shallow Render', () => {
        it('Renders correctly', () => {
            expect(menuShallowCopy.find(Menu)).toMatchSnapshot();
        });
    });
});
