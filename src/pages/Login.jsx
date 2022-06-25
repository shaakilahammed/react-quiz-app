import Illustration from '../components/UI/Illustration';

import loginImage from '../assets/images/login.svg';
import LoginForm from '../components/Form/LoginForm';

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} alt="Login Image" />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
