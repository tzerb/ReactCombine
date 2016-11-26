import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ApiSelector from '../../api/ApiSelector';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SvgIcon from 'material-ui/SvgIcon';

const DeleteForever = (props) => (
  <SvgIcon {...props}>
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
  </SvgIcon>
);

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

    imageClicked()
    {
        alert('imageClicked');
    }

    deleteClicked()
    {
        alert('deleteClicked');
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
                    actionIcon={<IconButton onClick={this.deleteClicked}><DeleteForever color="rgb(220, 220, 220)" /></IconButton>}
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