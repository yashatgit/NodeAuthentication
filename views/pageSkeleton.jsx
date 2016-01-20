var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var DefaultLayout = React.createClass({
    render: function () {
        return (
            <html>
            <head>
                <title>{this.props.title || 'Node Authentication'}</title>
                <link type="text/css" rel="stylesheet" href="app.css"/>
                <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </head>
            <body>
            <div className="app">
                {this.props.children}
            </div>
            </body>
            </html>
        );
    }
});

module.exports = DefaultLayout;