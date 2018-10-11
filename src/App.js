import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import articles from './data/data.json';

class App extends Component {

  render() {
    console.log(articles);
    return (
      <div className="App">
        <Header/>
        {
          articles.map((article, key) => {
            return (
              <Article 
                title={article.title}
                date={article.date}
                text={article.text}
                img1={article.img1}
                img2={article.img2}
                key={key} />
            )    
          })
        }
      </div>
    );
  }
}

export default App;
