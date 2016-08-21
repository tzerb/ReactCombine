import * as React from "react";

export interface HelloProps { compiler: string; framework: string; tester?: string }
import {Greeter} from './Greeter';

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        var g = new Greeter("world");
        return <h1>HelloX from {this.props.compiler} and {this.props.framework}! Also {g.greet()}</h1>;
    }
}