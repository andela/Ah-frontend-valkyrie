import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import fetchMock from "fetch-mock" ;
import actionTypes from "./actionTypes" ;
import { changePasswordAction, passwordChangeSuccess, passwordChangeFail } from "./ChangePasswordAction";

const middleware = [thunk] ;
const mockStore = configureMockStore(middleware) ;

describe("reset password", () =>{
    afterEach(()=>{
        fetchMock.restore();
    });
    it("should mock fetch api", () =>{
        const store = mockStore({user:{}});
        fetchMock.putOnce(
            'http://127.0.0.1:8000/api/v1/users/reset_password_confirm/${token}',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                body:{
                    password : "L3mon6de"
                }
            }
        );
        store.dispatch(changePasswordAction());
        expect(store.getActions()).toEqual([]);    
    });

    it("should fetch reset password successfuly", () => {
        const message = "Password reset successful!"
        const expectedActions = 
            {
                type: actionTypes.PASSWORD_RESET_SUCCESS,
                payload: message,
            };
        expect(passwordChangeSuccess( message )).toEqual(expectedActions);
    }); 

    it("should fetch reset password not successfuly ", () => {
        const error =  "Ensure this field has at least 8 characters."
        const expectedActions = 
            {
                type: actionTypes.PASSWORD_RESET_FAILED,
                payload: error,
            };
        expect(passwordChangeFail( error )).toEqual(expectedActions);
    }); 
})


