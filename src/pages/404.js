import React from 'react'
import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO title={`404: ${intl.formatMessage({ id: 'title' })}`} />
    <h1>
      <FormattedHTMLMessage id="notfound" />
    </h1>
    <p>
      <FormattedHTMLMessage id="notfound_p" />
    </p>
  </Layout>
)

export default injectIntl(NotFoundPage)
