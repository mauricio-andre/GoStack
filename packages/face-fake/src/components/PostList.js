import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: 'Mauricio',
            avatar: 'Mauricio.jpeg',
          },
          date: '9 Abril 2020',
          content:
            'Aenean rutrum turpis et ex posuere cursus a a justo. Vestibulum finibus tristique ullamcorper. Nunc sit amet sagittis diam, eu ullamcorper justo. Sed lectus elit, ornare eu erat ut, imperdiet eleifend orci.',
          comments: [
            {
              id: 1,
              author: {
                name: 'Pedro',
                avatar: 'Pedro.jpg',
              },
              content:
                'Etiam viverra nulla eu eleifend bibendum. Phasellus id eleifend risus. Duis volutpat arcu id mollis luctus. Nulla sed mi eu libero consectetur efficitur.',
            },
          ],
        },
        {
          id: 2,
          author: {
            name: 'Pedro',
            avatar: 'Pedro.jpg',
          },
          date: '8 Abril 2020',
          content:
            'Aenean rutrum turpis et ex posuere cursus a a justo. Vestibulum finibus tristique ullamcorper. Nunc sit amet sagittis diam, eu ullamcorper justo. Sed lectus elit, ornare eu erat ut, imperdiet eleifend orci.',
          comments: [
            {
              id: 1,
              author: {
                name: 'Mauricio',
                avatar: 'Mauricio.jpeg',
              },
              content:
                'Etiam viverra nulla eu eleifend bibendum. Phasellus id eleifend risus. Duis volutpat arcu id mollis luctus. Nulla sed mi eu libero consectetur efficitur.',
            },
            {
              id: 2,
              author: {
                name: 'Pedro',
                avatar: 'Pedro.jpg',
              },
              content:
                'Etiam viverra nulla eu eleifend bibendum. Phasellus id eleifend risus. Duis volutpat arcu id mollis luctus. Nulla sed mi eu libero consectetur efficitur.',
            },
          ],
        },
        {
          id: 3,
          author: {
            name: 'Mauricio',
            avatar: 'Mauricio.jpeg',
          },
          date: '7 Abril 2020',
          content:
            'Aenean rutrum turpis et ex posuere cursus a a justo. Vestibulum finibus tristique ullamcorper. Nunc sit amet sagittis diam, eu ullamcorper justo. Sed lectus elit, ornare eu erat ut, imperdiet eleifend orci.',
          comments: [
            {
              id: 1,
              author: {
                name: 'Pedro',
                avatar: 'Pedro.jpg',
              },
              content:
                'Etiam viverra nulla eu eleifend bibendum. Phasellus id eleifend risus. Duis volutpat arcu id mollis luctus. Nulla sed mi eu libero consectetur efficitur.',
            },
            {
              id: 2,
              author: {
                name: 'Mauricio',
                avatar: 'Mauricio.jpeg',
              },
              content:
                'Etiam viverra nulla eu eleifend bibendum. Phasellus id eleifend risus. Duis volutpat arcu id mollis luctus. Nulla sed mi eu libero consectetur efficitur.',
            },
          ],
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div id="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
