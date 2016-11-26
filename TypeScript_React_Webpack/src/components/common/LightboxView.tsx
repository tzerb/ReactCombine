import React, {PropTypes} from 'react';
let Lightbox = require('react-image-lightbox');
 
let images :any[] = [
];  

export interface LightboxViewProps
{
    pictures : any[];
}

export interface LightboxViewState
{
    index?:number;
    isOpen?:boolean;
}

export class LightboxView extends React.Component<LightboxViewProps, LightboxViewState>  {
  constructor(props : LightboxViewProps, context : any) {
    super(props, context);
    for(let i=0; i<this.props.pictures.length; i++)
    {
        images.push(this.props.pictures[i].src);
    }
    
    this.state = {
            index: 0,
            isOpen: false        
    };

    this.openLightbox = this.openLightbox.bind(this);
  }

    openLightbox() {
        this.setState({ isOpen: true });
    }
    closeLightbox() {
        this.setState({ isOpen: false });
    }
    moveNext() {
        this.setState({ index: (this.state.index + 1) % images.length });
    }
    movePrev() {
        this.setState({ index: (this.state.index + images.length - 1) % images.length });
    }

  render() {
    var lightbox:any;
    if (this.state.isOpen) {
        lightbox = (
            <Lightbox
                mainSrc={images[this.state.index]}
                nextSrc={images[(this.state.index + 1) % images.length]}
                prevSrc={images[(this.state.index + images.length - 1) % images.length]}

                onCloseRequest={this.closeLightbox}
                onMovePrevRequest={this.movePrev}
                onMoveNextRequest={this.moveNext}
            />
        );
    }

    return (
        <div>
            <button type="button" className="btn btn-primary btn-sm" onClick={this.openLightbox}>Open Images in Lightbox</button>
            {lightbox}
        </div>
    );

  }
}

export default LightboxView;