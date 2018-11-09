import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { xmlHttpRequestOnSuccess } from 'simply-requests';

import { MenuItem } from '..';

import {
    setMenuData,
    setMenuIsLoaded
} from '../actions';
import {
    getIsMenuLoaded,
    getMenuData
} from '../selector';

class Menu extends Component {
    componentDidMount = () => {
        xmlHttpRequestOnSuccess('/data/menu.json', this.handleMenuData);
    }

    // helpers
    handleMenuData = (response) => {
        const {
            setMenuData,
            setMenuIsLoaded
        } = this.props;

        setMenuData(JSON.parse(response.responseText));
        setMenuIsLoaded();
    }

    render() {
        const {
            data,
            isMenuLoaded
        } = this.props;

        if (!isMenuLoaded) {
            return null;
        }

        return (
            <div className='menu-wrapper'>
                <ul className='menu'>
                    {
                        Object.keys(data).map((headingKey) => {
                            return (
                                <Fragment key={Math.random()}>
                                    {
                                        data[headingKey].map((item) => {
                                            return (
                                                <MenuItem key={Math.random()} item={item} />
                                            );
                                        })
                                    }
                                </Fragment>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

Menu.defaultProps = {
    data: {},
    isMenuLoaded: false
};

Menu.propTypes = {
    data: PropTypes.shape({}),
    isMenuLoaded: PropTypes.bool,
    setMenuData: PropTypes.func.isRequired,
    setMenuIsLoaded: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    data: getMenuData(state),
    isMenuLoaded: getIsMenuLoaded(state)
});

const mapDispatchToProps = {
    setMenuData,
    setMenuIsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


/*
data[headingKey].map((item) => {
                                console.log(item);
                                return (
                                    <MenuItem item={item} />
                                );
                            });
                            */