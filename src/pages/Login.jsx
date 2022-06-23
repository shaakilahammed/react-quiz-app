import { Link } from 'react-router-dom';
import Button from '../components/Form/Button';
import Form from '../components/Form/Form';
import TextInput from '../components/Form/TextInput';
import Illustration from '../components/UI/Illustration';

import loginImage from '../assets/images/login.svg';

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} alt="Login Image" />
        <Form className="login" action="">
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Don't have an account? <Link to="/sign-up">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
