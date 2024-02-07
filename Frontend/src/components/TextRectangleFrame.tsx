import { FunctionComponent, useMemo, type CSSProperties } from "react";

type TextRectangleFrameType = {
  rectangle18?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propBorderRadius2?: CSSProperties["borderRadius"];
};

const TextRectangleFrame: FunctionComponent<TextRectangleFrameType> = ({
  rectangle18,
  propBorderRadius,
  propBackgroundImage,
  propBorderRadius1,
  propBorderRadius2,
}) => {
  const textRectangleFrameStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundImage: propBackgroundImage,
    };
  }, [propBorderRadius, propBackgroundImage]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius2,
    };
  }, [propBorderRadius2]);

  return (
    <div
      className="flex-1 rounded-tl-sm rounded-tr-none rounded-b-none flex flex-col items-center justify-start pt-[2.81rem] px-[0.56rem] pb-[0.56rem] box-border relative bg-[url('/public/rectangle-18@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[11.31rem] z-[1] text-left text-[1rem] text-white font-noto-sans"
      style={textRectangleFrameStyle}
    >
      <img
        className="w-[17.44rem] h-[7.38rem] relative rounded-tl-sm rounded-tr-none rounded-b-none object-cover hidden z-[0]"
        alt=""
        src={rectangle18}
        style={rectangleIconStyle}
      />
      <div
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-tl-sm rounded-tr-none rounded-b-none bg-darkslateblue z-[2]"
        style={rectangleDivStyle}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
        <div className="relative z-[3]">12 May 2023</div>
      </div>
      <div className="w-[15.81rem] relative text-[0.88rem] leading-[1.31rem] font-light text-whitesmoke-100 inline-block z-[3]">
        Lorem Ipsum is simply dummy text of the printing.
      </div>
    </div>
  );
};

export default TextRectangleFrame;
