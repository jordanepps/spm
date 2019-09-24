import React from 'react';
import './Utils.css';

export function Email() {
  return (
    <div className="email-container">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        id="email"
        required
      />
    </div>
  );
}

export function Password({ reset }) {
  return (
    <div className="password-container">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="new-password"
        onChange={reset}
        required
      />
    </div>
  );
}

export function VerifyPassword({ reset }) {
  return (
    <div className="password-container verify-password">
      <label htmlFor="verify_password">Verify Password:</label>
      <input
        type="password"
        name="verify_password"
        id="verify_password"
        autoComplete="new-password"
        required
        onChange={reset}
      />
    </div>
  );
}

export function SubmitButton({ name }) {
  return (
    <div className="submit-btn-container">
      <button>{name}</button>
    </div>
  );
}
