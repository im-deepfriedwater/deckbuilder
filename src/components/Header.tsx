import Link from "next/link";
import { auth } from "@/auth";
import { SignOutButton } from "./SignOutButton";

export default async function Header() {
  const session = await auth()
  return (
    <header className="flex flew-row justify-between align-middle">
      <div>
        <Link href="/decks" className="logo">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Deckbuilder
          </h1>
        </Link>

      </div>

      <div className="flex flex-row self-start justify-between gap-3 align-middle justify-self-center">
        <div>
          <label className="align-middle">Signed in as {session?.user?.email}</label>
        </div>
        <SignOutButton />
      </div>
    </header>
  );
}