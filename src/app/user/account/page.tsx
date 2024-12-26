import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImg from "@/assets/images/profile.jpg";
import { NeutralFace } from "@/components/icons";
import { PostCard } from "@/components/post-card";

export default function Page() {
  return (
    <>
      <div className="min-h-svh  flex-col py-8">
        <div className=" flex items-center justify-start gap-4 flex-col ">
          <div className="w-screen max-w-3xl border p-8 flex items-center justify-between rounded-xl">
            <div className="max-w-md">
              <p className="text-lg md:text-4xl flex gap-2 items-center justify-start">
                Hi, Username <NeutralFace />
              </p>
              <p className="line-clamp-3 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, magnam veniam? Provident alias minima cupiditate
                iusto laborum totam saepe similique aperiam magnam earum natus
                reiciendis molestiae quam ullam, debitis consequatur.
              </p>
            </div>
            <div>
              <Avatar className="size-16 md:size-24 lg:size-32">
                <AvatarImage src={profileImg.src} />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div
            className="w-screen max-w-3xl rounded-xl border space-y-8 p-2 md:p-8"
            id="posts"
          >
            <a
              className="text-2xl hover:underline underline-offset-4  cursor-pointer"
              href={"#post"}
            >
              Posts
            </a>
            <div className="flex w-full flex-wrap flex-row justify-center items-center gap-4">
              <PostCard className="max-w-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
