import React, { useState } from 'react';
import { Search, Bell, Menu, Settings, Filter, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { ThemeToggle } from '../theme/ThemeToggle';
import { SettingsMenu } from '../settings/SettingsMenu';
import { colors, componentStyles } from '../../styles/theme';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 ${colors.primary.bg} border-b ${colors.primary.border} shadow-sm z-50`}>
      <div className="max-w-7xl mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <Logo />
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search"
                className={componentStyles.input}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link 
              to="/chat"
              className={`p-2 ${colors.primary.hover} rounded-full text-black transition-colors`}
            >
              <MessageSquare className="h-6 w-6" />
            </Link>
            
            <Link 
              to="/filter"
              className={`p-2 ${colors.primary.hover} rounded-full text-black transition-colors`}
            >
              <Filter className="h-6 w-6" />
            </Link>

            <button className={`p-2 ${colors.primary.hover} rounded-full text-black`}>
              <Bell className="h-6 w-6" />
            </button>
            
            <button 
              className={`p-2 ${colors.primary.hover} rounded-full text-black`}
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="h-6 w-6" />
            </button>
            
            <button className={`md:hidden p-2 ${colors.primary.hover} rounded-full text-black`}>
              <Menu className="h-6 w-6" />
            </button>

            <button className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
      
      {showSettings && <SettingsMenu />}
    </header>
  );
}
