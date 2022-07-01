import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Posts from './components/Posts/Posts';
import { useState } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';




function App() {

  const [FormIsShown,setFormIsShown] = useState(false)

  const showFormHandler = () =>{
    setFormIsShown(true)
  }
  
  const hideFormHandler = () =>{
    setFormIsShown(false)
  }

  return (
    <div >
     <Header onShowForm={showFormHandler}/>
    <Banner/>
    <Posts/>
    {FormIsShown && <RegisterForm onClose={hideFormHandler}/> }
    
   
    
    </div>
  );
}

export default App;
