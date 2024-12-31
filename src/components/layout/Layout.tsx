import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">LogiAI</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-text hover:text-primary">
                Home
              </Link>
              <Link to="/solutions" className="text-text hover:text-primary">
                Solutions
              </Link>
              <Link to="/use-cases" className="text-text hover:text-primary">
                Use Cases
              </Link>
              <Link to="/about" className="text-text hover:text-primary">
                About
              </Link>
              <Link
                to="/contact"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16">{children}</main>

      <footer className="bg-text text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LogiAI</h3>
              <p className="text-gray-400">
                Transforming logistics with intelligent automation
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <div className="flex flex-col space-y-2">
                <Link
                  to="/solutions#document-processing"
                  className="text-gray-400 hover:text-white"
                >
                  Document Processing
                </Link>
                <Link
                  to="/solutions#workflow-automation"
                  className="text-gray-400 hover:text-white"
                >
                  Workflow Automation
                </Link>
                <Link
                  to="/solutions#ai-employees"
                  className="text-gray-400 hover:text-white"
                >
                  AI Employees
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              &copy; 2024 LogiAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
