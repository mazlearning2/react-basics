const ErrorExample = () => {
  let counter = 0;

  const increaseHandler = () => {
    counter = counter + 1;
  };

  return (
    <div className="error-example">
      <h2 className="error-example-counter">{counter}</h2>
      <button className="error-example-button" onClick={increaseHandler}>Increase</button>
    </div>
  );
};

export default ErrorExample;
