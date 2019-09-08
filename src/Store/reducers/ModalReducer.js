const initialState = {
    ModalOpen: true,
};

const ModalReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'OpenModal':
            console.log('Modal ' + state.ModalOpen) ;
            return {ModalOpen: !state.ModalOpen};
        default:
            return state;
    }
};

export default ModalReducer;
