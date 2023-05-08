import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const html2pdf = require("html2pdf.js/dist/html2pdf.js");

const Certificate = () => {
  const [formState, setFormState] = useState({
    logo: undefined,
    title: "CERTIFICATE OF COMPLETION",
    sub: "INGRID M. MATHIS",
    reason: "for completing Speed of Trust",
    facilitator: "HOWARD ONG",
    facilitatorName: "Course Facilitator",
    president: "College President",
    presidentName: "BIANCA DELA RIO",
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
    <div className="font-rubikfont">
      <section className="grid xl:grid-cols-9 px-1">
        <div className="xl:col-span-2 pt-4 border-r-[1px] overflow-y-auto xl:min-w-[310px] col-span-9 min-w-full">
          <h4 className="font-semibold text-center text-gray-700 underline">
            Certificate Inputs
          </h4>
          <div className="m-4 flex flex-col gap-4">
            <CustomInput
              label="Logo"
              type="file"
              name="logo"
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
              label="Facilitator"
              type="text"
              name="facilitator"
              value={formState.facilitator}
              onChange={handleInputChange}
            />
            <CustomInput
              label="Facilitator Name"
              type="text"
              name="facilitatorName"
              value={formState.facilitatorName}
              onChange={handleInputChange}
            />
            <CustomInput
              label="President"
              type="text"
              name="president"
              value={formState.president}
              onChange={handleInputChange}
            />
            <CustomInput
              label="President Name"
              type="text"
              name="presidentName"
              value={formState.presidentName}
              onChange={handleInputChange}
            />
            <button
              type="button"
              class="text-white bg-c-gold hover:bg-c-gold2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              onClick={HandleButtonClick}
            >
              Download PDF
            </button>
          </div>
        </div>
        <div className="xl:col-span-7 flex items-center" id="certificate">
          <div className="flex flex-col justify-center items-center">
            <img src="/assets/design.png" />
            <div className="flex flex-col items-center gap-5 w-4/5">
              <img
                src={formState.logo}
                alt="logo img"
                className="w-40 h-40 rounded-full mt-8"
              />
              <h4 className="text-c-gold text-2xl">{formState.title}</h4>
              <p className="text-c-gray italic">This is presented to</p>
              <h5 className="text-7xl text-c-gold text-center">
                {formState.sub}
              </h5>
              <p className="text-xl text-c-gray ">{formState.reason}</p>
              <div className="flex justify-between w-full mt-10">
                <div className="flex flex-col items-center">
                  <span className="border-t-2 border-gray-500 w-64"></span>
                  <p className="text-lg text-c-gold">
                    {formState.facilitatorName}
                  </p>
                  <h4 className="text-base text-c-gray">
                    {formState.facilitator}
                  </h4>
                </div>
                <div className="flex flex-col items-center">
                  <span className="border-t-2 border-gray-500 w-64"></span>
                  <p className="text-lg text-c-gold">
                    {formState.presidentName}
                  </p>
                  <h4 className="text-base text-c-gray">
                    {formState.president}
                  </h4>
                </div>
              </div>
            </div>
            <img src="/assets/design.png" className="rotate-180" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
