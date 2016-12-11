import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ApiSelector from '../../api/ApiSelector';
import PictureGridItem from './PictureGridItem';

import GridList from 'material-ui/GridList';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = { 
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

export interface PictureSingleLineGridProps
{
    pictures : any[];
}

export interface PictureSingleLineGridState
{
    menuOpen? : boolean;
    anchorEl? : any; 
    menuTargetKey? : number;
    activePicture? : any;
}

export class PictureSingleLineGrid extends React.Component<PictureSingleLineGridProps, PictureSingleLineGridState>  {
    constructor(props:PictureSingleLineGridProps, context : any)    {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.deleteClicked = this.deleteClicked.bind(this);
        this.editClicked = this.editClicked.bind(this);
        this.menuClickedX = this.menuClickedX.bind(this);

        this.state = {
            menuOpen: false 
        };

    }

    handleRequestClose()
    {
        this.setState( {menuOpen : false} );
    }

    editClicked(a:any) {
        this.setState( {menuOpen : false} );
        alert('edit ' + this.state.activePicture.pictureId);
    }

    deleteClicked(a:any) {
        this.setState( {menuOpen : false} );
        alert('delete ' + this.state.activePicture.pictureId);
    }

    menuClickedX(pic:any, el:any)
    {
        this.setState( {activePicture : pic, menuOpen : true, anchorEl : el} );
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList style={styles.gridList} cols={2.2}>
                {this.props.pictures.map((pic) => (
                    <PictureGridItem key={pic.pictureId } picture={pic} onMenu={this.menuClickedX}/>
                ))}
                </GridList>

                <Popover
                    open={this.state.menuOpen}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >                
                    <Menu>
                        <MenuItem value={1} primaryText="Edit" onClick={this.editClicked} />
                        <MenuItem value={2} primaryText="Delete" onClick={this.deleteClicked} />
                    </Menu>                
                </Popover>
            </div>
          )
    }
}

export default PictureSingleLineGrid;