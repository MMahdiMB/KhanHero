const initialState = {
    isAuth: '',
};

const IsAuthenticated = (state = initialState , action) => {
    switch (action.type) {
        case 'isAuth':
            return {...state, isAuth: action.auth};
        default:
            return state;
    }

};

export default IsAuthenticated;
