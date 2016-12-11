import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SvgIcon from 'material-ui/SvgIcon';
import {GridTile} from 'material-ui/GridList';

import ApiSelector from '../../api/ApiSelector';

import MenuIcon from '../svg/Menu'

export interface PictureGridItemProps
{
    key:number;
    picture: any;
    onMenu: any;
}

export interface PictureGridItemState
{
    element?:any;
}

export class PictureGridItem extends React.Component<PictureGridItemProps, PictureGridItemState>  {

    constructor(props:PictureGridItemProps, context : any)    {
        super(props, context);

        this.state = {element:null};
        this.onMenuClicked = this.onMenuClicked.bind(this);
    }

    onMenuClicked(event:any)
    {
        this.props.onMenu(this.props.picture, event.currentTarget);
    }

    render() {
        var iconButton = <IconButton onClick={this.onMenuClicked}><MenuIcon color="rgb(220, 220, 220)" /></IconButton>
        return (
            <GridTile 
                title={this.props.picture.description}
                actionIcon={iconButton}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                <img src={ApiSelector.Picture(this.props.picture.pictureId)} />
            </GridTile>
        );
    }

}

export default PictureGridItem;