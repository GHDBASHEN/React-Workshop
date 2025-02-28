import React from 'react'
// import Header from './components/Header'
// import SlideBar from './components/SlideBar'
// import Article from './components/Article'
// import ArticleWithTitle from './components/ArticleWithTitle.jsx'
import UseData from './components/UseData.jsx'


const data = [
  {
    title: 'Article 1',
    content: 'This is the content of article 1',
  },
  {
    title: 'Article 2',
    content: 'This is the content of article 2',
  },
  {
    title: 'Article 3',
    content: 'This is the content of article 3',
  },
   {
    title: 'Article 4',
    content: 'This is the content of article 4',
  }]

  

export default function App() {
  return (
    <>

      {/* <Header />
      <section className="container">
        <SlideBar /> */}
        <UseData />
        {/* <div className="article-section">
          <Article arti="Article Section" />
          <div className="articles">
            {data.map((item) => {
              return <ArticleWithTitle title={item.title} para={item.content} />
            })}
          </div>
        </div> */}
      {/* </section> */}
    </>
  )
}
