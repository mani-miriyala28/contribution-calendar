import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import TestFeatures from "./pages/TestFeatures";
import GitHubCalendar from "./components/GitHubCalendar";

// Demo component to showcase the new enhanced GitHubCalendar
function DemoApp() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React GitHub Contribution Calendar
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            A beautiful and customizable GitHub contribution calendar component
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800 font-semibold">
              🆕 New Feature: Click on color legend items to highlight contribution levels!
            </p>
            <p className="text-blue-600 text-sm mt-1">
              Showing examples with username: <code className="bg-blue-100 px-2 py-1 rounded">{import.meta.env.VITE_GITHUB_USERNAME || "your-username"}</code>
            </p>
          </div>
        </div>

        {/* Basic Example with Your Profile */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your GitHub Profile - Basic</h2>
          <p className="text-gray-600 mb-4">
            Click on the color legend below to highlight contribution levels!
          </p>
          <GitHubCalendar
            username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
            token={import.meta.env.VITE_GITHUB_TOKEN}
            theme="classic"
            colorScheme="light"
            blockSize={12}
            blockMargin={2}
            years={[2025, 2024]}
            onDayClick={(date, count) => {
              console.log(`Clicked: ${date} with ${count} contributions`);
            }}
          />
        </div>

        {/* Dark Mode Example with Your Profile */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Your Profile - Dark Galaxy Theme</h2>
          <p className="text-gray-300 mb-4">
            ✨ Galaxy theme with interactive legend highlighting ✨
          </p>
          <GitHubCalendar
            username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
            token={import.meta.env.VITE_GITHUB_TOKEN}
            theme="galaxy"
            colorScheme="dark"
            blockSize={14}
            blockMargin={3}
            years={[2025, 2024, 2023]}
            hideTotalCount={false}
            onDayClick={(date, count) => {
              alert(`🚀 ${date}: ${count} contributions`);
            }}
          />
        </div>

        {/* Nature Theme Example with Your Profile */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Profile - Nature Theme</h2>
          <p className="text-gray-600 mb-4">
            🌿 Nature theme with larger blocks and enhanced legend interaction 🌿
          </p>
          <GitHubCalendar
            username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
            token={import.meta.env.VITE_GITHUB_TOKEN}
            theme="nature"
            colorScheme="light"
            blockSize={16}
            blockMargin={4}
            fontSize={16}
            years={[2025]}
            hideWeekdayLabels={false}
            hideColorLegend={false}
            onDayClick={(date, count) => {
              console.log(`🌱 Nature click: ${date} with ${count} contributions`);
            }}
          />
        </div>

        {/* Legend Highlighting Feature Demo */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg p-6 border-2 border-purple-200">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">
            🎯 New Feature: Interactive Legend Highlighting
          </h2>
          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-lg mb-2">How to use:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Click on any color in the legend below to highlight that contribution level</li>
              <li>All cells with the same contribution level will be highlighted with a blue border</li>
              <li>Other cells will be dimmed for better focus</li>
              <li>Click the same color again to clear the highlighting</li>
              <li>This helps you quickly identify patterns in your contribution history!</li>
            </ul>
          </div>
          <GitHubCalendar
            username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
            token={import.meta.env.VITE_GITHUB_TOKEN}
            theme="classic"
            colorScheme="light"
            blockSize={15}
            blockMargin={3}
            fontSize={14}
            years={[2025, 2024]}
            hideTotalCount={false}
            onDayClick={(date, count) => {
              console.log(`🎯 Interactive click: ${date} with ${count} contributions`);
            }}
          />
        </div>

        {/* Multiple Years Example with Your Profile */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Profile - 3 Years History</h2>
          <p className="text-gray-600 mb-4">
            🎃 Halloween theme showing your contribution journey across years 🎃
          </p>
          <GitHubCalendar
            username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
            token={import.meta.env.VITE_GITHUB_TOKEN}
            theme="halloween"
            colorScheme="dark"
            years={[2025, 2024, 2023]}
            hideTotalCount={false}
            blockSize={13}
            blockMargin={2}
            onDayClick={(date, count) => {
              alert(`🎃 ${date}: ${count} spooky contributions!`);
            }}
          />
        </div>

        {/* Custom Render Example */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Custom Rendering</h2>
          <GitHubCalendar
            username="octocat"
            theme="classic"
            renderDay={(date, count) => (
              <div
                className={`w-3 h-3 rounded-full transition-all hover:scale-110 ${
                  count > 0 
                    ? 'bg-green-500 border-2 border-green-600' 
                    : 'bg-gray-200 border-2 border-gray-300'
                }`}
                title={`${date}: ${count} contributions`}
              />
            )}
            renderDetails={(date, count) => (
              <div className="p-3 bg-white border rounded-lg shadow-lg">
                <div className="font-bold text-lg text-green-600">{count}</div>
                <div className="text-sm text-gray-600">contributions on</div>
                <div className="font-medium">{new Date(date).toLocaleDateString()}</div>
                <div className="text-xs text-gray-400 mt-1">
                  Click for more details
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/test" />} />
        <Route path="/test" element={<TestFeatures />} />
        <Route
          path="/login"
          element={<Login setUsername={setUsername} setToken={setToken} />}
        />
        <Route
          path="/calendar/gh/:username"
          element={
            username && token ? (
              <Index token={token} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/demo" element={<DemoApp />} />
        <Route path="*" element={<Navigate to="/test" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;