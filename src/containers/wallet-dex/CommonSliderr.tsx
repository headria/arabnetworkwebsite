import { Slider } from "@components";
import { Row, Col, Title } from "./Styled";

interface IProps {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  center?: boolean;
}

const CommonSlider = ({ desc, img, subtitle, title, center }: IProps) => {
  return (
    <>
      <Slider fullHeight={true}>
        <div className={"mx-auto max-w-screen-2xl px-4"}>
          <Row isCenter={center}>
            <Col>
              <img src={`/assets/images/bg/${img}`} alt="" />
            </Col>
            <Col>
              <h3 className={"text-4xl font-bold text-white"}>{title}</h3>
              <p
                className={
                  "text-lg text-white font-bold md:text-2xl mb-5 mt-10 leading-relaxed capitalize"
                }
              >
                {subtitle}
              </p>
              <p
                className={
                  "text-lg text-white opacity-90  leading-loose leading-relaxed capitalize"
                }
              >
                {desc}
              </p>
            </Col>
          </Row>
        </div>
      </Slider>
    </>
  );
};

export default CommonSlider;
