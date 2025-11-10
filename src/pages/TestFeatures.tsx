import { useState } from "react";
import GitHubCalendar from "../components/GitHubCalendar";
import { ThemeName, getThemeNames } from "../utils/themes";

export default function TestFeatures() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>("classic");
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(2);
  const [fontSize, setFontSize] = useState(14);
  const [hideColorLegend, setHideColorLegend] = useState(false);
  const [hideMonthLabels, setHideMonthLabels] = useState(false);
  const [hideWeekdayLabels, setHideWeekdayLabels] = useState(false);
  const [hideTotalCount, setHideTotalCount] = useState(false);
  const [selectedYears, setSelectedYears] = useState([2025, 2024]);
  const [showYearButtons, setShowYearButtons] = useState(true);
  const [customRender, setCustomRender] = useState(false);
  const [clickedDate, setClickedDate] = useState<string | null>(null);

  const allThemes = getThemeNames();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧪 Feature Testing Lab
          </h1>
          <p className="text-lg text-gray-600">
            Test all the customization features of the GitHubCalendar component
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4 space-y-6">
              <h2 className="text-xl font-semibold mb-4">🎛️ Controls</h2>
              
              {/* Theme Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value as ThemeName)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {allThemes.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Scheme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color Scheme
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setColorScheme("light")}
                    className={`px-3 py-1 rounded text-sm ${
                      colorScheme === "light"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setColorScheme("dark")}
                    className={`px-3 py-1 rounded text-sm ${
                      colorScheme === "dark"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Dark
                  </button>
                </div>
              </div>

              {/* Block Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Block Size: {blockSize}px
                </label>
                <input
                  type="range"
                  min="8"
                  max="20"
                  value={blockSize}
                  onChange={(e) => setBlockSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Block Margin */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Block Margin: {blockMargin}px
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={blockMargin}
                  onChange={(e) => setBlockMargin(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size: {fontSize}px
                </label>
                <input
                  type="range"
                  min="10"
                  max="20"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Hide Options */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Hide Elements
                </label>
                {[
                  { key: "hideColorLegend", label: "Color Legend", value: hideColorLegend, setter: setHideColorLegend },
                  { key: "hideMonthLabels", label: "Month Labels", value: hideMonthLabels, setter: setHideMonthLabels },
                  { key: "hideWeekdayLabels", label: "Weekday Labels", value: hideWeekdayLabels, setter: setHideWeekdayLabels },
                  { key: "hideTotalCount", label: "Total Count", value: hideTotalCount, setter: setHideTotalCount },
                ].map(({ key, label, value, setter }) => (
                  <label key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setter(e.target.checked)}
                      className="mr-2"
                    />
                    {label}
                  </label>
                ))}
              </div>

              {/* Show Options */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Show Features
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showYearButtons}
                    onChange={(e) => setShowYearButtons(e.target.checked)}
                    className="mr-2"
                  />
                  Year Selection Buttons
                </label>
              </div>

              {/* Years Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years to Display
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[2025, 2024, 2023, 2022].map((year) => (
                    <label key={year} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedYears.includes(year)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedYears([...selectedYears, year].sort((a, b) => b - a));
                          } else {
                            setSelectedYears(selectedYears.filter(y => y !== year));
                          }
                        }}
                        className="mr-2"
                      />
                      {year}
                    </label>
                  ))}
                </div>
              </div>

              {/* Custom Render Toggle */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={customRender}
                    onChange={(e) => setCustomRender(e.target.checked)}
                    className="mr-2"
                  />
                  Custom Render (Circles)
                </label>
              </div>

              {/* Click Info */}
              {clickedDate && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h3 className="text-sm font-medium text-blue-900">Last Clicked</h3>
                  <p className="text-sm text-blue-700">{clickedDate}</p>
                </div>
              )}
            </div>
          </div>

          {/* Calendar Display */}
          <div className="lg:col-span-3">
            <div className={`rounded-lg shadow-lg p-6 ${
              colorScheme === "dark" ? "bg-gray-900" : "bg-white"
            }`}>
              <h2 className={`text-2xl font-semibold mb-6 ${
                colorScheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                📊 Live Preview
              </h2>
              
              <GitHubCalendar
                username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
                token={import.meta.env.VITE_GITHUB_TOKEN}
                theme={selectedTheme}
                colorScheme={colorScheme}
                blockSize={blockSize}
                blockMargin={blockMargin}
                fontSize={fontSize}
                hideColorLegend={hideColorLegend}
                hideMonthLabels={hideMonthLabels}
                hideWeekdayLabels={hideWeekdayLabels}
                hideTotalCount={hideTotalCount}
                years={selectedYears.length > 0 ? selectedYears : [2025]}
                showYearButtons={showYearButtons}
                availableYears={[2025, 2024, 2023, 2022, 2021]}
                onYearChange={(year) => {
                  console.log(`Selected year: ${year}`);
                }}
                onDayClick={(date, count) => {
                  setClickedDate(`${date} (${count} contributions)`);
                }}
                renderDay={customRender ? (date, count) => (
                  <div
                    className={`rounded-full border-2 transition-all hover:scale-110 ${
                      count > 0 
                        ? 'bg-green-500 border-green-600' 
                        : 'bg-gray-200 border-gray-300'
                    }`}
                    style={{
                      width: blockSize,
                      height: blockSize,
                    }}
                    title={`${date}: ${count} contributions`}
                  />
                ) : undefined}
                renderDetails={customRender ? (date, count) => (
                  <div className="p-3 bg-white border rounded-lg shadow-lg">
                    <div className="font-bold text-lg text-green-600">{count}</div>
                    <div className="text-sm text-gray-600">contributions on</div>
                    <div className="font-medium">{new Date(date).toLocaleDateString()}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      🎨 Custom tooltip style
                    </div>
                  </div>
                ) : undefined}
              />
            </div>
          </div>
        </div>

        {/* Feature Tests */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test 1: Your Profile - Minimal Config */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">🔧 Test 1: Your Profile - Minimal</h3>
            <GitHubCalendar 
              username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
              token={import.meta.env.VITE_GITHUB_TOKEN}
            />
          </div>

          {/* Test 2: Your Profile - Dark Mode */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">🌙 Test 2: Your Profile - Dark Mode</h3>
            <GitHubCalendar
              username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
              token={import.meta.env.VITE_GITHUB_TOKEN}
              theme="galaxy"
              colorScheme="dark"
              blockSize={10}
            />
          </div>

          {/* Test 3: Your Profile - Custom Theme */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">🎨 Test 3: Your Profile - Custom Theme</h3>
            <GitHubCalendar
              username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
              token={import.meta.env.VITE_GITHUB_TOKEN}
              theme="crimson"
              blockSize={8}
              blockMargin={1}
            />
          </div>

          {/* Test 4: Your Profile - Interaction Test */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">🖱️ Test 4: Your Profile - Click Events</h3>
            <GitHubCalendar
              username={import.meta.env.VITE_GITHUB_USERNAME || "mani-miriyala28"}
              token={import.meta.env.VITE_GITHUB_TOKEN}
              theme="nature"
              years={[2025]}
              onDayClick={(date, count) => {
                alert(`Clicked: ${date}\nContributions: ${count}`);
              }}
            />
          </div>

          {/* Test 5: Custom Rendering */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">🎭 Test 5: Custom Render</h3>
            <GitHubCalendar
              username="octocat"
              theme="halloween"
              renderDay={(_, count) => (
                <div
                  className={`transition-all hover:rotate-45 ${
                    count > 5 ? 'text-2xl' : count > 2 ? 'text-lg' : 'text-sm'
                  }`}
                  style={{ width: 12, height: 12 }}
                >
                  {count > 0 ? '🎃' : '⬜'}
                </div>
              )}
            />
          </div>

          {/* Test 6: Performance Test */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">⚡ Test 6: Multi-Year</h3>
            <GitHubCalendar
              username="octocat"
              theme="winter"
              years={[2024, 2023, 2022]}
              blockSize={8}
              blockMargin={1}
              fontSize={12}
            />
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">📝 Code Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Basic Usage:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<GitHubCalendar 
  username="your-username"
  token={process.env.GITHUB_TOKEN}
/>`}
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">With Customization:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<GitHubCalendar
  username="your-username"
  token={process.env.GITHUB_TOKEN}
  theme="galaxy"
  colorScheme="dark"
  blockSize={14}
  blockMargin={3}
  fontSize={16}
  years={[2025, 2024]}
  onDayClick={(date, count) => console.log(date, count)}
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Custom Rendering:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<GitHubCalendar
  username="your-username"
  token={process.env.GITHUB_TOKEN}
  renderDay={(date, count) => (
    <div className={count > 0 ? 'bg-green-500' : 'bg-gray-200'}>
      {count}
    </div>
  )}
  renderDetails={(date, count) => (
    <div>Custom tooltip for {date}: {count} contributions</div>
  )}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}