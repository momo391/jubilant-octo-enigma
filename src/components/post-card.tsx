import { Heart, IComment, SiteLogo, ThumbDown, ThumbUp } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profileImg from "@/assets/images/profile.jpg";
import { Button } from "./ui/button";
import postImage from "@/assets/images/post.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

export const PostHeader = () => {
  return (
    <>
      <div className="flex flex-row justify-between tracking-tight">
        <div className="flex items-center space-x-2">
          <a href={"#"} target="_blank" rel="noreferrer">
            <Avatar>
              <AvatarImage src={profileImg.src} />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
          </a>
          <div className="-space-y-1">
            <a
              href={"#"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center whitespace-nowrap font-semibold"
            >
              {truncate("username", 20)}
              {/* {tweet.user.verified ||
                (tweet.user.is_blue_verified && (
                  <Verified className="ml-1 inline size-4 text-blue-500" />
                ))} */}
            </a>
            <div className="flex items-center space-x-1">
              <a
                href={"#"}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 transition-all duration-75"
              >
                @{truncate("user email", 16)}
              </a>
            </div>
          </div>
        </div>
        <a href={"#"} target="_blank" rel="noreferrer">
          <span className="sr-only">Link to tweet</span>
          <SiteLogo className="size-5 items-start  transition-all ease-in-out hover:scale-105" />
        </a>
      </div>
    </>
  );
};

export const PostBody = () => {
  return (
    <>
      <div className="break-words leading-normal tracking-tighter text-sm font-normal mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti
        nemo delectus, sit molestiae quasi laborum. Aut accusamus dolorum
        perferendis dolore consequatur. Aut error ea laborum repellendus
        explicabo, soluta harum?
      </div>
    </>
  );
};

export const PostMedia = () => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
          {/* <div className="shrink-0 snap-center sm:w-2" /> */}
          <Image
            src={postImage}
            alt="post image"
            className="h-fit w-full shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm"
          />
        </div>
      </div>
    </>
  );
};

export const PostFooter = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 mt-2">
        <div className="flex flex-row gap-2">
          <Button size={"sm"} variant={"outline"}>
            <ThumbUp />
            <p className="sr-only">like</p>
          </Button>
          <Button size={"sm"} variant={"outline"}>
            <ThumbDown />
            <p className="sr-only">Dislike</p>
          </Button>
        </div>
        <Button size={"sm"} variant={"outline"}>
          <IComment />
          Comment
        </Button>
      </div>
    </>
  );
};

export const PostCard = ({ className }: Readonly<{ className?: string }>) => {
  return (
    <>
      <div
        className={cn(
          "relative flex size-full  flex-col gap-2 overflow-hidden rounded-lg  border p-4 backdrop-blur-md",
          className
        )}
      >
        <PostHeader />
        <PostBody />
        <PostMedia />
        <PostFooter />
      </div>
    </>
  );
};
