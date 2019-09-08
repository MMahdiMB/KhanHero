const initialState = {
    isnavbarLoaded: false,
};

const navbarLoaded = (state = initialState , action) => {
    switch (action.type) {
        case 'isNavbarLoaded':
            return {...state, isnavbarLoaded: action.isLoaded};
        default:
            return state;
    }

};

export default navbarLoaded;
