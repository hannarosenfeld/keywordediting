import React from 'react'

function IntroPage(props) {
  return (
    <article
      id="intro"
      className={`${this.props.article === 'intro' ? 'active' : ''} ${
        this.props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Intro</h2>

      <p>
        <FormattedMessage id="intro" values={{ br: <br /> }} />
      </p>
      <span className="_DSC1535">
        <img src={_DSC1535} alt="" width="100%" height="auto" />
      </span>
      {close}
    </article>
  )
}

export default IntroPage
