import { useRef, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import List from './components/List/List';
import Listitem from './components/Listitem/Listitem';
import Wrapper from './ui/Wrapper/Wrapper';

const App = () => {
  const searchCountryRef = useRef('');
  const [univers,setUnivers] = useState([]);
  const api = 'http://universities.hipolabs.com/search?country=';


 const searchUniversClickHandler = () => {
    const countryKey = searchCountryRef.current.value
    if(countryKey)  {
      fetch(api + countryKey)
      .then(data => data.json())
      .then(univers => setUnivers(univers))
    }
 }

  return (
    <Wrapper>
      <Card className='header'>
        <Input propsRef={searchCountryRef} />
        <Button onClick={searchUniversClickHandler}> search universities </Button>
      </Card>

        <List className='container'> 
          { univers.map((univer,index) => {
            return (
              <Listitem className='list-item ' key={index}>
               country:  {univer.country} <br />
               web-page: {univer.web_pages} <br />
               alpha-code: {univer.alpha_two_code} <br />
               domain: {univer.domains[0]}
              </Listitem>
            )
          })}
        </List>

    </Wrapper>
  )
}

export default App