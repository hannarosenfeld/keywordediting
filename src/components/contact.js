import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

export default class Contact extends React.Component {
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
        id="contact"
        className={`${this.props.article === 'contact' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">
          <FormattedMessage id="contact-title" />
        </h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="last_name"
          action="/success/"
          enctype="application/x-www-form-urlencoded"
        >
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" />
          </div>
          <ul className="actions">
            <li>
              <button type="submit" className="special">
                Send Message
              </button>
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        {close}
      </article>
    )
  }
}
