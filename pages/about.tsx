import UserDetail from "../components/UserDetail";

export default function About<NextPage>() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate-900 to-pink-900 text-white items-center py-8 overflow-x-hidden">
      <UserDetail />
    </div>
  );
}
