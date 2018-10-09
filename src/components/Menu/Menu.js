import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            data: []
        };

        props.setMenuIsLoaded();
    }

    componentDidMount = () => {
        xmlHttpRequestOnSuccess('/data/menu.json', this.handleMenuData);
    }

    // helpers
    handleMenuData = (response) => {
        console.log('handleMenuData response: ', response);
        // set state isloaded = true and data = response.responseText
    }

    render() {
        if (!this.props.isMenuLoaded) {
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

Menu.defaultProps = {
    isMenuLoaded: false
};

Menu.propTypes = {
    isMenuLoaded: PropTypes.bool
};

const mapStateToProps = state => ({
    isMenuLoaded: getIsMenuLoaded(state)
});

const mapDispatchToProps = {
    setMenuIsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
