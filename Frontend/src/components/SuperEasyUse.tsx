import { FunctionComponent, useMemo, type CSSProperties } from "react";

type SuperEasyUseType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propTop1?: CSSProperties["top"];
  propTop2?: CSSProperties["top"];
  propTop3?: CSSProperties["top"];
};

const SuperEasyUse: FunctionComponent<SuperEasyUseType> = ({
  propTop,
  propTop1,
  propTop2,
  propTop3,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const superEasy1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop2,
    };
  }, [propTop2]);

  const superEasy11Style: CSSProperties = useMemo(() => {
    return {
      top: propTop3,
    };
  }, [propTop3]);

  return (
    <div className="self-stretch w-[20.31rem] shrink-0 flex flex-col items-start justify-start gap-[2rem] text-left text-[1.13rem] text-gray-300 font-noto-sans">
      <div className="self-stretch flex-1 flex flex-row items-center justify-center max-w-full z-[1]">
        <div className="self-stretch flex-1 flex flex-row items-center justify-start pt-[1.75rem] pb-[1.81rem] pr-[1.63rem] pl-[1.44rem] box-border relative gap-[1.38rem] max-w-full">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-4xs bg-whitesmoke-500 box-border border-[0.5px] border-solid border-darkgray-100" />
          <div className="h-[4.19rem] w-[2.75rem] relative z-[1]">
            <div
              className="absolute top-[0rem] left-[0rem] w-full h-full"
              style={groupDivStyle}
            >
              <div className="absolute top-[0rem] left-[1.13rem] rounded-7xs-5 bg-gainsboro-600 w-[0.5rem] h-[4.19rem]" />
              <div className="absolute top-[0.75rem] left-[0rem] rounded-[50%] bg-gainsboro-600 w-[2.75rem] h-[2.69rem] z-[1]" />
            </div>
            <img
              className="absolute top-[1.19rem] left-[0.75rem] w-[1.25rem] h-[1.81rem] object-cover z-[2]"
              loading="eager"
              alt=""
              src="/super-easy-1@2x.png"
              style={superEasy1Style}
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
      <div className="self-stretch flex-1 flex flex-row items-center justify-center max-w-full z-[1]">
        <div className="self-stretch flex-1 flex flex-row items-center justify-start pt-[1.75rem] pb-[1.81rem] pr-[1.63rem] pl-[1.44rem] box-border relative gap-[1.38rem] max-w-full">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-4xs bg-whitesmoke-500 box-border border-[0.5px] border-solid border-darkgray-100" />
          <div className="h-[4.19rem] w-[2.75rem] relative z-[1]">
            <div
              className="absolute top-[0rem] left-[0rem] w-full h-full"
              style={groupDiv1Style}
            >
              <div className="absolute top-[0rem] left-[1.13rem] rounded-7xs-5 bg-gainsboro-600 w-[0.5rem] h-[4.19rem]" />
              <div className="absolute top-[0.75rem] left-[0rem] rounded-[50%] bg-gainsboro-600 w-[2.75rem] h-[2.69rem] z-[1]" />
            </div>
            <img
              className="absolute top-[1.19rem] left-[0.75rem] w-[1.25rem] h-[1.81rem] object-cover z-[2]"
              alt=""
              src="/super-easy-1@2x.png"
              style={superEasy11Style}
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
  );
};

export default SuperEasyUse;
