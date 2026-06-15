import React from 'react'

export default function BlogCard({ icon, tag, tagClass, title, description, author, authorMeta, avatar, reads, onClick }) {
  return (
    <div className="blog-card" onClick={onClick}>
      <div className="blog-card-img">
        <i className={`ti ${icon}`} />
      </div>
      <div className="blog-card-content">
        <span className={`card-tag ${tagClass}`}>{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="blog-card-footer">
          <div className="card-author">
            {avatar && <div className={`avatar ${avatar ? `av${avatar.length}` : ''}`}>{avatar}</div>}
            <span className="author-name">{author} · {authorMeta}</span>
          </div>
          {reads && <span className="card-read">👁 {reads}</span>}
        </div>
      </div>
    </div>
  )
}
