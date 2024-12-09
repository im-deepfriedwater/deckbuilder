"use-server"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { firebaseConfig } from "@/lib/firebase/config";
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserInfo from "./UserInfo";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header>
      <Link href="/" className="logo">
        <img src="/friendly-eats.svg" alt="FriendlyEats" />
        Unfriendly Eats
      </Link>

      <div className="profile">
        <UserInfo session={session} />
      </div>
    </header>
  );
}