"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import EditArticle from "./EditArticle";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=gabrielanhaia&per_page=3")
      .then((res) => res.json())
      .then((result) => setArticles(result));
  }, []);

  return (
    <div className="overflow-x-auto">
      <EditArticle />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {articles.map((article) => (
            <tr key={article.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={article.cover_image}
                        alt={article.description}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{article.title}</div>
                    <div className="text-sm opacity-50">
                      {dayjs(article?.published_at).format("dddd , D MMM YYYY")}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {article.description}
                <br />
                {article?.tag_list.map((tag) => (
                  <span key={tag} className="badge badge-ghost badge-sm">
                    {tag}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
