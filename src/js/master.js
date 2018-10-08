import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import { Menu } from '../components';

(() => {
    const menu = document.getElementById('menu-container');
    if (menu !== null) {
        render(
            <Provider store={store}>
                <Menu />
            </Provider>,
            menu
        );
    }
})();
