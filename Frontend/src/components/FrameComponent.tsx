import { FunctionComponent, useMemo, type CSSProperties } from "react";

type FrameComponentType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  propLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] w-[5.38rem] text-left text-[1.25rem] text-white font-noto-sans"
      style={frameDivStyle}
    >
      <div className="absolute h-[calc(100%_-_3px)] top-[0rem] bottom-[0.19rem] left-[0.06rem] w-[4.88rem]">
        <h3 className="m-0 absolute top-[5rem] left-[0rem] text-inherit uppercase font-medium font-inherit mq450:text-[1rem]">
          Service
        </h3>
        <b className="absolute top-[0rem] left-[0.69rem] text-[3.38rem] uppercase text-gray-400 [-webkit-text-stroke:3px_#fff] mq450:text-[2rem] mq1025:text-[2.69rem]">
          65
        </b>
        <img
          className="absolute top-[7.19rem] left-[1.25rem] w-[2.69rem] h-[0.31rem]"
          loading="eager"
          alt=""
          src="/rectangle-16.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
