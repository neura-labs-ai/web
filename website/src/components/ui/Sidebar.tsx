import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import {
  FileText,
  Gauge,
  Key,
  LayoutDashboard,
  LogOut,
  UserCog,
} from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="fixed w-20 h-screen p-4 bg-zinc-900 flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <Link href={"/"}>
              <Image
                src={"/processor.svg"}
                alt="logo"
                width={500}
                height={500}
                className="p-1"
              />
            </Link>

            <span className="border-b-[1px] border-zinc-400 p-2 ">
              <Link href={"/dashboard"}>
                <div className="p-3 inline-block cursor-pointer my-4 hover:bg-zinc-300 hover:text-black rounded-lg">
                  {/* Dashboard home button and main page access */}
                  <LayoutDashboard size={24} />
                </div>
              </Link>
              <Link href={"/dashboard/usage"}>
                <div className="p-3 inline-block cursor-pointer my-4 hover:bg-zinc-300 hover:text-black rounded-lg">
                  {/* API usage information */}
                  <Gauge size={24} />
                </div>
              </Link>
              <Link href={"/dashboard/credentials"}>
                <div className="p-3 inline-block cursor-pointer my-4 hover:bg-zinc-300 hover:text-black rounded-lg">
                  {/* API key manager */}
                  <Key size={24} />
                </div>
              </Link>

              <Link href={"/dashboard/settings"}>
                <div className="p-3 inline-block cursor-pointer my-4 hover:bg-zinc-300 hover:text-black rounded-lg">
                  {/* User Settings */}
                  <UserCog size={24} />
                </div>
              </Link>

              <Link href={"/dashboard"}>
                <div className="p-3 inline-block cursor-pointer my-4 hover:bg-zinc-300 hover:text-black rounded-lg">
                  {/* Documentation link */}
                  <FileText size={24} />
                </div>
              </Link>
            </span>
            <Link href={"/oauth/logout"}>
              <div className="p-3 inline-block cursor-pointer my-4 hover:bg-zinc-300 hover:text-black rounded-lg">
                {/* Logout button link */}
                <LogOut size={24} />
              </div>
            </Link>
          </div>
        </div>
        {/* Main Dashboard Content */}
        <main className="ml-20 w-full">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
