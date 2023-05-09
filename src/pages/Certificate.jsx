import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import DeafultLogo from "../logo.svg";
import TextAreaInput from "./TextAreaInput";
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

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "file" ? URL.createObjectURL(event.target.files[0]) : value;
    setFormState({ ...formState, [name]: newValue });
  };

  let pdfName = formState.title + ".pdf";

  const HandleButtonClick = () => {
    const element = document.getElementById("certificate");
    // element.style.width = "962px";
    // element.style.height = "860px";
    const opt = {
      margin: 0,
      html2canvas: { x: 0 },
      jsPDF: { unit: "px", format: [962, 860], orientation: "landscape" },
      fileName: pdfName,
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save(opt.fileName)
      .then(() => {
        // element.style.width = "";
        // element.style.height = "";
      });
  };

  return (
    <div>
      <section className="grid xl:grid-cols-9 px-1">
        <div className="xl:col-span-2 pt-4 border-r-[1px] overflow-y-auto xl:min-w-[310px] col-span-9 min-w-full">
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
        <div className=" flex justify-center mt-9 col-span-7">
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
            <div className="flex flex-col justify-center items-center z-20">
              {/* Top */}
              <img
                src="/assets/design.png"
                alt="top design"
                className="mb-10"
              />
              {/* Middle  */}
              <div className="flex flex-col items-center gap-5 w-4/5">
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
                  className="text-xl text-c-gray font-lora"
                  dangerouslySetInnerHTML={{
                    __html: formState.reason.replace(/\n/g, "<br>"),
                  }}
                ></p>
              </div>
              {/* bottom */}
              <div className="mx-4 mt-8 flex flex-col items-center ">
                <div className="flex justify-between w-[80%] mt-10">
                  <div className="flex flex-col items-center">
                    <p
                      className="text-3xl text-c-gold font-jonathan"
                      dangerouslySetInnerHTML={{
                        __html: formState.Signature1.replace(/\n/g, "<br>"),
                      }}
                    ></p>
                    <span className="border-t-2 border-gray-500 w-64"></span>
                    <p
                      className="text-lg text-c-gold font-cinzel"
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
                  <div className="flex flex-col items-center">
                    <p
                      className="text-3xl text-c-gold font-jonathan"
                      dangerouslySetInnerHTML={{
                        __html: formState.Signature2.replace(/\n/g, "<br>"),
                      }}
                    ></p>
                    <span className="border-t-2 border-gray-500 w-64"></span>
                    <p
                      className="text-lg text-c-gold font-cinzel"
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
                  className="rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
