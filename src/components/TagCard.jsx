import React from 'react'

export default function TagCard({ icon, title, description, count, onClick }) {
  return (
    <div className="tag-card" onClick={onClick}>
      <div className="tag-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tag-card-count">{count}</div>
    </div>
  )
}
