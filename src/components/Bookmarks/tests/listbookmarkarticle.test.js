import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { ListBookmarks } from "../bookmarkList";
import { bookmarkAction, getBookmarks, unBookmark, bookmarkArticle } from "../actions/bookmark_actions";

const props = {
    getBookmarks: jest.fn()
};

const state ={
    bookmarks: [],
    bookmarkResultError: false,
};

describe("bookmark article functionality", () =>{
    const wrapper = shallow(<ListBookmarks {...props}/>);
    it("matches the snapshot", () => {
        wrapper.setState(state);
        expect(wrapper).toMatchSnapshot();
    });

    it("handles recieves props", () =>{
        const nextProps = {
            bookmarkedArticleError: true,
            bookmarks: {
                results: [],
            }
        }
        wrapper.setState({bookmarkResultError: true})
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(wrapper.state('bookmarkResultError')).toEqual(false);
    });

    it("handles recieves props with error", () =>{
        const nextProps = {
            bookmarkError: true,
            bookmarks: {
                results: [],
            }
        }
        wrapper.setState({bookmarkResultError: true})
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(wrapper.state('bookmarkResultError')).toEqual(false);
    });

    it("handles recieves props with bookmarks", () =>{
        const nextProps = {
            bookmarks: {
                results: [],
            }
        }
        wrapper.instance().componentWillReceiveProps(nextProps);
    });
}) 
