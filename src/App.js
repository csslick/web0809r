import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';

const articles = [
  { 
    title: '실습: 나비 이미지 자르기',
    date: '2018-00-00',
    text: 'text here...11',
    img1: 'https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    img2: 'http://placehold.it/100x100'
  },
  { 
    title: '과제: 서울타워를 주제로한 타이틀 배경',
    date: '2018-10-06',
    text: 'text here...22',
    img1: 'https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    img2: 'http://placehold.it/100x100'
  },
]

class App extends Component {
  render() {
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
