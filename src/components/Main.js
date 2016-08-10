require('normalize.css/normalize.css');
require('styles/App.css');
var $ = require('jquery');

// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router'

import NavBar from 'components/NavBar'
import React from 'react';

var App = React.createClass({
  render: function() {
    return (
      <IssueFeed>
      </IssueFeed>
    );
  }
});

var IssueFeed = React.createClass({
  // temp function for cutting the body text, still figuring out where to place this.
    cutBody: function(str){
      return str.replace(/^(.{11}[^\s]*).*/, '$1');
    },
    getInitialState: function() {
      return {
        issuesArray : []
      }
    },
   componentDidMount: function() {
     var _this = this;
     this.serverRequest = $.ajax({
         url: 'https://api.github.com/repos/rails/rails/issues?order=asc',
         type: 'get',
         dataType: 'json'
         })
     .always(function(){
       // loading sign?
     })
     .done(function(data) {
       _this.setState({
         issuesArray: data
       });
       console.log('THIS: ', _this.state.issuesArray);
      })
   },
  componentWillUnmount: function() {
    // this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <NavBar />
        {this.state.issuesArray.map(function(issue) {
          return (
              <IssueItem key={issue.id} data={issue} />
          )
        })}
      </div>
    );
  }
});

class IssueItem extends React.Component {
  render() {
    return (
      <div className="issueItem">
        <section className="ruby">
          <div className="top"></div>
            <div className="middle">
              <div className="middle-issue">
                #{this.props.data.number}
              </div>
              <div className="middle-comments">
                {this.props.data.comments}
                <i className="fa fa-comment-o" aria-hidden="true"></i>
              </div>
              <div className="middle-title">{this.props.data.title}</div>
              <div className="middle-body">
                {/* a function expression seems really sill to do right here, but it's a quick fix to keep going */}
                {(() => {
                  var str = this.props.data.body.substring(0,140) + '...'; return str;
                })()}
                </div>
                <div className="middle-gravatar">
                  <img src={this.props.data.user.avatar_url} className="fix-img" />
                </div>
                <div className="middle-user">
                  <a href={this.props.data.user.url}>
                    @{this.props.data.user.login}
                  </a>
                </div>
                <div className="middle-gravatar">
                 ( label )
                </div>
            </div>
          <div className="bottom"></div>
        </section>
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
