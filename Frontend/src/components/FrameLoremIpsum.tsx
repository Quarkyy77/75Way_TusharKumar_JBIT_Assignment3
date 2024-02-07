import { FunctionComponent } from "react";
import SuperEasyUse from "./SuperEasyUse";

const FrameLoremIpsum: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-aliceblue-100 flex flex-col items-center justify-start pt-[5.94rem] px-[0rem] pb-[0rem] box-border gap-[10.5rem] max-w-full text-left text-[0.88rem] text-gray-300 font-noto-sans mq450:gap-[10.5rem] mq750:gap-[10.5rem] mq750:pt-[2.5rem] mq750:box-border mq1025:pt-[3.88rem] mq1025:box-border">
      <div className="self-stretch h-[61.63rem] relative bg-aliceblue-100 hidden" />
      <div className="flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[2.94rem] max-w-full mq750:gap-[2.94rem]">
        <div className="w-[32.81rem] flex flex-col items-center justify-start gap-[0.5rem] max-w-full">
          <div className="relative uppercase z-[1]">About us</div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.13rem] text-[2rem]">
            <h1 className="m-0 h-[2.75rem] relative text-inherit uppercase inline-block z-[1] font-inherit mq450:text-[1.19rem] mq1025:text-[1.63rem]">
              <span>About</span>
              <b> House Rent</b>
            </h1>
            <div className="w-[8.75rem] h-[0.63rem] flex flex-row items-center justify-start py-[0rem] pr-[0.13rem] pl-[0rem] box-border gap-[0.56rem]">
              <div className="h-[0.13rem] flex-1 relative rounded-12xs bg-steelblue-100 z-[1]" />
              <div className="h-[0.6rem] w-[0.6rem] relative rounded-[50%] bg-steelblue-100 z-[1]" />
              <div className="h-[0.13rem] flex-1 relative rounded-12xs bg-steelblue-100 z-[1]" />
            </div>
            <div className="self-stretch relative text-[0.88rem] leading-[1.31rem] font-light text-darkslategray-200 text-center z-[1]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </div>
          </div>
        </div>
        <div className="w-[65rem] h-[23.88rem] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[2rem] max-w-full text-[1.13rem] mq750:gap-[2rem]">
          <SuperEasyUse />
          <SuperEasyUse
            propTop="0rem"
            propTop1="1.19rem"
            propTop2="0rem"
            propTop3="1.19rem"
          />
          <SuperEasyUse
            propTop="0.03rem"
            propTop1="1.22rem"
            propTop2="0.03rem"
            propTop3="1.22rem"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-[1.13rem]">
        <img
          className="h-[8.44rem] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="eager"
          alt=""
          src="/texture-1@2x.png"
        />
        <div className="h-[10.94rem] w-[20.31rem] my-0 mx-[!important] absolute top-[-8.5rem] left-[32.5rem] flex flex-row items-center justify-center max-w-full z-[2]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start pt-[1.75rem] pb-[1.81rem] pr-[1.63rem] pl-[1.44rem] box-border relative gap-[1.38rem] max-w-full">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-4xs bg-whitesmoke-500 box-border border-[0.5px] border-solid border-darkgray-100" />
            <div className="h-[4.19rem] w-[2.75rem] relative z-[1]">
              <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                <div className="absolute top-[0rem] left-[1.13rem] rounded-7xs-5 bg-gainsboro-600 w-[0.5rem] h-[4.19rem]" />
                <div className="absolute top-[0.75rem] left-[0rem] rounded-[50%] bg-gainsboro-600 w-[2.75rem] h-[2.69rem] z-[1]" />
              </div>
              <img
                className="absolute top-[1.19rem] left-[0.75rem] w-[1.25rem] h-[1.81rem] object-cover z-[2]"
                alt=""
                src="/super-easy-1@2x.png"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.69rem] z-[1]">
              <div className="h-[1.56rem] relative uppercase inline-block">
                <span>Super</span>
                <b> Easy</b>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.38rem] text-[0.88rem] text-slategray-200">
                <div className="flex-1 flex flex-row items-start justify-start gap-[0.44rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[0.88rem] h-[0.88rem] relative"
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                  <div className="self-stretch relative">
                    <p className="m-0">{`Super easy to use & Time `}</p>
                    <p className="m-0">Saving.</p>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0.44rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[0.88rem] h-[0.88rem] relative"
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="self-stretch relative">
                      <p className="m-0">{`Proper house management `}</p>
                      <p className="m-0">system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameLoremIpsum;
