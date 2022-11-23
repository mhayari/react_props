import './App.css';
import Copy from './images/Copy.jpg'
import ProfileComponent from './profile/ProfileComponent';


function App() {
  const handelName = (fullName) => {
    alert(`${fullName}`)
  }
  return (
    <div  className="App">
      <ProfileComponent fullName='Mohammed Hayari' bio='im happy' profession='Developper' handelName={handelName} >
        <img style={{width:'150px',heigth:'150px'}} src={Copy} alt='pic' />
        </ProfileComponent>
    </div>
  );
}

export default App;
