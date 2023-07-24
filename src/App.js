import './App.css';
import { useEffect, useState } from 'react';
import Person from './components/Person';
import PersonDetails from './components/PersonDetails';

function App() {
  // Any state variables we want React to keep track of and react to
  const [people, setPeople] = useState([]); // All People from the API
  const [filteredPeople, setFilteredPeople] = useState([]); // The filtered list of people

  const [nameFilter, setNameFilter] = useState('');
  const [usernameFilter, setUsernameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  const [selectedPerson, setSelectedPerson] = useState();

  const onPersonClicked = (person) =>{
    console.log("You got a person!");
    console.log(person);
    setSelectedPerson(person);
    return <PersonDetails selectedPerson={person} />
  }

  useEffect(() => {
    console.log(`Name: ${nameFilter} Username: ${usernameFilter} Age: ${ageFilter}`)
    var tempPeople = people;
    if(nameFilter && nameFilter != ''){
      tempPeople = tempPeople.filter((person) => { 
          return person.name.first.toUpperCase().includes(nameFilter.toUpperCase()) || 
            person.name.last.toUpperCase().includes(nameFilter.toUpperCase())}
        );
    }

    if(usernameFilter && usernameFilter != ''){
      tempPeople = tempPeople.filter((person) => { 
          return person.login.username.toUpperCase().includes(usernameFilter.toUpperCase())}
        );
    }

    if(ageFilter && ageFilter != ''){
      tempPeople = tempPeople.filter((person) => { 
        return person.dob.age == ageFilter
        }
      );
    }
    setFilteredPeople(tempPeople);
  }, [nameFilter, usernameFilter, ageFilter]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var url = `https://randomuser.me/api/?results=50`;
    fetch(url)
      .then(r => r.json(0))
      .then(data => {
        setPeople(data.results);
        setFilteredPeople(data.results);
      }).catch(e => console.log(e));
  }
  if(selectedPerson){
    return (
      <>
        <PersonDetails selectedPerson={selectedPerson}/>
        {/* <button onClick={setSelectedPerson(null)}>Back</button> */}
      </>
    )
  }else{
    return(
      <div className='App'>
        <h1><b>Filters</b></h1>
        <div id='filter'>
          <div className='filters'>
            <label>Name: </label>
            <input type='text' placeholder='name filter'
              value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
          </div>
          <div className='filters'>
            <label>Username: </label>
            <input type='text' placeholder='username filter'
              value={usernameFilter} onChange={(e) => setUsernameFilter(e.target.value)} />
          </div>
          <div className='filters'>
            <label> Age: </label>
            <input type='text' placeholder='age filter'
              value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)} />
          </div>
        </div>
        <br />
        <div id='peeps'>
      {
        filteredPeople?.map((person) => (
          <Person person={person} onClick={onPersonClicked} />
        ))
      }
      </div>
      </div>
    )
  };
}

export default App;