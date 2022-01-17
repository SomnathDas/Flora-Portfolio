import ShowCaseProps from "../typings/ShowcaseProps";

const Showcase = ({
  showcaseClass,
  number,
  title,
  description,
  backgroundColor,
  onHoverColor,
}: ShowCaseProps) => {
  return (
    <section className={`${showcaseClass} h-screen text-justify flex`}>
      <div
        className={`w-full md:w-1/2 h-screen ${backgroundColor} md:bg-opacity-100 bg-opacity-60 hover:${onHoverColor} transition-colors delay-85 ease-linear flex flex-col gap-8 justify-center items-center text-white`}
      >
        <div>
          <h4 className="text-6xl">{number}</h4>
          <h2 className="text-5xl">{title}</h2>
        </div>
        <div>
          <h4>{description}</h4>
          <a className="underline" href="">
            view project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
