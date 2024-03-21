"use client";

import UnderConstruction from "@/app/containers/UnderConstruction";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Text from "@/app/components/Text";
import symptom_insights_graph from "@/app/assets/symptom_insights_graph.svg";
import symptom_trackig from "@/app/assets/symptom_tracking.svg";
import overall_graph from "@/app/assets/overall_graph.svg";
import medication_insights_graph from "@/app/assets/medication_insights_graph.svg";
import weekly_overtracking from "@/app/assets/weekly_overtracking.svg";
import Image from "next/image";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

let tabs: Tab[] = [
  {
    id: "overall",
    label: "Overall",
    content: (
      <Card>
        <CardBody className="grid place-content-center">
          <Image src={overall_graph} alt="Overall" />
        </CardBody>
      </Card>
    ),
  },
  {
    id: "symptom_insights",
    label: "Symptom Insights",
    content: (
      <Card>
        <CardBody className="flex flex-row flex-wrap items-start justify-center">
          <Image src={symptom_insights_graph} alt="Symptom Insights" />
          <Image src={symptom_trackig} alt="Symptom Tracking" />
        </CardBody>
      </Card>
    ),
  },
  {
    id: "medication_insights",
    label: "Medication Insights",
    content: (
      <Card>
        <CardBody className="flex flex-row flex-wrap items-start justify-center">
          <Image src={medication_insights_graph} alt="Medication Insights" />
          <Image src={weekly_overtracking} alt="Weekly Overtracking" />
        </CardBody>
      </Card>
    ),
  },
];

const MyStatsPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center lg:p-0 p-5">
      <Text>My Stats</Text>
      <Tabs aria-label="options">
        {tabs.map((tab) => (
          <Tab key={tab.id} title={tab.label}>
            {tab.content}
          </Tab>
        ))}
      </Tabs>
      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
};

export default MyStatsPage;
