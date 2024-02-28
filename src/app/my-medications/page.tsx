import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { IconPill } from "@tabler/icons-react";
import Text from "@/app/components/Text";
import { IconFilter, IconArrowsSort } from "@tabler/icons-react";

interface medications {
  name: string;
}

const currentMedications: medications[] = [
  {
    name: "Atorvastatin",
  },
  {
    name: "Insulin",
  },
  {
    name: "Levothyroxine",
  },
];

const pastMedications: medications[] = [
  {
    name: "Morphine",
  },
  {
    name: "Aspirin",
  },
  {
    name: "Sertraline",
  },
];

function MyMedications() {
  return (
    <main className="min-h-screen">
      <div className="flex m-11 justify-evenly">
        <section className="flex flex-col  justify-around">
          <Text>My Medications</Text>
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="w-[202px] h-[50px]"
          >
            Manage Medications
          </Button>
          <div className="flex flex-col ">
            <Text>
              Current Medications ({currentMedications.length.toString()})
            </Text>
            <div className="flex items-center [&>*]:mr-8">
              {currentMedications.map((med) => (
                <Card
                  isPressable
                  className="min-h-[200px] min-w-[200px] bg-[#F1EFE9] "
                >
                  <CardBody>
                    <IconPill size={50} />
                  </CardBody>
                  <CardHeader>{med.name}</CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <Text>Past Medications ({pastMedications.length.toString()})</Text>
            <div className="flex items-center [&>*]:mr-8">
              {pastMedications.map((med) => (
                <Card
                  isPressable
                  className="min-h-[200px] min-w-[200px] bg-[#F1EFE9]"
                >
                  <CardBody>
                    <IconPill size={50} />
                  </CardBody>
                  <CardHeader>{med.name}</CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <div className="flex flex-col">
          <Button
            className="bg-[#63A87D] text-white w-[202px] h-[50px]"
            radius="full"
          >
            + Add a medication
          </Button>
          <div className="flex items-center justify-between my-2">
            <Button
              endContent={<IconFilter />}
              variant="bordered"
              radius="full"
            >
              Filter
            </Button>
            <Button
              endContent={<IconArrowsSort />}
              variant="bordered"
              radius="full"
            >
              Sort
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyMedications;
