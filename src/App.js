import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [trains,setTrains] = useState([]);

  useEffect(()=> {
    const call = async() => {
      const res = await axios.get("http://localhost:4000/train/trains");
      setTrains(res.data);
    }
    call();
  },[])

  return <>

    <h3>
      {trains}
    </h3>

  </>
}

export default App;
