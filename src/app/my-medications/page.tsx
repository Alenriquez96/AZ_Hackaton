import Alert from "./components/Alert";

function MyMedications() {
  return (
    <main>
      <div className="flex items-center">
        <p className="font-bold text-[32px] leading-[76px] text-[#344054]">
          My Medications
        </p>
        <button className="bg-[#63A87D] w-[193px] h-[48px] py-[12px] px-[20px] text-white rounded-[50px]">
          + Add a medication
        </button>
      </div>
      <Alert />
      <div className="flex items-center">
        <button className="h-[48px] w-[200px] rounded-[50px] bg-[#3F3D58]">
          Manage Medications
        </button>
      </div>
      <div>
        <p>Current Medications</p>
        <div className="flex flex-wrap"></div>
      </div>
    </main>
  );
}

export default MyMedications;
