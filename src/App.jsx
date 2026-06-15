import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import SectionCard from './components/SectionCard.jsx'
import BlogCard from './components/BlogCard.jsx'
import TagCard from './components/TagCard.jsx'
import {
  homeCategories,
  featuredArticles,
  latestArticles,
  blogCards,
  trendingItems,
  sideTopics,
  articleTags,
  relatedArticles,
  categoryPosts,
  authorArticles,
  mostReadItems,
  tagsPageCards,
  pastIssues,
  valuesCards,
  teamCards,
  contactItems,
  articleSearchResults,
  authorProfile,
  aboutText
} from './data/content.js'

export default function App() {
  const [page, setPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchLabel, setSearchLabel] = useState('AI Agents')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeFilter, setActiveFilter] = useState('All Levels')
  const [subscribed, setSubscribed] = useState({})
  const [messageSent, setMessageSent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const handleNavigate = (pageId) => {
    setPage(pageId)
  }

  const handleSubscribe = (fieldKey) => {
    setSubscribed((current) => ({ ...current, [fieldKey]: true }))
  }

  const handleSubmitForm = () => {
    setMessageSent(true)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchLabel(searchQuery.trim())
    }
  }

  return (
    <div className="app-root">
      <Nav currentPage={page} onNavigate={handleNavigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {page === 'home' && (
        <div className="page active" id="home">
          <div className="hero">
            <div className="hero-badge">
              <span className="badge-dot" />AI Engineering Hub for Developers
            </div>
            <h1>
              Build the Future with <span>AI Engineering</span> Knowledge
            </h1>
            <p>
              From LLM tutorials to production agent guides — everything a modern AI engineer needs to build, ship, and scale intelligent systems.
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => handleNavigate('blog')}>
                Explore Articles
              </button>
              <button className="btn-outline" onClick={() => handleNavigate('tags')}>
                Browse Topics
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">120+</div>
                <div className="stat-label">Technical Articles</div>
              </div>
              <div>
                <div className="stat-num">18K</div>
                <div className="stat-label">Monthly Readers</div>
              </div>
              <div>
                <div className="stat-num">40+</div>
                <div className="stat-label">AI Agent Guides</div>
              </div>
              <div>
                <div className="stat-num">12</div>
                <div className="stat-label">LLM Benchmarks</div>
              </div>
            </div>
          </div>
          <div className="cats">
            {homeCategories.map((category) => (
              <button
                key={category}
                className={`cat ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="section">
            <div className="section-header">
              <div className="section-title">🔥 Featured This Week</div>
              <span className="section-link" onClick={() => handleNavigate('blog')}>
                View all →
              </span>
            </div>
            <div className="articles">
              {featuredArticles.map((article, index) => (
                <SectionCard
                  key={index}
                  {...article}
                  onClick={() => handleNavigate('article')}
                />
              ))}
            </div>
          </div>

          <div className="section" style={{ paddingTop: 0 }}>
            <div className="section-header">
              <div className="section-title">⚡ Latest Tutorials</div>
              <span className="section-link" onClick={() => handleNavigate('blog')}>
                View all →
              </span>
            </div>
            <div className="articles">
              {latestArticles.map((article, index) => (
                <SectionCard
                  key={index}
                  {...article}
                  onClick={() => handleNavigate('article')}
                />
              ))}
            </div>
          </div>

          <div className="newsletter">
            <i className="ti ti-mail" style={{ fontSize: 40, color: '#6C63FF', display: 'block', marginBottom: 14 }} />
            <h2>The AI Engineering Weekly</h2>
            <p>
              Every Thursday — curated tutorials, model releases, open source tools, and benchmarks for AI engineers.
            </p>
            <div className="email-form">
              <input
                className="email-input"
                type="email"
                placeholder="Enter your work email"
                id="homeEmail"
              />
              <button className="sub-btn" onClick={() => handleSubscribe('homeEmail')}>
                Subscribe Free
              </button>
            </div>
            <p style={{ fontSize: 12, color: '#404060', marginTop: 12 }}>
              Join 18,000+ AI engineers. No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          <footer className="footer">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="nav-logo" style={{ fontSize: 18 }}>
                  voicom<span style={{ color: '#6C63FF' }}>ai</span>.com
                </div>
                <p>
                  The go-to hub for AI engineers — practical tutorials, agent guides, LLM benchmarks, and architecture deep dives. Part of the VAI Ecosystem.
                </p>
              </div>
              <div className="footer-col">
                <h4>Topics</h4>
                <a onClick={() => handleNavigate('category')}>AI Agents</a>
                <a onClick={() => handleNavigate('category')}>LLMs & Models</a>
                <a onClick={() => handleNavigate('category')}>RAG Systems</a>
                <a onClick={() => handleNavigate('tags')}>All Topics</a>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <a onClick={() => handleNavigate('blog')}>All Tutorials</a>
                <a onClick={() => handleNavigate('newsletter')}>Newsletter</a>
                <a onClick={() => handleNavigate('search')}>Search</a>
                <a onClick={() => handleNavigate('tags')}>Tags</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a onClick={() => handleNavigate('about')}>About Us</a>
                <a onClick={() => handleNavigate('contact')}>Contact</a>
                <a>Write for Us</a>
                <a>Privacy Policy</a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 voicomai.com · Part of the VAI Ecosystem</p>
              <div className="footer-socials">
                <div className="social-icon">
                  <i className="ti ti-brand-twitter" />
                </div>
                <div className="social-icon">
                  <i className="ti ti-brand-linkedin" />
                </div>
                <div className="social-icon">
                  <i className="ti ti-brand-github" />
                </div>
                <div className="social-icon">
                  <i className="ti ti-rss" />
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}

      {page === 'blog' && (
        <div className="page active" id="blog">
          <div className="page-header">
            <h1>All Tutorials & Articles</h1>
            <p>120+ practical guides for AI engineers — from beginner to advanced</p>
          </div>
          <div className="blog-layout">
            <div>
              <div className="blog-list">
                {blogCards.map((card, index) => (
                  <BlogCard key={index} {...card} onClick={() => handleNavigate('article')} />
                ))}
              </div>
              <div className="pagination">
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
                <button className="page-btn">
                  <i className="ti ti-chevron-right" />
                </button>
              </div>
            </div>
            <div className="sidebar">
              <div className="sidebar-widget">
                <h3>🔥 Trending Now</h3>
                {trendingItems.map((item) => (
                  <div key={item.rank} className="trending-item">
                    <div className="trending-num">{item.rank}</div>
                    <p onClick={() => handleNavigate('article')}>{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="sidebar-widget">
                <h3>Browse Topics</h3>
                <div className="tag-cloud">
                  {sideTopics.map((topic) => (
                    <span key={topic} className="tag-pill" onClick={() => handleNavigate('tags')}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sidebar-widget">
                <h3>Newsletter</h3>
                <p style={{ fontSize: 13, color: '#606080', marginBottom: 14 }}>
                  18,000+ engineers read us every Thursday.
                </p>
                <input className="email-input" type="email" placeholder="Your email" id="sideEmail" style={{ marginBottom: 10, width: '100%' }} />
                <button className="sub-btn" style={{ width: '100%' }} onClick={() => handleSubscribe('sideEmail')}>
                  Subscribe Free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {page === 'article' && (
        <div className="page active" id="article">
          <div style={{ padding: '20px 48px', borderBottom: '0.5px solid #1a1a2e' }}>
            <div className="breadcrumb">
              <span onClick={() => handleNavigate('home')}>Home</span> ›{' '}
              <span onClick={() => handleNavigate('blog')}>Tutorials</span> ›{' '}
              <span onClick={() => handleNavigate('category')}>LLMs</span> › Claude 3.5 in Production
            </div>
          </div>
          <div className="article-layout">
            <div className="article-content">
              <span className="card-tag tag-purple" style={{ marginBottom: 16, display: 'inline-block' }}>
                Deep Dive
              </span>
              <h1 className="article-title">How Claude 3.5 Sonnet Became the Default Choice for Production AI Apps</h1>
              <div className="article-info">
                <div className="article-author">
                  <div className="author-avatar av2" style={{ cursor: 'pointer' }} onClick={() => handleNavigate('author')}>
                    SK
                  </div>
                  <div className="author-info">
                    <p style={{ cursor: 'pointer' }} onClick={() => handleNavigate('author')}>
                      Sara Khan
                    </p>
                    <span>ML Research Engineer · Jun 12, 2025</span>
                  </div>
                </div>
                <div className="article-stats">
                  <span className="article-stat">
                    <i className="ti ti-clock" />14 min
                  </span>
                  <span className="article-stat">
                    <i className="ti ti-eye" />5,102
                  </span>
                  <span className="article-stat">
                    <i className="ti ti-heart" />487
                  </span>
                </div>
              </div>
              <div className="article-hero">
                <i className="ti ti-brain" />
              </div>
              <div className="article-body">
                <h2>Why This Comparison Matters</h2>
                <p>
                  For the past 18 months, GPT-4 has been the default LLM for most production AI applications. But in the last quarter of 2025, we've seen a quiet but significant shift — engineering teams at startups and enterprises alike are moving to Claude 3.5 Sonnet for their core AI workloads.
                </p>
                <p>
                  We ran Claude 3.5 Sonnet through 50+ real developer tasks across 6 categories to understand why. Here's what we found.
                </p>
                <h2>Test Categories</h2>
                <ul>
                  <li>Code generation and debugging</li>
                  <li>Long document analysis and summarization</li>
                  <li>Tool use and function calling</li>
                  <li>RAG pipeline accuracy</li>
                  <li>Multi-step reasoning tasks</li>
                  <li>Cost per 1M tokens vs output quality</li>
                </ul>
                <h2>Results: Code Generation</h2>
                <p>
                  Claude 3.5 outperformed GPT-4o on 34 out of 40 coding tasks we tested. Particularly impressive was its ability to handle large codebases — understanding file structures, catching subtle bugs, and generating complete working modules without hallucinating imports.
                </p>
                <div className="code-block">
                  <span className="comment"># Task: Refactor this function to be async and add error handling</span>
                  <span className="comment"># Claude 3.5 correctly identified 3 edge cases GPT-4o missed</span>

                  <span className="keyword">async def</span> fetch_embeddings(texts: list[str]) -> list[list[float]]:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if not</span> texts:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">raise</span> ValueError(<span className="string">"texts list cannot be empty"</span>)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">try</span>:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;response = <span className="keyword">await</span> client.embeddings.create(
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model=<span className="string">"text-embedding-3-small"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input=texts
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> [item.embedding <span className="keyword">for</span> item <span className="keyword">in</span> response.data]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">except</span> Exception <span className="keyword">as</span> e:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.error(<span className="string">f"Embedding failed: {e}"</span>)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">raise</span>
                </div>
                <h2>Cost Analysis</h2>
                <p>
                  At $3 per 1M input tokens and $15 per 1M output tokens, Claude 3.5 Sonnet is competitively priced against GPT-4o. But the real savings come from fewer retries — Claude produces correct outputs on the first attempt more consistently, reducing your total token spend by 15-30% in practice.
                </p>
                <h3>When to Still Use GPT-4o</h3>
                <p>
                  Claude isn't better in every scenario. For tasks requiring real-time web browsing via Bing, GPT-4o with browsing is still the better choice. Also, if your team is already deeply integrated with Azure OpenAI, switching has infrastructure costs to consider.
                </p>
                <h2>Conclusion</h2>
                <p>
                  For most production AI applications in 2025 — especially those involving coding, RAG, and long-context understanding — Claude 3.5 Sonnet is now our top recommendation. The combination of accuracy, context window, and cost makes it the pragmatic choice for engineering teams.
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  margin: '24px 0',
                  paddingTop: 20,
                  borderTop: '0.5px solid #1e1e32'
                }}
              >
                {articleTags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="share-section">
                <p>Found this useful? Share it with your team!</p>
                <div className="share-btns">
                  <button className="share-btn">
                    <i className="ti ti-brand-twitter" /> Twitter
                  </button>
                  <button className="share-btn">
                    <i className="ti ti-brand-linkedin" /> LinkedIn
                  </button>
                  <button className="share-btn">
                    <i className="ti ti-link" /> Copy Link
                  </button>
                </div>
              </div>
              <div style={{ marginTop: 40 }}>
                <h2 style={{ fontSize: 20, fontWeight: 600, color: '#E8E8F0', marginBottom: 20 }}>Related Articles</h2>
                <div className="related-grid">
                  {relatedArticles.map((item, index) => (
                    <div key={index} className="card" onClick={() => handleNavigate('article')}>
                      <span className={`card-tag ${item.tagClass}`}>{item.tag}</span>
                      <h3>{item.title}</h3>
                      <div className="card-meta">
                        <span className="author-name">{item.author}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="article-sidebar">
              <div className="toc-widget">
                <h3>Table of Contents</h3>
                {['Why This Comparison Matters', 'Test Categories', 'Results: Code Generation', 'Cost Analysis', 'When to Still Use GPT-4o', 'Conclusion'].map((item) => (
                  <div key={item} className={`toc-item ${item === 'Why This Comparison Matters' ? 'active' : ''}`}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="author-widget">
                <div className="author-widget-avatar av2" style={{ cursor: 'pointer' }} onClick={() => handleNavigate('author')}>
                  SK
                </div>
                <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigate('author')}>
                  Sara Khan
                </h3>
                <p>
                  ML Research Engineer specializing in LLM evaluation, RAG systems, and NLP. PhD researcher turned practitioner.
                </p>
                <button className="follow-btn">Follow Author</button>
              </div>
              <div className="sidebar-widget">
                <h3>Newsletter</h3>
                <p style={{ fontSize: 13, color: '#606080', marginBottom: 14 }}>
                  Get weekly AI engineering insights.
                </p>
                <input className="email-input" type="email" placeholder="Your email" id="articleEmail" style={{ marginBottom: 10, width: '100%' }} />
                <button className="sub-btn" style={{ width: '100%' }} onClick={() => handleSubscribe('articleEmail')}>
                  Subscribe Free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {page === 'category' && (
        <div className="page active" id="category">
          <div className="category-header">
            <div className="hero-badge" style={{ marginBottom: 16 }}>
              <span className="badge-dot" />Category
            </div>
            <h1>🤖 AI Agents</h1>
            <p>Build autonomous AI agents that reason, plan, and execute multi-step tasks</p>
            <div className="category-stats">
              <span className="category-stat">
                <i className="ti ti-article" />
                <strong>42</strong> Articles
              </span>
              <span className="category-stat">
                <i className="ti ti-eye" />
                <strong>124K</strong> Total Views
              </span>
              <span className="category-stat">
                <i className="ti ti-clock" />New articles weekly
              </span>
            </div>
          </div>
          <div className="filter-bar">
            <div className="filter-left">
              {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <select className="sort-select">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Shortest Read</option>
            </select>
          </div>
          <div className="category-grid">
            {categoryPosts.map((post, index) => (
              <div key={index} className="card" onClick={() => handleNavigate('article')}>
                <span className={`card-tag ${post.tagClass}`}>{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="card-meta">
                  <div className="card-author">
                    <div className={`avatar ${post.avatar ? `av${post.avatar.length}` : ''}`}>{post.avatar}</div>
                    <span className="author-name">{post.author} · {post.authorMeta}</span>
                  </div>
                  <span className="card-read">👁 {post.reads}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === 'author' && (
        <div className="page active" id="author">
          <div className="author-profile-header">
            <div className="author-profile-top">
              <div className="author-big-avatar av2">SK</div>
              <div className="author-profile-info">
                <h1>{authorProfile.name}</h1>
                <div className="author-role-badge">{authorProfile.title}</div>
                <p>{authorProfile.description}</p>
                <div className="author-social-links">
                  <button className="author-social-btn">
                    <i className="ti ti-brand-twitter" /> @sara_ai_eng
                  </button>
                  <button className="author-social-btn">
                    <i className="ti ti-brand-linkedin" /> LinkedIn
                  </button>
                  <button className="author-social-btn">
                    <i className="ti ti-brand-github" /> GitHub
                  </button>
                  <button className="author-social-btn" style={{ background: '#6C63FF', color: '#fff', borderColor: '#6C63FF' }}>
                    + Follow
                  </button>
                </div>
              </div>
            </div>
            <div className="author-profile-stats">
              {authorProfile.stats.map((stat) => (
                <div key={stat.label} className="ap-stat">
                  <div className="num">{stat.value}</div>
                  <div className="lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="author-profile-body">
            <div>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#E8E8F0', marginBottom: 12 }}>About Sara</h2>
                <p style={{ fontSize: 14, color: '#7070A0', lineHeight: 1.8 }}>
                  Sara holds a PhD in Natural Language Processing from IIT Delhi and has spent the last 3 years applying research to real-world AI systems. Her work focuses on making LLMs reliable, measurable, and cost-effective for engineering teams. She's benchmarked over 200 LLM tasks across Claude, GPT-4, Gemini, and open-source models.
                </p>
                <div style={{ marginTop: 16 }}>
                  <p style={{ fontSize: 13, color: '#A0A0B0', marginBottom: 10, fontWeight: 600 }}>Areas of Expertise</p>
                  <div className="expertise-tags">
                    {authorProfile.expertise.map((item) => (
                      <span key={item} className="expertise-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: '#E8E8F0', marginBottom: 16 }}>Latest Articles by Sara</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {authorArticles.map((card, index) => (
                  <BlogCard
                    key={index}
                    {...card}
                    author=""
                    authorMeta={card.authorMeta}
                    onClick={() => handleNavigate('article')}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="sidebar-widget" style={{ marginBottom: 20 }}>
                <h3>Most Read</h3>
                {mostReadItems.map((item, index) => (
                  <div key={index} className="trending-item">
                    <div className="trending-num">0{index + 1}</div>
                    <p onClick={() => handleNavigate('article')}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="sidebar-widget">
                <h3>Get Notified</h3>
                <p style={{ fontSize: 13, color: '#606080', marginBottom: 14 }}>
                  Be the first to know when Sara publishes a new article.
                </p>
                <input className="email-input" type="email" placeholder="Your email" id="authorEmail" style={{ marginBottom: 10, width: '100%' }} />
                <button className="sub-btn" style={{ width: '100%' }} onClick={() => handleSubscribe('authorEmail')}>
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {page === 'tags' && (
        <div className="page active" id="tags">
          <div className="tags-header">
            <h1>Browse All Topics</h1>
            <p>Find articles by topic — 12 categories, 120+ articles covering the full AI engineering stack</p>
          </div>
          <div className="all-tags-grid">
            {tagsPageCards.map((item, index) => (
              <TagCard key={index} {...item} onClick={() => handleNavigate('category')} />
            ))}
          </div>
        </div>
      )}

      {page === 'newsletter' && (
        <div className="page active" id="newsletter">
          <div className="nl-hero">
            <div className="hero-badge" style={{ marginBottom: 20 }}>
              <span className="badge-dot" />Every Thursday
            </div>
            <h1>The AI Engineering Weekly</h1>
            <p>
              Curated tutorials, model releases, open source tools, and benchmarks — handpicked for engineers building real AI systems.
            </p>
            <div className="email-form" style={{ maxWidth: 460, margin: '0 auto' }}>
              <input className="email-input" type="email" placeholder="Enter your work email" id="nlEmail" />
              <button className="sub-btn" onClick={() => handleSubscribe('nlEmail')}>
                Subscribe Free →
              </button>
            </div>
            <p style={{ fontSize: 12, color: '#404060', marginTop: 12 }}>
              Join 18,000+ AI engineers · No spam · Unsubscribe anytime
            </p>
          </div>
          <div className="nl-perks">
            <div className="nl-perk">
              <i className="ti ti-rocket" />
              <h3>Fresh Tutorials</h3>
              <p>The best new guides published this week — curated so you don't have to search.</p>
            </div>
            <div className="nl-perk">
              <i className="ti ti-brain" />
              <h3>Model Updates</h3>
              <p>New model releases, benchmarks, and what they actually mean for your stack.</p>
            </div>
            <div className="nl-perk">
              <i className="ti ti-tools" />
              <h3>Tool Radar</h3>
              <p>Open source tools worth trying this week — vetted by our engineering team.</p>
            </div>
          </div>
          <div style={{ background: '#0f0f1e', border: '0.5px solid #2a2a40', borderRadius: 16, padding: 48, textAlign: 'center', margin: '0 48px 48px' }}>
            <i className="ti ti-mail" style={{ fontSize: 36, color: '#6C63FF', display: 'block', marginBottom: 14 }} />
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Subscribe to the Newsletter</h2>
            <p style={{ fontSize: 14, color: '#606080', marginBottom: 24 }}>
              Every Thursday morning — 5 minute read, packed with value.
            </p>
            <div className="email-form">
              <input className="email-input" type="email" placeholder="Enter your email" id="nlEmail2" />
              <button className="sub-btn" onClick={() => handleSubscribe('nlEmail2')}>
                Subscribe Free
              </button>
            </div>
          </div>
          <div style={{ padding: '0 48px 48px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: '#E8E8F0', marginBottom: 20 }}>📬 Past Issues</h2>
            {pastIssues.map((issue, index) => (
              <div key={index} className="nl-issue" onClick={() => handleNavigate('article')}>
                <div>
                  <h4>{issue.title}</h4>
                  <span>{issue.date}</span>
                </div>
                <span className="nl-issue-read">Read →</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === 'about' && (
        <div className="page active" id="about">
          <div className="about-hero">
            <div className="hero-badge" style={{ marginBottom: 20 }}>
              <span className="badge-dot" />Our Mission
            </div>
            <h1>Built for AI Engineers, by AI Engineers</h1>
            <p>{aboutText.missionDescription}</p>
          </div>
          <div className="about-content">
            <div className="about-section">
              <h2>Why We Built This</h2>
              <p>{aboutText.whyText}</p>
              <p>{aboutText.weBuiltText}</p>
              <p>{aboutText.ecosystemText}</p>
            </div>
            <div className="about-section">
              <h2>What We Stand For</h2>
              <div className="values-grid">
                {valuesCards.map((card, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">
                      <i className={`ti ${card.icon}`} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-section">
              <h2>Meet the Team</h2>
              <div className="team-grid">
                {teamCards.map((member) => (
                  <div key={member.title} className="team-card" onClick={() => handleNavigate('author')}>
                    <div className="team-avatar">{member.initials}</div>
                    <h3>{member.title}</h3>
                    <div className="role">{member.role}</div>
                    <p>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {page === 'contact' && (
        <div className="page active" id="contact">
          <div className="page-header">
            <h1>Get in Touch</h1>
            <p>Write for us, explore partnerships, or just say hello — we'd love to hear from you.</p>
          </div>
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Let's Talk</h2>
              <p>
                Whether you're a developer who wants to contribute, a company looking to partner, or just someone with feedback — we respond to every message within 24 hours.
              </p>
              {contactItems.map((item) => (
                <div key={item.title} className="contact-item">
                  <div className="contact-icon">
                    <i className={`ti ${item.icon}`} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input className="form-input" type="text" placeholder="Sara" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input className="form-input" type="text" placeholder="Khan" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input className="form-input" type="email" placeholder="sara@example.com" />
              </div>
              <div className="form-group">
                <label>I want to...</label>
                <select className="form-input">
                  <option>Write an Article</option>
                  <option>Explore Sponsorship</option>
                  <option>Report a Bug</option>
                  <option>Give Feedback</option>
                  <option>Ask a Question</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea className="form-textarea" placeholder="Tell us more about what you have in mind..." />
              </div>
              <button className="submit-btn" id="submitBtn" onClick={handleSubmitForm}>
                {messageSent ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      )}

      {page === 'search' && (
        <div className="page active" id="search">
          <div className="search-hero">
            <h1>Search voicomai.com</h1>
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                placeholder="e.g. RAG pipeline, LangChain agents, fine-tuning..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
          <div className="search-results">
            <p className="results-count">
              Showing <strong>8 results</strong> for "{searchLabel}"
            </p>
            <div className="blog-list">
              {articleSearchResults.map((card, index) => (
                <div key={index} className="blog-card" onClick={() => handleNavigate('article')}>
                  <div className="blog-card-img">
                    <i className={`ti ${card.icon}`} />
                  </div>
                  <div className="blog-card-content">
                    <span className="card-tag tag-green">{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="blog-card-footer">
                      <div className="card-author">
                        <div className={`avatar ${card.avatar ? `av${card.avatar.length}` : ''}`}>{card.avatar}</div>
                        <span className="author-name">{card.author} · {card.authorMeta}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
