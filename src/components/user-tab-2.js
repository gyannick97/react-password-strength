import React, { useState } from 'react';

import Alert from './UI/alert';
import Button from './UI/button';

function UserTab1 () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setAlert(true);
      setIsLoading(false);
      setType('alert-success');
      setMessage('Data has been successfully saved');
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        { alert ?
          <Alert
            alertType={type}
          >
            {message}
          </Alert>
          : null
        }
        <div className="form-group column-sm-50">
          <label>First name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter you first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group column-sm-50">
          <label>Last name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter you last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group column-sm-50">
          <label>Address</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter you last name"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group column-sm-50">
          <label>Country</label>
          <select 
            className="form-control"
            value={country}
            onChange={e => setCountry(e.target.value)}
          >
            <option value="" disabled>Select your country</option>
            <option value="Austria">Austria</option>
            <option value="Germany">Germany</option>
            <option value="Switzerland">Switzerland</option>
          </select>
        </div>
      </div>

      <div className="text-right">
        <Button
          className="btn btn-secondary"
          type="submit"
          disabled={isLoading}
          isLoading={isLoading}
        >
          Update
        </Button>
      </div>
    </form>
  );
}

export default UserTab1;
