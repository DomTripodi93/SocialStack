import _ from 'lodash';
import { USER_TOKEN } from '../actions/index';

export default function TokenReducer(state={}, action) {
    switch(action.type) {
        case USER_TOKEN:
            return _.mapKeys(action.response, 'token');
        default:
            return state;
    }
}