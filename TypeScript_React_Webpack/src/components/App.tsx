// This component handles the App template used on every page.
import * as React from 'react';
import {PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {bindActionCreators} from 'redux';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';

import Header from './common/Header';
import * as loginActions from '../actions/loginActions';
import * as alerterActions from '../actions/alerterActions';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export interface AppProps {
  loading: boolean;
  children : any; // TODO TZ
  actions?: any;
  alerterActions? : any;
  loginInfo? : any;
  errors : any [];
  alerter : any [];
}

export interface AppState {
  alerterOpen : boolean,
  alerterMessage? : string
}

class App extends React.Component<AppProps, AppState> {

  constructor(prop : AppProps, context: any)
  {
    super(prop, context);
    this.onLogin = this.onLogin.bind(this);
    //this.popLastAlert = this.popLastAlert.bind(this);

    this.addAlertSuccess = this.addAlertSuccess.bind(this);
    this.addAlertError = this.addAlertError.bind(this);
    this.popAlert = this.popAlert.bind(this);
    this.popAlert2 = this.popAlert2.bind(this);

      this.state = {
        alerterOpen : false,
        alerterMessage : ''
      };
 
  }

  componentWillReceiveProps(nextProps:AppProps) {
    this.alerterMessage(nextProps.alerter);
  }

  onLogin() {
    this.props.actions.login();
  }

  addAlertSuccess(event : any)
  {
    this.props.alerterActions.alertSuccess('success');
  }

  addAlertError(event : any)
  {
    this.props.alerterActions.alertError('error');
  }

  popAlert(event : any)
  {
    this.props.alerterActions.alertPoplast();
  }

  popAlert2(event : any)
  {
    setTimeout(() => {
      this.props.alerterActions.alertPoplast(); 
      this.setState({
          alerterOpen:false,             
          alerterMessage: ''
      });
    }, 100);
    
  }


  alerterMessage(alerter : any)
  {
    if (!this.state.alerterOpen)
    {
      if (alerter.length > 0)
      {
        this.setState({
            alerterOpen:true,
            alerterMessage:alerter[0].msg
          });
      }
    }
  }

  render() {
    return (      
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container-fluid">
          <FlatButton label="success" primary={true} onTouchTap={this.addAlertSuccess} />
          <FlatButton label="error" primary={true} onTouchTap={this.addAlertError} />
          <FlatButton label="pop" primary={true} onTouchTap={this.popAlert} />
        
          <Header
            loading={this.props.loading}
            loggedOn={false}
            onLogin={this.onLogin}
            loginInfo={this.props.loginInfo}
          />
          {this.props.children}
          <div className="container-fluid">
            {this.props.alerter.length}
            {this.props.errors}
            <Snackbar
              open={this.state.alerterOpen}
              message={this.state.alerterMessage}
              autoHideDuration={2000}
              onRequestClose={this.popAlert2}/>  
            
          </div>          

                  
        </div>      

      </MuiThemeProvider> 
    );
  }
}
/*
*/
// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   loading: PropTypes.bool.isRequired
// };

function mapStateToProps(state: any, ownProps:any) {
  return {
    loading : state.ajaxCallsInProgress > 0,
    loginInfo : state.logins,
    errors : state.errors,
    alerter : state.alerter 
  };
}
function mapDispatchToProps(dispatch:any) {
  return {
      actions: bindActionCreators(loginActions as any, dispatch),
      alerterActions: bindActionCreators(alerterActions as any, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
