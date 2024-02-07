import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import TextRectangleFrame from "./TextRectangleFrame";

const RectangleShapeVector: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-[15.44rem] pb-[4.5rem] pr-[10.19rem] pl-[10rem] box-border relative gap-[3.13rem] min-h-[56.81rem] max-w-full mt-[-11rem] text-left text-[0.88rem] text-white font-noto-sans mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[3.13rem] mq750:pl-[5rem] mq750:pr-[5.06rem] mq750:pb-[2.94rem] mq750:box-border mq1100:flex-wrap">
      <div className="h-[calc(100%_-_174px)] w-full absolute my-0 mx-[!important] top-[0.06rem] right-[0rem] bottom-[10.81rem] left-[0rem]">
        <img
          className="absolute h-full w-full top-[-0.03rem] right-[0rem] bottom-[0.06rem] left-[0rem] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-16-4.svg"
        />
        <div className="absolute top-[23.33rem] left-[10.19rem] rounded-[50%] bg-whitesmoke-200 w-[0.6rem] h-[0.6rem] z-[1]" />
        <img
          className="absolute top-[29.74rem] left-[10.19rem] w-[1rem] h-[1rem] z-[1]"
          alt=""
          src="/vector-20.svg"
        />
        <img
          className="absolute top-[33.49rem] left-[10.19rem] w-[1rem] h-[1rem] z-[1]"
          alt=""
          src="/vector-211.svg"
        />
        <img
          className="absolute top-[31.61rem] left-[10.19rem] w-[1rem] h-[1rem] z-[1]"
          alt=""
          src="/vector-22.svg"
        />
      </div>
      <div className="w-[25rem] flex flex-col items-start justify-start pt-[2.38rem] px-[0rem] pb-[0rem] box-border min-w-[25rem] max-w-full mq1025:min-w-full mq1100:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.38rem] max-w-full">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.19rem] box-border max-w-full">
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative uppercase z-[1]">Subscribe</div>
              <h1 className="m-0 h-[2.75rem] relative text-[2rem] uppercase inline-block z-[1] font-inherit mq450:text-[1.19rem] mq1025:text-[1.63rem]">
                <span>GET STARTED</span>
                <b> Today</b>
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.19rem] box-border min-h-[4.69rem] max-w-full text-whitesmoke-100">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.38rem] max-w-full">
              <div className="w-[5.94rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border">
                <div className="h-[0.13rem] flex-1 relative rounded-12xs bg-whitesmoke-200 z-[1]" />
              </div>
              <div className="self-stretch relative leading-[1.31rem] font-light z-[1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
          <div className="h-[5.44rem] flex flex-row items-start justify-start py-[0rem] px-[2rem] box-border">
            <div className="flex flex-col items-start justify-start gap-[0.69rem]">
              <div className="relative z-[1]">{`Super easy to use & Time Saving`}</div>
              <div className="relative z-[1]">{`Super easy to use & Time Saving`}</div>
              <div className="relative z-[1]">{`Super easy to use & Time Saving`}</div>
            </div>
          </div>
          <Button
            className="w-[9.81rem] h-[2.5rem] z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#110f6e",
              fontSize: "16",
              background: "#d9d9d9",
              borderRadius: "4px",
              "&:hover": { background: "#d9d9d9" },
              width: 157,
              height: 40,
            }}
          >
            Subscribe Now
          </Button>
        </div>
      </div>
      <div className="flex-1 rounded-4xl bg-gainsboro-400 flex flex-col items-center justify-start pt-[0.75rem] pb-[1.75rem] pr-[0.69rem] pl-[0.75rem] box-border gap-[0.81rem] min-w-[24.06rem] max-w-full z-[1] text-[1rem] mq1025:min-w-full">
        <div className="w-[37.06rem] h-[25.94rem] relative rounded-4xl bg-gainsboro-400 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.69rem] mq750:flex-wrap">
          <TextRectangleFrame rectangle18="/rectangle-18@2x.png" />
          <TextRectangleFrame
            rectangle18="/rectangle-19@2x.png"
            propBorderRadius="0px 14px 0px 0px"
            propBackgroundImage="url('/rectangle-19@2x.png')"
            propBorderRadius1="0px 14px 0px 0px"
            propBorderRadius2="0px 14px 0px 0px"
          />
        </div>
        <div className="self-stretch h-[8.75rem] relative bg-[url('/public/rectangle-20@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
          <img
            className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden z-[1]"
            alt=""
            src="/rectangle-20@2x.png"
          />
          <div className="absolute top-[0rem] left-[0rem] rounded bg-steelblue-300 w-full h-full z-[5]" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.81rem] box-border max-w-full text-gray-100">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.06rem] max-w-full">
            <div className="relative z-[1]">12 May 2023</div>
            <h2 className="m-0 self-stretch relative text-[1.5rem] leading-[2.13rem] font-normal font-inherit text-darkslategray-300 z-[1] mq450:text-[1.19rem] mq450:leading-[1.69rem]">
              Lorem Ipsum is simply dummy text of the printing.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleShapeVector;
