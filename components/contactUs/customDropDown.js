"use client";
import React, { useState } from "react";

function CustomSelect(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`w-full h-14 md:h-14 md:w-[620px] bg-slate-900 pl-4 rounded-md outline-0 focus:outline-1 focus:outline-blue-950 flex items-center ${
          isOpen ? "rounded-t-md" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue || "Select an option"}
      </div>
      {isOpen && (
        <div className="w-full md:w-[620px] absolute top-12 left-0 right-0 bg-[#141528] text-white rounded-b-md">
          {props.options.map((option, index) => (
            <div
              key={index}
              className={`px-4 py-2 border border-[#212346] hover:bg-blue-900 cursor-pointer ${
                option.value === selectedValue ? "bg-blue-950" : "bg-[#141528]"
              }`}
              onClick={() => handleSelectChange(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <input
        type="hidden"
        className="bg-slate-900 h-14 md:w-72 w-full md:h-14 pl-4 rounded-md outline-0 focus:outline-1 focus:outline-blue-950"
        name="SelectedService"
        value={selectedValue}
      />
    </div>
  );
}

export default CustomSelect;
