import React from 'react'
import PropTypes from 'prop-types'
import Language from './language'
import { FormattedMessage } from 'react-intl'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Keywordediting</h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}><FormattedMessage id="introBtn"/></a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}><FormattedMessage id="aboutBtn"/></a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}><FormattedMessage id="servicesBtn"/></a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}><FormattedMessage id="contactBtn"/></a></li>
                <li><Language /></li>
            </ul>
        </nav>

    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
