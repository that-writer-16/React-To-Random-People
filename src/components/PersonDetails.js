import React from 'react'

const PersonDetails = ({selectedPerson}) => {
      console.log("I'm here");
    console.log(selectedPerson);
  return (
    <>
    <div className='usersBox'>
        <p className='info'>
            {selectedPerson.name.first} {selectedPerson.name.last}
        </p>
        <div>
            <img src = {selectedPerson.picture.large}/>
        </div>
        <div className='info'>
          <p>
            Username: {selectedPerson.login.username}
          </p>
          <p>
            Email: {selectedPerson.email}
          </p>
        </div>
        <div className='info'>
          <p>
            Cell Phone: {selectedPerson.cell}
          </p>
          <p>
            Phone: {selectedPerson.phone}
          </p>  
        </div>
        <div className='info'>
          <p>
            Address: {selectedPerson.location.street.number}  {selectedPerson.location.street.name} 
            {selectedPerson.location.city}, {selectedPerson.location.state}
            {selectedPerson.location.postcode}
          </p>
        </div>
        <p  className='info'>Gender: {selectedPerson.gender}</p>
    </div>
    </>
  )
}

export default PersonDetails