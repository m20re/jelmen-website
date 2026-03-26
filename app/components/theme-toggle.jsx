'use client';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle({
  className = 'inline-flex justify-center items-center w-8 h-8 cursor-pointer',
}) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      className={className}
      aria-label="Toggle theme"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faSun} style={{ color: '#808080' }} />
    </button>
  );
}
