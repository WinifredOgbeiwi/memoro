import Sidebar from "../components/Sidebar";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-full relative overflow-hidden">
      <section className="bg-primary2 text-text-primary h-full w-52 fixed">
        <Sidebar />
      </section>
      <section className="ml-60 overflow-y-auto"> <ThemeToggleButton />
      {children}</section>
     
    </main>
  );
}
