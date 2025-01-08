import "./Newsletter.css";
const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="newsletter">
        <p className="newsletter__text">Suscribe now & get 20% off</p>
        <p className="newsletter__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form className="newsletter__form">
          <input
            className="form__input"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="form__button"
            onSubmit={onSubmitHandler}
          >
            SUSCRIBE
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
