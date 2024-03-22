"use client";
import { useTranslations } from "next-intl";
import Text from "@/app/components/Text";
import SearchThisPage from "../products/[product]/components/SearchThisPage";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { Title } from "@/app/components/Title";
import { IconArrowRight } from "@tabler/icons-react";
import PostCard from "./containers/PostCard";
import { usePathname } from "next/navigation";
import { posts } from "@/data/posts";
import managing_stress from "@/app/assets/managing_stress.svg";
import health_wellbeing from "@/app/assets/health_wellbeing.svg";
import women_over_60 from "@/app/assets/women_over_60.svg";
import hyperthyroidism from "@/app/assets/hyperthyroidism.svg";
import cancer from "@/app/assets/cancer.svg";
import diabetes from "@/app/assets/diabetes.svg";

import Image from "next/image";

const Communities = () => {
  const t = useTranslations("communities");
  const pathName = usePathname();

  const myCommunities: {
    label: string;
    href: string;
    graphic: React.ReactNode;
  }[] = [
    {
      label: "Managing Stress",
      href: pathName + "/managing-stress",
      graphic: <Image src={managing_stress} alt="Managing Stress" />,
    },
    {
      label: "Health & Wellbeing",
      href: pathName + "/health-wellbeing",
      graphic: <Image src={health_wellbeing} alt="Health & Wellbeing" />,
    },
    {
      label: "Women over 60",
      href: pathName + "/women-over-60",
      graphic: <Image src={women_over_60} alt="Women over 60" />,
    },
    {
      label: "Hyperthyroidism",
      href: pathName + "/hyperthyroidism",
      graphic: <Image src={hyperthyroidism} alt="Hyperthyroidism" />,
    },
  ];

  const suggested: { label: string; sub: string; href: string }[] = [
    { label: "Menopause", sub: "5426 members", href: pathName + "/menopause" },
    {
      label: "Diabetes Type 2",
      sub: "3467 members",
      href: pathName + "/diabetes-type-2",
    },
    {
      label: "Anxiety Disorders",
      sub: "2356 members",
      href: pathName + "/anxiety-disorders",
    },
  ];

  const mostViewedConditions: {
    label: string;
    sub: string;
    graphic: React.ReactNode;
  }[] = [
    {
      label: "Cancer",
      sub: "5426 members",
      graphic: <Image src={cancer} alt="Cancer" />,
    },
    {
      label: "Diabetes type 2",
      sub: "3467 members",
      graphic: <Image src={diabetes} alt="Diabetes type 2" />,
    },
  ];
  const mostViewedMedications: { label: string; sub: string }[] = [
    {
      label: "Citalopram",
      sub: "5426 members",
    },
    {
      label: "Benzodiazepines",
      sub: "3467 members",
    },
    {
      label: "Statins",
      sub: "2356 members",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="lg:min-w-[450px] min-w-[300px] text-center">
        <Text>{t("title")}</Text>
        <SearchThisPage placeholder="Search for a condition, medication or community" />
      </div>
      <div className="flex justify-around flex-wrap p-16 w-screen">
        <section className="flex flex-col [&>*]:my-4">
          <Card className="p-6">
            <CardHeader>
              <Title>My communities</Title>
              <IconArrowRight />
            </CardHeader>
            <CardBody className="[&>*]:my-1">
              {myCommunities.map((community, i) => (
                <div
                  className="flex items-center justify-start [&>*]:mx-2"
                  key={i}
                >
                  {community.graphic}
                  <p>{community.label}</p>
                </div>
              ))}
            </CardBody>
          </Card>
          <Card className="p-6">
            <CardHeader>Suggested for you</CardHeader>
            <CardBody>
              {suggested.map((item, i) => (
                <div key={i} className="flex items-center justify-between my-3">
                  <div className="flex flex-col">
                    {item.label === "Diabetes Type 2" ? (
                      <Link
                        href={{
                          pathname: item.href,
                          query: {
                            name: item.label,
                          },
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <p>{item.label}</p>
                    )}

                    <p className="text-slate-400">{item.sub}</p>
                  </div>
                  <PlusButton />
                </div>
              ))}
            </CardBody>
          </Card>
        </section>
        <section className="flex flex-col [&>*]:my-4">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </section>
        <section className="[&>*]:my-4">
          <Card className="p-6">
            <CardHeader>
              <Title>Most viewed conditions</Title>
            </CardHeader>
            <CardBody className="flex flex-col">
              {mostViewedConditions.map((condition, i) => (
                <div key={i} className="flex justify-between items-center my-3">
                  {condition.graphic}
                  <div className="flex flex-col">
                    <p>{condition.label}</p>
                    <p className="text-slate-400">{condition.sub}</p>
                  </div>
                  <PlusButton />
                </div>
              ))}
            </CardBody>
            <CardFooter>
              <Link className="underline underline-offset-4" href={""}>
                Browse medications
              </Link>
            </CardFooter>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <Title>Most viewed medications</Title>
            </CardHeader>
            <CardBody className="flex flex-col">
              {mostViewedMedications.map((condition, i) => (
                <div key={i} className="flex justify-between items-center my-3">
                  <div className="flex flex-col">
                    <p>{condition.label}</p>
                    <p className="text-slate-400">{condition.sub}</p>
                  </div>
                  <PlusButton />
                </div>
              ))}
            </CardBody>
            <CardFooter>
              <Link href={""}>Browse conditions</Link>
            </CardFooter>
          </Card>
        </section>
      </div>

      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
};

const PlusButton = () => {
  return (
    <button className="rounded-full bg-primary text-white shadow-xl w-[26px] h-[26px] grid place-content-center">
      +
    </button>
  );
};

export default Communities;
