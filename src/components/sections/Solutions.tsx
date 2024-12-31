import { motion } from "framer-motion";
import customsIcon from "../../assets/customs-icon.svg";
import shippingIcon from "../../assets/shipping-icon.svg";
import trackingIcon from "../../assets/tracking-icon.svg";
import documentIcon from "../../assets/document-icon.svg";
import workflowIcon from "../../assets/workflow-icon.svg";
import aiIcon from "../../assets/ai-icon.svg";
import cargowiseLogo from "../../assets/cargowise-logo.svg";

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
                Intelligent Document Processing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Automate the processing of logistics documents with AI that
                understands context and learns from your workflows.
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
                      Automatically identify and classify different types of
                      shipping documents
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
                      Extract key information from forms and documents with high
                      accuracy
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
                      Ensure data accuracy and compliance with regulatory
                      requirements
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
                src={documentIcon}
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
                src={workflowIcon}
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
                Streamline your operations with intelligent automation that
                adapts to your business processes.
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
                      Design and implement automated workflows tailored to your
                      needs
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
                      Connect with your existing systems including CargoWise One
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
                      Track and optimize your automated workflows with detailed
                      insights
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Employees Section */}
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
                AI Employees
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Deploy autonomous AI agents that work alongside your team to
                handle routine tasks 24/7.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <img
                    src={aiIcon}
                    alt=""
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Autonomous Agents
                    </h4>
                    <p className="text-gray-600">
                      AI workers that understand and execute complex logistics
                      tasks
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
                      Continuous Learning
                    </h4>
                    <p className="text-gray-600">
                      Agents that improve over time by learning from your
                      operations
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
                      Team Collaboration
                    </h4>
                    <p className="text-gray-600">
                      Seamless integration with your human workforce
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
                src={aiIcon}
                alt="AI Employees"
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
            Seamless Integration with Your Tech Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-12 mb-8"
          >
            <img
              src={cargowiseLogo}
              alt="CargoWise One"
              className="h-10 opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600"
          >
            Native integration with CargoWise One and custom integrations
            available for your specific needs
          </motion.p>
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
            Schedule a demo to see how LogiAI can transform your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="/demo"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
