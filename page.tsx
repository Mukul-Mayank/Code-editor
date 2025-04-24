"use client";

import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";
import { go } from "@codemirror/lang-go";
import Image from "next/image";

const LANGUAGE_EXTENSIONS: Record<string, any> = {
  javascript: javascript(),
  python: python(),
  cpp: cpp(),
  php: php(),
  go: go(),
};

const LANGUAGE_ICONS: Record<string, string> = {
  javascript: "/icons/javascript.svg",
  python: "/icons/python.svg",
  cpp: "/icons/cpp.svg",
  php: "/icons/php.svg",
  go: "/icons/go.svg",
};

const JUDGE0_LANGUAGES: Record<string, number> = {
  cpp: 54,
  php: 68,
  go: 60,
};

export default function Home() {
  const [code, setCode] = useState("// Write your code here\n");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [time, setTime] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const savedCode = localStorage.getItem(language);
    setCode(savedCode || "// Write your code here\n");
  }, [language]);

  useEffect(() => {
    localStorage.setItem(language, code);
  }, [code, language]);

  const runCode = async () => {
    if (language === "python") {
      try {
        const response = await fetch("http://127.0.0.1:8000/run", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ language, code }),
        });
        const result = await response.json();
        setOutput(result.output || "✅ Code ran, but no output.");
      } catch (error) {
        console.error("❌ Error running Python:", error);
        setOutput("❌ Failed to run Python code. Check console for details.");
      }
    } else if (language === "javascript") {
      try {
        const log = console.log;
        let logs: string[] = [];
        console.log = (...args) => logs.push(args.join(" "));
        // eslint-disable-next-line no-eval
        const result = eval(code);
        console.log = log;
        setOutput(logs.length ? logs.join("\n") : String(result));
      } catch (error: any) {
        setOutput("❌ " + error.message);
      }
    } else if (JUDGE0_LANGUAGES[language]) {
      try {
        const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "bf7028ed6bmshc669e97c268b36ep1d0a52jsn2fe029c57143",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
          },
          body: JSON.stringify({
            language_id: JUDGE0_LANGUAGES[language],
            source_code: code
          })
        });
        const result = await response.json();
        setOutput(result.stdout || result.stderr || result.message || "✅ Code ran, but no output.");
      } catch (err) {
        console.error("❌ Judge0 API error:", err);
        setOutput("❌ Failed to run code via Judge0 API");
      }
    } else {
      setOutput("❌ Language not supported for execution");
    }
  };

  const handleReset = () => {
    setCode("// Write your code here\n");
    setOutput("");
  };

  return (
    <main className={`${darkTheme ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6 font-sans transition-colors duration-300`}>
      <div className="flex justify-between mb-4 text-sm text-gray-500 items-center">
        <span className="flex items-center gap-2">
          
          Language: {language.toUpperCase()}
        </span>
        <div className="flex items-center gap-3">
          <span>⏱️ Timer: {time}s</span>
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs transition-colors"
          >
            {darkTheme ? "🌞 Light" : "🌙 Dark"} Mode
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto min-h-screen">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
          <h2 className="text-2xl font-semibold mb-4">🧠 Problem Statement</h2>
          <p className="text-sm leading-6">
            Write a function that returns the factorial of a given number.
            <br /><br />
            <strong>Example:</strong><br />
            Input: <code>5</code><br />
            Output: <code>120</code>
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col gap-4 border border-white/10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">💻 Code Editor</h2>
            <select
              className="bg-gray-200 dark:bg-gray-700 p-1 rounded text-sm"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C/C++</option>
              <option value="php">PHP</option>
              <option value="go">Go</option>
            </select>
          </div>

          <CodeMirror
            value={code}
            height="250px"
            extensions={[LANGUAGE_EXTENSIONS[language]]}
            onChange={(value) => setCode(value)}
            theme={darkTheme ? "dark" : "light"}
            className="rounded border border-gray-200 dark:border-gray-700"
          />

          <div className="flex gap-3">
            <button
              onClick={runCode}
              className="bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 text-white px-4 py-2 rounded-xl"
            >🚀 Run Code</button>
            <button
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 transition transform hover:scale-105 text-white px-4 py-2 rounded-xl"
            >♻️ Reset</button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📤 Output</h2>
            <div
              className={`rounded p-2 h-24 overflow-auto text-sm whitespace-pre-wrap transition-colors duration-300 ${
                output.includes("❌") ? "bg-red-700 text-white" : "bg-black text-white"
              }`}
            >
              {output || "[Output Placeholder]"}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
