import React from 'react'

const Person = ({person, onClick}) => {
  return (
    <div key={person.login.uuid} className='personBox' onClick={() => onClick(person)}>
      
            <div id='image'>
            <img src = {person.picture.medium}/>
            </div>
            <div className='info'>
              {person.name.first} {person.name.last}
            </div>
            <div className='info'>
              <label>Username: </label>
              {person.login.username}
            </div>
            <div className='info'>
            <label>Gender: </label>
              {person.gender}
            </div>
            <div className='info'>
            <label>Age: </label>
              {person.dob.age}
            </div>
          </div>
  )
}

export default Person