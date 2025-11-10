import { ReactNode } from 'react';
import { ThemeName } from '../utils/themes';
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
declare const GitHubCalendar: ({ username, token, theme, colorScheme, blockSize, blockMargin, fontSize, hideColorLegend, hideMonthLabels, hideWeekdayLabels, hideTotalCount, years: _years, showYearButtons, availableYears, onYearChange, onDayClick, renderDay, renderDetails, className, loading, error, showLoading, style, }: GitHubCalendarProps) => import("react/jsx-runtime").JSX.Element;
export default GitHubCalendar;
