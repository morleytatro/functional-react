import { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Form() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  function onChange(e) {
    const { value } = e.target;
    setInput(value);

    setError(!input ? 'This input is required.' : null);
  }

  function onSubmit(e) {
    e.preventDefault();
    setInput('');
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="my-id">Some Label</label>
        <div className="mb-3">
          <Input id="my-id" type="text" value={input} onChange={onChange} />
        </div>
        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
      </div>
      <Button>Submit!</Button>
    </form>
  );
}