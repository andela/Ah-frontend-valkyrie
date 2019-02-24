import React from 'react';
import { shallow } from 'enzyme';
import {Comment} from '../CommentList';

const mockCommentOne = {
    id: 78,
    body: 'fake body',
    author: {
        username: 'tester',
    },
    createdAt: 'Mon-25-Feb-2019',
};

const mockCommentTwo = {
    id: 94,
    body: 'fake body two',
    author: {
        username: 'tester-two',
    },
    createdAt: 'Mon-25-Feb-2019',
};

const mockCommentThree = {
    id: 103,
    body: 'fake body three',
    author: {
        username: 'tester-three',
    },
    createdAt: 'Mon-25-Feb-2019',
};

const props={
    comments:[{}],
    fetchComments:jest.fn(),
    articleSlug:""
}

const articleSlug = 'test-article-slug';
const commentsList = [ mockCommentOne, mockCommentTwo, mockCommentThree ];

describe('<Comment />', () => {
    let mockComponent;
    beforeEach(() => {
        mockComponent = shallow( <Comment {...props}/> );
        mockComponent.defaultProps = { articleSlug };
    })

    // component.setState( { comments: commentsList } );
    it('renders as expected ', () => {
      expect(mockComponent).toMatchSnapshot();
    });
    it('should receive next props',()=>{
        mockComponent.instance().componentWillReceiveProps({comments: [mockCommentOne]});
        // mockComponent.setProps({comments: [mockCommentOne]});
        expect(mockComponent.state('comments')).toEqual([mockCommentOne]);
    }),

    it('should mount component',()=>{
        mockComponent.instance().componentDidMount();
        expect(props.fetchComments).toBeCalled();
    })
  });