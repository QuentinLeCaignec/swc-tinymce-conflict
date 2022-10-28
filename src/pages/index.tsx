import styles from "./index.module.scss";
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
      <main>
        <div>
          <h1> WYSIWYG </h1>
          <h2>TinyMCE Editor</h2>
          <div className={styles.cWysiwyg__Editor}>
            <WysiwygEditor forwardedRef={editorRef} />
          </div>
          <button className={styles.cWysiwyg__Button} onClick={log}>
            Log editor content
          </button>
        </div>
      </main>
    </>
  );
}
