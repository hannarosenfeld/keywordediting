import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

import Language from './language'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-keyboard-o" />
    </div>
    <div className="content">
      <div className="inner">
        <Language />
        <h1>keyword editing</h1>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            <FormattedMessage id="introBtn" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            <FormattedMessage id="aboutBtn" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('services')
            }}
          >
            <FormattedMessage id="servicesBtn" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            <FormattedMessage id="contactBtn" />
          </button>
        </li>
        <li />
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
