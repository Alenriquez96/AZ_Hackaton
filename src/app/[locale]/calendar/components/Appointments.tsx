import { IconCalendar, IconPencil, IconTrash } from "@tabler/icons-react";

interface AppointmentsProps {
  title: string;
  range: string;
  date: Date;
}

const Appointments = ({ title, range, date }: AppointmentsProps) => {
  return (
    <div className="flex flex-row justify-between items-center border-1 border-[#63A87D] rounded-lg my-2 p-4">
      <IconCalendar />
      <p>{date.toISOString().slice(5, 10)}</p>
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p>{range}</p>
      </div>
      <IconPencil />
      <IconTrash />
    </div>
  );
};

export default Appointments;
