import React, { Component } from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props){
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    name: "John Steinbeck"
                },
                {
                    id: 2,
                    name: "Drew Zimmerman"
                },
                {
                    id: 3,
                    name: "J.K. Rowling"

                }

            ]


        };
    }
    
    
    render() {
    return (
        <div className="Authors">
            <div className="lander">
                    <AuthorsDisplay authors = {this.state.authors} />
        </div>
        </div>

    );
    }
}
