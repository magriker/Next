import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const imgContainer = {
    height: "500px",
    width: "500px",
    position: "relative",
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Hello, Next.js!</h1>
      <Link href="/admin">Admin</Link>
      <br />
      <Link href="/admin/table">table</Link>
      <div className="w-96 h-96 relative">
        <Image src="/chair.jpg" fill={true} alt="chair"></Image>
      </div>
    </div>
  );
}
