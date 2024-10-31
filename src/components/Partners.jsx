import React from 'react'
import '../styles/Partner.css'

function Partners(props) {
  return (
    <div className="partner-list">
        {
            props.data.map((item, index) => {
                return (
                    <div className="kartu-partner" key={index}>
                        <img src={item.image}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Partners
