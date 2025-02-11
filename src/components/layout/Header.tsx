import { useState } from 'react';
import { Search, Bell, Menu, Settings, Filter, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../theme/ThemeToggle';
import { SettingsMenu } from '../settings/SettingsMenu';
import { colors, componentStyles } from '../../styles/theme';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 ${colors.primary.bg} border-b ${colors.primary.border} shadow-sm z-50`}>
      <div className="max-w-7xl mx-auto px-4 h-20"> {/* Increased height */}
        <div className="flex items-center justify-between h-full">
          
            <div className="flex items-center mx-10"> {/* Added logo with margin */}
              <span 
              className={`text-2xl font-bold ${colors.primary.bg === 'bg-blue-500' ? 'text-white' : 'text-black'}`}
              >
              JATAYU
              </span>
            </div>
          
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
              className={`p-3 ${colors.primary.hover} rounded-full text-black transition-colors`} // Increased padding
            >
              <MessageSquare className="h-7 w-7" /> {/* Increased size */}
            </Link>
            
            <Link 
              to="/filter"
              className={`p-3 ${colors.primary.hover} rounded-full text-black transition-colors`} // Increased padding
              onClick={() => console.log('Filter logo clicked')} // Added click handler for debugging
            >
              <Filter className="h-7 w-7" /> {/* Increased size */}
            </Link>

            <button className={`p-3 ${colors.primary.hover} rounded-full text-black`}>
              <Bell className="h-7 w-7" /> {/* Increased size */}
            </button>
            
            <button 
              className={`p-3 ${colors.primary.hover} rounded-full text-black`}
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="h-7 w-7" /> {/* Increased size */}
            </button>
            
            <button className={`md:hidden p-3 ${colors.primary.hover} rounded-full text-black`}>
              <Menu className="h-7 w-7" /> {/* Increased size */}
            </button>

            <button className="w-10 h-10 rounded-full overflow-hidden"> {/* Increased size */}
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
