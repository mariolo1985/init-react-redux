import React from 'react';
import { render, shallow } from 'enzyme';
import { MenuItem } from '..';

describe('Footer component', () => {
    let menuItemRenderCopy;
    let menuItemShallowCopy;
    beforeEach(() => {
        const item = {
            name: 'Services 1',
            tagline: 'Here is what we do',
            url: '/services1.html'
        };

        menuItemRenderCopy = render(
            <MenuItem item={item} />
        );

        menuItemShallowCopy = shallow(
            <MenuItem item={item} />
        );
    });

    describe('Initial Render', () => {
        it('Renders correctly', () => {
            expect(menuItemRenderCopy.find(MenuItem)).toMatchSnapshot();
        });
    });

    describe('Shallow Render', () => {
        it('Renders correctly', () => {
            expect(menuItemShallowCopy.find(MenuItem)).toMatchSnapshot();
        });
    });
});
