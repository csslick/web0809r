import React, { Component } from 'react';

class Article extends Component {
    state = {  }
    render() { 
        return (  
            <section className='container'>
                <header className="row">
                    <h1 className='col-sm-8'>{this.props.title}</h1>
                    <time className='col-sm-4 text-right time'>{this.props.date}</time>
                </header>
                <div className="card">
                    <div className="card-body">
                        <p className="text">{this.props.text}</p>
                        <img src={this.props.img1} width="100%" alt="image"/>
                    </div>
                </div>
            </section>     
        );
    }
}

export default Article;