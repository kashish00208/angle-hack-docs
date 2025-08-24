// app/docs/storage/page.tsx
import React from "react";
import Code from "@/Components/Code";

const StorageDocs = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto text-gray-800 text-xl">
      <h1 className="text-4xl font-bold mb-6">Storage</h1>

      <p className="mb-4">
        The <code className="bg-gray-100 px-1 rounded">Storage</code> interface
        defines how users, plans, and plan runs are stored. The default
        implementation is <code className="bg-gray-100 px-1 rounded">InMemoryStorage</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Storage Interface</h2>
      <Code>
{`interface Storage {
  saveEndUser(user: EndUser): EndUser;
  asaveEndUser(user: EndUser): Promise<EndUser>;
  savePlan(plan: any): any;
  getPlan(id: string): any;
}`}
      </Code>

      <h2 className="text-2xl font-semibold mt-6 mb-2">InMemoryStorage</h2>
      <Code >
{`const storage = new InMemoryStorage();
storage.saveEndUser({ id: "u1", name: "Alice" });
storage.savePlan({ id: "p1", steps: [] });
const plan = storage.getPlan("p1");`}
      </Code>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use Cases</h2>
      <ul className="list-disc list-inside">
        <li>Prototyping</li>
        <li>Testing</li>
      </ul>
    </div>
  );
};

export default StorageDocs;
