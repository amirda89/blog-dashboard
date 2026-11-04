export default function EditArticle() {
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
              type="text"
              placeholder="Title"
              className="input w-full mb-8"
            />
            <textarea
              className="textarea w-full mb-8"
              placeholder="Description"
            ></textarea>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
              <button className="btn btn-primary">Publish</button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
