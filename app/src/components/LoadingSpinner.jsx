const LoadingSpinner = () => {
  return (
    <div classNameName="d-flex justify-content-center spinner">
      <div
        classNameName="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span classNameName="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
