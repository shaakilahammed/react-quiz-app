import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('Failed to login!');
    }
  };

  return (
    <Form className="login" onSubmit={submitHandler}>
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/sign-up">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
