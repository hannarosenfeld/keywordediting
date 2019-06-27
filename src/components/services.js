import React from 'react'

function ServicesPage(props) {
  return (
    <article
      id="services"
      className={`${this.props.article === 'services' ? 'active' : ''} ${
        this.props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Services</h2>
      <FormattedMessage id="services" values={{ br: <br /> }} />
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

export default ServicesPage
