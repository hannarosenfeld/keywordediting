import React from 'react'
import { navigateTo } from 'gatsby-link'
import { FormattedMessage } from 'gatsby-plugin-intl'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

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
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="last-name"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="last-name" onChange={this.handleChange} />
            </label>
          </p>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              onChange={this.handleChange}
            />
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
