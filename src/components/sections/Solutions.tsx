import { motion } from "framer-motion";
import customsIcon from "../../assets/customs-icon.svg";
import shippingIcon from "../../assets/shipping-icon.svg";
import trackingIcon from "../../assets/tracking-icon.svg";
import documentIcon from "../../assets/document-icon.svg";
import workflowIcon from "../../assets/workflow-icon.svg";
import documentLarge from "../../assets/document-large.svg";
import workflowLarge from "../../assets/workflow-large.svg";
import aiLarge from "../../assets/ai-large.svg";
import integrationLarge from "../../assets/integration-large.svg";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Solutions = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-light-gray py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            {...fadeIn}
          >
            Transform Your Logistics Operations
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Powerful AI solutions designed specifically for the logistics
            industry
          </motion.p>
          <motion.div
            className="flex justify-center gap-12"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <img
              src={customsIcon}
              alt="Customs Processing"
              className="w-16 h-16 hover:-translate-y-2 transition-transform"
            />
            <img
              src={shippingIcon}
              alt="Shipping Management"
              className="w-16 h-16 hover:-translate-y-2 transition-transform"
            />
            <img
              src={trackingIcon}
              alt="Shipment Tracking"
              className="w-16 h-16 hover:-translate-y-2 transition-transform"
            />
          </motion.div>
        </div>
      </section>

      {/* Document Processing Section */}
      <section id="document-processing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Document Processing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Simplify logistics document management with AI agents that
                understand context and learn from your workflows.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <img
                    src={documentIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Smart Document Recognition
                    </h4>
                    <p className="text-gray-600">
                      Automatically identify and classify various shipping
                      documents, from bills of lading to commercial invoices.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={customsIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Data Extraction
                    </h4>
                    <p className="text-gray-600">
                      Accurately extract key information from forms and
                      documents with speed and precision.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={trackingIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Validation & Compliance
                    </h4>
                    <p className="text-gray-600">
                      Ensure data accuracy while adhering to regulatory
                      requirements, reducing compliance risks effortlessly.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={documentLarge}
                alt="Document Processing"
                className="w-full max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Automation Section */}
      <section id="workflow-automation" className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:order-2"
            >
              <img
                src={workflowLarge}
                alt="Workflow Automation"
                className="w-full max-w-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Workflow Automation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Streamline logistics operations with virtual employees that
                autonomously execute and refine workflows for maximum efficiency
                and scalability.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <img
                    src={workflowIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Custom Workflows
                    </h4>
                    <p className="text-gray-600">
                      Create, adapt, and implement workflows tailored to meet
                      your specific business needs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={shippingIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Integration Hub
                    </h4>
                    <p className="text-gray-600">
                      Effortlessly connect AI agents to your tech stack,
                      including native integration with essential systems.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={trackingIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Process Analytics
                    </h4>
                    <p className="text-gray-600">
                      Monitor and analyze workflows with actionable insights
                      that drive continuous performance improvement.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automate Logistics Tasks Section */}
      <section id="ai-employees" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Automate Logistics Tasks
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Deploy AI agents across different departments to manage routine
                and complex tasks, enabling your team to focus on strategic
                growth initiatives.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">
                    Autonomous Agents for Every Department
                  </h4>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-4 items-start">
                      <img
                        src={workflowIcon}
                        alt=""
                        className="w-6 h-6 mt-1 flex-shrink-0"
                      />
                      <div>
                        <span className="font-semibold">Operations:</span>{" "}
                        Enhance supply chain efficiency, shipment tracking, and
                        process optimization.
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <img
                        src={documentIcon}
                        alt=""
                        className="w-6 h-6 mt-1 flex-shrink-0"
                      />
                      <div>
                        <span className="font-semibold">Finance:</span> Automate
                        invoicing, expense tracking, and financial reporting for
                        precise and efficient operations.
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <img
                        src={customsIcon}
                        alt=""
                        className="w-6 h-6 mt-1 flex-shrink-0"
                      />
                      <div>
                        <span className="font-semibold">
                          Sales and Marketing:
                        </span>{" "}
                        Drive lead management, customer engagement, and campaign
                        performance with intelligent automation.
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <img
                        src={shippingIcon}
                        alt=""
                        className="w-6 h-6 mt-1 flex-shrink-0"
                      />
                      <div>
                        <span className="font-semibold">
                          Compliance and Audit:
                        </span>{" "}
                        Maintain regulatory compliance, validate documents, and
                        ensure audit readiness.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <img
                      src={trackingIcon}
                      alt=""
                      className="w-12 h-12 flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Continuous Learning
                      </h4>
                      <p className="text-gray-600">
                        AI agents improve over time by adapting to real-world
                        operations, boosting reliability and performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src={workflowIcon}
                      alt=""
                      className="w-12 h-12 flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Team Collaboration
                      </h4>
                      <p className="text-gray-600">
                        Virtual employees integrate seamlessly with your team,
                        fostering collaboration across all business functions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={aiLarge}
                alt="AI Employees"
                className="w-full max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seamless Integration Section */}
      <section id="seamless-integration" className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Seamless Integration With Your Tech Stack
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <img
                    src={shippingIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Native Integration
                    </h4>
                    <p className="text-gray-600">
                      Ensure smooth data synchronization and process automation
                      within your logistics ecosystem.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={workflowIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Email Integration
                    </h4>
                    <p className="text-gray-600">
                      Automate email workflows with Gmail and Outlook,
                      simplifying communication and notifications.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={customsIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Freight Platforms
                    </h4>
                    <p className="text-gray-600">
                      Integrate with freight management systems to ensure
                      comprehensive shipment tracking and control.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={trackingIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Enterprise Systems
                    </h4>
                    <p className="text-gray-600">
                      Leverage compatibility with SAP and Oracle to align
                      logistics with your enterprise ecosystem.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:order-1"
            >
              <img
                src={integrationLarge}
                alt="Integration"
                className="w-full max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Consulting Section */}
      <section id="ai-consulting" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Consulting
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your logistics operations with our expert AI
                consulting services. Our strategic approach ensures seamless AI
                adoption and optimized performance across all functions.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <img
                    src={customsIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Digital Transformation Strategy
                    </h4>
                    <p className="text-gray-600">
                      Develop a roadmap to modernize logistics operations with
                      AI technologies aligned to your business goals.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={workflowIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      AI Implementation Planning
                    </h4>
                    <p className="text-gray-600">
                      Create a step-by-step deployment plan to integrate AI into
                      your workflows for maximum impact.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={documentIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Process Analysis
                    </h4>
                    <p className="text-gray-600">
                      Identify inefficiencies and uncover opportunities to
                      streamline workflows with AI-powered automation.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <img
                    src={trackingIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      ROI Assessment
                    </h4>
                    <p className="text-gray-600">
                      Evaluate the costs, benefits, and returns of AI
                      integration to drive informed, data-backed decisions.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mt-8">
                Partner with us to unlock the full potential of AI for your
                logistics business. From strategy to execution, we help you
                enhance scalability, efficiency, and success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={shippingIcon}
                alt="AI Consulting"
                className="w-full max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Seamless Integration With Your Tech Stack
          </motion.h2>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Automate Your Logistics Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Join leading logistics companies that have already automated their
            operations with LogiAI
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Join Waitlist
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
