import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImg from "@/assets/images/profile.jpg";
import { NeutralFace } from "@/components/icons";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <div className="min-h-svh  flex-col py-8">
        <div className=" flex items-center justify-start gap-4 flex-col ">
          <div className="w-screen max-w-3xl border p-8 flex items-center justify-between ">
            <div className="max-w-md">
              <p className="text-4xl flex gap-2 items-center justify-start">
                Hi, Username <NeutralFace />
              </p>
              <p className="line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, magnam veniam? Provident alias minima cupiditate
                iusto laborum totam saepe similique aperiam magnam earum natus
                reiciendis molestiae quam ullam, debitis consequatur.
              </p>
            </div>
            <div>
              <Avatar className="size-32">
                <AvatarImage src={profileImg.src} />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="w-screen max-w-3xl border p-8">
            <p className="text-2xl">Latest Posts</p>
            <div className="flex flex-col gap-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
