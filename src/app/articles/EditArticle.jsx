import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function EditArticle({ onAdd, editing, setEditing }) {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setMarkdown(editing.body_markdown);
    }
  }, [editing]);

  async function publish() {
    setSaving(true);
    if (editing) {
      await fetch("api/articles", {
        method: "PUT",
        body: JSON.stringify({ id: editing.id, title, markdown }),
      });
    } else {
      await fetch("api/articles", {
        method: "POST",
        body: JSON.stringify({ title, markdown }),
      });
    }

    setSaving(false);
    document.getElementById("editArticle").close();
    onAdd();
    toast.success(editing ? "Successfully edited!" : "Successfully published!");
    setEditing(null);
    setTitle("");
    setMarkdown("");
  }

  function handleNew() {
    setEditing(null);
    setTitle("");
    setMarkdown("");
    document.getElementById("editArticle").showModal();
  }

  return (
    <>
      <div className="text-right mb-8">
        <button className="btn" onClick={() => handleNew()}>
          New Article
        </button>
        <dialog id="editArticle" className="modal">
          <div className="modal-box">
            <input
              disabled={saving}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              className="input w-full mb-8"
            />
            <textarea
              disabled={saving}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="textarea w-full mb-8"
              placeholder="Description"
            ></textarea>
            <div className="modal-action">
              <form method="dialog">
                <button disabled={saving} className="btn">
                  Close
                </button>
              </form>
              <button
                disabled={saving}
                className="btn btn-primary"
                onClick={publish}
              >
                Publish
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
