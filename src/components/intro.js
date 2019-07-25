import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'
import { graphql, StaticQuery } from 'gatsby'

import Img from 'gatsby-image'

class Intro extends React.Component {
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
        query={introPhotosQuery}
        render={data => (
          <article
            id="intro"
            className={`${this.props.article === 'intro' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">
              <FormattedMessage id="intro-title" />
            </h2>
            <span className="Owen_and_Carolina">
              <Img
                fluid={data.owenAndCarolina.childImageSharp.fluid}
                style={{
                  width: '300px',
                  float: 'right',
                  marginLeft: '10px',
                  marginTop: '-50px',
                }}
              />
              <FormattedHTMLMessage
                id="intro"
                style={{
                  float: 'left',
                }}
              />
            </span>
            {close}
          </article>
        )}
      />
    )
  }
}

export default Intro

export const introPhotosQuery = graphql`
  query introPhotosQuery {
    owenAndCarolina: file(relativePath: { eq: "Owen_and_Carolina.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
