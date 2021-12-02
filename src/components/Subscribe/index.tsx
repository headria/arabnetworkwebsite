import { SubScribe } from "./Sub-styled";

interface ISubProps {
  title: string;
  titleClass?: string;
  className?: string;
  center?: boolean;
}

const Subscribe = ({ title, titleClass, className, center }: ISubProps) => {
  return (
    <SubScribe className={`${center && "text-center"}`}>
      <p className={titleClass}>{title}</p>
      <form>
        <div className={`form-control ${className}`}>
          <input placeholder={"Enter Your Email Address"} type="text" />
          <button>Subscribe</button>
        </div>
      </form>
    </SubScribe>
  );
};

export default Subscribe;
