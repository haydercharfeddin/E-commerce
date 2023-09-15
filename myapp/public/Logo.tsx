import Link from "next/link";

export const Logo = ({ override,user }: { override?: React.CSSProperties ,user:String}) => {
  return (
    <div className="relative w-[118px] h-6 ml-5" style={override}>
      <Link href={user === "On" ? "/" : "/dropdown"} className="absolute left-[0%] right-[0%] w-full top-[0%] bottom-[0%] h-full text-black text-2xl font-[Inter] font-bold tracking-[0.03em] leading-6">
        Exclusive
      </Link>
    </div>
  );
};
