import "./ErrorPage.scss";
const ErrorPage: React.FC = () => {
  return (
    <div className="errorPage">
      <div className="errorPage__decor errorPage__decor--one">+€120</div>

      <div className="errorPage__decor errorPage__decor--two">-€45</div>

      <div className="errorPage__decor errorPage__decor--three">+€80</div>

      <div className="errorPage__content">
        <div className="errorPage__number">
          <span>4</span>

          <div className="errorPage__coin">€</div>

          <span>4</span>
        </div>

        <div className="errorPage__graph">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1>Oops! Something went off budget.</h1>

        <p>
          The page you're looking for doesn't exist or may have been moved
          somewhere else.
        </p>

        <button
          className="errorPage__button"
          onClick={() => (window.location.href = "#/home")}
        >
          <span>←</span>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
