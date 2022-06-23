import { Link } from 'react-router-dom';
import signupImage from '../assets/images/signup.svg';
import Button from '../components/Form/Button';
import Checkbox from '../components/Form/Checkbox';
import Form from '../components/Form/Form';
import TextInput from '../components/Form/TextInput';
import Illustration from '../components/UI/Illustration';

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} alt="Signup Image" />
        <Form className="signup" action="#">
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
