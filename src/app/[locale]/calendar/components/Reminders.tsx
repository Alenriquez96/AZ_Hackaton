import { IconBell, IconPencil, IconTrash } from "@tabler/icons-react";

interface ReminderProps {
  date: Date;
  title: string;
  deleteReminder: () => void;
}

const Reminders = ({ date, title, deleteReminder }: ReminderProps) => {
  return (
    <div className="bg-[#67D7D1] rounded-lg text-black flex items-center justify-between my-2 p-4 [&>*]:mx-1">
      <IconBell width={20} height={20} />
      <p>{date.toISOString().slice(5, 10)}</p>
      <p>
        <span className="font-black">Reminder: {"  "}</span>
        {title}
      </p>
      <IconPencil width={20} height={20} />
      <IconTrash onClick={deleteReminder} width={20} height={20} />
    </div>
  );
};

export default Reminders;
