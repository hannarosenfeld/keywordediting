import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import pic02 from '../images/pic02.jpg'
import _DSC1498 from '../images/_DSC1498.jpg'
import carolina from '../images/carolina.jpg'
import _DSC1535 from '../images/_DSC1535.jpg'

class Main extends React.Component {
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
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>

          <p>
            <FormattedMessage id="intro" values={{ br: <br /> }} />
          </p>
          <span className="_DSC1535">
            <img src={_DSC1535} alt="" width="100%" height="auto" />
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}>
          <h2 className="major">About Us</h2>
          <span className="owen">
            <img src={_DSC1498} alt="" width="100%" height="auto" />
          </span>
          <span className="carolina">
            <img src={carolina} alt="" width="100%" height="auto" />
          </span>
          <p>
            <FormattedMessage id="about" values={{ br: <br /> }} />
          </p>
          {close}
        </article>

        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
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

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
