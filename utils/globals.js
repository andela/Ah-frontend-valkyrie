const APP_URL = "https://ah-backend-valkyrie-staging.herokuapp.com/api/v1";
export default APP_URL;

export const changelistener = state => (event) => {
  state.setState({ [event.target.name]: event.target.value });
};
