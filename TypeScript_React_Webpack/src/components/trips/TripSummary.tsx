import React from 'react';

// small form of the trip view page
export interface TripSummaryProps
{
}

export interface TripSummaryState
{
}

export class TripSummary extends React.Component<TripSummaryProps, TripSummaryState>  {
  constructor(props : TripSummaryProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return(<div/>);
  }
}