import { motion } from "framer-motion";

export const About = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-white to-light-gray py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>

          <motion.div
            className="prose prose-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 mb-8">
              LogiAI was born from a shared vision between two friends and a
              conversation in 2018 that sparked an idea to revolutionize
              logistics through automation. Recognizing the inefficiencies in
              synchronizing the countless forms and documents in the industry,
              we identified the critical need to orchestrate the various data
              points scattered across numerous subtasks and systems.
            </p>

            <p className="text-xl text-gray-600 mb-8">
              Initially, we began as resellers of documentation automation
              solutions but quickly realized these systems were cumbersome,
              lacked accuracy, and came with high costs. The advent of Large
              Language Models (LLMs) marked a turning point for us. Excited by
              their potential, we dove in—one of us focusing deeply on
              technology, while the other specialized in processes and
              compliance. Together, we brought over 24 years of freight industry
              expertise and academic foundations in computing, AI, and
              engineering, supported by experience with some of the biggest
              names in automotive, freight, and consulting.
            </p>

            <p className="text-xl text-gray-600 mb-8">
              At LogiAI, we are reimagining logistics through agentic AI virtual
              employees—intelligent agents capable of autonomously managing
              complex tasks. Our innovative no-code platform empowers businesses
              to design and deploy AI-driven teams that streamline operations,
              optimize workflows, and drive measurable growth.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                We leverage cutting-edge AI technologies to:
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Automate labor-intensive processes</li>
                <li>Orchestrate seamless supply chain operations</li>
                <li>Deliver enhanced accuracy and compliance</li>
                <li>
                  Enable businesses to provide superior customer experiences
                </li>
              </ul>
            </div>

            <p className="text-xl text-gray-600">
              LogiAI is more than a platform; it's a movement to redefine what
              logistics can achieve with intelligent automation and
              collaborative AI workforces. Join us on this transformative
              journey to modernize the logistics industry and unlock its full
              potential.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
