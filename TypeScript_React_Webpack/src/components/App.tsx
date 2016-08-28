// This component handles the App template used on every page.
import * as React from 'react';
import {PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {bindActionCreators} from 'redux';

import Header from './common/Header';
import * as loginActions from '../actions/loginActions';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export interface AppProps {
  loading: boolean;
  children : any; // TODO TZ
  actions?: any;
  loginInfo? : any;

}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {

  constructor(prop : AppProps, context: any)
  {
    super(prop, context);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    this.props.actions.login();
  }

  render() {
    return (      
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container-fluid">
          <Header
            loading={this.props.loading}
            loggedOn={false}
            onLogin={this.onLogin}
            loginInfo={this.props.loginInfo}
          />
          {this.props.children}
        </div>      
      </MuiThemeProvider> 
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   loading: PropTypes.bool.isRequired
// };

function mapStateToProps(state: any, ownProps:any) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    loginInfo : state.logins
  };
}
function mapDispatchToProps(dispatch:any) {
  return {
      actions: bindActionCreators(loginActions as any, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
