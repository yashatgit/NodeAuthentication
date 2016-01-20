import React from 'react';
import request from 'request';

import PageSkeleton from './pageSkeleton';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import AddSVG from 'material-ui/lib/svg-icons/content/add';
import ClearSVG from 'material-ui/lib/svg-icons/content/clear';

import TextField from 'material-ui/lib/text-field';


//https://dribbble.com/shots/2145451--01-Compact-Login

module.exports = React.createClass({

  getFormContent: function (isLogin) {
    var labelText = isLogin ? 'Login' : 'Signup';

    return (
      <form action={isLogin ? '/login' : '/signup'} method="post" className="formContent">
        <input placeholder="Email" className="" name="email" />
        <input placeholder="Password" className="" name="password" type="password" />
        <button style={{'margin-top': '20px'}} type="submit" >Login</button>
      </form>
    );
  },

  render: function () {
    var that = this,
      props = that.props,
      isLogin = that.isLogin = props.isLogin,
      actionBtn, errorMessage;

    if (isLogin) {
      actionBtn = <a href="/signup" className="plusBtn">
        <FloatingActionButton className="redCol">
          <AddSVG />
        </FloatingActionButton>
      </a>;
    } else {
      actionBtn = <IconButton linkButton={true} href="/login" className="closeBtn"><i
        className="material-icons">clear</i></IconButton>;
    }

    if (props.message) {
      errorMessage = <div className="error">{props.message}</div>;
    }


    return (
      <PageSkeleton title={that.props.title}>

        <Card className={(isLogin ? 'login' : 'signup') + " card"}>
          <div className="ribbon">{isLogin ? 'LOGIN' : 'SIGNUP'}</div>
          {actionBtn}
          {errorMessage}
          {that.getFormContent(isLogin)}
        </Card>

      </PageSkeleton>
    );
  }
});