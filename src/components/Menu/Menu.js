import React, { Component } from 'react';
import { connect } from 'react-redux';
import { xmlHttpRequestOnSuccess } from 'simply-requests';

import {
    setMenuIsLoaded
} from './actions';
import {
    getIsMenuLoaded
} from './selector';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false
        };

        props.setMenuIsLoaded();
    }

    componentDidMount = () => {
        xmlHttpRequestOnSuccess('/data/menu.json', this.handleMenuData);
    }

    // helpers
    handleMenuData = (response) => {
        console.log(response);

        // set state isloaded = true and data = response.responseText
    }

    render() {
        const { isLoaded } = this.state;


        if (!isLoaded) {
            return null;
        }

        return (
            <div className='menu-wrapper'>
                <ul className='menu'>
                    <li>menu item</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isMenuLoaded: getIsMenuLoaded(state)
});

const mapDispatchToProps = {
    setMenuIsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
