import RegionSelect from "./components/RegionSelect";
import Text from "@/app/components/Text";
import { Title } from "@/app/components/Title";
import { Card, CardBody } from "@nextui-org/react";
import DistributionTable from "../../assets/GobalDistributionTable.svg";
import TherapeuticGraph from "../../assets/TherapeuticGraph.svg";
import UserAdoption from "../../assets/UserAdoption.svg";

import Image from "next/image";

const PortfolioAnalyticsPage = () => {
  return (
    <main className="min-h-screen flex justify-evenly flex-wrap m-12">
      <section className="flex flex-col items-start [&>*]:my-2 [&>*]:w-full">
        <Text>Portfolio Analytics</Text>
        <RegionSelect />
        <Title>Global Sessions</Title>
        <Card>
          <CardBody>
            <Image
              width={700}
              src={DistributionTable}
              alt="Global Distribution"
            />
          </CardBody>
        </Card>
        <Title>Therapeutic Area</Title>
        <Card>
          <CardBody>
            <Image width={700} src={TherapeuticGraph} alt="Therapeutic Graph" />
          </CardBody>
        </Card>
      </section>
      <section className="flex flex-col items-start [&>*]:my-2 [&>*]:w-full">
        <Title>User Adoption</Title>
        <Card>
          <CardBody>
            <Image width={700} src={UserAdoption} alt="User Adoption" />
          </CardBody>
        </Card>
      </section>
      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
};

export default PortfolioAnalyticsPage;
