import { useEffect, useState, ReactNode } from "react";
import {
  format,
  eachWeekOfInterval,
  eachDayOfInterval,
  addDays,
  subYears,
} from "date-fns";
import { ThemeName, getTheme } from "../utils/themes";
import {
  fetchGitHubContributions,
  Contribution,
} from "../utils/github";

export interface GitHubCalendarProps {
  /** GitHub username to fetch contributions for */
  username: string;
  /** GitHub personal access token (optional but recommended for higher rate limits) */
  token?: string;
  /** Theme name or custom theme object */
  theme?: ThemeName | string;
  /** Color scheme preference */
  colorScheme?: 'light' | 'dark';
  /** Size of contribution blocks in pixels */
  blockSize?: number;
  /** Margin between blocks in pixels */
  blockMargin?: number;
  /** Font size for labels */
  fontSize?: number;
  /** Hide the color legend */
  hideColorLegend?: boolean;
  /** Hide month labels */
  hideMonthLabels?: boolean;
  /** Hide weekday labels */
  hideWeekdayLabels?: boolean;
  /** Hide total contribution count */
  hideTotalCount?: boolean;
  /** Years to display (defaults to current year and last year) */
  years?: number[];
  /** Show year selection buttons */
  showYearButtons?: boolean;
  /** Available years for year buttons */
  availableYears?: number[];
  /** Callback when a year is selected */
  onYearChange?: (year: number) => void;
  /** Callback when a day is clicked */
  onDayClick?: (date: string, count: number) => void;
  /** Custom render function for days */
  renderDay?: (date: string, count: number, level: string) => ReactNode;
  /** Custom render function for tooltip details */
  renderDetails?: (date: string, count: number) => ReactNode;
  /** Custom class name for styling */
  className?: string;
  /** Loading component */
  loading?: ReactNode;
  /** Error component */
  error?: ReactNode;
  /** Show loading animation */
  showLoading?: boolean;
  /** Custom style object */
  style?: React.CSSProperties;
}

interface YearData {
  year: number;
  startDate: Date;
  endDate: Date;
  contributions: Contribution[];
}

const GitHubCalendar = ({
  username,
  token,
  theme = 'classic',
  colorScheme = 'light',
  blockSize = 12,
  blockMargin = 2,
  fontSize = 14,
  hideColorLegend = false,
  hideMonthLabels = false,
  hideWeekdayLabels = false,
  hideTotalCount = false,
  years: _years,
  showYearButtons = false,
  availableYears = [2025, 2024, 2023, 2022, 2021],
  onYearChange,
  onDayClick,
  renderDay,
  renderDetails,
  className = "",
  loading,
  error,
  showLoading = true,
  style,
}: GitHubCalendarProps) => {
  const [yearsData, setYearsData] = useState<YearData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [highlightedLevel, setHighlightedLevel] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedButton, setSelectedButton] = useState<string>("lastYear");
  const [dateRange, setDateRange] = useState<{
    startDate: Date;
    endDate: Date;
  }>({
    startDate: subYears(new Date(), 1),
    endDate: new Date(),
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!username) {
        setHasError(true);
        setErrorMessage("Username is required");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setHasError(false);
      setErrorMessage("");

      try {
        // Fetch contributions for the date range
        const contributions = await fetchGitHubContributions(
          username,
          token || "",
          dateRange.startDate,
          dateRange.endDate
        );

        // Create year data structure that matches the original format
        const yearData = {
          year: dateRange.endDate.getFullYear(),
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          contributions,
        };

        setYearsData([yearData]);
      } catch (err) {
        setHasError(true);
        setErrorMessage(err instanceof Error ? err.message : "Failed to fetch contributions");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username, token, dateRange]);

  const currentTheme = getTheme(theme, colorScheme);

  const getContributionLevel = (count: number) => {
    if (count === 0) return currentTheme.noContributions;
    if (count <= 2) return currentTheme.low;
    if (count <= 4) return currentTheme.moderate;
    if (count <= 6) return currentTheme.high;
    return currentTheme.veryHigh;
  };

  const getContributionLevelName = (count: number): string => {
    if (count === 0) return "noContributions";
    if (count <= 2) return "low";
    if (count <= 4) return "moderate";
    if (count <= 6) return "high";
    return "veryHigh";
  };

  const getTotalContributions = (contributions: Contribution[]) => {
    return contributions.reduce((sum, day) => sum + day.count, 0);
  };

  const getLastContributionDate = (contributions: Contribution[]) => {
    // Find the most recent date with contributions > 0
    const contributedDays = contributions
      .filter(day => day.count > 0)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return contributedDays.length > 0 ? contributedDays[0].date : null;
  };

  const getMonths = (startDate: Date, endDate: Date) => {
    const weeks = eachWeekOfInterval({ start: startDate, end: endDate });
    if (weeks.length === 0) return [];

    const monthPositions = new Map();

    weeks.forEach((week, weekIndex) => {
      const daysInWeek = eachDayOfInterval({
        start: week,
        end: addDays(week, 6),
      });

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

  const getContributionForDate = (date: Date, contributions: Contribution[]) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return contributions.find((c) => c.date === dateStr)?.count || 0;
  };

  const handleCellMouseEnter = (dateStr: string) => {
    // Only show tooltip if no cell is selected, or if this is the selected cell
    if (!selectedCell || selectedCell === dateStr) {
      setActiveTooltip(dateStr);
    }
  };

  const handleCellMouseLeave = () => {
    // Only hide tooltip if no cell is selected
    if (!selectedCell) {
      setActiveTooltip(null);
    }
  };

  const handleCellClick = (dateStr: string, count: number) => {
    if (selectedCell === dateStr) {
      setSelectedCell(null);
      setActiveTooltip(null);
    } else {
      setSelectedCell(dateStr);
      setActiveTooltip(dateStr);
    }
    // Clear level highlighting when clicking a cell
    setHighlightedLevel(null);
    
    if (onDayClick) {
      onDayClick(dateStr, count);
    }
  };

  const handleLevelClick = (level: string) => {
    if (highlightedLevel === level) {
      setHighlightedLevel(null);
    } else {
      setHighlightedLevel(level);
    }
    // Clear cell selection when clicking a level
    setSelectedCell(null);
    setActiveTooltip(null);
  };

  const handleYearClick = (year: number) => {
    // Handle specific year selection
    setDateRange({
      startDate: new Date(year, 0, 1),
      endDate: new Date(year, 11, 31),
    });
    setSelectedButton(year.toString());
    setSelectedYear(year);
    if (onYearChange) {
      onYearChange(year);
    }
  };

  const handleLastYearClick = () => {
    // Handle "Last Year" selection (1 year ago to today)
    const today = new Date();
    const lastYear = subYears(today, 1);
    setDateRange({
      startDate: lastYear,
      endDate: today,
    });
    setSelectedButton("lastYear");
    setSelectedYear(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };

  const renderYearCalendar = (yearData: YearData) => {
    const { year, startDate, endDate, contributions } = yearData;
    const weeks = eachWeekOfInterval({ start: startDate, end: endDate });
    const months = hideMonthLabels ? [] : getMonths(startDate, endDate);

    return (
      <div key={year} className="space-y-4" style={{ overflow: 'visible' }}>
        {/* Year Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold" style={{ 
            fontSize,
            color: colorScheme === 'dark' ? '#ffffff' : '#000000'
          }}>
            {year}
          </h3>
          {!hideTotalCount && (
            <div className="text-sm" style={{ 
              color: colorScheme === 'dark' ? '#d1d5db' : '#6b7280' 
            }}>
              <span className="font-bold" style={{ 
                color: colorScheme === 'dark' ? '#ffffff' : '#111827' 
              }}>
                {getTotalContributions(contributions)}
              </span>
              {' '}contributions
            </div>
          )}
        </div>

        {/* Calendar Grid */}
        <div className="overflow-x-auto" style={{ overflowY: 'hidden' }}>
          <div className="flex min-w-[1000px]" style={{ padding: `${blockSize * 0.1}px 0` }}>
            {/* Weekday Labels */}
            {!hideWeekdayLabels && (
              <div className="w-16">
                <div style={{ height: fontSize + 4 }} />
                <div className="grid grid-rows-7" style={{ gap: blockMargin }}>
                  {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
                    <div
                      key={day}
                      className={`text-xs ${index % 2 === 1 ? 'invisible' : ''}`}
                      style={{ 
                        fontSize: fontSize * 0.75,
                        height: blockSize,
                        display: 'flex',
                        alignItems: 'center',
                        color: colorScheme === 'dark' ? '#9ca3af' : '#6b7280'
                      }}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calendar */}
            <div className="flex-1 relative">
              {/* Month Labels */}
              {!hideMonthLabels && (
                <div className="relative" style={{ height: fontSize + 4 }}>
                  {months.map((month, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        fontSize: fontSize * 0.75,
                        left: `${(month.position / (weeks.length - 1)) * 100}%`,
                        color: colorScheme === 'dark' ? '#9ca3af' : '#6b7280'
                      }}
                    >
                      {month.label}
                    </div>
                  ))}
                </div>
              )}

              {/* Contribution Grid with padding to prevent overflow */}
              <div 
                className="grid grid-flow-col relative"
                style={{ 
                  gap: blockMargin, 
                  zIndex: 1,
                  padding: `${blockSize * 0.1}px`,
                  margin: `-${blockSize * 0.1}px`
                }}
              >
                {weeks.map((week, weekIndex) => (
                  <div 
                    key={weekIndex} 
                    className="grid grid-rows-7"
                    style={{ gap: blockMargin }}
                  >
                    {eachDayOfInterval({
                      start: week,
                      end: addDays(week, 6),
                    }).map((day, dayIndex) => {
                      const dateStr = format(day, "yyyy-MM-dd");
                      const contributionCount = getContributionForDate(day, contributions);
                      const level = getContributionLevelName(contributionCount);
                      const isCellHighlighted = selectedCell === dateStr;
                      const isLevelHighlighted = highlightedLevel === level;
                      const shouldFade = 
                        (highlightedLevel && !isLevelHighlighted) ||
                        (selectedCell && !isCellHighlighted);

                      // Custom day rendering
                      if (renderDay) {
                        return (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className="relative cursor-pointer"
                            onMouseEnter={() => handleCellMouseEnter(dateStr)}
                            onMouseLeave={handleCellMouseLeave}
                            onClick={() => handleCellClick(dateStr, contributionCount)}
                          >
                            {renderDay(dateStr, contributionCount, level)}
                          </div>
                        );
                      }

                      // Default day rendering
                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className="relative cursor-pointer group"
                          style={{ 
                            zIndex: activeTooltip === dateStr ? 99998 : 1,
                            isolation: activeTooltip === dateStr ? 'isolate' : 'auto'
                          }}
                          onMouseEnter={() => handleCellMouseEnter(dateStr)}
                          onMouseLeave={handleCellMouseLeave}
                          onClick={() => handleCellClick(dateStr, contributionCount)}
                        >
                          <div
                            className="rounded-sm transition-all duration-200 hover:ring-1 hover:ring-gray-400"
                            style={{
                              width: blockSize,
                              height: blockSize,
                              backgroundColor: getContributionLevel(contributionCount),
                              border: isCellHighlighted ? "2px solid black" : "none",
                              opacity: shouldFade ? 0.3 : 1,
                            }}
                          />
                          
                          {/* Enhanced tooltip with better z-index and positioning */}
                          {activeTooltip === dateStr && (
                            <div 
                              className="absolute px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none whitespace-nowrap font-medium"
                              style={{ 
                                zIndex: 99999,
                                // Improved vertical positioning
                                bottom: dayIndex < 3 ? 'auto' : '100%',
                                top: dayIndex < 3 ? '100%' : 'auto',
                                marginBottom: dayIndex >= 3 ? '8px' : '0',
                                marginTop: dayIndex < 3 ? '8px' : '0',
                                // Improved horizontal positioning to prevent cutoff
                                left: weekIndex < weeks.length * 0.3 ? '0' : 
                                      weekIndex > weeks.length * 0.7 ? 'auto' : '50%',
                                right: weekIndex > weeks.length * 0.7 ? '0' : 'auto',
                                transform: (weekIndex >= weeks.length * 0.3 && weekIndex <= weeks.length * 0.7) 
                                          ? 'translateX(-50%)' : 'none',
                                // Ensure tooltip doesn't extend beyond viewport
                                maxWidth: '250px',
                                minWidth: '140px',
                                // Add higher z-index for the container as well
                                isolation: 'isolate'
                              }}
                            >
                              {renderDetails ? (
                                renderDetails(dateStr, contributionCount)
                              ) : (
                                <div className="text-center">
                                  <div className="font-semibold">{formatDate(dateStr)}</div>
                                  <div className="text-gray-300 text-xs">
                                    {contributionCount} contribution{contributionCount !== 1 ? "s" : ""}
                                  </div>
                                </div>
                              )}
                              
                              {/* Enhanced tooltip arrow */}
                              <div
                                className="absolute w-0 h-0"
                                style={{
                                  // Position arrow based on tooltip position
                                  [dayIndex < 3 ? 'top' : 'bottom']: '100%',
                                  left: weekIndex < weeks.length * 0.3 ? '16px' : 
                                        weekIndex > weeks.length * 0.7 ? 'auto' : '50%',
                                  right: weekIndex > weeks.length * 0.7 ? '16px' : 'auto',
                                  transform: (weekIndex >= weeks.length * 0.3 && weekIndex <= weeks.length * 0.7) 
                                            ? 'translateX(-50%)' : 'none',
                                  borderLeft: "6px solid transparent",
                                  borderRight: "6px solid transparent",
                                  [dayIndex < 3 ? 'borderBottom' : 'borderTop']: "6px solid #1f2937",
                                  zIndex: 1
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
      </div>
    );
  };

  // Loading state
  if (isLoading && showLoading) {
    if (loading) {
      return <>{loading}</>;
    }
    
    return (
      <div className={`border border-gray-200 rounded-lg shadow-sm p-6 w-full animate-pulse ${className}`} 
           style={{
             ...style,
             backgroundColor: colorScheme === 'dark' ? '#1f2937' : '#ffffff',
             borderColor: colorScheme === 'dark' ? '#374151' : '#e5e7eb'
           }}>
        <div className="space-y-4">
          <div className="h-4 rounded" style={{
            backgroundColor: colorScheme === 'dark' ? '#374151' : '#e5e7eb'
          }} />
          <div className="grid grid-flow-col gap-1 overflow-x-auto">
            {Array.from({ length: 53 }).map((_, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className="rounded-sm"
                    style={{
                      width: blockSize,
                      height: blockSize,
                      backgroundColor: colorScheme === 'dark' ? '#374151' : '#e5e7eb'
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (hasError) {
    if (error) {
      return <>{error}</>;
    }
    
    return (
      <div className={`border rounded-lg p-6 ${className}`} 
           style={{
             ...style,
             backgroundColor: colorScheme === 'dark' ? '#7f1d1d' : '#fef2f2',
             borderColor: colorScheme === 'dark' ? '#dc2626' : '#fecaca'
           }}>
        <div style={{ color: colorScheme === 'dark' ? '#fecaca' : '#991b1b' }}>
          <h3 className="font-semibold">Error loading contributions</h3>
          <p className="text-sm mt-1">{errorMessage}</p>
        </div>
      </div>
    );
  }

  // Main render
  const displayYears = selectedYear ? yearsData.filter(y => y.year === selectedYear) : yearsData;
  const totalContributions = displayYears.reduce((sum, yearData) => 
    sum + yearData.contributions.reduce((yearSum, day) => yearSum + day.count, 0), 0
  );

  return (
    <div className={`space-y-6 ${className}`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {/* Year Selection Buttons */}
      {showYearButtons && (
        <div className="flex items-center justify-end">
          <div className="flex space-x-2">
            <button
              onClick={handleLastYearClick}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedButton === "lastYear"
                  ? 'bg-purple-600 text-white'
                  : colorScheme === 'dark' 
                    ? 'border border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Last Year
            </button>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => handleYearClick(year)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedButton === year.toString()
                    ? 'bg-purple-600 text-white'
                    : colorScheme === 'dark' 
                      ? 'border border-gray-600 text-gray-300 hover:bg-gray-800'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Total Contributions Display */}
      {!hideTotalCount && displayYears.length > 0 && (
        <div className="text-center">
          <p className="text-lg font-semibold" style={{ 
            color: colorScheme === 'dark' ? '#ffffff' : '#000000' 
          }}>
            <span className="text-2xl font-bold text-purple-600">{totalContributions}</span>{' '}
            contributions in {selectedButton === "lastYear" ? "last year" : 
                             selectedButton !== "lastYear" ? selectedButton : 
                             `${displayYears.length} year${displayYears.length > 1 ? 's' : ''}`}
          </p>
        </div>
      )}

      {displayYears.map((yearData) => renderYearCalendar(yearData))}
      
      {/* Color Legend with Last Contributed */}
      {!hideColorLegend && (
        <div className="flex items-center justify-between">
          {/* Last contributed text on the left */}
          {displayYears[0] && (
            <p className="text-sm" style={{ 
              color: colorScheme === 'dark' ? '#d1d5db' : '#6b7280' 
            }}>
              {(() => {
                const lastContributionDate = getLastContributionDate(displayYears[0].contributions);
                return lastContributionDate 
                  ? `Last contributed on: ${format(new Date(lastContributionDate), "MMM do, yyyy")}`
                  : "No contributions in this period";
              })()}
            </p>
          )}
          
          {/* Color legend on the right */}
          <div className="flex items-center space-x-2">
            <span style={{ 
              fontSize: fontSize * 0.85,
              color: colorScheme === 'dark' ? '#9ca3af' : '#6b7280'
            }}>Less</span>
            <div className="flex space-x-1">
              {(['noContributions', 'low', 'moderate', 'high', 'veryHigh'] as const).map((level) => {
                const isSelected = highlightedLevel === level;
                return (
                  <div
                    key={level}
                    className="rounded-sm cursor-pointer transition-opacity duration-200 hover:ring-1 hover:ring-gray-400"
                    style={{
                      width: blockSize,
                      height: blockSize,
                      backgroundColor: currentTheme[level],
                      opacity: highlightedLevel && !isSelected ? 0.3 : 1,
                    }}
                    onClick={() => handleLevelClick(level)}
                    title={`Click to highlight ${level} contribution level`}
                  />
                );
              })}
            </div>
            <span style={{ 
              fontSize: fontSize * 0.85,
              color: colorScheme === 'dark' ? '#9ca3af' : '#6b7280'
            }}>More</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubCalendar;