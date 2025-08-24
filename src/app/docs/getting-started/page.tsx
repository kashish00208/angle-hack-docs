import React from "react";

const Page = () => {
  return (
    <div className="text-gray-700 text-xl w-3/4">
      <h1 className="font-bold text-6xl text-black">Portia typescript SDK</h1>
      <p className="mt-4 text-gray-700">
        Portia SDK is an open-source developer framework designed to help you
        build, plan, and run AI-powered agents. It provides a structured way to
        define user queries, generate plans, manage executions, and track state
        across runs.
      </p>

      <p className="mt-4">With Portia SDK, you can:</p>

      <ol className="list-decimal list-inside mt-4 space-y-2">
        <li>
          <span className="font-semibold">Initialize End Users:</span> Create
          and manage end users with simple sync/async initialization methods.
        </li>
        <li>
          <span className="font-semibold">Generate Plans:</span> Break down user
          queries into structured steps using integrated LLM providers (e.g.
          Groq with <code className="bg-gray-200 px-1">llama-3.1</code>).
        </li>
        <li>
          <span className="font-semibold">Run Executions:</span> Automatically
          execute plans step-by-step, track state transitions (
          <code className="bg-gray-200 px-1">NOT_STARTED</code>,{" "}
          <code className="bg-gray-200 px-1">IN_PROGRESS</code>,{" "}
          <code className="bg-gray-200 px-1">COMPLETE</code>, etc.).
        </li>
        <li>
          <span className="font-semibold">Resume Runs:</span> Handle cases where
          plans require clarification or human input, then safely resume
          execution.
        </li>
        <li>
          <span className="font-semibold">Extend with Tools:</span> Register
          custom tools or use the default tool registry to expand your agent’s
          capabilities.
        </li>
        <li>
          <span className="font-semibold">Telemetry & Storage:</span> Track
          events with telemetry hooks and store plans, runs, and end users using
          the included in-memory storage (or extend with your own storage
          implementation).
        </li>
      </ol>
    </div>
  );
};

export default Page;
