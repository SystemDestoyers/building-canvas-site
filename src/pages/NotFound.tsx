
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-sbc-blue mb-4">404</h1>
          <p className="text-2xl text-sbc-gray-dark mb-6">Oops! Page not found</p>
          <p className="text-sbc-gray max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-sbc-blue hover:bg-sbc-blue-dark text-white font-semibold rounded-md transition-all"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
