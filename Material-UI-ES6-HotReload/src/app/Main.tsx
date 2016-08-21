/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import * as React from 'react';
import {Component} from 'react';
import * as RaisedButton from 'material-ui/RaisedButton';
import * as Dialog from 'material-ui/Dialog';
// import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Greeter} from './Greeter';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  // palette: {
  //   accent1Color: deepOrange500,
  // },
});

export interface MainProps {  }
export interface MainState { open:boolean; }

class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps, context: any) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <div>
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleRequestClose}
      />   
      </div>   
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          
        </div>
      </MuiThemeProvider>
    );
  }
}
/*
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            abc123
          </Dialog>
          <h1>Material-UI</h1>
          <h2>Example Project2</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />

*/
export default Main;
