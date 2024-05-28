import RingLoader
  from "react-spinners/RingLoader";
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="App">
      {
        loading ?

          <RingLoader color="#36d7b7" />
          :
          <img src='https://giffiles.alphacoders.com/544/54454.gif' />
      }
    </div>
  );
}

export default App;






 