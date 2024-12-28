import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Welcome to Markdown Preview!");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setLoading(true);
    // Simulate API or computation delay
    setTimeout(() => {
      setPreview(markdown);
      setLoading(false);
    }, 300);
  }, [markdown]);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor">
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Write your markdown here..."
      />
      <div className="preview">
        {loading ? (
          <p className="loading">Loading preview...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: preview }} />
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
