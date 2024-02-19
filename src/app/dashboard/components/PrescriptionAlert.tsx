import React from "react";

const PrescriptionAlert = () => {
  return (
    <div className="w-[674px] h-[72px] rounded-[12px] bg-[#F2F8FD] border-2 border-[#0972D3]">
      <div className="flex h-full items-center [&>*]:mx-3">
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11C0 15.4183 3.58172 19 8 19C12.4183 19 16 15.4183 16 11C16 6.58172 12.4183 3 8 3C3.58172 3 0 6.58172 0 11ZM14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM7 12V13H6V15H7H9H10V13H9V10H8H7H6V12H7ZM9 9V7H7V9H9Z"
            fill="#0972D3"
          />
        </svg>

        <div>
          <p>Prescription due soon</p>
          <p>Your prescription of Levothyroxine is due for renewal in 5 days</p>
        </div>
        <svg
          className="cursor-pointer"
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.364 6.05024L12.9497 4.63603L8 9.58577L3.05025 4.63603L1.63604 6.05024L6.58579 11L1.63604 15.9497L3.05025 17.3639L8 12.4142L12.9497 17.3639L14.364 15.9497L9.41421 11L14.364 6.05024Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default PrescriptionAlert;
