// src/components/Intro.js
"use client";

export default function Intro() {
  return (
    <section className="py-12 animate-fadeInUp">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <h1 className="text-4xl font-bold mb-4">Hello! 👋</h1>
        <p className="text-lg mb-4">
          I am a budding ML Engineer / Data Engineer, <strong>No Janghyun (Brian Roh)</strong>.
          I have a deep passion for various AI fields including language models, anomaly detection, and model distillation.
        </p>
        <p className="text-lg mb-4">
          I am currently pursuing my Master's degree at the Intelligent Information Systems Lab (IIS Lab) of the
          Gwangju Institute of Science and Technology (GIST). In my spare time, I work on web development projects for my personal blog.
        </p>
        
        {/* GitHub Status */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">GitHub Status</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img
            src="https://github-readme-stats.vercel.app/api?username=janghyunroh&hide_title=false&hide_rank=true&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false"
            alt="GitHub Stats"
            className="h-40"
          />
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=janghyunroh&theme=dracula&area=true"
            alt="GitHub Activity Graph"
            className="h-40"
          />
          {/* Omitting streak and top languages graphs for brevity */}
        </div>
        
        {/* Areas of Interest */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Areas of Interest</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Machine Learning & Deep Learning</li>
          <li>Natural Language Processing (NLP) & Language Models</li>
          <li>Named Entity Recognition (NER)</li>
          <li>Anomaly Detection</li>
        </ul>
        
        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Tech Stack</h2>
        <p className="text-lg mb-4">
          <strong>Advanced:</strong> Python, C++, Git, PyTorch, TensorFlow, GitHub
        </p>
        <p className="text-lg mb-4">
          <strong>Intermediate:</strong> Jupyter, Anaconda, MySQL, PostgreSQL, Docker, Kubernetes, Linux, Ubuntu, Pandas
        </p>
        <p className="text-lg mb-4">
          <strong>Experienced:</strong> React, Next.js, Node.js, HTML5, JavaScript, TypeScript, Tailwind CSS, Firebase, Spring
        </p>
        
        {/* Education & Projects */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Education & Projects</h2>
        <p className="text-lg mb-4">
          I attended Seoul Young-il High School and Inha University (B.S. in Computer Science), and I am currently pursuing an M.S. in AI Engineering at GIST.
        </p>
        <p className="text-lg mb-4">
          My projects range from developing NER systems and chatbots to building real-time sensor data inference systems and open-source AVL tree libraries.
        </p>
        
        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.instagram.com/janghyunroh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="mailto:janghyun0609@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/%EC%9E%A5%ED%98%84-%EB%85%B8-98505029a/?trk=opento_sprofile_details"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://solved.ac/profile/janghyunroh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Baekjoon
          </a>
          <a
            href="https://janghyunroh.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            My Blog
          </a>
        </div>
      </div>
    </section>
  );
}
