import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import '../styles/Home.css'
import '../styles/Tutors.css'
import { homeSection } from '../data/HomeSection'
import { courseSection } from '../data/CourseSection'
import { tutorsSection, tutorsList } from '../data/tutorsSection'
import { partnersSection, partnersList } from '../data/PartnersSection'
import parse from 'html-react-parser'

function Home() {
  return (
    <>
        <Navbar/>
        <div className="wrapper">
            <section id="home">
                <img src={homeSection.image}/>
                <div className="kolom">
                    {parse(homeSection.content)}
                </div>
            </section>

            <section id="courses">
                <div className="kolom">
                    {parse(courseSection.content)}
                </div>
                <img src={courseSection.image}/>
            </section>
            <section id="tutors">
                <div className="tengah">
                    <div className="kolom">
                        {parse(tutorsSection.content)}
                    </div>
                    <Tutors data={tutorsList} />
                    
                </div>
            </section>
            <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                        {parse(partnersSection.content)}
                    </div>

                    <Partners data={partnersList} />
                </div>
            </section>
        </div>
        <Contact />
        <Footer/>
    </>
  )
}

export default Home
