import { useState } from "react";

export default function EditArticle() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");

  function publish() {
    fetch("api/articles", {
      method: "POST",
      body: JSON.stringify({ title, markdown }),
    });
  }

  return (
    <>
      <div className="text-right mb-8">
        <button
          className="btn"
          onClick={() => document.getElementById("editArticle").showModal()}
        >
          New Article
        </button>
        <dialog id="editArticle" className="modal">
          <div className="modal-box">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              className="input w-full mb-8"
            />
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="textarea w-full mb-8"
              placeholder="Description"
            ></textarea>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
              <button className="btn btn-primary" onClick={publish}>
                Publish
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
