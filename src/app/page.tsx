import Header from "@/Components/Header";
import LeftBar from "@/Components/LeftBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <LeftBar />

        <div className="flex-1 p-8 overflow-y-auto">
        </div>
      </div>
    </div>
  );
}
