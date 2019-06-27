import React from 'react'

function IntroPage(props) {
  return (
    <article
      id="about"
      className={`${this.props.article === 'about' ? 'active' : ''} ${
        this.props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
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
  )
}

export default IntroPage
