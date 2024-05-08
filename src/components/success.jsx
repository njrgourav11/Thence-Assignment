import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = ({ className }) => {
  const imageSrc = `https://cdn.builder.io/api/v1/image/assets/TEMP/003c48235467fc8d9890a6d2b5f2aa4153a60102818c7d9ce92b221800edcaa1?apiKey=03b709cbd0bb43d185c9782bb4c80379&`;
  const imageSrc2 = `https://cdn.builder.io/api/v1/image/assets/TEMP/083c8fe094833f221ff04dad2160fa5c72951e48c9d7d42b9c9ace7963888360?apiKey=03b709cbd0bb43d185c9782bb4c80379&`;

  const SuccessImage = () => {
    return (
      <img
        loading="lazy"
        src={imageSrc}
        className="self-start w-32 max-w-full aspect-[2.7]"
      />
    );
  };

  const SuccessIcon = () => {
    return (
      <img
        loading="lazy"
        src={imageSrc2}
        className="mt-36 w-20 aspect-square max-md:mt-10"
      />
    );
  };

  const SuccessTitle = () => {
    return (
      <div className="mt-10 text-4xl tracking-tighter leading-10 text-green-600 max-md:mt-10">
        Success Submitted
      </div>
    );
  };

  const SuccessCongratulations = () => {
    return (
      <div className="mt-4 text-6xl font-semibold tracking-tighter text-center leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        Congratulations
      </div>
    );
  };

  const SuccessMessage = () => {
    return (
      <div className="mt-5 text-3xl leading-9 text-center text-neutral-500 w-[718px] max-md:max-w-full">
        Your request has been successfully submitted to us. We will validate
        your information and reach out to your shortly with updates
      </div>
    );
  };

  const navigate = useNavigate();

  const CountdownTimer = ({ seconds }) => {
    const [count, setCount] = React.useState(seconds);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setCount((count) => count - 1);
        if (count === 1) {
          navigate('/'); // Redirect to homepage
        }
      }, 1000);

      return () => clearTimeout(timer);
    }, [count, navigate]);

    return (
      <div className="mt-40 text-xl leading-7 text-center max-md:mt-10">
        <span>Redirecting you to Homepage in</span>{" "}
        <span className="font-bold text-zinc-900">{count}</span>
      </div>
    );
  };

  return (
    <div className={`flex flex-col items-center px-14 py-9 font-medium bg-white text-zinc-900 max-md:px-5 ${className}`}>
      <SuccessImage />
      <SuccessIcon />
      <SuccessTitle />
      <SuccessCongratulations />
      <SuccessMessage />
      <CountdownTimer seconds={5} />
    </div>
  );
};

export default MyComponent;