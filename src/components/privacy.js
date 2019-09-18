import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

class Privacy extends React.Component {
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
      <article
        id="privacy"
        className={`${this.props.article === 'privacy' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">
          <FormattedMessage id="privacy-title" />
        </h2>
        <FormattedHTMLMessage id="privacy-statement" />
        {close}
      </article>
    )
  }
}

export default Privacy
