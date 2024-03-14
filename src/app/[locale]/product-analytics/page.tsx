import Text from "@/app/components/Text";
import { CardBody, Card, Button } from "@nextui-org/react";
import DistributionTable from "../../assets/GobalDistributionTable.svg";
import SelectMedication from "./containers/SelectMedication";
import DrugAdherenceTable from "../../assets/DrugAdherenceTable.svg";
import TrendsContainer from "./containers/TrendsContainer";
import HealthLiteracyTable from "../../assets/HealthLiteracyTable.svg";
import Image from "next/image";
import ProductSearches from "../../assets/ProductSearches.svg";
import { Title } from "@/app/components/Title";

const ProductAnalyticsPage = () => {
  return (
    <main className="min-h-screen flex justify-evenly flex-wrap m-12">
      <section className="flex flex-col items-start [&>*]:my-2 [&>*]:w-full">
        <Text>Drug Analytics</Text>
        <SelectMedication />
        <Title>Global Distribution</Title>
        <p>Top 5 Locations</p>
        <Card>
          <CardBody>
            <Image src={DistributionTable} alt="Global Distribution" />
          </CardBody>
        </Card>
        <Title>Drug Adherence</Title>
        <Card>
          <CardBody>
            <Image src={DrugAdherenceTable} alt="Drug adherence" />
          </CardBody>
        </Card>
      </section>
      <section className="flex flex-col items-start [&>*]:w-full [&>*]:my-2">
        <TrendsContainer />
        <Title>Product Searches</Title>
        <Card>
          <CardBody>
            <Image src={ProductSearches} alt="Product Searches" />
          </CardBody>
        </Card>
        <Title>Health Literacy</Title>
        <Card>
          <CardBody>
            <Image src={HealthLiteracyTable} alt="Health Literacy" />
          </CardBody>
        </Card>
      </section>
    </main>
  );
};

export default ProductAnalyticsPage;
