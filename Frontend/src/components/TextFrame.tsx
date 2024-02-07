import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TextFrame = () => {
  const navigate = useNavigate();
  const HandleRegister = () => {
    navigate("/register");
  };
  const HandleLogin = () => {
    navigate("/login");
  };
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0rem] box-border max-w-full text-left text-[2.88rem] text-white font-noto-sans">
      <div className="flex-1 flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.13rem] box-border gap-[7.38rem] bg-[url('/public/header-image-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-[7.38rem] mq750:gap-[7.38rem]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/header-image-1@2x.png"
        />
        <header className="self-stretch bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(146,_157,_197,_0.25)] flex flex-row items-start justify-center py-[0.63rem] px-[1.25rem] box-border gap-[13.44rem] top-[0] z-[99] sticky max-w-full text-left text-[0.88rem] text-black font-inter mq450:gap-[13.44rem] mq750:gap-[13.44rem] mq1100:gap-[13.44rem]">
          <div className="h-[3rem] w-[85.38rem] relative bg-whitesmoke-300 shadow-[0px_4px_4px_rgba(146,_157,_197,_0.25)] hidden max-w-full" />
          <img
            className="self-stretch w-[8.5rem] relative max-h-full object-cover min-h-[1.75rem] z-[1]"
            loading="eager"
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="w-[43.06rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq450:w-[31.38rem] mq1025:w-[21.94rem]">
            <div className="h-[1.13rem] flex flex-row items-start justify-start gap-[2.38rem] max-w-full mq450:gap-[2.38rem] mq1025:hidden">
              <div className="relative z-[1]">Home</div>
              <div className="relative whitespace-nowrap z-[1]">About us</div>
              <div className="relative z-[1]">Features</div>
              <div className="relative whitespace-nowrap z-[1]">Contact us</div>
            </div>
            <div className="w-[11.69rem] flex flex-row items-start justify-start gap-[0.94rem] mq450:hidden">
              <Button
                onClick={HandleLogin}
                className="h-[1.75rem] flex-[0.6444] z-[1]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1e2167",
                  fontSize: "12",
                  background: "#e7e7e7",
                  borderRadius: "3px",
                  "&:hover": { background: "#e7e7e7" },
                  height: 28,
                }}
              >
                Login
              </Button>
              <Button
                onClick={HandleRegister}
                className="h-[1.75rem] flex-1 z-[1]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "12",
                  background: "#1e2167",
                  borderRadius: "3px",
                  "&:hover": { background: "#1e2167" },
                  height: 28,
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.38rem] max-w-full">
          <div className="w-[40.25rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[0.44rem] max-w-full z-[2] font-quicksand">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0rem]">
              <h1 className="m-0 h-[3.63rem] relative text-inherit uppercase font-normal font-inherit inline-block mq450:text-[1.75rem] mq1025:text-[2.31rem]">
                A Complete Solution For
              </h1>
            </div>
            <div className="h-[4.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[2.63rem] font-noto-sans">
              <b className="h-[8rem] relative uppercase inline-block mq450:text-[1.56rem] mq1025:text-[2.13rem]">
                <p className="m-0">House Owner</p>
                <p className="m-0 text-[3.13rem]">House Management</p>
              </b>
            </div>
          </div>
          <h2 className="m-0 w-[24.38rem] h-[2.06rem] relative text-[1.5rem] uppercase font-normal font-inherit inline-block max-w-full pl-[1.25rem] pr-[1.25rem] z-[2] mq450:text-[1.19rem]">
            House management system
          </h2>
          <div className="w-[20.75rem] h-[8.06rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[2.13rem] max-w-full text-[1rem] mq450:gap-[2.13rem]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.44rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.69rem] pl-[0.5rem]">
                <div className="flex-1 flex flex-row items-end justify-start gap-[0.81rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative z-[2]"
                    loading="eager"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="relative z-[2]">{`Super easy to use & Time Saving`}</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.69rem]">
                <img
                  className="h-[1rem] w-[1rem] relative z-[2]"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="relative z-[2]">
                  Proper house management system
                </div>
              </div>
            </div>
            <div className="w-[11.38rem] flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.69rem] box-border">
              <Button
                className="self-stretch flex-1 z-[3]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#110f6f",
                  fontSize: "16",
                  background: "#d9d9d9",
                  borderRadius: "23px",
                  "&:hover": { background: "#d9d9d9" },
                }}
              >
                Price Plan
              </Button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch h-[0.78rem] relative bg-midnightblue-200 z-[3]" />
            <div className="self-stretch h-[1.05rem] relative bg-midnightblue-300 z-[2]" />
            <div className="self-stretch h-[1.32rem] relative bg-midnightblue-400 z-[3]" />
            <div className="self-stretch h-[1.86rem] relative bg-midnightblue-500 z-[2]" />
            <div className="self-stretch h-[2.13rem] relative bg-midnightblue-100 z-[2]">
              <div className="absolute top-[-0.01rem] left-[0rem] bg-midnightblue-100 w-full h-full hidden" />
            </div>
          </div>
        </div>
        <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden" />
      </div>
    </section>
  );
};

export default TextFrame;
