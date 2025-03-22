import Link from "next/link";
import { auth } from "@/auth";
import { SignOutButton } from "./SignOutButton";

export default async function Header() {
  const session = await auth()
  return (
    <header className="flex flew-row justify-center space-x-5 align-middle text-center items-center m-4">
      <div className="self-center justify-center items-center">
        <Link href="/decks" className="logo">
          <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Deckbuilder
          </h1>
        </Link>
      </div>

      <div className="flex flex-row justify-between gap-3 align-middle justify-self-center text-center self-center">
        <label className="align-middle text-center">Signed in as {session?.user?.email}</label>
        <SignOutButton />
      </div>
    </header>
  );
}