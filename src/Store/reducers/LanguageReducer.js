const initialState = {
    Language: 'en',
};

const LanguageReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'en':
            return {...state, Language: action.language};

        case 'fa':
            return {...state, Language: action.language};
        default:
            return state;
    }

};

export default LanguageReducer;
