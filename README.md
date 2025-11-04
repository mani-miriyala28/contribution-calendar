# GitHub Contribution Calendar

A beautiful, interactive GitHub contribution calendar component for React that displays real GitHub contribution data using the GitHub API.

[![npm version](https://badge.fury.io/js/gh-contribution-calendar.svg)](https://badge.fury.io/js/gh-contribution-calendar)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎯 **Real GitHub Data**: Fetches actual contribution data using GitHub's GraphQL API
- 🎨 **14+ Beautiful Themes**: Galaxy, Ocean, Forest, Sunset, and many more
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🖱️ **Interactive Tooltips**: Hover to see detailed contribution information
- 📅 **Year Selection**: View different years and time periods
- ⚡ **TypeScript Support**: Fully typed for better development experience
- 🎭 **Customizable**: Flexible props for different use cases
- 🚀 **Zero Dependencies**: Only requires React and date-fns

## 📦 Installation

```bash
npm install gh-contribution-calendar
```

```bash
yarn add gh-contribution-calendar
```

```bash
pnpm add gh-contribution-calendar
```

## 🚀 Quick Start

### Basic Usage

```tsx
import React from 'react';
import { GitHubContributionCalendar } from 'gh-contribution-calendar';

function App() {
  return (
    <GitHubContributionCalendar
      username="octocat"
      token="your-github-personal-access-token"
    />
  );
}

export default App;
```

### With Custom Styling

```tsx
import React from 'react';
import { GitHubContributionCalendar } from 'gh-contribution-calendar';

function App() {
  const handleLogout = () => {
    // Handle logout logic
    console.log('User logged out');
  };

  return (
    <div className="p-4">
      <GitHubContributionCalendar
        username="octocat"
        token="your-github-personal-access-token"
        onLogout={handleLogout}
        showHeader={true}
        defaultTheme="ocean"
        className="max-w-6xl mx-auto"
      />
    </div>
  );
}

export default App;
```

## 🔧 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `username` | `string` | ✅ | - | GitHub username to fetch contributions for |
| `token` | `string` | ✅ | - | GitHub Personal Access Token |
| `onLogout` | `() => void` | ❌ | `undefined` | Callback function when logout button is clicked |
| `showHeader` | `boolean` | ❌ | `true` | Whether to show the header with user info |
| `className` | `string` | ❌ | `""` | Additional CSS classes for styling |
| `defaultTheme` | `ThemeName` | ❌ | `"galaxy"` | Default theme to use |

## 🎨 Available Themes

- `galaxy` - Purple and blue gradient
- `ocean` - Blue oceanic theme
- `forest` - Green forest theme
- `sunset` - Orange and red sunset
- `arctic` - Cool blue and white
- `neon` - Bright neon colors
- `vintage` - Retro brown and beige
- `monochrome` - Black and white
- `cherry` - Pink cherry blossom
- `ember` - Warm orange and red
- `lavender` - Soft purple tones
- `mint` - Fresh mint green
- `coral` - Coral reef colors
- `midnight` - Dark blue midnight

## 🔑 GitHub Personal Access Token

To use this component, you need a GitHub Personal Access Token with the following scopes:

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select the following scopes:
   - `read:user` - Read user profile data
   - `repo` (or `public_repo` for public repos only) - Access repository data

⚠️ **Security Note**: Never expose your GitHub token in client-side code in production. Consider implementing a backend proxy for token management.

## 📋 TypeScript Support

The package includes full TypeScript definitions:

```tsx
import React from 'react';
import { 
  GitHubContributionCalendar, 
  ThemeName, 
  Contribution,
  themes 
} from 'gh-contribution-calendar';

interface Props {
  username: string;
  token: string;
}

const MyComponent: React.FC<Props> = ({ username, token }) => {
  const handleThemeChange = (theme: ThemeName) => {
    console.log('Theme changed to:', theme);
  };

  return (
    <GitHubContributionCalendar
      username={username}
      token={token}
      defaultTheme="ocean"
    />
  );
};
```

## 🎯 Advanced Usage

### Using with State Management

```tsx
import React, { useState } from 'react';
import { GitHubContributionCalendar } from 'gh-contribution-calendar';

function Dashboard() {
  const [currentUser, setCurrentUser] = useState({
    username: 'octocat',
    token: 'your-token'
  });

  const handleUserChange = (username: string, token: string) => {
    setCurrentUser({ username, token });
  };

  const handleLogout = () => {
    setCurrentUser({ username: '', token: '' });
    // Redirect to login page
  };

  if (!currentUser.username || !currentUser.token) {
    return <LoginComponent onLogin={handleUserChange} />;
  }

  return (
    <GitHubContributionCalendar
      username={currentUser.username}
      token={currentUser.token}
      onLogout={handleLogout}
      showHeader={true}
      defaultTheme="galaxy"
    />
  );
}
```

### Custom Styling with Tailwind CSS

```tsx
import React from 'react';
import { GitHubContributionCalendar } from 'gh-contribution-calendar';

function StyledCalendar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          My GitHub Contributions
        </h1>
        <GitHubContributionCalendar
          username="your-username"
          token="your-token"
          className="shadow-2xl rounded-xl overflow-hidden"
          defaultTheme="ocean"
        />
      </div>
    </div>
  );
}
```

## 🔧 Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/mani-miriyala28/contribution-calendar.git
cd contribution-calendar

# Install dependencies
npm install

# Build the library
npm run build

# Run development server
npm run dev
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you find this package helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation

## 📧 Contact

**Mani Babu**
- GitHub: [@mani-miriyala28](https://github.com/mani-miriyala28)
- Email: your-email@example.com

---

Made with ❤️ by [Mani Babu](https://github.com/mani-miriyala28)