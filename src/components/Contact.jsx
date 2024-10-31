import React from 'react'
import '../styles/Contact.css'
import { contactSection } from '../data/ContactSection'
import parse from 'html-react-parser'
function Contact() {
  return (
    <div id="contact">
        <div className="wrapper">
            <div className="footer">
                {
                    contactSection.map((item, index) => {
                        return (
                            <div className="footer-section" key={index}>
                                {parse(item.content)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Contact
