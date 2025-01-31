// src/theme.js
export function toggleTheme() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }