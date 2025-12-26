"use client";

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function DarkModeToggle() {
    const toggleDarkMode = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'false');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'true');
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="dark-mode-toggle"
            aria-label="Basculer le mode sombre"
        >
            <SunIcon className="dark-mode-toggle__icon dark-mode-toggle__icon--light" />
            <MoonIcon className="dark-mode-toggle__icon dark-mode-toggle__icon--dark" />
        </button>
    );
}



