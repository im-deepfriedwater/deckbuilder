'use client'

import { signOutAction } from "@/actions";

export const SignOutButton = () => (

  <button
    onClick={() => signOutAction()}
  >
    Sign out
  </button>

) 