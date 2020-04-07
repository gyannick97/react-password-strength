import React, { useState } from 'react';

import {
  strengthIndicator,
  strengthColor,
  strengthVerdict
} from '../services/strength-password';
import { progressWidth } from '../services/progress-width';

import PasswordStrength from '../components/UI/passwordStrength';
import Alert from '../components/UI/alert';
import Button from '../components/UI/button';

function UserTab1 () {
  const [email, setEmail] = useState('test@email.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const strength = strengthIndicator(password);
  const color = strengthColor(strength);
  const verdict = strengthVerdict(strength);
  const width = progressWidth(strength);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      if (password !== confirmPassword) {
        setAlert(true);
        setIsLoading(false);
        setType('alert-danger');
        setMessage('The password confirmation does not match');
      } else {
        setAlert(true);
        setIsLoading(false);
        setType('alert-success');
        setMessage('Data has been successfully saved');
      }
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
        <div className="form-group column-100">
          <label>Email address</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter you email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group column-sm-50">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter you password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group column-sm-50">
          <label>Password repeat</label>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        
        <PasswordStrength 
          verdict={verdict}
          progressColor={color}
          progressWidth={width}
        />
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
