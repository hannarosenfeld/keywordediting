import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import _DSC1498 from '../images/_DSC1498.jpg'
import carolina from '../images/carolina.jpg'
import _DSC1535 from '../images/_DSC1535.jpg'

import IntroPage from 'intro'
import AboutPage from 'about'
import ServicesPage from 'services'
import ContactPage from 'contact'

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
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <IntroPage />
        <AboutPage />
        <ServicesPage />
        <ContactPage />
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
