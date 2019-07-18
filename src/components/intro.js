import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { graphql, StaticQuery } from 'gatsby'

import Img from 'gatsby-image'

class Intro extends React.Component {
  render() {
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
            <h2 className="major">Intro</h2>

            <p>
              <FormattedMessage id="intro" values={{ br: <br /> }} />
            </p>
            <span className="Owen_and_Carolina">
              <Img fluid={data.owenAndCarolina.childImageSharp.fluid} />
            </span>
            {this.props.close}
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
