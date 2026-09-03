import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743'
      showAlert('Dark mode has been enable', 'success')
     // document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light');
      document.body.style.background = 'white'
      showAlert('Light mode has been enable', 'success')
      //document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
