import React from "react";
import Code from "@/Components/Code";

const Page = () => {
  return (
    <div className="text-gray-700 text-xl w-3/4">
      <h1 className="font-bold text-6xl text-black py-5">Installation</h1>
      <p className="py-2">
        Let`&apos;`s get you set up and run a test query to make sure everything is in order.
      </p>

      <p className="text-3xl py-4 font-bold">Install the Portia TypeScript SDK</p>
      <Code>{`npm i portia-sdk`}</Code>

      <h2 className="text-3xl py-4 font-bold">Quickstart</h2>
      <p className="py-2">
        Import the SDK, initialize it, and run a simple plan to see how it works.
      </p>
      <Code>{`import PortiaSDK from "portia-sdk";

const sdk = new PortiaSDK();

// Initialize a default end user
const user = sdk.initializeEndUser();

// Create and run a plan
(async () => {
  const run = await sdk.run("Book me a flight to Delhi");
  console.log("PlanRun:", run);
})();`}</Code>

      <h2 className="text-3xl py-4 font-bold">Next Steps</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Define <strong>custom tools</strong> to extend agent capabilities.</li>
        <li>Use <strong>plan()</strong> to just generate steps without executing.</li>
        <li>Handle <strong>resume()</strong> when plans need clarifications.</li>
        <li>Integrate your own <strong>storage</strong> or <strong>telemetry</strong>.</li>
      </ul>
    </div>
  );
};

export default Page;
