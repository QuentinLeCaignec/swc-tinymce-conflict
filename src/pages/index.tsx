import Header from "../components/Header/Header";
import "./index.scss";
import WysiwygEditor from "../components/WysiwygEditor/WysiwygEditor";
import React, { useRef } from "react";
import { Editor as TinyMceEditor } from "tinymce";

export default function HomePage() {
  const editorRef = useRef<TinyMceEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className={"o-Page__Content"}>
          <h1> WYSIWYG </h1>
          <h2>Editeur TinyMCE</h2>
          <div className={"c-Wysiwyg__Editor"}>
            <WysiwygEditor forwardedRef={editorRef} />
          </div>
          <button className={"c-Wysiwyg__Button"} onClick={log}>
            Log editor content
          </button>
        </div>
      </main>
    </>
  );
}
