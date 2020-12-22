import React, { useState, useEffect  } from 'react';



const Stats = () => {
  const [hasError, setErrors] = useState(false);
  const [state, setState] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3001/users");
    res
      .json()
      .then(res => setState(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData()
  }, []);
  

  return (
    <div>
      <span>{JSON.stringify(state)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Stats;
//{state.map( d => <div>{d}</div>)}
//<p>{state}</p>
