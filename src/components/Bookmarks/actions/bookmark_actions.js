import BookmarkActionTypes from './actionTypes';
import axios from 'axios';

const token = window.localStorage.getItem('auth_token');
const setConfig = method => {
    const config = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        mode : "no-cors",
        cache: 'no-cache',
    }
    return config;
};

const setUrl = slug => {
    const url =  `${ process.env.HOST }/articles/${slug}/bookmark`;
    return url;
}

export const bookmarkArticle = bookmark =>(
    {
        type: BookmarkActionTypes.ADD_BOOKMARK,
        payload: bookmark,
    }
);

export const bookmarkArticleError = error =>(
    {
        type: BookmarkActionTypes.ADD_BOOKMARK_ERROR,
        payload: error,
    }
);

export const fetchBookmarks = bookmarks => (
    {
        type: BookmarkActionTypes.FETCH_BOOKMARKS,
        payload: bookmarks
    }
);

export const fetchBookmarksError = error => (
    {
        type: BookmarkActionTypes.FETCH_BOOKMARKS_ERROR,
        payload: error
    }
)

export const deleteBookmark = message =>(
    {
        type: BookmarkActionTypes.DELETE_BOOKMARK,
        payload: message,
    }
);

export const deleteBookmarkError = error => (
    {
        type: BookmarkActionTypes.DELETE_BOOKMARK_ERROR,
        payload: error,
    }
);

export const bookmarkAction = slug => ( dispatch ) => {
    const url = setUrl(slug)
    return axios(url, setConfig('POST'))
      .then(response => {
        dispatch(bookmarkArticle(response.data));
      }
      )
      .catch(error => {
        dispatch(bookmarkArticleError(error.response)); 
        }  
      )
};

export const getBookmarks = article_slug => ( dispatch ) => {
    const get_url = `${ process.env.HOST }/articles/${article_slug}/bookmark`
    return axios({
        get_url,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "no-cors",
        cache: "no-cache",
      },)
      .then(response => {
        dispatch(fetchBookmarks(response.data));
      }
      )
      .catch(error => {
        dispatch(fetchBookmarksError(error.response)); 
        }  
      )
}

export const unBookmark = (slug,bookmark_id) => ( dispatch ) => {
    const delete_url = `${ process.env.HOST }/articles/${ slug }/bookmark/${ bookmark_id }`
    return axios(delete_url, setConfig('DELETE') )
      .then(response => {
        dispatch(deleteBookmark(response.data));
      }
      )
      .catch(error => {
        dispatch(deleteBookmarkError(error.response));   
        }  
      )
}
