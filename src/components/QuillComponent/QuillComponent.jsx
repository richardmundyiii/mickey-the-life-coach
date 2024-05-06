import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import Quill styles

export default function QuillComponent() {
  const [editorHtml, setEditorHtml] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0];
            if (
              addedNode.nodeType === 1 &&
              addedNode.classList.contains("ql-editor")
            ) {
              addedNode.addEventListener("input", handleEditorChange);
            }
          }
        }
      });

      observer.observe(editorRef.current, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const handleEditorChange = () => {
    if (editorRef.current) {
      setEditorHtml(editorRef.current.querySelector(".ql-editor").innerHTML);
    }
  };

  return (
    <div ref={editorRef}>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
      />
    </div>
  );
}
