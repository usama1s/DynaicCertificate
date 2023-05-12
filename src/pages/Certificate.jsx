import React, { useState, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import TextAreaInput from "../components/TextAreaInput";
import DeafultLogo from "../logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const html2pdf = require("html2pdf.js/dist/html2pdf.js");

const Certificate = () => {
  const [formState, setFormState] = useState({
    logo: DeafultLogo,
    // logow: 10,
    title: "CERTIFICATE OF COMPLETION",
    sub: "INGRID M. MATHIS",
    reason: "for completing Speed of Trust",
    issuing: "HOWARD ONG",
    issuingName: "Course Issuing",
    authority: "College Authority",
    authorityName: "BIANCA DELA RIO",
    // watermark: DeafultLogo,
    // watermarkW: 50,
    // watermarkO: 20,
    Signature1: "",
    Signature2: "",
  });

  const [sidebar, setSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "file" ? URL.createObjectURL(event.target.files[0]) : value;
    setFormState({ ...formState, [name]: newValue });
  };

  let pdfName = formState.title + ".pdf";

  const HandleButtonClick = () => {
    const element = document.getElementById("certificate");

    const opt = {
      margin: 0,
      html2canvas: { x: 0 },
      jsPDF: { unit: "px", format: [1295, 920], orientation: "landscape" },
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save(opt.fileName)
      .then(() => {});
  };

  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebar(window.innerWidth < 1280);
      if (window.innerWidth > 1280) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <GiHamburgerMenu
        onClick={() => {
          toggleSideBar();
        }}
        className="xl:hidden block h-10 w-10 pt-2 pl-2 cursor-pointer"
      />

      <section className="flex flex-row px-1 relative w-full">
        {sidebar && (
          <div
            className={`${
              sidebar ? "block" : "hidden "
            } origin-top-left scale-[2] md:scale-150 xl:scale-[1] border-r-[1px] max-w-[310px] min-w-[310px] lg:relative bg-gray-50 max-h-screen min-h-screen z-[100] absolute top-0 left-0 overflow-x-hidden`}
          >
            <div className="m-4 flex flex-col gap-4">
              <CustomInput
                label="Logo"
                type="file"
                name="logo"
                onChange={handleInputChange}
              />
              {/* <CustomInput
              label="Logo Sizes (width)"
              type="number"
              name="logow"
              onChange={handleInputChange}
            /> */}
              <TextAreaInput
                label="Title"
                type="text"
                name="title"
                value={formState.title}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Subject"
                type="text"
                name="sub"
                value={formState.sub}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Reason"
                type="text"
                name="reason"
                value={formState.reason}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Issuing"
                type="text"
                name="issuing"
                value={formState.issuing}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Issuing Name"
                type="text"
                name="issuingName"
                value={formState.issuingName}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Issuing Signature"
                type="text"
                name="Signature1"
                value={formState.Signature1}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Authority"
                type="text"
                name="authority"
                value={formState.authority}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Authority Name"
                type="text"
                name="authorityName"
                value={formState.authorityName}
                onChange={handleInputChange}
              />
              <TextAreaInput
                label="Authority Signature"
                type="text"
                name="Signature2"
                value={formState.Signature2}
                onChange={handleInputChange}
              />
              {/* <CustomInput
              label="Watermark"
              type="file"
              name="watermark"
              onChange={handleInputChange}
            />
            <div className="flex gap-4">
              <CustomInput
                label="Watermark Sizes"
                type="number"
                name="watermarkW"
                value={formState.watermarkW}
                onChange={handleInputChange}
              />
              <CustomInput
                label="Opacity"
                type="number"
                name="watermarkO"
                value={formState.watermarkO}
                onChange={handleInputChange}
              />
            </div> */}

              <button
                type="button"
                className="text-white bg-c-gold hover:bg-c-gold2 focus:ring-4 focus:ring-c-gold font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                onClick={HandleButtonClick}
              >
                Download PDF
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-center mt-9 w-full">
          <div
            className="bg-white w-[962px] h-[680px] min-w-[962px] min-h-[680px]  xl:col-span-7 flex items-center justify-center relative z-10"
            id="certificate"
          >
            {/* <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundImage: `url(${formState.watermark})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                opacity: `${formState.watermarkO / 100}`,
                width: `${Math.min(formState.watermarkW, 100)}%`,
                height: `${Math.min(formState.watermarkW, 100)}%`,
              }}
            ></div> */}
            <div className="flex flex-col justify-center items-center z-20 w-full pt-0 px-[100px]">
              {/* Top */}
              <img
                src="/assets/design.png"
                alt="top design"
                className="absolute top-[40px] "
              />
              {/* Middle  */}
              <div className="flex flex-col items-center gap-5 w-full">
                <div className="w-20 h-20">
                  <img
                    src={formState.logo}
                    alt="logo img"
                    className="w-full h-auto rounded-full"
                    // style={{
                    //   width: formState.logow
                    //     ? `${Math.min(Math.max(formState.logow, 1), 100)}%`
                    //     : "40%",
                    //   borderRadius: "50%",
                    //   marginTop: "8px",
                    // }}
                  />
                </div>
                <h4
                  className="text-c-gold text-2xl font-cinzel"
                  dangerouslySetInnerHTML={{
                    __html: formState.title.replace(/\n/g, "<br>"),
                  }}
                ></h4>
                <p className="text-c-gray italic font-lora">
                  This is presented to
                </p>
                <h5
                  className="text-6xl text-c-gold text-center font-cinzel"
                  dangerouslySetInnerHTML={{
                    __html: formState.sub.replace(/\n/g, "<br>"),
                  }}
                ></h5>
                <p
                  className="text-xl text-center text-c-gray font-lora"
                  dangerouslySetInnerHTML={{
                    __html: formState.reason.replace(/\n/g, "<br>"),
                  }}
                ></p>
              </div>
              {/* bottom */}
              <div className="flex justify-between items-end w-full mt-10">
                <div className="flex flex-col gap-2 items-center">
                  <p
                    className="text-5xl text-c-gold font-jonathan"
                    dangerouslySetInnerHTML={{
                      __html: formState.Signature1.replace(/\n/g, "<br>"),
                    }}
                  ></p>
                  <span className="border-b-2 border-gray-500 w-64 h-3"></span>
                  <p
                    className="text-lg text-c-gold font-cinzel -mb-2"
                    dangerouslySetInnerHTML={{
                      __html: formState.issuingName.replace(/\n/g, "<br>"),
                    }}
                  ></p>
                  <h4
                    className="text-base text-c-gray font-lora"
                    dangerouslySetInnerHTML={{
                      __html: formState.issuing.replace(/\n/g, "<br>"),
                    }}
                  ></h4>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <p
                    className="text-5xl text-c-gold font-jonathan"
                    dangerouslySetInnerHTML={{
                      __html: formState.Signature2.replace(/\n/g, "<br>"),
                    }}
                  ></p>
                  <span className="border-b-2 border-gray-500 w-64 h-3"></span>
                  <p
                    className="text-lg text-c-gold font-cinzel -mb-2"
                    dangerouslySetInnerHTML={{
                      __html: formState.authorityName.replace(/\n/g, "<br>"),
                    }}
                  ></p>
                  <h4
                    className="text-base text-c-gray font-lora"
                    dangerouslySetInnerHTML={{
                      __html: formState.authority.replace(/\n/g, "<br>"),
                    }}
                  ></h4>
                </div>
              </div>
              <img
                src="/assets/design.png"
                alt="bottom design"
                className="rotate-180 absolute bottom-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
