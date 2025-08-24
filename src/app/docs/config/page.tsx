import React from "react";
import Code from "@/Components/Code";

const Page = () => {
  return (
    <div className="text-gray-700 text-xl w-3/4">
      <h1 className="font-bold text-6xl text-black py-5">Configuration</h1>

      <p className="py-2">
        Portia SDK uses a configuration file to manage API keys, model
        providers, storage options, and agent behavior. You can use the{" "}
        <code className="bg-gray-200 px-1">defaultConfig()</code> function or
        provide your own configuration object.
      </p>

      <h2 className="text-3xl py-4 font-bold">Default Configuration</h2>
      <Code>{`import { defaultConfig } from "portia-sdk";

const config = defaultConfig();
console.log(config);
/*
{
  portiaApiKey: process.env.PORTIA_API_KEY || "",
  apiURL: "https://api.portia.ai",
  storageClass: "MEMORY",
  llmProvider: "groq",
  groqApiKey: process.env.GROQ_API_KEY || "",
  model: process.env.MODEL || ""
}
*/
`}</Code>

      <h2 className="text-3xl py-4 font-bold">Configuration Options</h2>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <code className="bg-gray-200 px-1">portiaApiKey</code> – API key for
          Portia services (from environment variable
          <code className="bg-gray-200 px-1">PORTIA_API_KEY</code>).
        </li>
        <li>
          <code className="bg-gray-200 px-1">googleApiKey</code> – Optional
          Google API key if your tools need it.
        </li>
        <li>
          <code className="bg-gray-200 px-1">apiURL</code> – The Portia API
          endpoint (default:
          <code className="bg-gray-200 px-1">https://api.portia.ai</code>).
        </li>
        <li>
          <code className="bg-gray-200 px-1">groqApiKey</code> – API key for
          Groq LLM provider (from environment variable
          <code className="bg-gray-200 px-1">GROQ_API_KEY</code>).
        </li>
        <li>
          <code className="bg-gray-200 px-1">llmProvider</code> – LLM backend to
          use: <code>openai</code>, <code>groq</code>, or{" "}
          <code>anthropic</code> (default: <code>groq</code>).
        </li>
        <li>
          <code className="bg-gray-200 px-1">model</code> – The default model to
          run (from environment variable <code>MODEL</code>).
        </li>
        <li>
          <code className="bg-gray-200 px-1">storageClass</code> – Storage
          backend, currently <code>MEMORY</code> only.
        </li>
        <li>
          <code className="bg-gray-200 px-1">storageDir</code> – Optional path
          for file-based storage (future use).
        </li>
        <li>
          <code className="bg-gray-200 px-1">executionAgentType</code> – Agent
          type used for executing plans (default:{" "}
          <code className="bg-gray-200 px-1">DEFAULT</code>).
        </li>
        <li>
          <code className="bg-gray-200 px-1">planningAgentType</code> – Agent
          type used for planning queries (default:{" "}
          <code className="bg-gray-200 px-1">DEFAULT</code>).
        </li>
      </ul>

      <h2 className="text-3xl py-4 font-bold">Custom Configuration</h2>
      <p className="py-2">
        You can override the defaults by passing your own{" "}
        <code className="bg-gray-200 px-1">Config</code> object into the SDK
        constructor:
      </p>

      <Code>{`import PortiaSDK, { Config } from "portia-sdk";

const customConfig: Config = {
  portiaApiKey: "sk-1234...",
  llmProvider: "openai",
  model: "gpt-4o",
  apiURL: "https://api.portia.ai",
};

const sdk = new PortiaSDK(customConfig);`}</Code>
    </div>
  );
};

export default Page;
