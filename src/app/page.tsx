import { auth0 } from "./lib/auth0";
export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user; // in case needed
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    </div>
  );
}