# React GitHub Contribution Calendar

A beautiful and customizable GitHub contribution calendar component for React applications.

![npm version](https://img.shields.io/npm/v/gh-contribution-calendar)
![npm downloads](https://img.shields.io/npm/dm/gh-contribution-calendar)
![license](https://img.shields.io/npm/l/gh-contribution-calendar)

## Features

- � **Multiple themes and color schemes** - 15+ built-in themes with light/dark variants
- 📱 **Responsive design** - Works seamlessly on all device sizes
- � **Interactive tooltips** - Detailed contribution information on hover
- � **Detailed contribution information** - Shows contribution counts and dates
- 🎯 **Customizable appearance** - Control block size, margins, fonts, and more
- 🌙 **Dark mode support** - Built-in dark mode for all themes
- 🔄 **Real-time data fetching** - Fetches live data from GitHub API
- 📦 **TypeScript support** - Full TypeScript definitions included
- �️ **Custom render functions** - Complete control over day and tooltip rendering
- 📅 **Multi-year support** - Display multiple years of contributions
- 🎪 **Interactive elements** - Click handlers and custom behaviors

## Installation

```bash
npm install gh-contribution-calendar
# or
yarn add gh-contribution-calendar
# or
pnpm add gh-contribution-calendar
```

## Usage

### Basic Setup

First, set up your environment variables. Create a `.env` file in your project root:

```bash
# Copy the example file
cp .env.example .env

# Add your GitHub token and username
VITE_GITHUB_TOKEN=your_github_token_here
VITE_GITHUB_USERNAME=your_github_username
```

> **Note**: Get your GitHub Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens). No special permissions are required for public repositories.

### Component Usage

```tsx
import { GitHubCalendar } from "gh-contribution-calendar";

function App() {
  return (
    <GitHubCalendar
      username={import.meta.env.VITE_GITHUB_USERNAME || "your-username"}
      token={import.meta.env.VITE_GITHUB_TOKEN} // Recommended for higher rate limits
      theme="classic" // Optional
      colorScheme="light" // Optional
      blockSize={12} // Optional
      blockMargin={2} // Optional
      fontSize={14} // Optional
    />
  );
}
```

## Props

| Prop              | Type              | Default                        | Description                                         |
| ----------------- | ----------------- | ------------------------------ | --------------------------------------------------- |
| username          | string            | required                       | GitHub username to fetch contributions for          |
| token             | string            | -                              | GitHub personal access token (optional)             |
| theme             | string            | 'classic'                      | Theme name ('classic', 'nature', 'halloween', etc.) |
| colorScheme       | 'light' \| 'dark' | 'light'                        | Color scheme preference                             |
| blockSize         | number            | 12                             | Size of contribution blocks in pixels               |
| blockMargin       | number            | 2                              | Margin between blocks in pixels                     |
| fontSize          | number            | 14                             | Font size for labels                                |
| hideColorLegend   | boolean           | false                          | Hide the color legend                               |
| hideMonthLabels   | boolean           | false                          | Hide month labels                                   |
| hideWeekdayLabels | boolean           | false                          | Hide weekday labels                                 |
| hideTotalCount    | boolean           | false                          | Hide total contribution count                       |
| years             | number[]          | [current year, last year, ...] | Years to display                                    |
| onDayClick        | function          | -                              | Callback when a day is clicked                      |
| renderDay         | function          | -                              | Custom render function for days                     |
| renderDetails     | function          | -                              | Custom render function for details                  |

## Themes

The component comes with several built-in themes:

- classic
- nature
- halloween
- galaxy
- and more...

You can also create custom themes by providing a theme object.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT