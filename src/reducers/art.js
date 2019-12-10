import { REQUEST_ART } from '../actions';

const initialState = {
    data: []
}
export default function art(state = initialState, action){
    switch (action.type){
        case REQUEST_ART:
            return Object.assign({}, state, {
                data: action.payload.body.data
            });
        default:
            return state;
    }
}