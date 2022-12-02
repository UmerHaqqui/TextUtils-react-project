import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enable', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'
      showAlert('light mode has been enable', 'success');
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter your text below to analyze" mode={mode}/>
        {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below to analyze" mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
