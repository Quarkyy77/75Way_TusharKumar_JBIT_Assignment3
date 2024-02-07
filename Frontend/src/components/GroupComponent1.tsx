import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

const GroupComponent1: FunctionComponent = () => {
  return (
    <div className="self-stretch h-[13.38rem] relative [background:linear-gradient(180deg,_#7c9dbc_19.79%,_#607f9b_70.83%,_#354f68)] z-[2] mt-[-0.06rem] text-left text-[1.25rem] text-white font-noto-sans">
      <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(180deg,_#7c9dbc_19.79%,_#607f9b_70.83%,_#354f68)] w-full h-full hidden" />
      <div className="absolute top-[2.88rem] left-[14.94rem] w-[55.44rem] h-[7.69rem] z-[3]">
        <FrameComponent />
        <FrameComponent propLeft="16.69rem" />
        <FrameComponent propLeft="33.38rem" />
        <FrameComponent propLeft="50.06rem" />
      </div>
    </div>
  );
};

export default GroupComponent1;
