import React, { Component } from 'react';
import Users from './components/user'
import { connect } from 'react-redux';
import { removeRow, loadUser, loadPosts } from './actions';
import Posts from './components/posts';

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
    this.props.loadPosts();
  }
  render() {
    return <div>
      <Users user={this.props.users} loading={this.props.users.isLoading} remove={this.props.removeRow} />
      <Posts post={this.props.posts} loading={this.props.posts.isLoading} />
    </div>
  }
}
function mapStateToProps(store) {
  return {
    users: store.users,
    posts: store.posts
  }
}
export default connect(mapStateToProps, { loadUser, loadPosts, removeRow })(App);
