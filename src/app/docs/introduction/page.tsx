import React from "react";

const Page = () => {
  return (
    <div className="text-gray-700 text-xl w-3/4">
      <h1 className="font-bold text-6xl text-black">Introduction</h1>

      <p className="mt-4 text-gray-700 py-4">
        The <span className="font-semibold">Portia SDK</span> is the
        TypeScript/JavaScript version of our original Python SDK. It brings the
        same core concepts—plans, plan runs, tools, and end-user management—to
        the Node.js and browser ecosystem.
      </p>

      <p className="mt-4 py-5">
        Just like the Python SDK, it is designed for building{" "}
        <span className="font-semibold">transparent, steerable, and
        authenticated agents</span>. With this package you can:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-2">
        <li>
          Define and initialize end users (sync or async).
        </li>
        <li>
          Generate structured <span className="font-semibold">plans</span> from
          user queries using an LLM.
        </li>
        <li>
          Execute plans step-by-step while tracking full run state.
        </li>
        <li>
          Resume execution safely when clarification or authentication is
          required.
        </li>
        <li>
          Extend your agents with <span className="font-semibold">custom
          tools</span> or use the default registry.
        </li>
        <li>
          Collect telemetry and store state using the built-in in-memory storage
          or your own implementation.
        </li>
      </ol>
    </div>
  );
};

export default Page;
