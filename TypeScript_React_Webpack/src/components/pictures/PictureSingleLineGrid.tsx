import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ApiSelector from '../../api/ApiSelector';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SvgIcon from 'material-ui/SvgIcon';

import DeleteForeverIcon from '../svg/DeleteForever'

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
}

export class PictureSingleLineGrid extends React.Component<PictureSingleLineGridProps, PictureSingleLineGridState>  {
    constructor(props:PictureSingleLineGridProps, context : any)    {
        super(props, context);

    }

    // TODO TZ delete also causes this to be called.  
    // I want to put up a full sized image when clicked 
    imageClicked()
    {
        //alert('imageClicked');
    }

    deleteClicked(event:any)
    {
        event.preventDefault();
        alert('deleteClicked3');
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList style={styles.gridList} cols={2.2}>
                {this.props.pictures.map((pic) => (
                    <GridTile 
                    onClick={this.imageClicked}
                    key={pic.pictureId}
                    title={pic.description}
                    actionIcon={<IconButton onClick={this.deleteClicked}><DeleteForeverIcon color="rgb(220, 220, 220)" /></IconButton>}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                    <img src={ApiSelector.Picture(pic.pictureId)} />
                    </GridTile>
                ))}
                </GridList>
            </div>
          )
    }
}

export default PictureSingleLineGrid;