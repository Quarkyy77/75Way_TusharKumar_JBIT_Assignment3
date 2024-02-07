import { FunctionComponent } from "react";
import TextFrame from "../components/TextFrame";
import ShapeGroup from "../components/ShapeGroup";
import FrameLoremIpsum from "../components/FrameLoremIpsum";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import RectangleShapeVector from "../components/RectangleShapeVector";
import VectorGroup from "../components/VectorGroup";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.19rem] box-border tracking-[normal]">
      <TextFrame />
      <div className="self-stretch h-[0.06rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.19rem] box-border max-w-full">
        <div className="h-[-0.5rem] flex-1 relative [background:linear-gradient(180deg,_rgba(9,_14,_58,_0.57),_rgba(9,_14,_53,_0.9))] max-w-full z-[1]" />
      </div>
      <div className="self-stretch h-[0.19rem] relative bg-gainsboro-500 hidden" />
      <div className="self-stretch h-[0.51rem] relative bg-midnightblue-600 hidden" />
      <ShapeGroup />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FrameLoremIpsum />
        <GroupComponent1 />
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <GroupComponent />
          <RectangleShapeVector />
          <VectorGroup />
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
          alt=""
          src="/image-1@2x.png"
        />
      </section>
    </div>
  );
};

export default Desktop;
