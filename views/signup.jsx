var React = require('react');
var DefaultLayout = require('./layouts/default');

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

var HelloMessage = React.createClass({
    render: function () {
        return (
            <DefaultLayout title={this.props.title}>

                <TextField
                    hintText="Enter your email"
                    floatingLabelText="Email" />

                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password" />

                <RaisedButton linkButton={true} href="/login" label="Signup"/>

                <RaisedButton label="Login via Facebook" secondary={true} />
                <RaisedButton label="Login via Twitter" secondary={true} />
            </DefaultLayout>
        );
    }
});

module.exports = HelloMessage;