import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl'

class Services extends React.Component {
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
        id="services"
        className={`${this.props.article === 'services' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">
          <FormattedMessage id="services-title" />
        </h2>
        <FormattedHTMLMessage id="services" />
        <ul>
          <li>
            <FormattedMessage id="services_1" />
          </li>
          <li>
            <FormattedMessage id="services_2" />
          </li>
          <li>
            <FormattedMessage id="services_3" />
          </li>
          <li>
            <FormattedMessage id="services_4" />
          </li>
          <li>
            <FormattedMessage id="services_5" />
          </li>
          <li>
            <FormattedMessage id="services_6" />
          </li>
          <li>
            <FormattedMessage id="services_7" />
          </li>
          <li>
            <FormattedMessage id="services_8" />
          </li>
          <li>
            <FormattedMessage id="services_9" />
          </li>
          <li>
            <FormattedMessage id="services_10" />
          </li>
        </ul>
        {close}
      </article>
    )
  }
}

export default Services
