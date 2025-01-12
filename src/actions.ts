'use server'

import { signIn, signOut } from "@/auth"

export async function signInAction ()  { return await signIn() }
export const signOutAction = async () => signOut()