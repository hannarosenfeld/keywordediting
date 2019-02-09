import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

          <h2 className="major">Intro</h2>

          <span className="image main"><img src={pic01} alt="" /></span>

	  <p>Keyword is a specialist writing, editing and translation service dedicated to the preparation of a broad range of scientific, medical and veterinary texts.</p>

          <p>Our team consists of two biomedical language professionals with distinct but complementary research backgrounds; a native English-speaker with over a decade’s experience in the editing and translation (ES>EN) of scientific and medical texts, and a native Spanish-speaker with extensive scientific writing experience and over 2 decade’s research experience in academia and industry.</p>

          <p>We write, edit and translate texts for medical, veterinary and scientific researchers, biotechnology and pharmaceutical companies, clinical research organizations and health sciences publishing groups. We work as a team, combining our distinct and complementary expertise to help you accomplish your publication and funding objectives.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>All writing, editing and translation are performed by Owen Howard and/or Carolina Isiegas. Your text will therefore be handled by dedicated language professionals with subject-area expertise and a strong motivation to maintain a high level of quality in their work.</p>

          <p>Owen Howard, Ph.D.</p>

          <p>Since 2010 Owen has worked as a full-time scientific writer, editor, and translator (ES>EN). In that time he has helped authors to successfully navigate the pitfalls of the publishing process and to publish their papers in leading journals in a wide variety of research fields. Owen has extensive experience working with non-native English-speaking authors and has edited and translated manuscripts in a broad range of scientific disciplines. His editorial/translation expertise is complemented by a background in academic research in Ireland (National University of Ireland, Galway), the US (University of Pennsylvania) and Spain (Centro de Biología Molecular Severo Ochoa, Madrid). This training has provided him with hands-on investigative experience in many of the disciplines in which his clients work, as well as first-hand experience of the publishing process through writing and reviewing papers for peer-reviewed journals.</p>

          <a href="https://www.linkedin.com/in/owenhowardediting/">linkedin owen</a>

          <p>Carolina Isiegas, Ph.D.</p>

          <p>Carolina holds a Bachelor´s degree in Veterinary Sciences (Universidad de Zaragoza) and a Ph.D in Biological Sciences (Universidad Autónoma de Madrid). She worked for seven years as a Postdoctoral Researcher and Research Associate at the University of Pennsylvania, Philadelphia. On returning to Spain she acquired valuable experience in industry while working at the biotech start-up Proretina Therapeutics (Madrid), and in the field of technology transfer during her time as innovation manager at the Aragon Institute for Health Sciences (Zaragoza). A return to academia saw her move to France to direct her own research group at the University of Nantes specializing in translational research into gene therapy for retinal dystrophies. In 2018 Carolina joined Keyword, where her strong writing skills, extensive publication record (add hyperlink: https://www.ncbi.nlm.nih.gov/pubmed/?term=Isiegas%20C%5BAuthor%5D&cauthor=true&cauthor_uid=17151273), and wide-ranging scientific expertise acquired over 2 decades working internationally in both research and industry make her an invaluable asset.</p>

          <p>HYPERLINK: https://www.linkedin.com/in/carolinaisiegas/?locale=en_US</p>
          {close}
        </article>
        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Whether you wish to submit a research paper for publication, draw up a grant proposal, or translate an existing article to reach a wider English-speaking readership, we can provide you with a professionally polished and formatted text specifically tailored for your intended audience.</p>
          <p>We write and provide editorial support and translation services for a wide range of medical and scientific fields and document types, including:</p>
          <ul>
            <li>journal articles </li>
            <li>cover letters and responses to reviewers</li>
            <li>regulatory documents</li>
            <li>grant proposals</li>
            <li>scientific activity reports</li>
            <li>standard operating procedures (SOPs)</li>
            <li>veterinary and medical textbooks</li>
            <li>posters</li>
            <li>conference proceedings</li>
	    <li>websites</li>
          </ul>
          {close}
        </article>																							        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
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
