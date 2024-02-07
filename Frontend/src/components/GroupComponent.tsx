import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-steelblue-200 flex flex-row items-start justify-start py-[6.13rem] pr-[10.25rem] pl-[10.75rem] box-border relative gap-[5.75rem] min-h-[38.56rem] max-w-full z-[3] text-left text-[0.88rem] text-white font-noto-sans mq450:gap-[5.75rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[5.75rem] mq750:py-[4rem] mq750:pr-[5.13rem] mq750:pl-[5.38rem] mq750:box-border mq1100:flex-wrap">
      <div className="h-[38.38rem] w-[85.38rem] relative bg-steelblue-200 hidden max-w-full z-[0]" />
      <img
        className="h-full w-full absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden object-cover z-[1]"
        alt=""
        src="/texture-2@2x.png"
      />
      <div className="h-[24.02rem] flex-1 relative min-w-[23.75rem] z-[4] flex items-center justify-center">
        <img
          className="h-full flex-1 max-w-full overflow-hidden min-w-[23.75rem] z-[4] object-contain absolute left-[0rem] top-[0.56rem] w-full [transform:scale(1.044)] mq1025:min-w-full"
          loading="eager"
          alt=""
          src="/group-6352@2x.png"
        />
      </div>
      <div className="w-[22.13rem] flex flex-col items-start justify-start gap-[2rem] min-w-[22.13rem] max-w-full mq450:gap-[2rem] mq750:min-w-full mq1100:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.13rem]">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative uppercase z-[2]">Features</div>
            <h1 className="m-0 h-[2.75rem] relative text-[2rem] uppercase inline-block z-[2] font-inherit mq450:text-[1.19rem] mq1025:text-[1.63rem]">
              <span>Other</span>
              <b> Features</b>
            </h1>
          </div>
          <div className="w-[4.69rem] h-[0.63rem] flex flex-row items-center justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[0.56rem]">
            <div className="h-[0.6rem] w-[0.6rem] relative rounded-[50%] bg-whitesmoke-200 z-[2]" />
            <div className="h-[0.13rem] flex-1 relative rounded-12xs bg-whitesmoke-200 z-[2]" />
          </div>
          <div className="self-stretch relative leading-[1.31rem] font-light text-whitesmoke-100 z-[2]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div className="h-[7.5rem] flex flex-col items-start justify-start gap-[0.69rem] mq450:h-[7.5rem]">
          <div className="flex flex-row items-start justify-start gap-[0.81rem]">
            <img
              className="h-[1rem] w-[1rem] relative z-[2]"
              alt=""
              src="/vector-16.svg"
            />
            <div className="relative z-[2]">{`Super easy to use & Time Saving`}</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.81rem]">
            <img
              className="h-[1rem] w-[1rem] relative z-[2]"
              alt=""
              src="/vector-17.svg"
            />
            <div className="relative z-[2]">{`Super easy to use & Time Saving`}</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.81rem]">
            <img
              className="h-[1rem] w-[1rem] relative z-[2]"
              alt=""
              src="/vector-18.svg"
            />
            <div className="relative z-[2]">{`Super easy to use & Time Saving`}</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.81rem]">
            <img
              className="h-[1rem] w-[1rem] relative z-[2]"
              alt=""
              src="/vector-19.svg"
            />
            <div className="relative z-[2]">{`Super easy to use & Time Saving`}</div>
          </div>
        </div>
        <Button
          className="w-[9.69rem] h-[2.75rem] z-[2]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#110f6f",
            fontSize: "16",
            background: "#d9d9d9",
            borderRadius: "23px",
            "&:hover": { background: "#d9d9d9" },
            width: 155,
            height: 44,
          }}
        >
          Price Plan
        </Button>
      </div>
    </div>
  );
};

export default GroupComponent;
