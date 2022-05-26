import React ,{useState}from 'react'
import './App.css';
import Alert from './components/Alert';
import Textarea from './components/Textarea';
import Navbar from './components/Navbar';
// import About from './components/About';
function App() {

  const [mode, setmode] = useState("light");

  const toggleMode=()=>{
    if (mode==='light') {
      setmode("dark");
      document.body.style.backgroundColor='#1a131c';
      showAlert("Dark Mode Enabled !","success")
    }
   else {
      setmode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled !","success")
    } 
  }

  const [alert, setalert] = useState(null);

  let showAlert=(messege,type)=>{
    setalert(
    {
      msg:messege,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
  <Navbar mode={mode}/>
    <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} d-flex justify-content-end mx-3 my-3`}>
              <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onClick={toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
  <Alert alert={alert}/>
        
<Textarea  mode={mode} showAlert={showAlert}/>
{/* <About  mode={mode}/> */}

  </>
  );
}

        export default App;
