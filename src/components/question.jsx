import * as React from "react";

const Question = ({ title }) => {
  return (
    <div className="flex gap-5 justify-between pr-10 text-xl font-semibold leading-7 text-zinc-900">
      <div>{title}</div>
    </div>
  );
};

const QuestionAnswer = ({ title, description }) => {
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between" onClick={() => setShowDescription(!showDescription)}>
        <Question title={title} />
        <button
          className="text-lg font-semibold leading-7 text-zinc-900"
        >
          {showDescription? "-" : "+"}
        </button>
      </div>
      {showDescription && (
        <div className="mt-6 text-base leading-6 text-gray-500">{description}</div>
      )}
    </div>
  );
};

const FreelancerQuestions = () => {
  return (
    <div className="flex flex-col justify-center p-8 bg-white max-md:px-5">
      <div className="pt-20 bg-gray-200 rounded-[40px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-end leading-[110%] max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl tracking-tighter text-neutral-400 max-md:max-w-full">
                What’s on your mind
              </div>
              <div className="mt-5 text-6xl font-semibold tracking-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
              Ask Questions
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cc5e7b4216b65142d8df19afb788c13f821474f7535d9b132f9d6643112ab3d?apiKey=03b709cbd0bb43d185c9782bb4c80379&"
                className="self-stretch mt-20 w-full aspect-[1.12] fill-[linear-gradient(180deg,#FFF_0.05%,rgba(255,255,255,0.00)_88.86%)] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <QuestionAnswer
                title="Do you offer freelancers?"
                description="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
              />
              <div className="shrink-0 mt-6 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
              <QuestionAnswer
                title="What’s the guarantee that I will be satisfied with the hired talent?"
                description="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
              />
              <div className="shrink-0 mt-6 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
              <QuestionAnswer
                title="Can I hire multiple talents at once?"
                description="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
              />
              <div className="shrink-0 mt-6 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
              <QuestionAnswer
                title="Why should I not go to an agency directly?"
                description="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
              />
              <div className="shrink-0 mt-6 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
              <QuestionAnswer
                title="Can I post multiple jobs simultaneously?"
                description="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerQuestions;