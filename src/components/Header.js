import React from 'react'
import PropTypes from 'prop-types'
import Language from './language'
import { FormattedMessage } from 'react-intl'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Keywordediting</h1>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}>
            <FormattedMessage id="introBtn" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}>
            <FormattedMessage id="aboutBtn" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('services')
            }}>
            <FormattedMessage id="servicesBtn" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}>
            <FormattedMessage id="contactBtn" />
          </button>
        </li>
        <li>
          <Language />
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
