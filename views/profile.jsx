import React from 'react';
import _ from 'lodash';
import request from 'request';

import PageSkeleton from './pageSkeleton';
import Styles from 'material-ui/lib/styles';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

import Paper from 'material-ui/lib/paper';
import UserIcon from 'material-ui/lib/svg-icons/action/face';

//https://dribbble.com/shots/2145451--01-Compact-Login

module.exports = React.createClass({

  getUserItems: function (key, value) {
    return (
      <div className="user--item">
        <div className="key">{key}</div>
        <div className="label">{value}</div>
      </div>
    );
  },

  getUserCard: function (imageUrl, items) {
    var image;

    if (imageUrl) {

    } else {
      image = <UserIcon/>;
    }
    return (
      <Paper className="userCard" zDepth={2}>
        <div className="usr--img">{image}</div>
        <div className="usr--info">
          {
            items.map(function (itemComponents) {
              return itemComponents;
            })
          }
        </div>
      </Paper>
    );
  },

  render: function () {
    var that = this,
      user = that.props.user,
      title = 'Welcome!',
      getUserItems = that.getUserItems,
      userCards = [];

    if (!_.isEmpty(user.local)) {
      var userParams = user.local;

      userCards.push(that.getUserCard(null,
        [getUserItems('Id', user.id), getUserItems('Email', userParams.email), getUserItems('password', userParams.password)]
      ));
    }

    return (
      <PageSkeleton title={title}>
        <AppBar
          title={<span>{title}</span>}
          iconElementRight={<FlatButton linkButton={true} href="/logout" label="Logout" />}
          />

        <div className="container">{
          userCards.map(function (userCard) {
            return userCard;
          })
        }</div>
      </PageSkeleton>
    );
  }
});