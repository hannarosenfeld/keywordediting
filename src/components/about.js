import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'
import { graphql, StaticQuery } from 'gatsby'

import Img from 'gatsby-image'

class About extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )
    return (
      <StaticQuery
        query={aboutPhotosQuery}
        render={data => (
          <article
            id="about"
            className={`${this.props.article === 'about' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">
              <FormattedMessage id="about-title" />
            </h2>
            <p>
              <FormattedHTMLMessage id="about" />
            </p>
            <div>
              <span className="owen">
                <Img
                  fluid={data.owen.childImageSharp.fluid}
                  style={{
                    width: '300px',
                    float: 'left',
                    marginRight: '20px',
                  }}
                />
                <FormattedHTMLMessage
                  id="owen"
                  style={{
                    float: 'right',
                  }}
                />
              </span>
            </div>
            <div class="container">
              <span className="carolina">
                <Img
                  fluid={data.carolina.childImageSharp.fluid}
                  style={{
                    width: '300px',
                    float: 'left',
                    marginRight: '20px',
                  }}
                />
                <FormattedHTMLMessage
                  id="carolina"
                  style={{
                    float: 'right',
                  }}
                />
              </span>
            </div>
            {close}
          </article>
        )}
      />
    )
  }
}

export default About

export const aboutPhotosQuery = graphql`
  query aboutPhotosQuery {
    owen: file(relativePath: { eq: "Owen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carolina: file(relativePath: { eq: "Carolina.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
