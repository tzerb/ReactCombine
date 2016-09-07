import * as React from 'react';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange300, deepOrange500, cyan500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';

import {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

 const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

function handleChange() {
  alert('handleChange');
}

const style = {
  display: 'inline-block',
  margin: '0px 16px 16px 16px',
  textAlign: 'right'
};

const subAppBarStyle = {
  backgroundColor: 'white',
  color: cyan500,
  fontFamily: 'Roboto, sans-serif'
};


export class LoginInfo{
  userName : string;
}

export interface HeaderProps {
  loading: boolean;
  loggedOn: boolean;
  loginInfo? : LoginInfo;
  onLogin : any;
}

export interface HeaderState {
  menuOpen?: boolean;
  anchorEl? : any;
}

export class Header extends React.Component<HeaderProps, HeaderState>{
  constructor(props : HeaderProps, context : any)
  {
    super(props, context);
    this.state = {
      menuOpen : false
    };

    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

  }

  handleRequestClose(event : any)
  {
    this.setState({ 
      menuOpen : false,
      anchorEl: null
    });
  }

  onLeftIconButtonTouchTap(event : any) {
    event.preventDefault();
    this.setState({ 
      menuOpen : true,
      anchorEl: event.currentTarget
    });
  }

  render() 
  {
    let rightIcon = <div/>;
    if (this.props.loginInfo.userName.length > 0)
      rightIcon = <FlatButton label={this.props.loginInfo.userName} />;
    else  
      rightIcon = <FlatButton label="Log In" onClick={this.props.onLogin} />;  

      return (
        <div>
        <div>
          <AppBar
            onLeftIconButtonTouchTap = {this.onLeftIconButtonTouchTap}
            iconElementRight={rightIcon}
            title={<Link to="/" className="headerLink">Waypoint Editor</Link>}
              />

          <Popover style={style} 
              open={this.state.menuOpen} 
              onRequestClose={this.handleRequestClose}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}          
          > 
            <Paper zDepth={4} >
              <Menu>
                <MenuItem primaryText="Home"  containerElement={<Link to="/"/>}  onClick={this.handleRequestClose} />
                <MenuItem primaryText="Trips" containerElement={<Link to="/trips"/>}  onClick={this.handleRequestClose} />
                <MenuItem primaryText="About"  containerElement={<Link to="/about"/>}  onClick={this.handleRequestClose} />
              </Menu>
            </Paper>
          </Popover>
        </div>
        <Divider />
        <div style={subAppBarStyle} >{this.props.loginInfo.userName} </div>
        <Divider />
        </div>
      );
  }
}
/*
        {
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }        
*/
//Pull in the React Router context so router is available on this.context.router.


// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Header;
