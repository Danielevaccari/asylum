import MyGrid from './MyGrid';
import './Styles.css'
import Intro from './Intro'
import Menu from './Menu'

function App() {
  return (
    <>
      <div className='background'>
        <Intro />
        <div style={{textAlign: 'center', height: '4vw'}}>
          <Menu/>
        </div>
        <MyGrid />
      </div>
    </>
  );
}

export default App;
