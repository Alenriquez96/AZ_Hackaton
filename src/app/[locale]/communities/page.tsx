"use client";
import { useTranslations } from "next-intl";
import UnderConstruction from "@/app/containers/UnderConstruction";
import { Suspense } from "react";
import Text from "@/app/components/Text";
import SearchThisPage from "../products/[product]/components/SearchThisPage";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { Title } from "@/app/components/Title";
import { IconArrowRight } from "@tabler/icons-react";
import PostCard from "./containers/PostCard";
import { usePathname } from "next/navigation";
import { posts } from "@/data/posts";

const Communities = () => {
  const t = useTranslations("communities");
  const pathName = usePathname();

  const myCommunities: { label: string; href: string }[] = [
    { label: "Managing Stress", href: pathName + "/managing-stress" },
    { label: "Health & Wellbeing", href: pathName + "/health-wellbeing" },
    { label: "Women over 60", href: pathName + "/women-over-60" },
    {
      label: "Hyperthyroidism",
      href: pathName + "/hyperthyroidism",
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

  const mostViewedConditions: { label: string; sub: string }[] = [
    { label: "Cancer", sub: "5426 members" },
    { label: "Diabetes type 2", sub: "3467 members" },
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
    <main className="min-h-screen flex justify-around flex-wrap p-16">
      <section className="flex flex-col [&>*]:my-4">
        <Text>{t("title")}</Text>
        <SearchThisPage />
        <Card className="p-6">
          <CardHeader>
            <Title>My communities</Title>
            <IconArrowRight />
          </CardHeader>
          <CardBody className="[&>*]:my-1">
            {myCommunities.map((community, i) => (
              <Link
                href={{
                  pathname: community.href,
                  query: {
                    name: community.label,
                  },
                }}
                key={i}
              >
                {community.label}
              </Link>
            ))}
          </CardBody>
        </Card>
        <Card className="p-6">
          <CardHeader>Suggested for you</CardHeader>
          <CardBody>
            {suggested.map((item, i) => (
              <div className="flex items-center justify-between my-3">
                <div key={i} className="flex flex-col">
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
