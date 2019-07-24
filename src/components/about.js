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
          debugger
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
              <FormattedMessage
                id="about"
                values={({ br: <br /> }, { b: <b /> })}
              />
            </p>
            <span className="owen">
              <Img fluid={data.owen.childImageSharp.fluid} />
            </span>
            <p>
              <FormattedHTMLMessage id="owen" />
            </p>
            <span className="carolina">
              <Img fluid={data.carolina.childImageSharp.fluid} />
            </span>
            <p>
              <FormattedHTMLMessage id="carolina" />
            </p>
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
