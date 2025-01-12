// import { signIn, signOut } from "@/auth";
// import { Session } from "next-auth";
// import Image from "next/image";

// interface UserInfoProps {
//   session: Session | null
// }

// export default function UserInfo({ session }: UserInfoProps) {
//   console.log(session);
//   return (
//     <div className="profile">
//       {session ? (
//         <div>
//           {session?.user?.image && (
//             <div>
//               <Image src={session?.user.image} width={90} height={90} alt="??" />
//             </div>
//           )}
//           <a href="#" onClick={() => signOut()}>
//             Sign Out
//           </a>
//         </div>

//       ) : (
//         <div>
//           <a href="#" onClick={() => signIn()}>
//             Sign In with Google
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }