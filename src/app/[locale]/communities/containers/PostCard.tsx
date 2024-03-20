import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import poll from "../../../assets/poll.svg";
import { Posts } from "@/interfaces";

import {
  IconArrowRight,
  IconMessageCircle2,
  IconHeart,
} from "@tabler/icons-react";

const PostCard = ({ post }: { post: Posts }) => {
  if (post.postType === "Poll")
    return (
      <Card className="p-6 [&>*]:mt-2">
        <CardHeader className="flex flex-col [&>*]:my-1">
          <div className="flex justify-between w-full">
            <div className="flex">
              <p className="text-[#67D7D1]">{post.heading}</p>
              <IconArrowRight color="#67D7D1" />
            </div>
            <div className="flex [&>*]:mx-1">
              <IconHeart />
              <IconMessageCircle2 />
            </div>
          </div>
          <p className="w-full">
            {post.postType}: {post.title}
          </p>
        </CardHeader>
        <CardBody>
          <Image alt="poll" src={poll} />
          <div className="flex items-center [&>*]:mx-2 [&>*]:mt-2">
            <Avatar name={post.author} />
            <div className="flex flex-col">
              <p>{post.author}</p>
              <p>{post.date}</p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <p className="font-black">{post.views} Views</p>
          <p className="text-[#63A87D]">
            {post.likes} Likes {post.comments} comments
          </p>
        </CardFooter>
      </Card>
    );

  if (post.postType === "Thread")
    return (
      <Card className="p-6 [&>*]:mt-2">
        <CardHeader className="flex flex-col [&>*]:my-1">
          <div className="flex justify-between w-full">
            <div className="flex">
              <p className="text-[#67D7D1]">{post.heading}</p>
              <IconArrowRight color="#67D7D1" />
            </div>
            <div className="flex [&>*]:mx-1">
              <IconHeart />
              <IconMessageCircle2 />
            </div>
          </div>
          <p className="w-full">
            {post.postType}: {post.title}
          </p>
        </CardHeader>
        <CardBody>
          <div className="flex items-center [&>*]:mx-2 [&>*]:mt-2">
            <Avatar name={post.author} />
            <div className="flex flex-col">
              <p>{post.author}</p>
              <p>{post.date}</p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <p className="font-black">{post.views} Views</p>
          <p className="text-[#63A87D]">
            {post.likes} Likes {post.comments} comments
          </p>
        </CardFooter>
      </Card>
    );

  if (post.postType === "Blog") {
    <Card className="p-6 [&>*]:mt-2">
      <CardHeader className="flex flex-col [&>*]:my-1">
        <div className="flex justify-between w-full">
          <div className="flex [&>*]:mx-1">
            <p className="text-[#67D7D1]">{post.heading}</p>
            <IconArrowRight color="#67D7D1" />
          </div>
          <div className="flex">
            <IconHeart />
            <IconMessageCircle2 />
          </div>
        </div>
        <p className="w-full">
          {post.postType}: {post.title}
        </p>
      </CardHeader>
      <CardBody>
        <div className="flex items-center [&>*]:mx-2 [&>*]:mt-2">
          <Avatar name={post.author} />
          <div className="flex flex-col">
            <p>{post.author}</p>
            <p>{post.date}</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <p className="font-black">{post.views} Views</p>
        <p className="text-[#63A87D]">
          {post.likes} Likes {post.comments} comments
        </p>
      </CardFooter>
    </Card>;
  }
};

export default PostCard;
