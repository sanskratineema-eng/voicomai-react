import React from 'react'

export default function SectionCard({ tag, tagClass, title, description, author, authorMeta, avatar, reads, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <span className={`card-tag ${tagClass}`}>{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-meta">
        <div className="card-author">
          <div className={`avatar ${avatar ? `av${avatar.length}` : ''}`}>{avatar}</div>
          <span className="author-name">{author} · {authorMeta}</span>
        </div>
        {reads && <span className="card-read">👁 {reads}</span>}
      </div>
    </div>
  )
}
