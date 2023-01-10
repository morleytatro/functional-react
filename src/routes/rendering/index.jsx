import { useState } from 'react';

import Button from '../../components/Button';

export default function Rendering() {
  const [count, setCount] = useState(0);
  console.log('rendering main component');

  return (
    <div>
      <h2>Rendering</h2>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
      <SubComponent />
    </div>
  );
}

function SubComponent() {
  const [subCount, setSubCount] = useState(0);
  console.log('rendering sub-component');

  return (
    <div className="mt-3">
      <p>Just a lowly sub-component.</p>
      <Button onClick={() => setSubCount(subCount + 1)}>{subCount}</Button>
    </div>
  );
}