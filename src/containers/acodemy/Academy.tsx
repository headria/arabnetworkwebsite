import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Wrapper,
  BackGround,
  Row,
  Col,
  Container,
  Desc,
  Title,
  Control,
} from "./Acodemy-stylrd";
const Academy = () => {
  return (
    <Wrapper>
      <div className={"top_Item"}>
        <img
          className={"w-full"}
          src="/assets/images/vector/section-curve-bottom.svg"
          alt=""
        />
      </div>
      <BackGround>
        <Container className={"md:pt-10"}>
          <div className={"text-center my-5"}>
            <h3 className={"text-white text-3xl font-semibold"}>
              Arab Academy
            </h3>
            <p className={"text-white opacity-90 mt-5 leading-6"}>
              The World's first cryptocurrency & Blockchain Education platform
              that will revolutionize the
              <br />
              Arab world.
            </p>
          </div>
          <Row>
            <Col>
              <div className={"space-y-10 relative"}>
                <div className={"Technical_Analysis"}>
                  <div className="Circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="66.036"
                      height="61.083"
                      viewBox="0 0 66.036 61.083"
                    >
                      <path
                        data-name="Path 144"
                        d="M71,61.166l-.448-.128h-.243l-.474-.128V27.145c0-1.472-.666-2.125-2.138-2.125H54.173c-1.715,0-2.291.563-2.291,2.265V61.025h-3.7V46.433c0-1.549-.614-2.189-2.15-2.189H32.376c-1.5,0-2.125.64-2.125,2.138V61.038H26.565V34.4c0-1.549-.627-2.176-2.163-2.176H10.8c-1.574,0-2.189.627-2.189,2.214V60.833l-.486.115H7.826l-.346.09A1.754,1.754,0,0,0,6.2,62.829a1.779,1.779,0,0,0,1.408,1.613,2.905,2.905,0,0,0,.614,0h62.4a1.8,1.8,0,0,0,1.613-1.549A1.779,1.779,0,0,0,71,61.166Zm-48.011-.128H19.346v-5.4a1.754,1.754,0,0,0-3.507,0v5.453H12.191V35.81h10.8Zm21.631,0H41.054V53.755c0-.691-.179-2.278-1.754-2.291A1.562,1.562,0,0,0,38.02,52a2.56,2.56,0,0,0-.5,1.7v7.308h-3.7v-13.2h10.8Zm21.631,0H62.621V34.479a3.661,3.661,0,0,0-.115-1.062,1.7,1.7,0,0,0-1.638-1.19h-.243A1.8,1.8,0,0,0,59.1,33.954a3.085,3.085,0,0,0,0,.486V61.025H55.453V28.6h10.8Z"
                        transform="translate(-6.198 -3.376)"
                        fill="#0668af"
                      ></path>
                      <path
                        data-name="Path 145"
                        d="M62.543,8.712a6.553,6.553,0,0,0-7.206,1.152,6.4,6.4,0,0,0-1.651,7.142,1.434,1.434,0,0,1-.384,1.7c-4.032,4.019-7.68,7.68-11.046,11.046a1.613,1.613,0,0,1-1.152.55,2.074,2.074,0,0,1-.678-.141,7.1,7.1,0,0,0-2.355-.435A6.489,6.489,0,0,0,33.936,31.3a1.574,1.574,0,0,1-1.037.422,1.945,1.945,0,0,1-.666-.141c-2.56-1.05-5.2-2.15-7.91-3.2a1.728,1.728,0,0,1-1.28-1.818,6.566,6.566,0,0,0-6.566-6.4,6.72,6.72,0,0,0-6.477,7,6.2,6.2,0,0,0,3.84,5.414,6.681,6.681,0,0,0,2.829.678,6.617,6.617,0,0,0,4.16-1.6,1.613,1.613,0,0,1,1.024-.422,1.741,1.741,0,0,1,.742.179c3.174,1.28,5.619,2.291,7.91,3.187a1.664,1.664,0,0,1,1.19,1.7,6.22,6.22,0,0,0,3.9,6.041,6.72,6.72,0,0,0,2.688.589,6.643,6.643,0,0,0,5.952-8.9,1.562,1.562,0,0,1,.486-1.754c4.006-3.993,7.564-7.552,10.88-10.892a1.766,1.766,0,0,1,1.28-.627,2.074,2.074,0,0,1,.73.154,6.732,6.732,0,0,0,2.189.384A6.579,6.579,0,0,0,62.53,8.763ZM18.679,28.832a3.008,3.008,0,0,1-2.138.909h0a3.046,3.046,0,0,1-.141-6.08h.064a3.072,3.072,0,0,1,3.059,3.033,3.008,3.008,0,0,1-.845,2.137ZM38.16,39.366a3.046,3.046,0,1,1,3.046-3.025A3.059,3.059,0,0,1,38.16,39.366ZM59.791,17.722h-.077a3.089,3.089,0,1,1,.077,0Z"
                        transform="translate(-5.135 -8.11)"
                        fill="#0668af"
                      ></path>
                    </svg>
                  </div>
                  <div className={"flex-1"}>
                    <h3>Technical Analysis 101</h3>
                    <p>
                      Get started with technical analysis and learn about price
                      action on your favourite crypto markets.
                    </p>
                  </div>
                </div>
                <span className={"absolute"} />
                <div className={"Uniq_Skills"}>
                  <div className="Circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="61.799"
                      height="69.387"
                      viewBox="0 0 61.799 69.387"
                    >
                      <path
                        d="M69.371,52.7A5.773,5.773,0,0,0,63.7,48.16a5.952,5.952,0,0,0-3.392,1.075,1.4,1.4,0,0,1-.717.269.576.576,0,0,1-.256,0C57.979,48.7,56.7,47.93,55.33,47.149l-1.05-.6-.243-.141.1-.256a16.78,16.78,0,0,0,0-13.183l-.115-.256.243-.141,1.28-.755c1.152-.653,2.227-1.28,3.328-1.946a1.459,1.459,0,0,1,.73-.23,1.357,1.357,0,0,1,.806.307,5.821,5.821,0,0,0,8.512-7.334,5.875,5.875,0,0,0-5.261-3.328,6.144,6.144,0,0,0-1.088.1,5.862,5.862,0,0,0-4.723,6.233c0,.128,0,.819-.371,1.05-1.28.768-2.56,1.523-3.84,2.253l-1.114.64-.243.141-.166-.218a16.9,16.9,0,0,0-11.417-6.6h-.282V17.224a1.178,1.178,0,0,1,.781-1.28,5.773,5.773,0,0,0,3.315-4.774,5.7,5.7,0,0,0-2.445-5.2A7.436,7.436,0,0,0,40.3,5.167l-.845-.307H37.718l-.525.179a5.542,5.542,0,0,0-4.2,4.544A5.12,5.12,0,0,0,35.324,15.3,3.021,3.021,0,0,1,36.976,18.7a2.227,2.227,0,0,0,0,.41v3.7h-.269a16.934,16.934,0,0,0-11.43,6.6l-.166.218-.243-.141-1.126-.666a26.765,26.765,0,0,0-2.483-1.382A2.765,2.765,0,0,1,19.466,24.6a5.12,5.12,0,0,0-1.523-3.609,6.144,6.144,0,0,0-4.326-1.754h-.576a5.851,5.851,0,0,0,.64,11.66,6.067,6.067,0,0,0,3.469-1.114.922.922,0,0,1,1.19,0c.653.4,1.28.768,1.984,1.152l.96.55,1.28.755.563.333.23.141-.09.243c-1.766,4.941-1.779,7.168,0,13.26v.23l-.2.128-1.28.73c-1.165.666-2.342,1.28-3.494,2.035a1.28,1.28,0,0,1-.576.179,1.126,1.126,0,0,1-.678-.269,5.35,5.35,0,0,0-3.123-1.075h-.166A5.529,5.529,0,0,0,8.5,51.322a5.478,5.478,0,0,0,.589,6.259,5.427,5.427,0,0,0,4.4,2.24,6.771,6.771,0,0,0,1.485-.166,5.8,5.8,0,0,0,4.608-6.144,1.28,1.28,0,0,1,.41-1.075c1.28-.768,2.483-1.472,3.84-2.227l1.139-.653.243-.141.166.218a16.934,16.934,0,0,0,11.315,6.6h.269v5.491A1.357,1.357,0,0,1,36.08,63.2a5.721,5.721,0,0,0-2.957,6.937,5.913,5.913,0,0,0,5.517,4.1,4.878,4.878,0,0,0,.755,0,5.837,5.837,0,0,0,5.12-5.76,5.747,5.747,0,0,0-3.4-5.35s-.653-.358-.666-.781V56.237h.282a17.177,17.177,0,0,0,6.4-2.138,17.407,17.407,0,0,0,5.12-4.467l.166-.218.243.141,1.2.7c.922.55,1.792,1.075,2.726,1.536a2.278,2.278,0,0,1,1.4,2.393,5.3,5.3,0,0,0,3.366,5.12,6.054,6.054,0,0,0,2.56.576,5.619,5.619,0,0,0,3.571-1.357A5.5,5.5,0,0,0,69.371,52.7ZM62.024,23.458a2.329,2.329,0,0,1,1.664-.691,2.381,2.381,0,0,1,2.394,2.342,2.419,2.419,0,0,1-2.368,2.381h0a2.368,2.368,0,0,1-1.677-4.032ZM13.719,27.489h0a2.368,2.368,0,0,1-2.368-2.342,2.3,2.3,0,0,1,.666-1.651,2.342,2.342,0,0,1,1.677-.73,2.368,2.368,0,1,1,0,4.723ZM15.37,55.648a2.355,2.355,0,1,1,.292-2.971,2.342,2.342,0,0,1-.292,2.971ZM36.336,10.722a2.406,2.406,0,0,1,2.3-2.406h0a2.381,2.381,0,0,1,1.715.7,2.342,2.342,0,0,1,.7,1.677,2.419,2.419,0,0,1-2.278,2.368h0A2.406,2.406,0,0,1,36.336,10.722Zm4.736,57.7A2.406,2.406,0,0,1,38.7,70.8h-.064a2.406,2.406,0,0,1-2.3-2.419A2.368,2.368,0,0,1,38.7,66.054,2.419,2.419,0,0,1,41.071,68.422Zm5.389-18.15a12.723,12.723,0,0,1-7.808,2.56,12.569,12.569,0,0,1-7.82-2.56l-.23-.179.166-.243a8.96,8.96,0,0,1,7.859-4.416h.243a8.96,8.96,0,0,1,7.68,4.416l.154.243ZM34.94,38.164a3.737,3.737,0,1,1,6.4,2.713,3.673,3.673,0,0,1-2.637,1.1h0a3.673,3.673,0,0,1-2.649-1.1A3.622,3.622,0,0,1,34.94,38.164Zm14.591,9.113-.269.358-.243-.358a12.927,12.927,0,0,0-4.582-3.955l-.294-.154.154-.282c2.342-4.211,1.984-7.744-1-10.24a7.244,7.244,0,0,0-9.177,0c-3.008,2.56-3.341,5.939-1,10.24l.154.282-.282.154a12.8,12.8,0,0,0-4.557,3.84l-.243.333-.282-.218a13.03,13.03,0,0,1,1.05-16.729A13.3,13.3,0,0,1,49.532,47.277ZM65.39,55.686a2.393,2.393,0,0,1-1.677.7h0a2.368,2.368,0,0,1,0-4.723,2.394,2.394,0,0,1,2.394,2.355,2.355,2.355,0,0,1-.717,1.625Z"
                        transform="translate(-7.78 -4.86)"
                        fill="#0668af"
                      ></path>
                    </svg>
                  </div>
                  <div className={"flex-1"}>
                    <h3>Learn Unique Skills</h3>
                    <p>
                      Blockchain, C++, Solidity, smart contracts and many more.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className={"Image_Academy mx-auto mt-5 md:mt-0"}>
                <img
                  className={"w-full h-full object-cover"}
                  src="/assets/images/bg/learning.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </BackGround>
      <div className={"bottom_Academy"}>
        <img
          className={"w-full"}
          src="/assets/images/vector/section-wave.svg"
          alt=""
        />
      </div>
    </Wrapper>
  );
};

export default Academy;
