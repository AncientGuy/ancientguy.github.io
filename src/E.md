# **100-Day Plan: Personal Knowledge Engineering mdBook**

*The document listed below was developed as a starting point; it's listed here is for ARCHIVE purposes ... the 100-Day Plan is currently *in-progress* at [https://markbruns.github.io/PKE/](https://markbruns.github.io/PKE/).

This document presents a 100-module strategic curriculum for a highly experienced multi-disciplinary systems engineer. It provides a systematic framework to accelerate autodidactic education, understand the details of research at the forefront of technological innovation, foster meaningful new professional connections and friendships across different disciplines, and enhance the capacity to contribute to significant work in extensible open-source technologies. The primary focus is on the journey of **continual learning and meeting new colleagues**, with technology serving as the enabling toolkit rather than the end goal itself.

The core objective is to transition from the passive practice of *Personal Knowledge Management (PKM)*—the mere collection of random notes—to the active, tech-assisted discipline of *Personal Knowledge Engineering (PKE)*. This plan adopts a **publication-first** methodology. Instead of a private note-taking app, the central artifact is a living, version-controlled technical book built with **mdBook**. This transforms the knowledge base from a static archive into a dynamic, programmable publishing engine, ready for sharing, collaboration, and augmentation with AI. The goal is to accelerate the continuous learning process, spark creative work, and, most importantly, meet new friends by sharing this journey in public.

This plan is built on two foundational philosophies:

1. **The "Flywheel" Concept:** A continuous, self-reinforcing cycle of **Learn \-\> Synthesize \-\> Create \-\> Share \-\> Connect**. Knowledge is acquired systematically, synthesized into structured chapters, applied to create tangible artifacts, shared publicly through the book to invite dialogue, and leveraged to build a network of peers and friends, which in turn fuels new learning opportunities and friendships.  
2. **Fail Fast, Learn Faster:** Every project and chapter in this curriculum is an experiment. The goal is not perfection but rapid drafting and learning. We embrace shipping chapters quickly to a trusted circle of beta readers, testing ideas in a "beta production" environment, and using the lessons from accelerated failure analysis to iterate and improve. Speed and the intensity of learning from failure are incessant themes.

### **The 100-Day Personal Knowledge Engineering Curriculum Overview**

| Phase | Module Range | Core Objective | Key Deliverables |
| :---- | :---- | :---- | :---- |
| **Phase 1: Foundation & Systems Architecture** | Modules 1-20 | To design and build the core infrastructure of the PKES around a publication-first, mdBook-centric workflow. | A fully configured mdBook project serving as a "personal library"; automated content pipelines; a public-facing professional identity hub. |
| **Phase 2: Horizon Scanning & Deep Learning** | Modules 21-50 | To systematically identify, compare, and learn emerging technologies relevant to personal and professional goals through hands-on, failure-tolerant projects documented as book chapters. | An automated tech-trend dashboard; deep-dive projects in selected domains (e.g., Generative AI, Neuromorphic Computing); refreshed mathematical foundations. |
| **Phase 3: Creation & Contribution** | Modules 51-80 | To translate learned knowledge into tangible public artifacts and contribute to the open-source community, using creation as a vehicle for connection. | Multiple open-source project contributions; a portfolio of projects on GitHub; published models on Hugging Face; a series of technical tutorials published in the book. |
| **Phase 4: Connection & Synthesis** | Modules 81-100 | To leverage the published book and other artifacts for networking, establish thought leadership, and synthesize career experience into high-value knowledge products that foster community. | A targeted networking strategy; a personal CRM built as an mdBook extension; a plan for an online tech discussion group; tools for tracking professional opportunities. |

By completing this curriculum, the engineer will have constructed not just a personal knowledge base, but a comprehensive, sustainable system for lifelong autodidactic learning, professional relevance, and building a rich network of friends and collaborators, all centered around the creation of a personal, living technical library.

## **Phase 1: Foundation & Systems Architecture (Modules 1-20)**

**Objective:** To design and build the core technical and philosophical infrastructure of the Personal Knowledge Engineering System. This phase focuses on creating a robust, extensible, and future-proof "personal library" using mdBook, which will serve as the central hub for all subsequent learning, creation, and networking activities. The architectural choices made here are paramount, prioritizing open standards, data ownership, and extensibility to create a system that is not merely used, but can be actively developed and customized over time.

### **Module 1: Defining the Philosophy \- From PKM to PKE**

* **Tasks:** The initial step is to establish a guiding philosophy. This involves reading and synthesizing seminal texts on modern knowledge work. Critically analyze the distinction between methodologies focused on *resource management*, such as Tiago Forte's *Building a Second Brain* (BASB), which excels at organizing information for project-based work, and those focused on *idea generation*, like Niklas Luhmann's *Zettelkasten Method* (ZKM), which is a system for working with ideas themselves.\[1\] The BASB approach is explicitly project-oriented, speaking the "language of action," while the ZKM is project-agnostic, speaking the "language of knowledge".\[1\] Draft a personal "Knowledge Engineering Manifesto" that codifies the principles for this 100-day endeavor. This document should outline primary goals (e.g., "Learn a new technology stack and meet three new developers through a shared project"), core principles (e.g., "Default to learning in public," "Bias for action and rapid failure over perfect planning," "Prioritize connections over collections"), and success metrics (e.g., "Publish one new chapter per month," "Initiate three 'coffee chat' conversations with new contacts").  
* **Deliverable:** A MANIFESTO.md file, which will serve as the first chapter of the new mdBook project. This document serves as the strategic charter for the entire system.

### **Module 2: Architecting the Personal Library**

* **Tasks:** Design the foundational information architecture for your mdBook project. Instead of a freeform network, mdBook encourages a structured, hierarchical approach from the outset. Use the P.A.R.A. method (Projects, Areas, Resources, Archive) as a conceptual guide to organize the top-level chapters and sections within your book's src directory. For example, create main sections for Areas (long-term interests like "AI Engineering") and Projects (short-term efforts). The Zettelkasten concept of atomic notes can be adapted; each self-contained idea or piece of research becomes a .md page within the book's structure, linked hierarchically in the SUMMARY.md file.  
* **Deliverable:** A defined folder structure within the mdBook's src directory and a METHODOLOGY.md chapter. This document will detail the rules for creating new pages, the strategy for structuring chapters, and the lifecycle of information as it moves from a rough draft to a published chapter.

### **Module 3: Tool Selection & Core Setup \- mdBook as the Core**

* **Tasks:** Install Rust and mdBook. Initialize a new book project which will become your central PKES. Familiarize yourself with the core components: the book.toml configuration file, the src directory for Markdown content, and the SUMMARY.md file that defines the book's structure. This "publication-first" approach aligns with the goal of moving directly from notes to a shareable format. As part of this module, create an ARCHITECTURE\_ROADMAP.md chapter to brainstorm future extensions, such as building custom Rust-based preprocessors for mdBook to add new features (e.g., special syntax for callouts, dynamic content generation) or exploring high-performance stacks like **Modular's Mojo/Max platform** for future AI integrations.  
* **Deliverable:** A functional mdBook project, version-controlled with a private GitHub repository, and an ARCHITECTURE\_ROADMAP.md chapter outlining future development paths for the PKES itself.

### **Module 4: Automating Capture \- The Editorial Funnel**

* **Tasks:** Engineer a pipeline to capture external information for potential inclusion in your book. Since mdBook lacks a direct clipper plugin ecosystem, the workflow will be more deliberate. Create a separate inbox directory outside the mdBook src folder. Configure tools like an RSS reader (e.g., Feedly) with IFTTT/Zapier or custom scripts to automatically save interesting articles, paper abstracts, or email newsletters as raw Markdown files into this inbox. This creates an "editorial funnel." The manual process of reviewing these drafts, refining them, and then consciously moving them into the src directory and adding them to SUMMARY.md becomes a key part of the engineering process, ensuring only curated content makes it into the final publication.  
* **Deliverable:** An automated information capture pipeline that centralizes external content into a dedicated inbox folder, ready for editorial review and integration into the main mdBook project.

### **Modules 5-6: Building the Public Face \- The Professional Hub**

* **Tasks:**  
  * **Day 5 (GitHub):** Treat the GitHub profile as a professional landing page. Overhaul the profile README.md to be a dynamic "brag document".\[10\] Create distinct sections: "Current Focus," "Core Competencies," "Open Source Contributions," and "Let's Connect." Link prominently to your mdBook (once public), LinkedIn, and Hugging Face profile.  
  * **Day 6 (Hugging Face):** Establish a professional presence on Hugging Face.\[12\] Create a profile mirroring the branding on GitHub. Explore Models, Datasets, and Spaces. Create a placeholder "Space" to demystify the deployment process.\[13\]  
* **Deliverable:** Interconnected, professional profiles on GitHub and Hugging Face that serve as the primary public interfaces for the knowledge and artifacts generated by the PKES.

### **Modules 7-10: The AI-Powered Research Assistant**

* **Tasks:**  
  * **Day 7 (arXiv & Alerting):** Systematize research monitoring. Use tools like ArXiv Sanity Preserver or a Python script for keyword alerts (e.g., "agentic AI," "neuromorphic computing").\[14, 15\] Configure these alerts to be saved into your inbox directory from Module 4\.  
  * **Day 8 (AI Summarization):** Build a summarization tool with an LLM API (e.g., Gemini). Write a Python script that processes a URL or PDF, extracts key sections, and generates a concise summary in Markdown format, ready to be moved into your book.  
  * **Day 9 (Papers with Code Integration):** Automate tracking state-of-the-art advancements. Use the Papers With Code API to write a script that generates a weekly digest of trending papers in your field as a new Markdown file in your inbox.\[16\]  
  * **Day 10 (Building the Research Dashboard):** Create a Research Dashboard.md chapter in your mdBook. Since there's no dynamic plugin like Dataview, write a simple Python or shell script that scans your inbox directory for new files or files with a \#summarize tag in their frontmatter, and generates a summary list. This script can be run manually to update the dashboard page.  
* **Deliverable:** A semi-automated system for identifying, capturing, summarizing, and tracking relevant scientific literature, feeding a structured editorial pipeline for your knowledge book.

### **Modules 11-15: Skill Refreshment & Foundational Tooling**

* **Tasks:**  
  * **Day 11-13 (Mathematica Deep Dive):** Refresh foundational math concepts (Linear Algebra, Calculus, Probability) using Wolfram Mathematica.\[17, 18\] Create dedicated notebooks and export key visualizations and formulas as images to be embedded in new chapters of your mdBook.  
  * **Day 14 (Docker & Containerization):** Create a standardized Dockerfile for a data science container (Python, common libraries, PyTorch) to ensure all future projects are reproducible.  
  * **Day 15 (Advanced Git):** Master advanced Git workflows essential for open-source collaboration: interactive rebasing, cherry-picking, submodules, and conventional commit messages.  
* **Deliverable:** New mdBook chapters documenting refreshed mathematical knowledge; a reusable Docker image for ML projects; and demonstrated proficiency in advanced Git workflows.

### **Modules 16-20: Establishing the Content & Networking Foundation**

* **Tasks:**  
  * **Day 16 (Technical Blog Setup):** Your mdBook project *is* your technical blog. Configure a GitHub Actions workflow to automatically build and deploy your mdBook to GitHub Pages on every push to the main branch. This creates a seamless "write, commit, publish" workflow.  
  * **Day 17 (LinkedIn & Professional Framing):** Revamp your LinkedIn profile to align with the "Practitioner-Scholar" persona, framing your career as a narrative. Publish a short article announcing the 100-day learning journey and linking to your newly deployed mdBook.  
  * **Day 18 (Identifying Communities):** Research and identify 3-5 high-signal online communities (subreddits, Discord servers, etc.). Join and observe the culture before participating.  
  * **Day 19 (Crafting a Mentorship Strategy):** Develop a dual-pronged mentorship plan: identify 3-5 potential mentors to learn from, and outline a plan for mentoring others based on your extensive experience.  
  * **Day 20 (Phase 1 Review & Planning):** Conduct a formal review of the first 20 modules. Write a new chapter in your mdBook evaluating the system's architecture. Create a detailed plan for Phase 2, outlining the specific technology domains for deep dives and project objectives.  
* **Deliverable:** A live technical book deployed via GitHub Pages; a professionally framed LinkedIn profile; a curated list of target communities; a formal mentorship strategy chapter; and a detailed, actionable plan for Phase 2\.

---

## **Phase 2: Horizon Scanning & Deep Learning (Modules 21-50)**

**Objective:** To systematically explore and gain hands-on proficiency in a curated set of emerging technologies. This phase emphasizes active, project-based learning over passive consumption, with a core tenet of embracing rapid failure as a learning mechanism. Each module is designed to produce a tangible artifact—a piece of code, a trained model, a working demo—which serves as both a learning tool and a potential portfolio piece, thereby fueling the PKES flywheel.

### **Sub-theme: Generative AI & LLMs (Modules 21-30)**

This sub-theme focuses on building practical skills in the dominant technology trend of the 2020s. The projects move from foundational theory to building and deploying sophisticated AI applications.29

* **Module 21: Refresher: Linear Algebra with Mathematica:** Revisit the Mathematica notebooks from Day 11\. Focus specifically on the concepts underpinning transformer architectures: vector spaces, dot products (as a measure of similarity), matrix multiplication, and Singular Value Decomposition (SVD). Implement a simple attention mechanism calculation in a notebook to solidify the mathematical intuition.17  
* **Module 22: Building a RAG Application with LlamaIndex:** Follow a tutorial to build a complete Retrieval-Augmented Generation (RAG) application.32 Use a personal dataset, such as a collection of past technical reports, articles, or even the notes from this 100-day plan. The goal is to create a question-answering system over this private data. Deploy it locally using a simple FastAPI wrapper. This project provides immediate personal utility and a powerful demonstration of context-augmented LLMs.34  
* **Module 23: Fine-Tuning a Foundational Model:** Gain hands-on experience with model customization. Using a framework like Hugging Face's transformers library and a platform with free GPU access like Google Colab, fine-tune a small, open-source LLM (e.g., a member of the Llama 3 or Mistral family) on a specific, narrow task.35 A practical project is to create a dataset of your own commit messages from a key project and fine-tune the model to generate new commit messages in your personal style. This demonstrates an understanding of the full training and tuning loop.37  
* **Module 24: Building an AI Agent with LangChain:** Construct a basic autonomous agent that can reason and use tools. Using LangChain or LangGraph, define two tools: a search tool (e.g., Tavily Search) and a code execution tool (e.g., a Python REPL). Create an agent that can answer a question like, "What is the current price of Apple stock and what is its P/E ratio?" by first searching for the price and then using the REPL to calculate the ratio. This project demonstrates the core concepts of agentic workflows.38  
* **Module 25: Exploring Generative AI in the SDLC:** Dedicate a full day to integrating Generative AI into a typical software development workflow. Select an AI-native code editor like Cursor or use GitHub Copilot extensively within your preferred IDE.41 Take on a small coding task (e.g., building a simple web app) and use the AI assistant for every stage: generating boilerplate, writing functions, creating unit tests, explaining unfamiliar code, and writing documentation. Meticulously document the experience in your PKES, noting productivity changes, quality of generated code, and points of friction. This provides a first-hand, critical evaluation of how GenAI is transforming the development lifecycle.43  
* **Modules 26-30: Project: Build an "AI Research Analyst" Agent:** Synthesize the skills from this sub-theme into a multi-day project. Build an autonomous agent that fully automates the workflow designed in Modules 7-10. The agent's task, triggered daily, is to: 1\) Fetch new papers from your arXiv feed. 2\) For each paper, decide if it's relevant based on a set of criteria. 3\) If relevant, summarize the paper using the LLM tool. 4\) Check Papers With Code for an associated implementation. 5\) Compile the findings into a structured daily brief in Markdown format. 6\) Push the Markdown file to a dedicated GitHub repository that powers a section of your technical blog.

### **Sub-theme: Modern Data Engineering (Modules 31-35)**

This sub-theme addresses the shift in data architecture, moving beyond monolithic data warehouses to more flexible, scalable, and decentralized paradigms. For a senior engineer, understanding these system-level trends is crucial.46

* **Module 31: End-to-End MLOps with MLflow:** Go beyond a simple model.fit() call and embrace the discipline of MLOps. Using a classic dataset like the UCI Wine Quality dataset, train a scikit-learn model, but with a focus on the operational aspects.47 Set up a local MLflow tracking server. In your training script, log hyperparameters, evaluation metrics (e.g., RMSE, MAE), and the trained model itself as an artifact. Use the MLflow UI to compare several runs with different hyperparameters. Finally, register the best-performing model in the MLflow Model Registry, promoting it to a "Staging" or "Production" tag. This project covers the core lifecycle of a managed ML model.48  
* **Module 32: Data Mesh Proof-of-Concept:** Build a small-scale simulation of a data mesh architecture to understand its core principles. Create two separate Python scripts or services. The first, the "Users Domain," generates mock user data and exposes it via a simple API as a "data product." The second, the "Orders Domain," does the same for mock order data. Create a third "Analytics" service that acts as a data consumer, pulling data from both domain APIs to answer a business question (e.g., "What is the average order value for users in California?"). This hands-on exercise demonstrates the principles of decentralized data ownership and data-as-a-product, contrasting it with a centralized data warehouse approach.52  
* **Modules 33-35: Project: Real-Time Data Processing Pipeline (Comparative Study):** Build a small but complete real-time data pipeline. Use a public streaming data source. The core task is to implement a simple consumer and transformation process twice, first using a traditional message queue like **Apache Kafka** and then using a unified processing framework like **Apache Beam**.83 Document the architectural differences, development overhead, and performance trade-offs in your PKES. This comparative approach deepens understanding beyond a single tool.

### **Sub-theme: The Next Frontiers (Modules 36-45)**

This section focuses on gaining conceptual and practical fluency in technologies that represent significant long-term shifts in computing.55 The objective is not mastery but the ability to understand the fundamentals and identify potential future applications.

* **Module 36: Quantum Computing Fundamentals (Comparative Study):** Demystify the core concepts of quantum computation. Using IBM's **Qiskit** open-source framework, implement a simple algorithm like creating an entangled Bell state.56 Then, repeat the same exercise using Google's  
  **Cirq** framework.86 Document the differences in syntax, circuit construction, and overall developer experience. This provides a concrete understanding of concepts like superposition and entanglement from the perspective of two major ecosystems.58  
* **Modules 37-38: Neuromorphic & Brain-Computer Interfaces:** Shift focus from quantum to another frontier: brain-inspired computing.  
  * **Day 37 (Neuromorphic Concepts):** Research the principles of neuromorphic computing and spiking neural networks (SNNs). Investigate current hardware like Innatera's Pulsar and IBM's NorthPole.89 Create a detailed summary in your PKES comparing the architecture of these chips to traditional von Neumann architectures.  
  * **Day 38 (BCI Exploration):** Explore the open-source Brain-Computer Interface (BCI) landscape. Research the hardware and software stacks of **OpenBCI** 91 and commercial platforms like  
    **Emotiv**.94 The goal is to understand the types of data (EEG, EMG) they capture and the kinds of projects the communities are building.  
* **Modules 39-40: AR/VR for Education & Training:** Replace the Web3 focus with an exploration of immersive technologies for learning, aligning with interests in simulation and education.  
  * **Day 39 (Intro to WebXR):** Set up a basic development environment for WebXR. Work through a "Hello, World" tutorial to render a simple 3D object in a browser that can be viewed in VR or AR on a compatible device. This provides a low-barrier entry into immersive development.97  
  * **Day 40 (Educational AR/VR Prototype):** Brainstorm and create a simple proof-of-concept for an educational AR/VR experience. For example, an AR app that displays a 3D model of a molecule when the phone camera is pointed at a marker, or a simple VR scene that visualizes a mathematical concept. The focus is on rapid prototyping, not a polished application.99  
* **Modules 41-45: Project: Advanced Frontier Exploration:** Select one of the frontier topics (Generative AI, BCI, or AR/VR) and build a more in-depth project.  
  * **AI Option:** Build and deploy a multi-modal application (e.g., an image captioning model) to a Hugging Face Space, making it publicly accessible.  
  * **BCI Option:** Download a public EEG dataset and use Python libraries to perform basic signal processing and visualization, attempting to identify simple patterns (e.g., eye blinks).  
  * **AR/VR Option:** Expand the educational prototype from Day 40, adding more interactivity or information overlays to create a more comprehensive learning module.

### **Sub-theme: Review & Synthesis (Modules 46-50)**

### **Sub-theme: Review & Synthesis (Modules 46-50)**

* **Tasks:** This process is now even more natural with mdBook. For each major technology explored, create a main chapter that serves as a "Map of Content" (MOC), linking to all the sub-pages (project notes, tutorials, etc.) you've written on the topic. This makes your book's structure itself a tool for synthesis.  
* **Deliverable:** A set of highly organized, interconnected chapters within your mdBook. This transforms the raw learning experience into a structured, searchable, and reusable knowledge asset.


---

## **Phase 3: Creation & Contribution (Modules 51-80)**

**Objective:** To transition from internal learning to external creation and contribution. This phase is dedicated to applying the skills and knowledge from Phase 2 to produce public artifacts and make meaningful contributions to the open-source ecosystem. This directly addresses the core goals of becoming "more useful" and "discoverable" by demonstrating expertise through tangible work. The "fail fast, learn faster" philosophy is critical here; the goal is to ship, gather feedback, and iterate.

### **Sub-theme: Finding Your Niche (Modules 51-55)**

The approach for a senior engineer should be strategic, focusing on building relationships and making impactful contributions rather than simply collecting commits. This requires careful selection of a project and a gradual, respectful entry into its community.27

* **Module 51: Open Source Contribution Strategy:** Identify 3-5 open-source projects that are personally or professionally relevant. These should be tools used daily or libraries central to the technologies explored in Phase 2 (e.g., LangChain, LlamaIndex, MLflow, dbt). For each candidate project, conduct a thorough investigation. Read the CONTRIBUTING.md file, join their primary communication channels (Discord, Slack, mailing list), and observe the dynamics of the community. Analyze the project's governance model to understand how decisions are made and who the key maintainers are.24  
* **Module 52: Identifying "Good First Issues":** Use platforms like goodfirstissue.dev and forgoodfirstissue.github.io or search directly on GitHub for labels like good first issue, help wanted, or beginner-friendly within the target projects.62 The purpose of this exercise is not necessarily to solve these issues, but to analyze them. This provides insight into the project's backlog, the types of tasks available for new contributors, and the clarity of their issue tracking.  
* **Module 53: Beyond "Good First Issues" \- The User-Contributor Path:** For an experienced developer, a more impactful entry point is often to solve a problem they have personally encountered while using the software. Spend the day using one of the target projects intensively. Identify a bug, a gap in the documentation, or a minor feature that would improve the user experience. Create a detailed, reproducible issue report on GitHub. This approach leads to authentic contributions that are highly valued by maintainers.  
* **Module 54: Your First Non-Code Contribution:** Make a contribution that builds social capital within the community. Options include: thoroughly improving a section of the official documentation that was confusing, providing a detailed and helpful answer to another user's question in the project's Discord or forum, or taking an existing bug report and adding more detail, such as a minimal reproducible example or root cause analysis. This demonstrates commitment and an understanding of the project without requiring a code change.  
* **Module 55: Your First Code Contribution:** Select a small, well-defined issue—ideally the one identified in Module 53\. Follow the project's contribution workflow precisely: fork the repository, create a new branch, make the code changes, add or update tests, and submit a pull request.66 The pull request description should be clear, linking to the original issue and explaining the change and its justification. Be prepared to engage constructively with feedback from maintainers.

### **Sub-theme: The Creator Track \- Technical Content (Modules 56-65)**

This sub-theme focuses on leveraging the user's deep experience to teach others, which is a powerful method for solidifying knowledge and building a professional reputation.68

* **Modules 56-58: Writing Your First Technical Tutorial:** Select one of the hands-on projects from Phase 2 (e.g., "Building a RAG Application with LlamaIndex") and transform the project notes from your PKES into a comprehensive, step-by-step tutorial. The structure should follow best practices: start by explaining the "why" and showing the final result, then walk through the process with clear code snippets and explanations.70 Publish the final article on the technical blog established in Phase 1\.  
* **Modules 59-60: Promoting Your Content:** Actively distribute the published tutorial. Share a link on LinkedIn with a summary of what readers will learn. Post it to relevant subreddits or forums, being mindful of community rules on self-promotion. The key is to frame the post as a helpful resource, not an advertisement. Monitor these channels and engage thoughtfully with all comments and questions.  
* **Modules 61-65: Creating a Video Tutorial:** Repurpose the written tutorial into a video format to reach a different audience.  
  * **Day 61:** Write a concise script based on the blog post.  
  * **Day 62:** Prepare the coding environment for recording (e.g., increase font size, clean up the desktop). Record the screen and audio, walking through the project step-by-step.73  
  * **Day 63-64:** Perform basic video editing (e.g., using DaVinci Resolve or Descript) to remove mistakes and add simple titles or callouts.  
  * **Day 65:** Upload the video to YouTube, with a clear title, detailed description, and a link back to the original blog post.

### **Sub-theme: The Builder Track \- Capstone Project (Modules 66-80)**

This three-week block is dedicated to building a single, more substantial project that synthesizes skills from multiple modules and serves as a significant portfolio piece.

* **Project Definition: Personalized arXiv Assistant:**  
  * **Modules 66-70 (Data Ingestion & Processing):** Build a robust data pipeline that fetches daily papers from a custom arXiv RSS feed. The pipeline should parse the XML, extract metadata (title, authors, abstract), and store it in a local database (e.g., SQLite).  
  * **Modules 71-73 (Custom Classification):** Use the skills from Module 23\. Create a small, labeled dataset by manually classifying 100-200 abstracts from your feed as "highly relevant," "somewhat relevant," or "not relevant." Fine-tune a small classification model (e.g., a BERT-based model) on this dataset. Integrate this model into your pipeline to automatically tag new papers.  
  * **Modules 74-76 (Conversational Interface \- Comparative Study):** Build two prototype chat interfaces for the RAG system. First, use a rapid development framework like **Streamlit** or **Gradio** for quick iteration.101 Second, build a more performant, desktop-native prototype using a modern stack like  
    **Tauri with a Rust backend and a Svelte frontend**.79 Document the trade-offs in development speed, performance, and complexity.  
  * **Modules 77-80 (Deployment & Documentation):** Package the most promising prototype (or both) using the Docker skills from Module 14\. Deploy the containerized application as a Hugging Face Space, making it publicly accessible.13 Write a comprehensive  
    README.md on GitHub for the project, explaining the architecture, setup instructions, and how to use the application.  
* **Deliverable:** A publicly deployed, interactive AI application that solves a real personal problem and demonstrates expertise across the entire machine learning lifecycle, from data engineering to model fine-tuning and a comparative analysis of application deployment frameworks.

---

## **Phase 4: Connection & Synthesis (Modules 81-100)**

**Objective:** To actively leverage the knowledge base and artifacts created in the previous phases to build a professional network, establish a reputation for expertise, and synthesize 40 years of experience into high-value, shareable assets. The strategy shifts from building and learning to connecting and influencing, using the created work as the foundation for all interactions.

### **Sub-theme: Strategic Networking & Friendship (Modules 81-90)**

For a senior engineer, effective networking is not about volume but about the quality of connections. The goal is to build a network based on mutual respect and shared technical interests, allowing opportunities and new friendships to emerge organically.21

* **Module 81: Activating Your Network:** Begin with existing connections. Share the capstone project from Phase 3 on LinkedIn, tagging any relevant technologies or companies. Send personalized messages to a select group of 5-10 trusted former colleagues, briefly explaining the project and asking for their expert feedback.  
* **Module 82: Engaging in Communities:** Transition from passive observation to active participation in the online communities identified in Day 18\. The key is to lead with value. When someone asks a question that your capstone project or a tutorial can help answer, share your work as a resource. Participate in technical discussions, drawing upon the deep knowledge synthesized in your PKES.  
* **Module 83: Conference & Meetup Strategy:** Identify one key virtual or in-person conference or a series of local meetups to attend. Before the event, study the speaker list and agenda. Identify 2-3 speakers or project maintainers with whom you want to connect. Prepare specific, insightful questions about their work that demonstrate you have engaged with it deeply. The goal is to have a memorable, substantive conversation, not just to exchange contact information.23  
* **Module 84: The Art of the "Coffee Chat":** From the interactions in online communities or events, invite 2-3 people for a 30-minute virtual "coffee chat." The explicit goal of this meeting should be to learn about their work and interests. Be prepared with questions about their challenges, their perspective on industry trends, and their career journey. This approach, focused on genuine curiosity, is the most effective way to build lasting professional relationships and friendships.21  
* **Modules 85-90: Project: Personal CRM Engineering with mdBook:** Systematize relationship management by building a tool directly into your publishing pipeline. The project is to design and build a custom **mdBook preprocessor in Rust**. This preprocessor will parse special syntax within your Markdown files (e.g., @\[Contact Name\](contact\_id)) and automatically generate a "Contacts" chapter, cross-linking individuals to the projects and ideas you've discussed with them. This is a perfect "closer-to-the-metal" project that enhances your core tool and directly serves the goal of fostering connections.


### **Sub-theme: Opportunity Engineering (Modules 91-95)**

* **Modules 91-93: Gig & Project Tracking System:** Build a tool to analyze the freelance and independent project market.  
  * **Day 91 (API Exploration):** Research and get API keys for platforms like **Upwork** and **Freelancer.com**.106 Understand their data structures for job postings, required skills, and pricing.  
  * **Day 92-93 (Dashboard Build):** Write a Python script to pull data from these APIs based on keywords relevant to your skills. Create a simple dashboard (using a tool of your choice from Module 74-76) to visualize trends in demand, popular technologies, and typical project rates.  
* **Modules 94-95: Talent & Collaborator Discovery:** Extend the previous tool to identify potential collaborators. Write a script to scan GitHub or other platforms for developers contributing to open-source projects in your areas of interest. The goal is to build a system that helps you find interesting people to connect with for potential side hustles or independent projects.

### **Sub-theme: Mentorship & Knowledge Synthesis (Modules 96-100)**

This final sub-theme focuses on the highest-leverage activities: codifying and sharing the unique wisdom gained over a 40-year career to build community.

* **Module 96: Becoming a Mentor:** Actively seek a mentorship opportunity. This could be through a formal platform like MentorCruise or CodePath, or informally within one of the open-source communities you have joined.75 Offering to guide a junior developer through their first open-source contribution is an excellent way to give back and solidify your own understanding.  
* **Module 97: The "Brag Document" Synthesis Project:** Dedicate a focused effort to creating a comprehensive "Brag Document" as outlined by GitHub's career guides.10 This document is an internal-facing narrative of your entire career. Structure it by key projects or roles. For each, detail the business problem, the technical solution you engineered, the skills you applied, and—most importantly—the quantifiable business outcome.  
* **Modules 98-99: Podcasting & Community Building:**  
  * **Day 98 (Autodidactic Podcasting):** Plan a small, focused podcast or webcast series. The theme could be a "Technical Journal Club" where you and a guest discuss a recent arXiv paper. Outline the first 3-5 episodes. Research and set up a minimal audio recording/editing workflow.108 The goal is to learn the process through a hands-on, "Toastmasters" style of disciplined practice.  
  * **Day 99 (Pilot Episode & Online Discussion Group):** Record a short pilot episode. Use this as a catalyst to start an online discussion group (e.g., on Discord or a dedicated forum) for people interested in discussing cutting-edge tech papers, creating a space for the friendships and connections you aim to foster.  
* **Module 100: The 100-Day Review & The Next 100 Days:** Conduct a final, formal review of the entire 100-day journey. Use your PKES to write a detailed retrospective. Analyze the system you have built, the new skills you have acquired, the portfolio of artifacts you have created, and the new relationships you have formed. The ultimate measure of success for this curriculum is not its completion, but its continuation. Use the final day to leverage the full power of your new Personal Knowledge Engineering System to plan the *next* 100 days of learning, creating, and connecting.

## **Conclusion**

This 100-module curriculum provides a rigorous and systematic pathway for an experienced engineer to build a Personal Knowledge Engineering System centered on the principles of autodidacticism and community. By progressing through the four phases—Foundation, Learning, Creation, and Connection—the engineer will not only acquire skills in the most important modern technologies but will also construct a sustainable, integrated system for continuous professional growth and friendship. The emphasis on rapid, failure-tolerant experimentation, open-source contribution, and value-driven networking is designed to combat the sense of being overwhelmed by providing a clear, actionable framework. The final deliverable is more than a collection of notes and projects; it is a fully operational flywheel that transforms a lifetime of experience into a source of ongoing learning, discoverability, and meaningful connection within the global technology community.

#### **Useful References**

1. How to Increase Knowledge Productivity: Combine the Zettelkasten ..., accessed August 12, 2025, [https://zettelkasten.de/posts/building-a-second-brain-and-zettelkasten/](https://zettelkasten.de/posts/building-a-second-brain-and-zettelkasten/)  
2. My Personal Knowledge Management System As a Software ..., accessed August 12, 2025, [https://thewordyhabitat.com/my-personal-knowledge-management-system/](https://thewordyhabitat.com/my-personal-knowledge-management-system/)  
3. Personal Knowledge Management (PKM) \- Data Engineering Blog, accessed August 12, 2025, [https://www.ssp.sh/brain/personal-knowledge-management-pkm/](https://www.ssp.sh/brain/personal-knowledge-management-pkm/)  
4. Combine Your Second Brain with Zettelkasten \- Sudo Science, accessed August 12, 2025, [https://sudoscience.blog/2024/12/27/combine-your-second-brain-with-zettelkasten/](https://sudoscience.blog/2024/12/27/combine-your-second-brain-with-zettelkasten/)  
5. FOR COMPARISON with mdBook ... Obsidian \- Sharpen your thinking, accessed August 12, 2025, [https://obsidian.md/](https://obsidian.md/)  
6. FOR COMPARISON with mdBook... Developers \- Obsidian Help, accessed August 12, 2025, [https://help.obsidian.md/developers](https://help.obsidian.md/developers)  
7. FOR COMPARISON with mdBook ... Home \- Developer Documentation \- Obsidian, accessed August 12, 2025, [https://docs.obsidian.md/Home](https://docs.obsidian.md/Home)  
8. Managing my personal knowledge base · tkainrad, accessed August 12, 2025, [https://tkainrad.dev/posts/managing-my-personal-knowledge-base/](https://tkainrad.dev/posts/managing-my-personal-knowledge-base/)  
9. Engineering \- Notion, accessed August 12, 2025, [https://www.notion.com/help/guides/category/engineering](https://www.notion.com/help/guides/category/engineering)  
10. Junior to senior: An action plan for engineering career success ..., accessed August 12, 2025, [https://github.com/readme/guides/engineering-career-success](https://github.com/readme/guides/engineering-career-success)  
11. AswinBarath/AswinBarath: A quick bio about myself \- GitHub, accessed August 12, 2025, [https://github.com/AswinBarath/AswinBarath](https://github.com/AswinBarath/AswinBarath)  
12. What Is Hugging Face? | Coursera, accessed August 12, 2025, [https://www.coursera.org/articles/what-is-hugging-face](https://www.coursera.org/articles/what-is-hugging-face)  
13. Hugging Face : Revolutionizing AI Collaboration in the Machine Learning Community | by Yuvraj kakkar | Medium, accessed August 12, 2025, [https://medium.com/@yuvrajkakkar1/hugging-face-revolutionizing-ai-collaboration-in-the-machine-learning-community-28d9c6e94ddb](https://medium.com/@yuvrajkakkar1/hugging-face-revolutionizing-ai-collaboration-in-the-machine-learning-community-28d9c6e94ddb)  
14. "Operator-Based Machine Intelligence: A Hilbert Space Framework ..., accessed August 12, 2025, [https://www.reddit.com/r/singularity/comments/1mkwxzk/operatorbased\_machine\_intelligence\_a\_hilbert/](https://www.reddit.com/r/singularity/comments/1mkwxzk/operatorbased_machine_intelligence_a_hilbert/)  
15. \[2505.23723\] ML-Agent: Reinforcing LLM Agents for Autonomous Machine Learning Engineering \- arXiv, accessed August 12, 2025, [https://arxiv.org/abs/2505.23723](https://arxiv.org/abs/2505.23723)  
16. Getting Started with Papers With Code – IT Exams Training ..., accessed August 12, 2025, [https://www.pass4sure.com/blog/getting-started-with-papers-with-code/](https://www.pass4sure.com/blog/getting-started-with-papers-with-code/)  
17. Wolfram Mathematica: Modern Technical Computing, accessed August 12, 2025, [https://www.wolfram.com/mathematica/](https://www.wolfram.com/mathematica/)  
18. Mathematica & Wolfram Language Tutorial: Fast Intro for Math Students, accessed August 12, 2025, [https://www.wolfram.com/language/fast-introduction-for-math-students/en/](https://www.wolfram.com/language/fast-introduction-for-math-students/en/)  
19. How to start a tech blog in 6 steps \- Wix.com, accessed August 12, 2025, [https://www.wix.com/blog/how-to-start-a-tech-blog](https://www.wix.com/blog/how-to-start-a-tech-blog)  
20. How to Start a Tech Blog: Easy Guide for Beginners \- WPZOOM, accessed August 12, 2025, [https://www.wpzoom.com/blog/how-to-start-tech-blog/](https://www.wpzoom.com/blog/how-to-start-tech-blog/)  
21. Networking for Engineers: 8 Strategies to Expand Your Professional ..., accessed August 12, 2025, [https://staffing.trimech.com/networking-for-engineers-8-strategies-to-expand-your-professional-circle/](https://staffing.trimech.com/networking-for-engineers-8-strategies-to-expand-your-professional-circle/)  
22. Mastering Networking as a Software Developer: Strategies for Success : r/software\_soloprenures \- Reddit, accessed August 12, 2025, [https://www.reddit.com/r/software\_soloprenures/comments/1m363gv/mastering\_networking\_as\_a\_software\_developer/](https://www.reddit.com/r/software_soloprenures/comments/1m363gv/mastering_networking_as_a_software_developer/)  
23. The Software Developer's Guide to Networking \- Simple Programmer, accessed August 12, 2025, [https://simpleprogrammer.com/software-developers-networking/](https://simpleprogrammer.com/software-developers-networking/)  
24. Participating in Open Source Communities \- Linux Foundation, accessed August 12, 2025, [https://www.linuxfoundation.org/resources/open-source-guides/participating-in-open-source-communities](https://www.linuxfoundation.org/resources/open-source-guides/participating-in-open-source-communities)  
25. How To Grow Your Career With a Software Engineering Mentor \- Springboard, accessed August 12, 2025, [https://www.springboard.com/blog/software-engineering/software-engineer-mentor/](https://www.springboard.com/blog/software-engineering/software-engineer-mentor/)  
26. Where to Find a Software Engineer Mentor (and How to Benefit From Them) | HackerNoon, accessed August 12, 2025, [https://hackernoon.com/where-to-find-a-software-engineer-mentor-and-how-to-benefit-from-them](https://hackernoon.com/where-to-find-a-software-engineer-mentor-and-how-to-benefit-from-them)  
27. Improve your open source development impact | TODO Group // Talk ..., accessed August 12, 2025, [https://todogroup.org/resources/guides/improve-your-open-source-development-impact/](https://todogroup.org/resources/guides/improve-your-open-source-development-impact/)  
28. Self-Directed Learning: A Four-Step Process | Centre for Teaching ..., accessed August 12, 2025, [https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/self-directed-learning-four-step-process](https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/self-directed-learning-four-step-process)  
29. 25 New Technology Trends for 2025 \- Simplilearn.com, accessed August 12, 2025, [https://www.simplilearn.com/top-technology-trends-and-jobs-article](https://www.simplilearn.com/top-technology-trends-and-jobs-article)  
30. Emerging Technology Trends \- J.P. Morgan, accessed August 12, 2025, [https://www.jpmorgan.com/content/dam/jpmorgan/documents/technology/jpmc-emerging-technology-trends-report.pdf](https://www.jpmorgan.com/content/dam/jpmorgan/documents/technology/jpmc-emerging-technology-trends-report.pdf)  
31. 5 AI Trends Shaping Innovation and ROI in 2025 | Morgan Stanley, accessed August 12, 2025, [https://www.morganstanley.com/insights/articles/ai-trends-reasoning-frontier-models-2025-tmt](https://www.morganstanley.com/insights/articles/ai-trends-reasoning-frontier-models-2025-tmt)  
32. Llamaindex RAG Tutorial | IBM, accessed August 12, 2025, [https://www.ibm.com/think/tutorials/llamaindex-rag](https://www.ibm.com/think/tutorials/llamaindex-rag)  
33. Build Your First AI Application Using LlamaIndex\! \- DEV Community, accessed August 12, 2025, [https://dev.to/pavanbelagatti/build-your-first-ai-application-using-llamaindex-1f9](https://dev.to/pavanbelagatti/build-your-first-ai-application-using-llamaindex-1f9)  
34. LlamaIndex \- LlamaIndex, accessed August 12, 2025, [https://docs.llamaindex.ai/](https://docs.llamaindex.ai/)  
35. Fine-Tuning LLMs: A Guide With Examples | DataCamp, accessed August 12, 2025, [https://www.datacamp.com/tutorial/fine-tuning-large-language-models](https://www.datacamp.com/tutorial/fine-tuning-large-language-models)  
36. The Ultimate Guide to LLM Fine Tuning: Best Practices & Tools \- Lakera AI, accessed August 12, 2025, [https://www.lakera.ai/blog/llm-fine-tuning-guide](https://www.lakera.ai/blog/llm-fine-tuning-guide)  
37. Fine-tuning LLMs Guide | Unsloth Documentation, accessed August 12, 2025, [https://docs.unsloth.ai/get-started/fine-tuning-llms-guide](https://docs.unsloth.ai/get-started/fine-tuning-llms-guide)  
38. Building AI Agents Using LangChain and OpenAI APIs: A Step-by ..., accessed August 12, 2025, [https://sen-abby.medium.com/building-ai-agents-using-langchain-47ba4012a8a1](https://sen-abby.medium.com/building-ai-agents-using-langchain-47ba4012a8a1)  
39. LangGraph \- LangChain, accessed August 12, 2025, [https://www.langchain.com/langgraph](https://www.langchain.com/langgraph)  
40. Build an Agent \- ️ LangChain, accessed August 12, 2025, [https://python.langchain.com/docs/tutorials/agents/](https://python.langchain.com/docs/tutorials/agents/)  
41. With AI at the core, Heizen has a new model for software development at scale, accessed August 12, 2025, [https://economictimes.indiatimes.com/small-biz/security-tech/technology/with-ai-at-the-core-heizen-has-a-new-model-for-software-development-at-scale/articleshow/123156453.cms](https://economictimes.indiatimes.com/small-biz/security-tech/technology/with-ai-at-the-core-heizen-has-a-new-model-for-software-development-at-scale/articleshow/123156453.cms)  
42. 10 Best AI code generators in 2025 \[Free & Paid\] \- Pieces App, accessed August 12, 2025, [https://pieces.app/blog/9-best-ai-code-generation-tools](https://pieces.app/blog/9-best-ai-code-generation-tools)  
43. Generative AI In Software Development Life Cycle (SDLC) \- V2Soft, accessed August 12, 2025, [https://www.v2soft.com/blogs/generative-ai-in-sdlc](https://www.v2soft.com/blogs/generative-ai-in-sdlc)  
44. How an AI-enabled software product development life cycle will fuel innovation \- McKinsey, accessed August 12, 2025, [https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/how-an-ai-enabled-software-product-development-life-cycle-will-fuel-innovation](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/how-an-ai-enabled-software-product-development-life-cycle-will-fuel-innovation)  
45. Generative AI in SDLC: Can GenAI Be Utilized throughout the Software Development Life Cycle? \- EPAM Startups & SMBs, accessed August 12, 2025, [https://startups.epam.com/blog/generative-ai-in-sdlc](https://startups.epam.com/blog/generative-ai-in-sdlc)  
46. Future of Data Engineering: Trends for 2025 \- Closeloop Technologies, accessed August 12, 2025, [https://closeloop.com/blog/data-engineering-key-trends-to-watch/](https://closeloop.com/blog/data-engineering-key-trends-to-watch/)  
47. Tutorial \- MLflow, accessed August 12, 2025, [https://www.mlflow.org/docs/2.7.1/tutorials-and-examples/tutorial.html](https://www.mlflow.org/docs/2.7.1/tutorials-and-examples/tutorial.html)  
48. 10 MLOps Projects Ideas for Beginners to Practice in 2025 \- ProjectPro, accessed August 12, 2025, [https://www.projectpro.io/article/mlops-projects-ideas/486](https://www.projectpro.io/article/mlops-projects-ideas/486)  
49. Tutorials and Examples \- MLflow, accessed August 12, 2025, [https://mlflow.org/docs/latest/ml/tutorials-and-examples/](https://mlflow.org/docs/latest/ml/tutorials-and-examples/)  
50. Your First MLflow Model: Complete Tutorial, accessed August 12, 2025, [https://mlflow.org/docs/latest/ml/getting-started/logging-first-model/](https://mlflow.org/docs/latest/ml/getting-started/logging-first-model/)  
51. End-to-End MLOps Pipeline: A Comprehensive Project ..., accessed August 12, 2025, [https://www.geeksforgeeks.org/machine-learning/end-to-end-mlops-pipeline-a-comprehensive-project/](https://www.geeksforgeeks.org/machine-learning/end-to-end-mlops-pipeline-a-comprehensive-project/)  
52. Snowflake Data Mesh: The Ultimate Setup Guide (2025) \- Atlan, accessed August 12, 2025, [https://atlan.com/snowflake-data-mesh-how-to-guide/](https://atlan.com/snowflake-data-mesh-how-to-guide/)  
53. What Is Data Mesh? Complete Tutorial \- Confluent Developer, accessed August 12, 2025, [https://developer.confluent.io/courses/data-mesh/intro/](https://developer.confluent.io/courses/data-mesh/intro/)  
54. Data Mesh Implementation: Your Blueprint for a Successful Launch \- Ascend.io, accessed August 12, 2025, [https://www.ascend.io/blog/data-mesh-implementation-your-blueprint-for-a-successful-launch](https://www.ascend.io/blog/data-mesh-implementation-your-blueprint-for-a-successful-launch)  
55. Ten More Top Emerging Technologies In 2025 \- Forrester, accessed August 12, 2025, [https://www.forrester.com/report/ten-more-top-emerging-technologies-in-2025/RES183100](https://www.forrester.com/report/ten-more-top-emerging-technologies-in-2025/RES183100)  
56. What Is Quantum Computing? | IBM, accessed August 12, 2025, [https://www.ibm.com/think/topics/quantum-computing](https://www.ibm.com/think/topics/quantum-computing)  
57. Introduction to Qiskit | IBM Quantum Documentation, accessed August 12, 2025, [https://quantum.cloud.ibm.com/docs/guides/](https://quantum.cloud.ibm.com/docs/guides/)  
58. Quantum computing \- Wikipedia, accessed August 12, 2025, [https://en.wikipedia.org/wiki/Quantum\_computing](https://en.wikipedia.org/wiki/Quantum_computing)  
59. Introduction to quantum computing, accessed August 12, 2025, [https://thequantuminsider.com/introduction-to-quantum-computing/](https://thequantuminsider.com/introduction-to-quantum-computing/)  
60. Introduction to Qiskit | IBM Quantum Documentation, accessed August 12, 2025, [https://quantum.cloud.ibm.com/docs/guides](https://quantum.cloud.ibm.com/docs/guides)  
61. How do people do Open Source Contributions ? : r/csharp \- Reddit, accessed August 12, 2025, [https://www.reddit.com/r/csharp/comments/1bxprbo/how\_do\_people\_do\_open\_source\_contributions/](https://www.reddit.com/r/csharp/comments/1bxprbo/how_do_people_do_open_source_contributions/)  
62. Good First Issue: Make your first open-source contribution, accessed August 12, 2025, [https://goodfirstissue.dev/](https://goodfirstissue.dev/)  
63. For Good First Issue | Make your next open-source contribution matter. \- GitHub, accessed August 12, 2025, [https://forgoodfirstissue.github.com/](https://forgoodfirstissue.github.com/)  
64. MunGell/awesome-for-beginners: A list of awesome beginners-friendly projects. \- GitHub, accessed August 12, 2025, [https://github.com/MunGell/awesome-for-beginners](https://github.com/MunGell/awesome-for-beginners)  
65. For Good First Issue: Introducing a new way to contribute \- The GitHub Blog, accessed August 12, 2025, [https://github.blog/open-source/social-impact/for-good-first-issue-introducing-a-new-way-to-contribute/](https://github.blog/open-source/social-impact/for-good-first-issue-introducing-a-new-way-to-contribute/)  
66. How to Contribute to Open Source, accessed August 12, 2025, [https://opensource.guide/how-to-contribute/](https://opensource.guide/how-to-contribute/)  
67. Find Open Source Projects to Contribute: A Developer's Guide, accessed August 12, 2025, [https://osssoftware.org/blog/find-open-source-projects-to-contribute-a-developers-guide/](https://osssoftware.org/blog/find-open-source-projects-to-contribute-a-developers-guide/)  
68. A Software Developer's Guide to Writing \- DEV Community, accessed August 12, 2025, [https://dev.to/tyaga001/a-software-developers-guide-to-writing-bgj](https://dev.to/tyaga001/a-software-developers-guide-to-writing-bgj)  
69. Building an Online Presence In Tech 101 \- SheCanCode, accessed August 12, 2025, [https://shecancode.io/building-an-online-presence-in-tech-101/](https://shecancode.io/building-an-online-presence-in-tech-101/)  
70. How to write a coding tutorial | Yost's Posts, accessed August 12, 2025, [https://www.ryanjyost.com/how-to-write-a-coding-tutorial/](https://www.ryanjyost.com/how-to-write-a-coding-tutorial/)  
71. Creating the Best Video Programming Tutorials | Vue Mastery, accessed August 12, 2025, [https://www.vuemastery.com/blog/creating-the-best-video-programming-tutorials/](https://www.vuemastery.com/blog/creating-the-best-video-programming-tutorials/)  
72. A tutorial on creating coding tutorials \- LogRocket Blog, accessed August 12, 2025, [https://blog.logrocket.com/a-tutorial-on-creating-front-end-tutorials-2b13d8e94df9/](https://blog.logrocket.com/a-tutorial-on-creating-front-end-tutorials-2b13d8e94df9/)  
73. How to Create a Technical Video Tutorial | Elastic Blog, accessed August 12, 2025, [https://www.elastic.co/blog/elastic-contributor-program-how-to-create-a-video-tutorial](https://www.elastic.co/blog/elastic-contributor-program-how-to-create-a-video-tutorial)  
74. How to Make Engaging Programming Videos \- Real Python, accessed August 12, 2025, [https://realpython.com/how-to-make-programming-videos/](https://realpython.com/how-to-make-programming-videos/)  
75. One-on-one mentorship with software engineers \- CodePath, accessed August 12, 2025, [https://www.codepath.org/career-services/mentorship](https://www.codepath.org/career-services/mentorship)  
76. Find a Software Engineering mentor \- MentorCruise, accessed August 12, 2025, [https://mentorcruise.com/filter/softwareengineering/](https://mentorcruise.com/filter/softwareengineering/)  
77. Logseq vs. Obsidian: first impressions \- Share & showcase, accessed August 13, 2025, [https://forum.obsidian.md/t/logseq-vs-obsidian-first-impressions/56854](https://forum.obsidian.md/t/logseq-vs-obsidian-first-impressions/56854)  
78. 6 ways Logseq is the perfect Obsidian alternative \- XDA Developers, accessed August 13, 2025, [https://www.xda-developers.com/ways-logseq-is-the-perfect-obsidian-alternative/](https://www.xda-developers.com/ways-logseq-is-the-perfect-obsidian-alternative/)  
79. Electron vs Tauri \- Coditation, accessed August 13, 2025, [https://www.coditation.com/blog/electron-vs-tauri](https://www.coditation.com/blog/electron-vs-tauri)  
80. Framework Wars: Tauri vs Electron vs Flutter vs React Native \- Moon Technolabs, accessed August 13, 2025, [https://www.moontechnolabs.com/blog/tauri-vs-electron-vs-flutter-vs-react-native/](https://www.moontechnolabs.com/blog/tauri-vs-electron-vs-flutter-vs-react-native/)  
81. Modular: A Fast, Scalable Gen AI Inference Platform, accessed August 13, 2025, [https://www.modular.com/](https://www.modular.com/)  
82. MAX: AI Compute Platform \- Modular, accessed August 13, 2025, [https://www.modular.com/max](https://www.modular.com/max)  
83. apache beam vs apache kafka: Which Tool is Better for Your Next Project? \- ProjectPro, accessed August 13, 2025, [https://www.projectpro.io/compare/apache-beam-vs-apache-kafka](https://www.projectpro.io/compare/apache-beam-vs-apache-kafka)  
84. Apache Beam over Apache Kafka Stream processing \- Codemia, accessed August 13, 2025, [https://codemia.io/knowledge-hub/path/apache\_beam\_over\_apache\_kafka\_stream\_processing](https://codemia.io/knowledge-hub/path/apache_beam_over_apache_kafka_stream_processing)  
85. Apache Beam: Introduction to Batch and Stream Data Processing \- Confluent, accessed August 13, 2025, [https://www.confluent.io/learn/apache-beam/](https://www.confluent.io/learn/apache-beam/)  
86. Quantum Programming Languages: A Beginner's Guide for 2025 \- BlueQubit, accessed August 13, 2025, [https://www.bluequbit.io/quantum-programming-languages](https://www.bluequbit.io/quantum-programming-languages)  
87. What are the best-known quantum programming languages (e.g., Qiskit, Quipper, Cirq)?, accessed August 13, 2025, [https://milvus.io/ai-quick-reference/what-are-the-bestknown-quantum-programming-languages-eg-qiskit-quipper-cirq](https://milvus.io/ai-quick-reference/what-are-the-bestknown-quantum-programming-languages-eg-qiskit-quipper-cirq)  
88. Hello Many Worlds in Seven Quantum Languages \- IonQ, accessed August 13, 2025, [https://ionq.com/docs/hello-many-worlds-seven-quantum-languages](https://ionq.com/docs/hello-many-worlds-seven-quantum-languages)  
89. Neuromorphic Hardware Guide, accessed August 13, 2025, [https://open-neuromorphic.org/neuromorphic-computing/hardware/](https://open-neuromorphic.org/neuromorphic-computing/hardware/)  
90. Embedded Neuromorphic Computing Systems \- MCSoC-2025, accessed August 13, 2025, [https://mcsoc-forum.org/site/index.php/embedded-neuromorphic-computing-systems/](https://mcsoc-forum.org/site/index.php/embedded-neuromorphic-computing-systems/)  
91. OpenBCI – Open-source EEG, accessed August 13, 2025, [https://www.opensourceimaging.org/project/openbci/](https://www.opensourceimaging.org/project/openbci/)  
92. Community Page Projects \- OpenBCI Documentation, accessed August 13, 2025, [https://docs.openbci.com/Examples/CommunityPageProjects/](https://docs.openbci.com/Examples/CommunityPageProjects/)  
93. Example Projects \- OpenBCI Documentation, accessed August 13, 2025, [https://docs.openbci.com/Examples/ExamplesLanding/](https://docs.openbci.com/Examples/ExamplesLanding/)  
94. EEG Headsets and Software for Education \- EMOTIV, accessed August 13, 2025, [https://www.emotiv.com/pages/education](https://www.emotiv.com/pages/education)  
95. EEG Monitoring – EMOTIV, accessed August 13, 2025, [https://www.emotiv.com/blogs/glossary/eeg-monitoring](https://www.emotiv.com/blogs/glossary/eeg-monitoring)  
96. EEG Headset \- Emotiv, accessed August 13, 2025, [https://www.emotiv.com/blogs/glossary/eeg-headset](https://www.emotiv.com/blogs/glossary/eeg-headset)  
97. Developing AR/VR/MR/XR Apps with WebXR, Unity & Unreal \- Coursera, accessed August 13, 2025, [https://www.coursera.org/learn/develop-augmented-virtual-mixed-extended-reality-applications-webxr-unity-unreal](https://www.coursera.org/learn/develop-augmented-virtual-mixed-extended-reality-applications-webxr-unity-unreal)  
98. WebXR Academy, accessed August 13, 2025, [https://webxracademy.com/](https://webxracademy.com/)  
99. Top VR Education Companies in 2025 \- Axon Park, accessed August 13, 2025, [https://www.axonpark.com/top-vr-education-companies-in-2025/](https://www.axonpark.com/top-vr-education-companies-in-2025/)  
100. The Future of VR in Education: Immersive Learning Experiences, accessed August 13, 2025, [https://www.immersivelearning.news/2025/06/19/the-future-of-vr-in-education-immersive-learning-experiences/](https://www.immersivelearning.news/2025/06/19/the-future-of-vr-in-education-immersive-learning-experiences/)  
101. Streamlit vs FastAPI: Choosing the Right Tool for Deploying Your Machine Learning Model | by Pelumi Ogunlusi | Jul, 2025 | Medium, accessed August 13, 2025, [https://medium.com/@samuelogunlusi07/streamlit-vs-fastapi-choosing-the-right-tool-for-deploying-your-machine-learning-model-1d16d427e130](https://medium.com/@samuelogunlusi07/streamlit-vs-fastapi-choosing-the-right-tool-for-deploying-your-machine-learning-model-1d16d427e130)  
102. Compare Streamlit vs. Tauri in 2025, accessed August 13, 2025, [https://slashdot.org/software/comparison/Streamlit-vs-Tauri/](https://slashdot.org/software/comparison/Streamlit-vs-Tauri/)  
103. Monica: Personal CRM done right, accessed August 13, 2025, [https://www.monicahq.com/](https://www.monicahq.com/)  
104. monicahq/monica: Personal CRM. Remember everything about your friends, family and business relationships. \- GitHub, accessed August 13, 2025, [https://github.com/monicahq/monica](https://github.com/monicahq/monica)  
105. rust-lang/mdBook: Create book from markdown files. Like Gitbook but implemented in Rust, accessed August 13, 2025, [https://github.com/rust-lang/mdBook](https://github.com/rust-lang/mdBook)  
106. Freelancer API for Developers, accessed August 13, 2025, [https://developers.freelancer.com/](https://developers.freelancer.com/)  
107. API Developer Freelance Jobs: Work Remote & Earn Online \- Upwork, accessed August 13, 2025, [https://www.upwork.com/freelance-jobs/api-development/](https://www.upwork.com/freelance-jobs/api-development/)  
108. How to Start a Podcast: Step-by-Step Guide & Free Checklist \- Riverside, accessed August 13, 2025, [https://riverside.com/blog/how-to-start-a-podcast](https://riverside.com/blog/how-to-start-a-podcast)