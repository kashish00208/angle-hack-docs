import React from "react";
import Header from "@/Components/Header";
import LeftBar from "@/Components/LeftBar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <LeftBar />
        <div className="flex-1 p-8 overflow-y-auto w-3/4">{children}</div>
      </div>
    </div>
  );
}
