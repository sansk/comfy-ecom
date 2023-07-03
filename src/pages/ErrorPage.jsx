import { Link } from "react-router-dom";
import { Wrapper as ErrorContainer } from "../styled-components/ErrorPage.styles";

const ErrorPage = () => {
  return (
    <ErrorContainer className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried can't be found!</h3>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </section>
    </ErrorContainer>
  );
};

export default ErrorPage;
