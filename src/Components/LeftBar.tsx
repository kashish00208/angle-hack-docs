"use client";
import React, { useState } from "react";
import Link from "next/link";

interface DocsItem {
  title: string;
  href?: string;
  items?: DocsItem[];
}

const docs: DocsItem[] = [
  {
    title: "Docs",
    items: [
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "SDK",
    items: [
      { title: "config", href: "/docs/config" },
      { title: "Execution hooks", href: "/docs/exicution-hooks" },
      { title: "Storage", href: "/docs/storage" },
      { title: "Telemetry", href: "/docs/hooks-telemetry" },
      { title: "API Reference", href: "/docs/api" },
    ],
  },
];

const LeftBar = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Docs: true, 
    SDK: true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="w-1/6 border-r-2 border-black/35  p-4 text-black/80 text-md font-bold mt-5 ">
      <ul className="space-y-4">
        {docs.map((section, idx) => (
          <li key={idx}>
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-200 transition"
            >
              {section.title}
              <span>{openSections[section.title] ? "−" : "+"}</span>
            </button>

            {openSections[section.title] && section.items && (
              <ul className="ml-4 mt-2 space-y-1 text-black/60 font-normal">
                {section.items.map((item, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      href={item.href!}
                      className="block p-2 rounded hover:bg-gray-100 transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
