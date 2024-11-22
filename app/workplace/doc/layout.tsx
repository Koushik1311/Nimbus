import LiveBlocksProvider from "@/lib/providers/LiveBlocksProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  return <LiveBlocksProvider>{children}</LiveBlocksProvider>;
}
