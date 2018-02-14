import { FETCH_MOVIES } from '../actions/actions';

const movies = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIES: {
            return [{id:1, title: 'San Andreas'}, {id: 2, title: 'Minions'}];
        }
        default:
            return state;
    }
};

export default movies;