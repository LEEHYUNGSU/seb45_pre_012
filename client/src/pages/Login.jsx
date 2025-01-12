import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/LoginForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialLogin from '../components/SocialLogin.jsx';
import BaseHeader from '../components/BaseHeader.jsx';
import { useState } from 'react';

const Login = () => {
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="vh-100 overflow-hidden">
      <BaseHeader />
      <Container
        fluid
        className="vh-100 w-100 d-flex flex-column bg-light mt-5"
      >
        <Row fluid className="vh-100 d-flex justify-content-center w-100 mt-5">
          <Col lg={12}>
            <Row fluid className="d-flex flex-column align-items-center">
              <Col lg={6} className="mt-5" />
              <Col lg={6} className="mt-5">
                <SocialLogin />
                {!loginState ? (
                  <LoginForm
                    loginState={loginState}
                    setLoginState={setLoginState}
                  />
                ) : null}

                <p className="text-center mt-3">
                  {`Don't have an account?`}{' '}
                  <Link to="/TestPage" className="sign_up_text">
                    Sign up
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {loginState ? (
        <p className="w-100 mt-5 bg-black">로그인 완료하였습니다</p>
      ) : null}
    </div>
  );
};

export default Login;
