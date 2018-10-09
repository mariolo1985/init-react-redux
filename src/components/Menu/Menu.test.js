import React from 'react';
import { Provider } from 'react-redux';
import { render, mount, shallow } from 'enzyme';
import { Menu } from '.';
import store from '../../redux/store';

const menuInitSnap = render(
    <Provider store={store}>
        <Menu />
    </Provider>
);
const menuMountSnap = mount(
    <Provider store={store}>
        <Menu />
    </Provider>
);
const menuShallowSnap = shallow(
    <Provider store={store}>
        <Menu />
    </Provider>
);

describe('Footer component', () => {
    describe('Initial Render', () => {
        it('Renders correctly', () => {
            expect(menuInitSnap.find(Menu)).toMatchSnapshot();
        });
    });

    describe('Mount Render', () => {
        it('Renders correctly', () => {
            expect(menuMountSnap.find(Menu)).toMatchSnapshot();
        });
    });

    describe('Shallow Render', () => {
        it('Renders correctly', () => {
            expect(menuShallowSnap.find(Menu)).toMatchSnapshot();
        });
    });
});
