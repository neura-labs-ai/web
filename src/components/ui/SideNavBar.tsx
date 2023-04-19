"use client";

import React, { useMemo } from "react";
import { Home, Library, LogOut, Search, Settings, User } from "lucide-react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import { useSession } from "next-auth/react";
import CollapseIcon from "@/components/ui/icons/CollapseIcon";

export default function SideNavBar() {
  const [toggleCollapse, setToggleCollapse] = React.useState(false);
  const [isCollapsible, setIsCollapsible] = React.useState(false);

  const session = useSession();

  const menuItems = useMemo(
    () => [
      { id: 1, label: "Home", icon: Home, link: "/home" },
      {
        id: 2,
        label: "Account",
        icon: User,
        link: `/account/${session.data?.user.name}`,
      },
      {
        id: 3,
        label: "Settings",
        icon: Settings,
        link: `/account/${session.data?.user.name}/settings`,
      },
      { id: 4, label: "Search", icon: Search, link: "/search" },
    ],
    [session.data?.user.name]
  );

  const pathname = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [menuItems, pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 bg-light pb-4 flex justify-between flex-col bg-zinc-900/20",
    {
      ["w-60"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap hover:bg-light-lighter",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <Library />
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              {/*The Code Library*/}
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapseIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menu.id} className={classes}>
                {/* @ts-ignore */}
                <Link href={menu.link}>
                  <span className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-zinc-300"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <a href={"/auth/logout"}>
            <LogOut />
          </a>
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-zinc-300")}>
            <a href={"/auth/logout"}>Logout</a>
          </span>
        )}
      </div>
    </div>
  );
}
