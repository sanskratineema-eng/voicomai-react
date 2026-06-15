export const navItems = [
  { label: 'Tutorials', page: 'blog' },
  { label: 'AI Agents', page: 'category' },
  { label: 'Topics', page: 'tags' },
  { label: 'Newsletter', page: 'newsletter' },
  { label: 'About', page: 'about' }
]

export const homeCategories = [
  'All',
  'AI Agents',
  'LLMs & Models',
  'RAG Systems',
  'Prompt Engineering',
  'MLOps',
  'Open Source',
  'Tutorials'
]

export const featuredArticles = [
  {
    tag: 'Deep Dive',
    tagClass: 'tag-purple',
    title: 'How Claude 3.5 Sonnet Became the Default Choice for Production AI Apps',
    description:
      "We tested Claude 3.5 Sonnet across 50+ real-world developer tasks — coding, RAG, tool use, and reasoning. Here's why teams are switching from GPT-4 for production workloads.",
    author: 'Sara Khan',
    authorMeta: 'Jun 12, 2025 · 14 min read',
    avatar: 'SK',
    badge: "★ Editor's Pick"
  },
  {
    tag: 'Tutorial',
    tagClass: 'tag-cyan',
    title: 'Build a Real-Time AI Coding Assistant Using Cursor + Claude API',
    description: 'Step-by-step guide to creating your own AI coding assistant integrated directly into your dev workflow.',
    author: 'Dev Mehta',
    authorMeta: '10 min',
    avatar: 'DM',
    reads: '5.1k'
  },
  {
    tag: 'Open Source',
    tagClass: 'tag-green',
    title: 'LangGraph vs CrewAI vs AutoGen: Which Agent Framework in 2025?',
    description: 'Honest comparison of the top 3 agent frameworks — pros, cons, and when to use each one.',
    author: 'Priya Rao',
    authorMeta: '8 min',
    avatar: 'PR',
    reads: '9.3k'
  },
  {
    tag: 'Architecture',
    tagClass: 'tag-orange',
    title: 'Vector Database Showdown: Pinecone vs Weaviate vs Chroma in 2025',
    description: 'Which vector DB should you pick for your RAG system? We benchmarked all three at scale.',
    author: 'Amit Mishra',
    authorMeta: '11 min',
    avatar: 'AM',
    reads: '6.7k'
  }
]

export const latestArticles = [
  {
    tag: 'Prompt Eng.',
    tagClass: 'tag-purple',
    title: 'Zero-Shot vs Few-Shot vs Chain-of-Thought: When to Use Each',
    description: 'A practical breakdown of prompting strategies with real examples across GPT-4, Claude, and Gemini.',
    author: 'Aryan Rao',
    authorMeta: '7 min',
    avatar: 'AR',
    reads: '3.4k'
  },
  {
    tag: 'MLOps',
    tagClass: 'tag-cyan',
    title: 'Monitoring LLMs in Production: Tools, Metrics & Alerts You Need',
    description: 'How to track hallucinations, latency, cost, and quality in production LLM systems using LangSmith and Helicone.',
    author: 'Sara Khan',
    authorMeta: '9 min',
    avatar: 'SK',
    reads: '4.8k'
  },
  {
    tag: 'LLMs',
    tagClass: 'tag-green',
    title: 'Fine-Tuning vs RAG vs Prompt Engineering: Choose the Right Approach',
    description: 'Decision guide for developers — when to fine-tune, when to use RAG, and when a good prompt is enough.',
    author: 'Dev Mehta',
    authorMeta: '6 min',
    avatar: 'DM',
    reads: '7.9k'
  }
]

export const blogCards = [
  {
    icon: 'ti-brain',
    tag: 'Deep Dive',
    tagClass: 'tag-purple',
    title: 'How Claude 3.5 Sonnet Became the Default for Production AI Apps',
    description: "We tested Claude 3.5 across 50+ developer tasks. Here's why teams are switching from GPT-4.",
    author: 'Sara Khan',
    authorMeta: 'Jun 12 · 14 min',
    avatar: 'SK',
    reads: '5.1k'
  },
  {
    icon: 'ti-code',
    tag: 'Tutorial',
    tagClass: 'tag-cyan',
    title: 'Build a Real-Time AI Coding Assistant Using Cursor + Claude API',
    description: 'Step-by-step guide to creating your own AI coding assistant integrated into your dev workflow.',
    author: 'Dev Mehta',
    authorMeta: 'Jun 10 · 10 min',
    avatar: 'DM',
    reads: '4.2k'
  },
  {
    icon: 'ti-robot',
    tag: 'Open Source',
    tagClass: 'tag-green',
    title: 'LangGraph vs CrewAI vs AutoGen: Best Agent Framework in 2025?',
    description: 'Honest comparison of the top 3 agent frameworks with pros, cons, and use case recommendations.',
    author: 'Priya Rao',
    authorMeta: 'Jun 8 · 8 min',
    avatar: 'PR',
    reads: '9.3k'
  },
  {
    icon: 'ti-database',
    tag: 'Architecture',
    tagClass: 'tag-orange',
    title: 'Vector Database Showdown: Pinecone vs Weaviate vs Chroma',
    description: 'Which vector DB for your RAG system? We benchmarked all three at scale with real cost data.',
    author: 'Amit Mishra',
    authorMeta: 'Jun 5 · 11 min',
    avatar: 'AM',
    reads: '6.7k'
  },
  {
    icon: 'ti-prompt',
    tag: 'Prompt Eng.',
    tagClass: 'tag-purple',
    title: 'Zero-Shot vs Few-Shot vs Chain-of-Thought: When to Use Each',
    description: 'Practical breakdown of prompting strategies with real examples across leading LLMs.',
    author: 'Aryan Rao',
    authorMeta: 'Jun 3 · 7 min',
    avatar: 'AR',
    reads: '3.4k'
  },
  {
    icon: 'ti-chart-line',
    tag: 'MLOps',
    tagClass: 'tag-cyan',
    title: 'Monitoring LLMs in Production: Tools, Metrics & Alerts',
    description: 'Track hallucinations, latency, cost, and quality using LangSmith and Helicone in production.',
    author: 'Sara Khan',
    authorMeta: 'May 30 · 9 min',
    avatar: 'SK',
    reads: '4.8k'
  },
  {
    icon: 'ti-adjustments',
    tag: 'Guide',
    tagClass: 'tag-yellow',
    title: 'Fine-Tuning vs RAG vs Prompt Engineering: Choose the Right Approach',
    description: 'Decision framework for developers — when to fine-tune, when to use RAG, when a prompt is enough.',
    author: 'Dev Mehta',
    authorMeta: 'May 27 · 6 min',
    avatar: 'DM',
    reads: '7.9k'
  },
  {
    icon: 'ti-shield',
    tag: 'Security',
    tagClass: 'tag-red',
    title: 'LLM Security 101: Prompt Injection, Data Leaks & How to Prevent Them',
    description: 'A developer\'s guide to the most common LLM vulnerabilities and how to build secure AI applications.',
    author: 'Priya Rao',
    authorMeta: 'May 24 · 13 min',
    avatar: 'PR',
    reads: '8.1k'
  }
]

export const trendingItems = [
  { rank: '01', label: 'LangGraph vs CrewAI vs AutoGen — 9.3k views' },
  { rank: '02', label: 'Fine-Tuning vs RAG vs Prompting — 7.9k views' },
  { rank: '03', label: 'LLM Security 101 — 8.1k views' },
  { rank: '04', label: 'Claude 3.5 Sonnet in Production — 5.1k views' }
]

export const sideTopics = [
  'AI Agents',
  'LLMs',
  'RAG',
  'Prompt Eng.',
  'MLOps',
  'Security',
  'Open Source',
  'Fine-Tuning'
]

export const articleTags = ['Claude', 'GPT-4', 'LLMs', 'Production', 'Benchmarks', 'Cost Optimization']

export const relatedArticles = [
  { tag: 'Open Source', tagClass: 'tag-green', title: 'LangGraph vs CrewAI vs AutoGen', author: 'Priya Rao · 8 min' },
  { tag: 'Guide', tagClass: 'tag-yellow', title: 'Fine-Tuning vs RAG vs Prompting', author: 'Dev Mehta · 6 min' },
  { tag: 'Architecture', tagClass: 'tag-orange', title: 'Vector DB Showdown: Pinecone vs Weaviate', author: 'Amit Mishra · 11 min' }
]

export const categoryPosts = [
  {
    tag: 'Beginner',
    tagClass: 'tag-green',
    title: 'What is an AI Agent? A Plain-English Guide for Developers',
    description: 'No jargon — just a clear explanation of what agents are, how they work, and when to build one.',
    author: 'Dev Mehta',
    authorMeta: '5 min',
    avatar: 'DM',
    reads: '11.2k'
  },
  {
    tag: 'Tutorial',
    tagClass: 'tag-cyan',
    title: 'Build Your First ReAct Agent with LangChain in Under 1 Hour',
    description: 'Hands-on tutorial: create a working ReAct agent that can search the web and execute Python code.',
    author: 'Aryan Rao',
    authorMeta: '9 min',
    avatar: 'AR',
    reads: '7.8k'
  },
  {
    tag: 'Architecture',
    tagClass: 'tag-orange',
    title: 'Planning vs Reactive Agents: Choosing the Right Architecture',
    description: 'Deep dive into agent architectures — when to use planners vs reactive systems in production.',
    author: 'Priya Rao',
    authorMeta: '12 min',
    avatar: 'PR',
    reads: '4.5k'
  },
  {
    tag: 'Advanced',
    tagClass: 'tag-purple',
    title: 'Multi-Agent Systems with LangGraph: A Complete Implementation Guide',
    description: 'Build a supervisor agent that coordinates specialized sub-agents — with full working code.',
    author: 'Amit Mishra',
    authorMeta: '16 min',
    avatar: 'AM',
    reads: '3.2k'
  },
  {
    tag: 'Case Study',
    tagClass: 'tag-red',
    title: 'We Replaced 3 Manual Workflows with AI Agents — Here\'s What Happened',
    description: 'Real results from deploying agents in a 50-person startup: time saved, errors reduced, and lessons learned.',
    author: 'Sara Khan',
    authorMeta: '10 min',
    avatar: 'SK',
    reads: '6.9k'
  },
  {
    tag: 'Deep Dive',
    tagClass: 'tag-yellow',
    title: 'Tool Use in AI Agents: A Complete Guide to Function Calling',
    description: 'Everything you need to know about giving agents tools — APIs, databases, code execution, and more.',
    author: 'Aryan Rao',
    authorMeta: '14 min',
    avatar: 'AR',
    reads: '5.3k'
  }
]

export const authorArticles = [
  {
    icon: 'ti-brain',
    tag: 'Deep Dive',
    tagClass: 'tag-purple',
    title: 'How Claude 3.5 Sonnet Became the Default for Production AI Apps',
    description: "We tested Claude 3.5 across 50+ developer tasks. Here's what we found.",
    authorMeta: 'Jun 12 · 14 min read',
    reads: '5.1k'
  },
  {
    icon: 'ti-chart-line',
    tag: 'MLOps',
    tagClass: 'tag-cyan',
    title: 'Monitoring LLMs in Production: Tools, Metrics & Alerts You Need',
    description: 'Track hallucinations, latency, cost, and quality in your production LLM systems.',
    authorMeta: 'May 30 · 9 min read',
    reads: '4.8k'
  },
  {
    icon: 'ti-database',
    tag: 'Case Study',
    tagClass: 'tag-red',
    title: 'We Replaced 3 Manual Workflows with AI Agents — Results After 90 Days',
    description: 'Real numbers from deploying agents in a live startup environment.',
    authorMeta: 'May 15 · 10 min read',
    reads: '6.9k'
  }
]

export const mostReadItems = [
  'Claude 3.5 in Production — 5.1k views',
  'AI Agents Case Study — 6.9k views',
  'LLM Monitoring Guide — 4.8k views'
]

export const tagsPageCards = [
  {
    icon: '🤖',
    title: 'AI Agents',
    description: 'ReAct, LangGraph, AutoGen, CrewAI — build autonomous agents that get things done',
    count: '42 articles'
  },
  {
    icon: '🧠',
    title: 'LLMs & Models',
    description: 'Claude, GPT-4, Gemini, Mistral — comparisons, benchmarks, and selection guides',
    count: '38 articles'
  },
  {
    icon: '🔍',
    title: 'RAG Systems',
    description: 'Embeddings, vector DBs, retrieval strategies — build knowledge-powered AI apps',
    count: '24 articles'
  },
  {
    icon: '✍️',
    title: 'Prompt Engineering',
    description: 'Zero-shot, few-shot, CoT, structured outputs — get the most out of any LLM',
    count: '31 articles'
  },
  {
    icon: '⚙️',
    title: 'MLOps',
    description: 'Deploy, monitor, and scale LLM systems — latency, cost, and reliability guides',
    count: '19 articles'
  },
  {
    icon: '🌐',
    title: 'Open Source',
    description: 'LangChain, LangGraph, Ollama, LlamaIndex — the best free tools for AI engineers',
    count: '27 articles'
  },
  {
    icon: '🏗️',
    title: 'Architecture',
    description: 'System design for AI apps — patterns, anti-patterns, and scaling strategies',
    count: '16 articles'
  },
  {
    icon: '📚',
    title: 'Tutorials',
    description: 'Step-by-step guides from beginner to advanced — with working code you can run',
    count: '55 articles'
  },
  {
    icon: '🔒',
    title: 'LLM Security',
    description: 'Prompt injection, data leaks, jailbreaks — how to build secure AI applications',
    count: '11 articles'
  },
  {
    icon: '☁️',
    title: 'Cloud & Infra',
    description: 'AWS, GCP, Azure for AI — deploy LLMs serverless, on GPU, or at the edge',
    count: '21 articles'
  },
  {
    icon: '🎯',
    title: 'Fine-Tuning',
    description: 'LoRA, QLoRA, RLHF — when and how to customize models for your use case',
    count: '14 articles'
  },
  {
    icon: '📊',
    title: 'Benchmarks',
    description: 'Head-to-head LLM comparisons with real task data, cost analysis, and scoring',
    count: '12 articles'
  }
]

export const pastIssues = [
  { title: 'Issue #27 — The Agentic Era Has Arrived: What Developers Need to Know', date: 'Jun 12, 2025 · 6 min read' },
  { title: 'Issue #26 — Claude 3.5 vs GPT-4o: Our Honest 50-Task Benchmark', date: 'Jun 5, 2025 · 5 min read' },
  { title: 'Issue #25 — LangGraph is Winning the Agent Framework War. Here\'s Why.', date: 'May 29, 2025 · 4 min read' },
  { title: 'Issue #24 — RAG in 2025: What\'s Changed and What Still Doesn\'t Work', date: 'May 22, 2025 · 7 min read' },
  { title: 'Issue #23 — Fine-Tuning Is Back: LoRA, QLoRA, and When to Use Them', date: 'May 15, 2025 · 5 min read' }
]

export const valuesCards = [
  {
    icon: 'ti-code',
    title: 'Code First',
    description: 'Every concept comes with working code. We test everything ourselves before publishing.'
  },
  {
    icon: 'ti-chart-bar',
    title: 'Data-Driven',
    description: 'Our benchmarks and comparisons use real task data — not marketing copy from model providers.'
  },
  {
    icon: 'ti-refresh',
    title: 'Always Updated',
    description: 'AI moves at breakneck speed. We update articles when models improve and tools change.'
  }
]

export const teamCards = [
  {
    initials: 'AR',
    title: 'Aryan Rao',
    role: 'Founder & Lead Engineer',
    description: '6 years building ML systems in fintech. Obsessed with AI agents and production reliability.'
  },
  {
    initials: 'SK',
    title: 'Sara Khan',
    role: 'Research & Benchmarks Lead',
    description: 'PhD in NLP. Runs all our LLM evaluations and benchmark comparisons.'
  },
  {
    initials: 'DM',
    title: 'Dev Mehta',
    role: 'Infrastructure & MLOps',
    description: 'Ex-Google. Writes about deploying LLMs at scale without breaking the bank.'
  }
]

export const contactItems = [
  {
    icon: 'ti-pencil',
    title: 'Write for Us',
    description: 'Share your AI engineering experience with 18,000+ engineers. We pay for quality articles.'
  },
  {
    icon: 'ti-briefcase',
    title: 'Sponsorships & Ads',
    description: 'Reach a highly technical AI engineering audience. partnerships@voicomai.com'
  },
  {
    icon: 'ti-mail',
    title: 'General Enquiries',
    description: 'hello@voicomai.com — for everything else'
  },
  {
    icon: 'ti-brand-twitter',
    title: 'Twitter / X',
    description: '@voicomai — DMs open'
  }
]

export const articleSearchResults = [
  {
    icon: 'ti-robot',
    tag: 'Beginner',
    title: 'What is an AI Agent? A Plain-English Guide for Developers',
    description: 'No jargon — a clear explanation of what agents are, how they work, and when to build one.',
    author: 'Dev Mehta',
    authorMeta: '5 min read',
    avatar: 'DM'
  },
  {
    icon: 'ti-code',
    tag: 'Tutorial',
    title: 'Build Your First ReAct Agent with LangChain in Under 1 Hour',
    description: 'Hands-on tutorial: a working ReAct agent that can search the web and execute Python code.',
    author: 'Aryan Rao',
    authorMeta: '9 min read',
    avatar: 'AR'
  },
  {
    icon: 'ti-sitemap',
    tag: 'Advanced',
    title: 'Multi-Agent Systems with LangGraph: A Complete Implementation Guide',
    description: 'Build a supervisor agent that coordinates specialized sub-agents — with full working code.',
    author: 'Amit Mishra',
    authorMeta: '16 min read',
    avatar: 'AM'
  }
]

export const authorProfile = {
  name: 'Sara Khan',
  title: 'ML Research Engineer',
  description:
    'PhD researcher turned AI practitioner. I write about LLM evaluation, RAG systems, embeddings, and NLP. Currently benchmarking frontier models for production use cases at voicomai.com.',
  stats: [
    { value: '18', label: 'Articles Published' },
    { value: '62K', label: 'Total Views' },
    { value: '3.1K', label: 'Followers' },
    { value: '1.5 yrs', label: 'Contributing' }
  ],
  expertise: ['LLM Evaluation', 'RAG Systems', 'Embeddings', 'NLP', 'Benchmarking', 'Vector Databases', 'Python']
}

export const aboutText = {
  missionTitle: 'Built for AI Engineers, by AI Engineers',
  missionDescription:
    'voicomai.com exists because most AI content stops at theory. We go all the way to production — with real code, real benchmarks, and real lessons from building at scale.',
  whyTitle: 'Why We Built This',
  whyText:
    'When we started building AI-powered products, we found that most tutorials were either too shallow ("here\'s how to call the OpenAI API") or too academic. There was no go-to resource for engineers who wanted to build production-grade AI systems.',
  weBuiltText:
    'So we built voicomai.com — a technical publication written by engineers, for engineers. Every article goes through real-world testing before it\'s published. No fluff, no hype — just practical knowledge that makes you a better AI builder.',
  ecosystemText:
    'voicomai.com is part of the VAI ecosystem — a network of AI-focused platforms designed to educate, inspire, and connect the global AI engineering community.',
  valuesTitle: 'What We Stand For',
  teamTitle: 'Meet the Team'
}
