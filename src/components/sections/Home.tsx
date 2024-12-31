import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import customsIcon from "../../assets/customs-icon.svg";
import shippingIcon from "../../assets/shipping-icon.svg";
import trackingIcon from "../../assets/tracking-icon.svg";
import documentIcon from "../../assets/document-icon.svg";
import workflowIcon from "../../assets/workflow-icon.svg";
import aiIcon from "../../assets/ai-icon.svg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-light-gray py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <motion.h1
                className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                {...fadeIn}
              >
                Transform Your Logistics with AI
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                Automate document processing, streamline workflows, and deploy
                AI agents to revolutionize your logistics operations.
              </motion.p>
              <motion.div
                className="flex gap-4"
                {...fadeIn}
                transition={{ delay: 0.4 }}
              >
                <Link to="/demo" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Sales
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aiIcon}
                alt="AI Automation"
                className="w-full max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligent Solutions for Modern Logistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform streamlines your operations and reduces
              manual work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: documentIcon,
                title: "Document Processing",
                description:
                  "Automate data extraction from shipping documents with high accuracy",
              },
              {
                icon: workflowIcon,
                title: "Workflow Automation",
                description:
                  "Create custom workflows that adapt to your business needs",
              },
              {
                icon: aiIcon,
                title: "AI Employees",
                description:
                  "Deploy AI agents that work 24/7 alongside your team",
              },
              {
                icon: customsIcon,
                title: "Customs Management",
                description: "Streamline customs documentation and compliance",
              },
              {
                icon: shippingIcon,
                title: "Shipping Operations",
                description: "Optimize shipping processes and reduce errors",
              },
              {
                icon: trackingIcon,
                title: "Real-time Tracking",
                description: "Monitor shipments and operations in real-time",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={feature.icon} alt="" className="w-16 h-16 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Choose LogiAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of AI-powered logistics automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "90% Faster Processing",
                description:
                  "Reduce document processing time from hours to minutes",
              },
              {
                title: "99.9% Accuracy",
                description: "Achieve near-perfect accuracy in data extraction",
              },
              {
                title: "24/7 Operations",
                description: "Keep your business running around the clock",
              },
              {
                title: "Cost Reduction",
                description: "Significantly reduce operational costs",
              },
              {
                title: "Scalable Solution",
                description: "Easily scale operations without adding headcount",
              },
              {
                title: "Quick Integration",
                description: "Seamlessly integrate with your existing systems",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Logistics Operations?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join leading logistics companies that have already automated their
            operations with LogiAI
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/demo"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};