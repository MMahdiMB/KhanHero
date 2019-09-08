import axios from "axios";

const initialState = {
    Poll:0,
    Results: []
};

const TestResultsReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'TestResult':
            let data = [...state.Results];
            let index = data.findIndex(function(valueArr = data) {
                return valueArr.question === action.ObjectOfTest.question;
            });
            if(index!==-1)
            {
                state.Results[index].answer = action.ObjectOfTest.answer;
            }
            else {
                state = {...state,Results: state.Results.concat(action.ObjectOfTest)};
            }
            // console.log(state.Results);
            return state;
        case 'FinishTest':
            state = {
                ...state,
               Poll:  1
            };
            const resultData = {
                poll:state.Poll,questions_answers:state.Results,from_user:1,to_user:7
            };
            axios.post('https://mighty-shelf-24710.herokuapp.com/polling/poll/answer',resultData,{headers:{Authorization: 'Token '+ localStorage.getItem('JWT')}})
                .then(function (response) {
                    console.log(response);
                });
            console.log({poll:state.Poll,questions_answers:state.Results,from_user:1,to_user:7});
            return state;
        default:
            return state;
    }
};

export default TestResultsReducer;
