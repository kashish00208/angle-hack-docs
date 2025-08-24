import React from "react";
import Code from "@/Components/Code";

const Page = () => {
  return (
    <div className="text-gray-700 text-xl w-3/4">
      <h1 className="font-bold text-6xl text-black py-5">Execution Hooks</h1>

      <p className="py-2">
        Execution hooks let you customize the lifecycle of a{" "}
        <code className="bg-gray-200 px-1">PlanRun</code>. You can intercept
        events before and after steps, tool calls, or entire plan runs. This
        makes it possible to add logging, telemetry, validations, or even
        custom flow control.
      </p>

      <h2 className="text-3xl py-4 font-bold">Available Hooks</h2>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <code className="bg-gray-200 px-1">clarificationHandle(message)</code>{" "}
          → Async handler when a plan run needs clarification. Return{" "}
          <code>true</code> or <code>false</code>.
        </li>
        <li>
          <code className="bg-gray-200 px-1">beforeStepExicution(plan, planRun, step)</code>{" "}
          → Runs before each step. Return{" "}
          <code>"CONTINUE"</code> to run the step or{" "}
          <code>"SKIP"</code> to skip it.
        </li>
        <li>
          <code className="bg-gray-200 px-1">afterExicutionOutput(plan, planRun, step, output)</code>{" "}
          → Called after a step has produced an output.
        </li>
        <li>
          <code className="bg-gray-200 px-1">beforePlanRun(plan, planRun)</code>{" "}
          → Runs before a plan starts execution.
        </li>
        <li>
          <code className="bg-gray-200 px-1">afterPlanRun(plan, planRun, output)</code>{" "}
          → Runs after the entire plan finishes.
        </li>
        <li>
          <code className="bg-gray-200 px-1">beforeToolCall(tool, args, planRun, step)</code>{" "}
          → Runs before a tool is invoked. Return{" "}
          <code>true</code> to allow or <code>false</code> to block.
        </li>
        <li>
          <code className="bg-gray-200 px-1">afterTollCall(tool, output, planRun, step)</code>{" "}
          → Runs after a tool finishes execution.
        </li>
      </ul>

      <h2 className="text-3xl py-4 font-bold">Example</h2>
      <p className="py-2">Here’s how to attach custom execution hooks:</p>
      <Code>{`import PortiaSDK from "portia-sdk";

const hooks = {
  beforeStepExicution: (plan, planRun, step) => {
    console.log("About to execute step:", step);
    return "CONTINUE";
  },
  afterExicutionOutput: (plan, planRun, step, output) => {
    console.log("Step output:", output);
  },
  beforeToolCall: (tool, args) => {
    console.log("Calling tool:", tool.name, "with args:", args);
    return true; // allow tool execution
  },
  afterTollCall: (tool, output) => {
    console.log("Tool output:", output);
    return true;
  },
};

const sdk = new PortiaSDK(undefined, undefined, hooks);

(async () => {
  const run = await sdk.run("Search latest news on AI");
  console.log("PlanRun finished:", run);
})();`}</Code>
    </div>
  );
};

export default Page;
