import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Post from "./components/Post";
import "./style.scss";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    this.setState({
      posts: [
        {
          avatar: "avatar1.jpg",
          name: "Mayconn Oliveira",
          time: "3 min",
          post:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget magna vel neque auctor ultricies in nec urna. Phasellus eleifend condimentum luctus. Donec hendrerit imperdiet mi in blandit. Cras blandit risus velit, in laoreet metus hendrerit sit amet. Aliquam luctus vestibulum erat, in vulputate justo ultrices quis. Proin quis pulvinar nisi. Suspendisse eu pretium metus, ornare vulputate metus. Donec condimentum nibh nec finibus euismod. Vestibulum eget molestie magna. Mauris placerat iaculis lectus ac blandit."
        },
        {
          avatar: "avatar2.jpg",
          name: "Fernanda Coelho",
          time: "15 min",
          post:
            "Donec hendrerit imperdiet mi in blandit. Cras blandit risus velit, in laoreet metus hendrerit sit amet. Aliquam luctus vestibulum erat, in vulputate justo ultrices quis."
        },
        {
          avatar: "avatar1.jpg",
          name: "Mayconn Oliveira",
          time: "3 min",
          post:
            "Cras blandit risus velit, in laoreet metus hendrerit sit amet. Aliquam luctus vestibulum erat, in vulputate justo ultrices quis. Proin quis pulvinar nisi. Suspendisse eu pretium metus, ornare vulputate metus. Donec condimentum nibh nec finibus euismod. Vestibulum eget molestie magna. Mauris placerat iaculis lectus ac blandit."
        }
      ]
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="post-list">
          {this.state.posts.map(post => (
            <Post {...post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
