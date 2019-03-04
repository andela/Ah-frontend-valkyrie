import axios from "axios";

export const SOCIAL_SHARE_PENDING = "SOCIAL_SHARE_PENDING";
export const SOCIAL_SHARE_SUCCESS = "SOCIAL_SHARE_SUCCESS";
export const SOCIAL_SHARE_ERROR = "SOCIAL_SHARE_ERROR";

const host = process.env.HOST;

export const socialSharePending = isSocialSharePending => ({
  type: SOCIAL_SHARE_PENDING,
  isSocialSharePending,
});

export const socialShareSuccess = data => ({
  type: SOCIAL_SHARE_SUCCESS,
  data,
});

export const socialShareError = error => ({
  type: SOCIAL_SHARE_ERROR,
  error,
});

export const share = (provider, slug) => (dispatch) => {
  const url = `${host}/articles/${slug}/share/${provider}/`;

  dispatch(socialSharePending(true));
  return axios(url)
    .then((response) => {
      dispatch(socialShareSuccess(response.data));
      let providerUrl = "";
      const serverUrl = "ah-frontend-valkyrie.herokuapp.com";
      const { pathname } = window.location;
      if (provider === "facebook") {
        providerUrl = "https://www.facebook.com/sharer/sharer.php?u=https%3A//";
        window.open(`${providerUrl}${serverUrl}${pathname}`, "_blank");
      }
      if (provider === "twitter") {
        providerUrl = "https://twitter.com/intent/tweet?text=http%3A//";
        window.open(`${providerUrl}${serverUrl}${pathname}`, "_blank");
      }
      if (provider === "email") {
        const subject = `${slug} - From authors Haven`;
        const body = "I found this article very interesting and decided to share it with you.";
        providerUrl = `mailto:?subject=${subject}&body=${body} http://`;
        window.open(`${providerUrl}${serverUrl}${pathname}`);
      }
    })
    .catch(error => dispatch(socialShareError(error.response)));
};
