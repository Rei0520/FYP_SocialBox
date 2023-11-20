"use client";
import "./header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { img } from "@/app/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  let tabs = ["About", "Dashboard", "Collections", "Whitepaper", "Contact Us"];
  const pathname = usePathname();
  const [user, setUser] = useState<any>(localStorage.getItem("user") || "");

  try {
    user ? setUser(JSON.parse(user)) : "";
  } catch (error) {}
  useEffect(() => {
    setUser(localStorage.getItem("user") || "");
    console.log();
  }, [pathname]);
  return (
    <div className="container">
      <div className="flex_align_center inner_container">
        <div className="flex_align_center">
          <Link href={"/"}>
            <Image className="logo" src={img.logo} alt="logo" />
          </Link>
          <Link href={"/"}>
            <div className="brand_name">SocialBox</div>
          </Link>
        </div>
        <div className="flex_grow" />
        {tabs.map((tab) => (
          <div
            style={{
              visibility:
                pathname === "/pages/login" || pathname === "/pages/signUp"
                  ? "hidden"
                  : "visible",
            }}
            key={tab}
            className="tab "
          >
            {tab}
          </div>
        ))}
        <div
          style={{
            visibility:
              pathname === "/pages/login" || pathname === "/pages/signUp"
                ? "hidden"
                : "visible",
          }}
          className="flex_align_center"
        >
          {user.username ? (
            <Image
              className="user_image_valid"
              alt="user image"
              src={img.userImg}
            />
          ) : (
            <div className="user_image"></div>
          )}
          <Link
            onClick={() => localStorage.removeItem("user")}
            href={user.username ? "/" : "/pages/login"}
            className="username flex_align_center "
          >
            {user.username ? user.username : "Login / Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
};
