import { Grid } from '@material-ui/core'
import Search from './components/Search'
import './App.css';

function App() {
  return (
    <Grid className="App" container direction='column' justify='center' alignItems='center'>
      <Search/>
    </Grid>
  );
}

export default App;
