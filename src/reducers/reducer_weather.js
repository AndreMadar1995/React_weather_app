import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
switch (action.type) {
  case FETCH_WEATHER:
    // return array city, city, city
    // Never manipulate state: state.push(action.payload.data)
    // create a ew array and return that instead 
    return [action.payload.data, ...state ];
}
  return state;
}
