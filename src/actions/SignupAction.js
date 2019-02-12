import actionTypes from "./actionTypes";

export const signupFail = data => {
  return {
    type: actionTypes.SIGNUPFAIL,
    payload: data
  };
};

export const signupSuccess = response => {
  return {
    type: actionTypes.SIGNUPSUCCESS,
    payload: response
  };
};

export const signUp = data => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return function(dispatch) {
    fetch(
      proxyurl +
        "http://ah-backend-valkyrie-staging.herokuapp.com/api/v1/users/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        CORS: "no-cors",
        body: JSON.stringify({ user: data })
      }
    )
      .then(res => res.json())
      .then(response => {
        if (response.user) {
          dispatch(signupSuccess(response.user));

          document.getElementById("reg-form").reset();
          document.getElementById("alert").style.display = "block";
          document.getElementById("alert").innerHTML =
            "An activation link has been sent to your email.Follow the link to activate your account";
          document.getElementById("reg_div").style.display = "none";
        } else {
          dispatch(signupFail(response.errors));
        }
      })
      .catch(response => dispatch(signupFail(response.errors)));
  };
};
