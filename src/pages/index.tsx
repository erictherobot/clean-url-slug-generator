import { useState } from "react";
import { slugify } from "@/helpers";
import Header from "@/components/Header";
import Head from "next/head";

const IndexPage = () => {
  const [input, setInput] = useState("");
  const [slug, setSlug] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    setSlug(slugify(inputValue));
  };

  const handleCopy = async () => {
    if (!navigator.clipboard) {
      alert("Clipboard API is not supported in your browser.");
      return;
    }
    try {
      await navigator.clipboard.writeText(slug);
      alert("Slug copied to clipboard");
    } catch (err) {
      alert("Failed to copy slug to clipboard");
    }
  };

  return (
    <>
      <Head>
        <title>Clean URL Slug Generator (slugify online)</title>
        <meta
          name="description"
          content="Clean URL Slug Generator is a user-friendly, fast, and efficient web app that simplifies the process of creating SEO-friendly and readable URL slugs from any text, ensuring optimal website navigation and search engine indexing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen flex items-center justify-center mx-8">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-5xl">
          <h1 className="text-2xl mb-4">Clean URL Slug Generator</h1>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter text to slugify"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-mono mb-4 w-full break-all bg-yellow-100">
              {slug}
            </p>
            {slug && (
              <button
                className="bg-black text-white px-4 py-1 rounded"
                onClick={handleCopy}
              >
                Copy SLUG to clipboard
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
