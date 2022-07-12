import { useRef } from 'react/cjs/react.production.min';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import List from './components/List/List';
import Wrapper from './ui/Wrapper/Wrapper';

const App = () => {
  const searchCountryRef = useRef('')

  return (
    <Wrapper>
      <Card>
        <Input propsRef={searchCountryRef} />
        <Button> search universities </Button>
      </Card>

      <Card>
        <List>
  
        </List>
      </Card>
    </Wrapper>
  )
}

export default App