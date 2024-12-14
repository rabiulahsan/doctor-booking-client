import HashLoader from "react-spinners/HashLoader";
const LoadingPage = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <HashLoader color="#4fcb39" size={80} />
    </div>
  );
};

export default LoadingPage;
