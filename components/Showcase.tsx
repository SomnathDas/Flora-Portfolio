import ShowCaseProps from "../typings/ShowcaseProps";
import styles from "../styles/Showcase.module.css";
import { useRouter } from "next/router";

const Showcase = ({
  showcaseClass,
  number,
  title,
  description,
  backgroundColor,
  onHoverColor,
}: ShowCaseProps) => {
  const Router = useRouter();
  return (
    <section
      className={`${showcaseClass} ${
        Router.pathname === "/" ? styles.showcaseSection : ""
      } text-justify flex`}
    >
      <div
        className={`w-full md:w-1/2 ${backgroundColor} md:bg-opacity-70 bg-opacity-70 hover:${onHoverColor} hover:bg-opacity-90 transition-colors delay-85 ease-linear flex flex-col gap-8 justify-center items-center text-white`}
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
