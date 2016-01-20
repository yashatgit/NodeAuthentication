var React = require('react');
var DefaultLayout = require('./layouts/default');

import RaisedButton from 'material-ui/lib/raised-button';

var HelloMessage = React.createClass({
    render: function () {
        return (
            <DefaultLayout title={this.props.title}>
                <RaisedButton linkButton={true} href="/login" label="Local Login"/>
                <RaisedButton linkButton={true} href="/signup" label="Local Signup"/>
            </DefaultLayout>
        );
    }
});

module.exports = HelloMessage;