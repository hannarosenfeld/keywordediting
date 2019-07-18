import React from 'react'
import Layout from '../components/layout'

import { withIntl } from 'gatsby-plugin-intl'

import Header from '../components/header'
import Footer from '../components/footer'

import Intro from '../components/intro'
import About from '../components/about'
import Services from '../components/services'
import Contact from '../components/contact'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      <Layout location={this.state.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <div
              ref={this.state.setWrapperRef}
              id="main"
              style={
                this.state.timeout ? { display: 'flex' } : { display: 'none' }
              }
            >
              <Intro
                articleTimeout={this.state.articleTimeout}
                article={this.state.article}
                onCloseArticle={this.handleCloseArticle}
              />
              <About
                articleTimeout={this.state.articleTimeout}
                article={this.state.article}
                onCloseArticle={this.handleCloseArticle}
              />
              <Services
                articleTimeout={this.state.articleTimeout}
                article={this.state.article}
                onCloseArticle={this.handleCloseArticle}
              />
              <Contact
                articleTimeout={this.state.articleTimeout}
                article={this.state.article}
                onCloseArticle={this.handleCloseArticle}
              />
            </div>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    )
  }
}

export default withIntl(IndexPage)
