import { Button } from "@nextui-org/react";

const buttons: string[] = [
  "Headache",
  "Nausea",
  "Diziness",
  "Shortness of breath",
];

const HowFeeling = () => {
  return (
    <div className="rounded-[8px] border-1 border-[#E5E5E5] text-secondary w-[386px] [&>*]:my-5 p-6">
      <p className=" font-bold text-[20px]">How are you feeling today?</p>
      <div className="flex items-center [&>*]:mx-2 [&>*]:cursor-pointer">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            stroke="#313B72"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 32C32 32 29 28 24 28C19 28 16 32 16 32M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            stroke="#313B72"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className=" font-bold text-[20px]">Track your symptoms</p>
      <div className="flex items-center flex-wrap">
        {buttons.map((button, i) => (
          <Button
            variant="bordered"
            radius="full"
            key={i}
            className="border-[1px]  border-secondary  h-[40px] m-1"
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HowFeeling;
