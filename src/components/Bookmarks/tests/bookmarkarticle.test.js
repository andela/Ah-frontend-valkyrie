import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { BookmarkArticle } from "../bookmarkArticle";
import { bookmarkAction, getBookmarks, unBookmark, bookmarkArticle } from "../actions/bookmark_actions";

const props = {
    bookmarkAction: jest.fn(),
    getBookmarks: jest.fn(),
    unBookmark: jest.fn(),
    articleSlug: 'test-slug'
};

const state1 = {
    bookmarks: [],
    error: '',
    bookmarked: false,
    bookmarkedArticleId: 0,
    icon_state: "fas fa-bookmark text-secondary"
};
const state2 = {
    bookmarks: [],
    error: '',
    bookmarked: false,
    bookmarkedArticleId: 1,
    icon_state: "fas fa-bookmark text-secondary"
};

describe("bookmark article functionality", () =>{
    const wrapper = shallow(<BookmarkArticle {...props}/>);
    it("matches the snapshot", () => {
        wrapper.setState(state1);
        expect(wrapper).toMatchSnapshot();
    });

    it("handles state on click ", () => {
        wrapper.setState(state1);
        wrapper.instance().handleOnClick();
        expect(props.bookmarkAction).toHaveBeenCalled();
    });

    it("handles state on click with bookmarkid 1", () => {
        wrapper.setState(state2);
        wrapper.instance().handleOnClick();
        expect(props.unBookmark).toHaveBeenCalled();
    });

    it("handles recieves props", () =>{
        const nextProps = {
            bookmarkedArticleError: 'error',
            bookmarkedArticle: {},
            unBookmark: null,
            bookmarks: {
                results:[]
            },
        }
        wrapper.setState({bookmarkResultError: ''})
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(wrapper.state('bookmarkResultError')).toEqual('error');
    });

    it("handles recieves props with bookmarked articles", () =>{
        const nextProps = {
            bookmarkedArticleError: '',
            bookmarkedArticle: {
                id: 1,
                article: {
                    title: 'test',
                },
            },
            unBookmark: null,
            bookmarks: {
                results:[]
            },
        }
        const responseDate = {
            id: 1,
            article: {
                title: 'test',
            },
        }
        wrapper.setState({bookmarks: ''})
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(wrapper.state('bookmarks')).toEqual(responseDate);
    });

    it("handles recieves props get bookmarked articles", () =>{
        const nextProps = {
            bookmarkedArticleError: '',
            bookmarkedArticle: {},
            unBookmark: true,
            bookmarks: {
                results:[]
            },
        }
        wrapper.setState({bookmarks: ''})
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(props.getBookmarks).toHaveBeenCalled();
    });

    it("handles recieves props with bookmarked articles state", () =>{
        const nextProps = {
            bookmarks: {
                results: [
                    {
                        article: {
                            slug: 'test-slug',
                        },
                        id: 14,
                    }
                ]
            },
        }
        wrapper.instance().componentWillReceiveProps(nextProps);
    });

    it("handles recieves props with if bookmarked articles", () =>{
        const nextProps = {
            bookmarks: {
                results: []
            },
        }
        wrapper.instance().componentWillReceiveProps(nextProps);
    });
})
