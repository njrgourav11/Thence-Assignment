import * as React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [canSubmitForm, setCanSubmitForm] = React.useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    updateFormValidity();
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      setIsValidEmail(true);
      setEmailError("");
    } else {
      setIsValidEmail(false);
      setEmailError("Please enter a valid email address.");
    }
    updateFormValidity();
  };

  const updateFormValidity = () => {
    if (name!== "" && isValidEmail) {
      setCanSubmitForm(true);
    } else {
      setCanSubmitForm(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (canSubmitForm) {
      console.log("Form submitted:", { name, email });

      navigate("/success");
    }
  };

  return (
    <div className="flex flex-col items-center px-14 pt-8 pb-20 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between self-stretch max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cb8563eac44ade5b405e4ac495ffac72776b05e0ba29cfae73767941f231bc?apiKey=03b709cbd0bb43d185c9782bb4c80379&"
          className="shrink-0 self-start w-32 max-w-full aspect-[2.7]"
        />
        <div className="flex flex-col justify-center p-4 border border-solid border-stone-300 rounded-[40px]">
          <div className="flex justify-center items-center p-2">
            <div className="flex overflow-hidden relative flex-col justify-center items-center w-4 border-2 border-solid aspect-square border-neutral-900 stroke-[2px] stroke-neutral-900 bg-grey-900">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f899bb8546e135f7261423af4fae3fcc7da36e91c9d2820721b829826faba5e7?apiKey=03b709cbd0bb43d185c9782bb4c80379&"
                className="object-cover absolute inset-0 size-full"
              /> */}
              <svg
                className="absolute top-0 right-0 w-6 h-6 cursor-pointer text-red-500"
                onClick={() => navigate('/')}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-11 text-4xl tracking-tighter leading-10 text-green-600 max-md:mt-10">
        Registration Form
      </div>
      <div className="mt-4 text-6xl font-semibold tracking-tighter text-center leading-[67px] text-zinc-900 w-[588px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Start your success Journey here!
      </div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className="justify-center items-start px-9 py-6 mt-16 max-w-full text-xl font-medium text-center border border-solid bg-zinc-100 border-black border-opacity-0 rounded-[64px] text-neutral-500 w-[417px] max-md:px-5 max-md:mt-10"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="justify-center items-startpx-9 py-6 mt-6 max-w-full text-xl font-medium text-center border border-solid bg-zinc-100 border-black border-opacity-0 rounded-[64px] text-neutral-500 w-[417px] max-md:px-5"
      />
      {emailError && (
        <div className="text-red-500 text-sm mt-2">{emailError}</div>
      )}
      <button
        className="justify-center items-center py-7 pr-12 pl-11 mt-12 max-w-full text-lg font-semibold text-center text-white capitalize whitespace-nowrap rounded-[107.056px] w-[417px] max-md:px-5 max-md:mt-10 bg-black"
        onClick={handleSubmit}
        disabled={!canSubmitForm}
      >
        Submit
      </button>
    </div>
  );
};

export default RegistrationForm;