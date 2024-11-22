import RoomProvider from "@/lib/providers/RoomProvider";
import { auth } from "@clerk/nextjs/server";

export default async function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { id } = await params;
  auth.protect();
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
