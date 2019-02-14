import actionTypes from "../actions/actionTypes"

const mockstate = {
    user: {},
    message: '',
    errors: {}
}

const passwordResetReducer = ( state=mockstate, action) => {
    switch(action.type){
        case  actionTypes.PASSWORD_RESET_FAILED:
         return{
             ...state,
             message: action.payload,
         };
         case actionTypes.PASSWORD_RESET_SUCCESS:
            return{
                ...state,
                message: action.payload,
            };
            default:
                return state;
    }
};

export default passwordResetReducer;
