import React, { Component } from 'react';

class Title extends React.Component
{
    render()
    {
        return(
        
            <h1 className="Montserrat-bold">{this.props.title}</h1>
        );
    }


}

export default Title;