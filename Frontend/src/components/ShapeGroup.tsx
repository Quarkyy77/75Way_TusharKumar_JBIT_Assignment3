import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import VectorIcon from "./VectorIcon";

const ShapeGroup: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-whitesmoke-400 flex flex-col items-center justify-start pt-[4.06rem] px-[0rem] pb-[0rem] box-border gap-[4.44rem] max-w-full text-left text-[0.88rem] text-gray-300 font-noto-sans mq450:gap-[4.44rem] mq750:gap-[4.44rem] mq750:pt-[2.63rem] mq750:box-border">
      <div className="self-stretch h-[31.06rem] relative bg-whitesmoke-400 hidden" />
      <div className="w-[73.63rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full">
        <div className="w-[68.44rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1025:flex-wrap">
          <div className="w-[27.94rem] flex flex-col items-start justify-start gap-[1.63rem] min-w-[27.94rem] max-w-full mq750:min-w-full mq1025:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative uppercase z-[1]">About us</div>
                <div className="flex flex-col items-start justify-start gap-[1rem] text-[2rem]">
                  <div className="flex flex-row items-center justify-center z-[1]">
                    <h1 className="m-0 h-[2.75rem] relative text-inherit uppercase inline-block font-inherit mq450:text-[1.19rem] mq1025:text-[1.63rem]">
                      <span className="font-light">About</span>
                      <b>{` `}</b>
                      <span className="font-semibold">House Rent</span>
                    </h1>
                  </div>
                  <img
                    className="w-[5rem] h-[0.88rem] relative z-[1]"
                    loading="eager"
                    alt=""
                    src="/group-10.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-light text-dimgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] z-[1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <Button
              className="w-[8.69rem] h-[2.44rem] z-[1]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background:
                  "linear-gradient(180deg, rgba(37, 64, 115, 0.7), #254073)",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(37, 64, 115, 0.7), #254073)",
                },
                width: 139,
                height: 39,
              }}
            >
              More About Us
            </Button>
          </div>
          <div className="h-[19.06rem] w-[31.5rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border min-w-[31.5rem] max-w-full mq750:min-w-full mq1025:flex-1">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq1025:self-stretch mq1025:w-auto"
              loading="eager"
              alt=""
              src="/component-2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[3.5rem] relative">
        <img
          className="absolute top-[0.03rem] left-[0rem] w-full h-full z-[1]"
          alt=""
          src="/subscribe-send.svg"
        />
        <VectorIcon />
      </div>
    </section>
  );
};

export default ShapeGroup;
