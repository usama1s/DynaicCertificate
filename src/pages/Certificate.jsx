import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";

const html2pdf = require("html2pdf.js/dist/html2pdf.js");

const Certificate = () => {
  const [formState, setFormState] = useState({
    logo: undefined,
    logow: 0,
    title: "CERTIFICATE OF COMPLETION",
    sub: "INGRID M. MATHIS",
    reason: "for completing Speed of Trust",
    issuing: "HOWARD ONG",
    issuingName: "Course Issuing",
    authority: "College Authority",
    authorityName: "BIANCA DELA RIO",
    watermark: undefined,
    watermarkW: 0,
    watermarkO: 0,
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "file" ? URL.createObjectURL(event.target.files[0]) : value;
    setFormState({ ...formState, [name]: newValue });
  };

  const HandleButtonClick = () => {
    const element = document.getElementById("certificate");
    const opt = {
      margin: 4,
      html2canvas: { x: 0, windowWidth: 850 },
      jsPDF: { format: "letter", orientation: "landscape" },
      fileName: "Certificate.pdf",
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {});
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
            <CustomInput
              label="Logo Sizes (width)"
              type="number"
              name="logow"
              onChange={handleInputChange}
            />
            <CustomInput
              label="Title"
              type="text"
              name="title"
              value={formState.title}
              onChange={handleInputChange}
            />
            <CustomInput
              label="Subject"
              type="text"
              name="sub"
              value={formState.sub}
              onChange={handleInputChange}
            />
            <CustomInput
              label="Reason"
              type="text"
              name="reason"
              value={formState.reason}
              onChange={handleInputChange}
            />
            <CustomInput
              label="Issuing"
              type="text"
              name="issuing"
              value={formState.issuing}
              onChange={handleInputChange}
            />
            <CustomInput
              label="Issuing Name"
              type="text"
              name="issuingName"
              value={formState.issuingName}
              onChange={handleInputChange}
            />
            <CustomInput
              label="Authority"
              type="text"
              name="authority"
              value={formState.authority}
              onChange={handleInputChange}
            />
            <CustomInput
              label="Authority Name"
              type="text"
              name="authorityName"
              value={formState.authorityName}
              onChange={handleInputChange}
            />
            <CustomInput
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
                onChange={handleInputChange}
              />
              <CustomInput
                label="Opacity"
                type="number"
                name="watermarkO"
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="text-white bg-c-gold hover:bg-c-gold2 focus:ring-4 focus:ring-c-gold font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              onClick={HandleButtonClick}
            >
              Download PDF
            </button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center mt-6 col-span-7">
          <div
            className="bg-white w-[778px] h-[602px] min-w-[778px] min-h-[602px] xl:col-span-7 flex items-center justify-center"
            id="certificate"
            style={{
              position: "relative",
              zIndex: "10",
            }}
          >
            <div
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
            ></div>
            <div className="flex flex-col justify-center items-center z-20">
              {/* Top */}
              <img
                src="/assets/design.png"
                alt="top design"
                className="mb-10"
              />
              {/* Middle  */}
              <div className="flex flex-col items-center gap-5 w-4/5">
                <img
                  src={formState.logo}
                  alt="logo img"
                  style={{
                    width: formState.logow
                      ? `${Math.min(Math.max(formState.logow, 1), 100)}%`
                      : "40%",
                    borderRadius: "50%",
                    marginTop: "8px",
                  }}
                />
                <h4 className="text-c-gold text-2xl font-cinzel">
                  {formState.title}
                </h4>
                <p className="text-c-gray italic font-lora">
                  This is presented to
                </p>
                <h5 className="text-6xl text-c-gold text-center font-cinzel">
                  {formState.sub}
                </h5>
                <p className="text-xl text-c-gray font-lora">
                  {formState.reason}
                </p>
              </div>
              {/* bottom */}
              <div className="mx-4 mt-8 flex flex-col items-center ">
                <div className="flex justify-between w-[80%] mt-10">
                  <div className="flex flex-col items-center">
                    <span className="border-t-2 border-gray-500 w-64"></span>
                    <p className="text-lg text-c-gold font-cinzel">
                      {formState.issuingName}
                    </p>
                    <h4 className="text-base text-c-gray font-lora">
                      {formState.issuing}
                    </h4>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="border-t-2 border-gray-500 w-64"></span>
                    <p className="text-lg text-c-gold font-cinzel">
                      {formState.authorityName}
                    </p>
                    <h4 className="text-base text-c-gray font-lora">
                      {formState.authority}
                    </h4>
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
