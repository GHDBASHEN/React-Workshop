import React from 'react'
import Header from './components/Header'
import SlideBar from './components/SlideBar'
import Article from './components/Article'
import ArticleWithTitle from './components/ArticleWithTitle.jsx'


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
  }, {}]

export default function App() {
  return (
    <>
      <Header />
      <section className="container">
        <SlideBar />
        <div className="article-section">
          <Article arti="Article Section" />
          <div className="articles">
            <article>
              <ArticleWithTitle title="Article Title" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                bibendum, quam vitae ultricies rhoncus, velit elit volutpat
                libero, nec eleifend mi eros sed nunc. Nullam nec eros et tellus
                bibendum ultricies. Sed ut eros nec purus varius aliquam. Nullam
                nec eros et tellus bibendum ultricies. Sed ut eros nec purus
                varius aliquam."/>
            </article>
          

            <article>
            <ArticleWithTitle title="Article Title" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                bibendum, quam vitae ultricies rhoncus, velit elit volutpat
                libero, nec eleifend mi eros sed nunc. Nullam nec eros et tellus
                bibendum ultricies. Sed ut eros nec purus varius aliquam. Nullam
                nec eros et tellus bibendum ultricies. Sed ut eros nec purus
                varius aliquam."/>
            </article>
            <article>
            <ArticleWithTitle title="Article Title" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                bibendum, quam vitae ultricies rhoncus, velit elit volutpat
                libero, nec eleifend mi eros sed nunc. Nullam nec eros et tellus
                bibendum ultricies. Sed ut eros nec purus varius aliquam. Nullam
                nec eros et tellus bibendum ultricies. Sed ut eros nec purus
                varius aliquam."/>
            </article>
            <article>
            <ArticleWithTitle title="Article Title" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                bibendum, quam vitae ultricies rhoncus, velit elit volutpat
                libero, nec eleifend mi eros sed nunc. Nullam nec eros et tellus
                bibendum ultricies. Sed ut eros nec purus varius aliquam. Nullam
                nec eros et tellus bibendum ultricies. Sed ut eros nec purus
                varius aliquam."/>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
