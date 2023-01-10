import { useState } from 'react';

import Button from '../../components/Button';

export default function AddElements() {
  const [counter, setCounter] = useState(0);
  const [elements, setElements] = useState([]);

  function handleClick() {
    setCounter(counter + 1);
    setElements(curr => [...curr, counter]);
  }

  return (
    <>
      <Button onClick={handleClick}>Add Element</Button>
      {elements.map((elem) => (
        <p key={elem}>{elem}</p>
      ))}
    </>
  );
}