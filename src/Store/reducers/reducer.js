const initialState = {
    backDropOpen: true,
    openmenustyle:{
        width: '0px',
        height:'100%',
    }
};

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case 'Add':
                return {...state,backDropOpen: !state.backDropOpen,
                    openmenustyle:state.openmenustyle.width==='0px' ? {width: '250px', height:'100%'}:{width: '0px', height:'100%'}};
        default:
            return state;
    }

};

export default reducer;
