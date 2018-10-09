import { INIT_LOAD } from '../actions/actionInit';

const initialState = (state = {}, action) => {
    switch (action.type) {
        case INIT_LOAD:
            return {
                ...state,
                appInitiated: true
            }

        default:
            return {
                ...state,
                appInitiated: false
            };
    }
};

export default initialState;
