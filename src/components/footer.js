import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <button
      style={{ boxShadow: 'none' }}
      onClick={() => {
        props.onOpenArticle('privacy')
      }}
    >
      privacy
    </button>
  </footer>
)

Footer.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Footer
