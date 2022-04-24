import React, { useEffect, useState } from "react";
import "./Counter.css";
import Spinner from "../Spinner/Spinner";
import Cvalue from "../Cvalue/Cvalue";

const MAX_VALUE = 1000;
const GET_URL ="https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json";

const PUT_URL ="https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";
function Counter() {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const updateApi = (counter) => {
    if (counter <= MAX_VALUE) {
      setLoading(true);
      fetch(PUT_URL, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ counter1: counter }),
      }).then((res) => {
        if (res.status === 200) {
          getApi();
          setLoading(false);
        }
      });
    } else {
      alert("Oh no! you reached last number");
    }
  };
  const handleAscDsc = (value) => {
    updateApi(counter + value);
  };
  const handleInp = (e) => {
    updateApi(+e.target.value);
  };
  const getApi = () => {
    fetch(GET_URL)
      .then((res) => res.json())
      .then((res) => setCounter(res !== null ? res : 1));
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className='container'>
      <Spinner visibility={loading}></Spinner>
      <div className='box'>
        <button
          className='flex-item'
          id='dec'
          onClick={() => handleAscDsc(-1)}
        >
          <span>-</span>
        </button>
        <input
          type='text'
          onChange={handleInp}
          name='counter'
          id='counter'
          value={counter}
          className='flex-item'
        />
        <button
          id='inc'
          className='flex-item'
          onClick={() => handleAscDsc(1)}
        >
          <span>+</span>
        </button>
      </div>
      <Cvalue counter={counter}></Cvalue>
    </div>
  );
}

export default Counter;
