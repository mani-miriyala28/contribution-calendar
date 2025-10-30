import { useEffect, useState } from "react";
import {
  format,
  subYears,
  eachWeekOfInterval,
  eachDayOfInterval,
  addDays,
} from "date-fns";
import { useNavigate } from "react-router-dom";
import themes, { ThemeName } from "../utils/themes";
import {
  fetchGitHubContributions,
  Contribution,
} from "../utils/github";

interface ContributionCalendarProps {
  username: string;
  token: string;
}

const ContributionCalendar = ({ username, token }: ContributionCalendarProps) => {
  const navigate = useNavigate();
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<{
    startDate: Date;
    endDate: Date;
  }>({
    startDate: subYears(new Date(), 1),
    endDate: new Date(),
  });
  const [selectedButton, setSelectedButton] = useState<string>("lastYear");
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>("galaxy");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    setIsLoading(true);
    setSelectedLevel(null);
    setSelectedCell(null);
    setActiveTooltip(null);

    setTimeout(() => {
      fetchGitHubContributions(
        username,
        token,
        selectedYear.startDate,
        selectedYear.endDate
      ).then((data) => {
        setContributions(data);
        setIsLoading(false);
      });
    }, 1000);
  }, [selectedYear, username, token]);

  const getContributionLevel = (count: number) => {
    const theme = themes[selectedTheme];
    if (count === 0) return theme.noContributions;
    if (count <= 2) return theme.low;
    if (count <= 4) return theme.moderate;
    if (count <= 6) return theme.high;
    return theme.veryHigh;
  };

  const getContributionLevelName = (count: number): string => {
    if (count === 0) return "noContributions";
    if (count <= 2) return "low";
    if (count <= 4) return "moderate";
    if (count <= 6) return "high";
    return "veryHigh";
  };

  const getTotalContributions = () => {
    return contributions.reduce((sum, day) => sum + day.count, 0);
  };

  const getMonths = () => {
    const weeks = getWeeks();
    if (weeks.length === 0) return [];

    const monthPositions = new Map();

    weeks.forEach((week, weekIndex) => {
      const daysInWeek = getDaysInWeek(week);

      daysInWeek.forEach((day) => {
        if (day.getDate() === 1) {
          const monthKey = day.getMonth();
          if (!monthPositions.has(monthKey)) {
            monthPositions.set(monthKey, {
              label: format(day, "MMM"),
              position: weekIndex,
            });
          }
        }
      });
    });

    return Array.from(monthPositions.values()).sort(
      (a, b) => a.position - b.position
    );
  };

  const getContributionForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return contributions.find((c) => c.date === dateStr)?.count || 0;
  };

  const getWeeks = () => {
    const start = selectedYear.startDate;
    const end = selectedYear.endDate;
    return eachWeekOfInterval({ start, end });
  };

  const getDaysInWeek = (weekStart: Date) => {
    return eachDayOfInterval({
      start: weekStart,
      end: addDays(weekStart, 6),
    });
  };

  const handleYearChange = (startDate: Date, endDate: Date) => {
    setSelectedYear({ startDate, endDate });
  };

  const getLastContributionDate = (contributionsData: Contribution[]) => {
    let lastContributionDate = null;

    for (let i = 0; i < contributionsData.length; i++) {
      if (contributionsData[i].count > 0) {
        lastContributionDate = contributionsData[i].date;
      }
    }

    return formatDate(lastContributionDate);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "No contributions found";
    const date = new Date(dateString);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const daySuffix = getDaySuffix(day);

    return `${month} ${day}${daySuffix}, ${year}`;
  };

  const getDaySuffix = (day: number) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const handleCellMouseEnter = (dateStr: string) => {
    if (!selectedCell) {
      setActiveTooltip(dateStr);
    }
  };

  const handleCellMouseLeave = () => {
    if (!selectedCell) {
      setActiveTooltip(null);
    }
  };

  const handleCellClick = (dateStr: string) => {
    if (selectedCell === dateStr) {
      setSelectedCell(null);
      setActiveTooltip(null);
    } else {
      setSelectedCell(dateStr);
      setActiveTooltip(dateStr);
    }
    setSelectedLevel(null);
  };

  const handleLevelClick = (level: string) => {
    if (selectedLevel === level) {
      setSelectedLevel(null);
    } else {
      setSelectedLevel(level);
    }
    setSelectedCell(null);
    setActiveTooltip(null);
  };

  if (isLoading) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full animate-pulse">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="grid grid-flow-col gap-1 overflow-x-auto">
            {Array.from({ length: 53 }).map((_, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className="w-4 h-4 bg-gray-200 rounded-sm"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const months = getMonths();
  const weeks = getWeeks();

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Logged in as:</span>
          <span className="text-purple-600 font-medium">{username}</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Main Calendar Card */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 animate-fadeIn max-w-full overflow-hidden">
        <div className="space-y-6">
          {/* Calendar Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <h2 className="text-lg font-semibold hidden sm:inline">Contribution Calendar</h2>
            </div>
            
            {/* Year Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  selectedButton === "lastYear"
                    ? "bg-purple-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => {
                  const today = new Date();
                  const lastYear = subYears(today, 1);
                  handleYearChange(lastYear, today);
                  setSelectedButton("lastYear");
                }}
              >
                Last Year
              </button>
              {[2025, 2024, 2023, 2022].map((year) => (
                <button
                  key={year}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    selectedButton === year.toString()
                      ? "bg-purple-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    handleYearChange(
                      new Date(year, 0, 1),
                      new Date(year, 11, 31)
                    );
                    setSelectedButton(year.toString());
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
            
            {/* Theme Selector */}
            <div>
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value as ThemeName)}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {Object.keys(themes).map((theme) => (
                  <option key={theme} value={theme}>
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Contribution Count */}
          <div className="text-center text-lg font-semibold">
            {getTotalContributions()} contributions in {selectedButton}
          </div>
          
          {/* Calendar Grid */}
          <div className="space-y-2 overflow-x-auto">
            <div className="flex min-w-[1000px]">
              {/* Day Labels */}
              <div className="w-16">
                <div className="h-5" />
                <div className="grid grid-rows-7 gap-1 text-xs text-gray-500">
                  <div>SUN</div>
                  <div className="invisible">MON</div>
                  <div>TUE</div>
                  <div className="invisible">WED</div>
                  <div>THU</div>
                  <div className="invisible">FRI</div>
                  <div>SAT</div>
                </div>
              </div>
              
              {/* Calendar */}
              <div className="flex-1 relative">
                {/* Month labels */}
                <div className="h-5 relative">
                  {months.map((month, i) => (
                    <div
                      key={i}
                      className="absolute text-xs text-gray-500"
                      style={{
                        left: `${(month.position / (weeks.length - 1)) * 100}%`,
                      }}
                    >
                      {month.label}
                    </div>
                  ))}
                </div>
                
                {/* Contribution Grid */}
                <div className="grid grid-flow-col gap-1">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-rows-7 gap-1">
                      {getDaysInWeek(week).map((day, dayIndex) => {
                        const dateStr = format(day, "yyyy-MM-dd");
                        const contributionCount = getContributionForDate(day);
                        const currentLevel = getContributionLevelName(contributionCount);
                        const isLevelHighlighted = selectedLevel === currentLevel;
                        const isCellHighlighted = selectedCell === dateStr;
                        const shouldFade =
                          (selectedLevel && !isLevelHighlighted) ||
                          (selectedCell && !isCellHighlighted);

                        return (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className="relative cursor-pointer group"
                            onMouseEnter={() => handleCellMouseEnter(dateStr)}
                            onMouseLeave={handleCellMouseLeave}
                            onClick={() => handleCellClick(dateStr)}
                          >
                            <div
                              className="w-4 h-4 rounded-sm transition-all duration-200 hover:ring-2 hover:ring-gray-400"
                              style={{
                                backgroundColor: getContributionLevel(contributionCount),
                                opacity: shouldFade ? "0.3" : "1",
                                transform:
                                  isLevelHighlighted || isCellHighlighted
                                    ? "scale(1.1)"
                                    : "scale(1)",
                                border: isCellHighlighted
                                  ? "2px solid black"
                                  : "none",
                              }}
                            />
                            
                            {/* CSS-based tooltip that appears on hover */}
                            {activeTooltip === dateStr && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg pointer-events-none z-50 whitespace-nowrap">
                                <div>{format(day, "MMMM d, yyyy")}</div>
                                <div>
                                  {contributionCount} contribution{contributionCount !== 1 ? "s" : ""}
                                </div>
                                {/* Tooltip arrow */}
                                <div
                                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                                  style={{
                                    borderLeft: "4px solid transparent",
                                    borderRight: "4px solid transparent",
                                    borderTop: "4px solid #1f2937",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center text-sm text-gray-600">
              Last contributed on: {getLastContributionDate(contributions)}
            </div>
            <div className="flex items-center justify-end space-x-2 text-sm">
              <span className="text-gray-500">Less</span>
              <div className="flex space-x-1">
                {(["noContributions", "low", "moderate", "high", "veryHigh"] as const).map(
                  (level) => (
                    <div
                      key={level}
                      className="w-4 h-4 rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-400"
                      style={{
                        backgroundColor: themes[selectedTheme][level],
                        transform:
                          selectedLevel === level ? "scale(1.1)" : "scale(1)",
                        opacity:
                          selectedLevel && selectedLevel !== level
                            ? "0.3"
                            : "1",
                        boxShadow:
                          selectedLevel === level
                            ? "0 0 0 2px rgba(0,0,0,0.1)"
                            : "none",
                      }}
                      onClick={() => handleLevelClick(level)}
                    />
                  )
                )}
              </div>
              <span className="text-gray-500">More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-500">
        Designed and developed by Mani Babu
      </footer>
    </>
  );
};

export default ContributionCalendar;