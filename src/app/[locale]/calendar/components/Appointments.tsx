import { Card, CardBody } from "@nextui-org/react";
import { IconCalendar, IconPencil, IconTrash } from "@tabler/icons-react";

interface AppointmentsProps {
  title: string;
  range: string;
  date: Date;
  deleteAppointment: () => void;
}

const Appointments = ({
  title,
  range,
  date,
  deleteAppointment,
}: AppointmentsProps) => {
  return (
    <Card shadow="lg" className="border-1 border-[#63A87D] w-[350px]">
      <CardBody className="flex flex-row justify-between items-center  ">
        <IconCalendar width={20} height={20} />
        <p>{date.toISOString().slice(5, 10)}</p>
        <div className="flex flex-col">
          <h3>{title}</h3>
          <p>{range}</p>
        </div>
        <IconPencil width={20} height={20} />
        <IconTrash
          cursor={"pointer"}
          onClick={deleteAppointment}
          width={20}
          height={20}
        />
      </CardBody>
    </Card>
  );
};

export default Appointments;
