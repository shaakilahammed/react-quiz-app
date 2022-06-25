import signupImage from '../assets/images/signup.svg';
import SignupForm from '../components/Form/SignupForm';
import Illustration from '../components/UI/Illustration';

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} alt="Signup Image" />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
