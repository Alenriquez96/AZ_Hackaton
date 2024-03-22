"use client";
import Text from "@/app/components/Text";
import {
  Avatar,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import PostCard from "../containers/PostCard";
import { posts } from "@/data/posts";
import Image from "next/image";
import { IconMicrophone, IconCamera } from "@tabler/icons-react";
import { useUserContext } from "@/app/context/UserContext";

interface CommunityPageProps {
  searchParams: {
    name: string;
  };
}

const topSections: { title: string; sections: string[] }[] = [
  {
    title: "Top symptoms reported",
    sections: ["Stress", "Chronic Fatigue", "Dry Skin", "Blackouts"],
  },
  {
    title: "Top treatments taken by patients",
    sections: [
      "Metformin",
      "Humalog",
      "Glipizide",
      "Dapagliflozin",
      "Sitagliptin",
    ],
  },
];

const CommunityPage = ({ searchParams: { name } }: CommunityPageProps) => {
  const { user } = useUserContext();

  return (
    <main className="min-h-screen flex flex-row justify-around flex-wrap p-10">
      <section className="flex flex-col [&>*]:my-6 max-w-[900px]">
        <Text>{name}</Text>
        <Card className="p-5">
          <CardBody>
            <p className="underline font-bold mb-4">What is {name}</p>
            <p>
              Type 2 diabetes mellitus is characterized by insulin resistance or
              desensitization and increased blood glucose (sugar) levels. It is
              a chronic disease that can develop gradually over time and can be
              linked to both environmental factors and heredity
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex flex-row items-center lg:[&>*]:mx-4 [&>*]:mx-1">
            <Avatar className="p-6" name={user.name} />
            <Input
              variant="bordered"
              placeholder="Do you want to start a discussion?"
              endContent={<IconCamera color="gray" />}
            />
            <Button radius="full" color="primary">
              Share Post
            </Button>
          </CardBody>
        </Card>

        {posts
          .filter((post) => post.heading === name)
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </section>
      <section className="flex flex-col [&>*]:my-6">
        <div className="flex items-center [&>*]:mx-2">
          <p>3467 members</p>
          <Button radius="full" color="primary">
            Join community
          </Button>
        </div>
        {topSections.map((section, i) => (
          <Card className="p-4">
            <CardHeader>{section.title}</CardHeader>
            <CardBody>
              {section.sections.map((symptom, i) => (
                <p key={i} className="font-black">
                  {symptom}
                </p>
              ))}
            </CardBody>
          </Card>
        ))}
      </section>
      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
};

export default CommunityPage;
