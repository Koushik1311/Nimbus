import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">{children}</div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
