

import React from 'react';
import  Modal from 'react-modal';

export interface AboutPageProps
{
}

export interface AboutPageState
{
}

export class AboutPage extends React.Component<AboutPageProps, AboutPageState>  {
  
  constructor(props : AboutPageProps, context : any) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return(
            <div>
                <h1>About</h1>
                <p>This site manages your fishing data.  Waypoints, pictures, catches, depth finders.</p>
            </div>
        );
  }
  
}

export default AboutPage;
