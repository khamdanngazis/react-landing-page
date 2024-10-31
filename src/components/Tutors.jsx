import React from 'react'

function Tutors(props) {
  return (
    <div className="tutor-list">
        {
            props.data.map((item, index) => {
                return (
                    <div className="kartu-tutor" key={index}>
                        <img src={item.image}/>
                        <p>{item.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tutors
