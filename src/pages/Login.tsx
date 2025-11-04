import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setUsername: (username: string) => void;
  setToken: (token: string) => void;
}

const Login = ({ setUsername, setToken }: LoginProps) => {
  const [identifier, setIdentifier] = useState("");
  const [token, setTokenLocal] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getIdentifierType = (value: string) => {
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // GitHub username regex (alphanumeric with single hyphens)
    const usernameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;

    if (emailRegex.test(value)) return "email";
    if (usernameRegex.test(value)) return "username";
    return "invalid";
  };

  const verifyGitHubCredentials = async (identifier: string, token: string) => {
    try {
      const identifierType = getIdentifierType(identifier);

      // First, verify the token by getting the authenticated user
      const authResponse = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!authResponse.ok) {
        if (authResponse.status === 401) {
          setError("Invalid GitHub token");
          return false;
        }
        setError("Failed to verify credentials");
        return false;
      }

      const authData = await authResponse.json();

      // Check if the provided identifier matches the token owner's details
      switch (identifierType) {
        case "email":
          if (authData.email !== identifier) {
            setError("Email does not match the token owner");
            return false;
          }
          break;
        case "username":
          if (authData.login.toLowerCase() !== identifier.toLowerCase()) {
            setError("Username does not match the token owner");
            return false;
          }
          break;
        case "invalid":
          setError("Invalid identifier format");
          return false;
      }

      return true;
    } catch (error) {
      setError("Network error occurred");
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !token) {
      setError("Both fields are required.");
      return;
    }

    const identifierType = getIdentifierType(identifier);
    if (identifierType === "invalid") {
      setError("Please enter a valid email or GitHub username");
      return;
    }

    const isValid = await verifyGitHubCredentials(identifier, token);
    if (isValid) {
      setUsername(identifier);
      setToken(token);
      navigate(`/calendar/gh/${identifier}`);
    }
  };

  const getIdentifierPlaceholder = () => {
    if (!identifier) return "Enter email or GitHub username";
    const type = getIdentifierType(identifier);
    switch (type) {
      case "email":
        return "Email address detected";
      case "username":
        return "GitHub username detected";
      default:
        return "Invalid format";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      {/* GitHub Icon */}
      <div className="h-16 mb-4">
        <svg
          className="w-16 h-16 text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Login Card */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Login</h2>
        
        {error && (
          <div className="text-red-600 text-center text-sm mb-4 p-2 bg-red-50 border border-red-200 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Username
            </label>
            <input
              id="identifier"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder={getIdentifierPlaceholder()}
            />
            {identifier && (
              <span className="text-xs text-gray-500 mt-1 block">
                {getIdentifierPlaceholder()}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Personal Access Token
            </label>
            <input
              id="token"
              type="password"
              value={token}
              onChange={(e) => setTokenLocal(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            />
            <span className="text-xs text-gray-500 mt-1 block">
              <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                Create a token here
              </a> (needs repo and read:user scopes)
            </span>
          </div>
          
          {/* <div>
            <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Personal Access Token
            </label>
            <input
              id="token"
              type="password"
              value={token}
              onChange={(e) => setTokenLocal(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="••••••••••••••••••••••••••••••••••••"
            />
            <div className="text-xs text-gray-500 mt-1">
              Token must have 'repo' and 'user:email' scopes
            </div>
          </div>
           */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
      
      <footer className="mt-6 text-center text-sm text-gray-500">
        Designed and developed by Mani Babu
      </footer>
    </div>
  );
};

export default Login;