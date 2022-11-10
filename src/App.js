import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(result => {
      const posts = result.data
      this.setState({posts})
    })
  }

  render() {
    return (
      <div>
       {this.state.posts.map(post => <p key={post.id}>{post.title}{post.body}</p> )}

      </div>
    );
  }
}
 export default App;

// class App extends Component {

//   state = {
//       users: []
//   }

//   componentDidMount() {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//       const users = res.data;
//       this.setState({users})
//     })
     
//   }

//   render(){
//   return (
//     <div>
//       {this.state.users.map(user => <p key={user.id}>{user.name}
//       <span> {user.email}</span>
//       <span> {user.address.street}</span>
//       <span> {user.address.city}</span></p>)}
//     </div>
//   );
// }
// }

// export default App;
