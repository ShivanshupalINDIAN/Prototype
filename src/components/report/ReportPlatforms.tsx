import React from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';

interface ReportPlatformsProps {
  crimeType: string;
  onBack: () => void;
  onSubmit: () => void;
}

const REPORTING_PLATFORMS = [
  {
    name: 'National Cybercrime Portal',
    url: 'https://cybercrime.gov.in/',
    description: 'Official portal for reporting cybercrimes in India'
  },
  {
    name: 'FBI Internet Crime Complaint Center (IC3)',
    url: 'https://www.ic3.gov/',
    description: 'For reporting internet crimes in the United States'
  },
  {
    name: 'Europol Cybercrime',
    url: 'https://www.europol.europa.eu/report-a-crime',
    description: 'European Union\'s cybercrime reporting platform'
  }
];

const SOCIAL_PLATFORMS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/help/report',
    description: 'Report abuse, fake accounts, or harmful content'
  },
  {
    name: 'Twitter',
    url: 'https://help.twitter.com/forms',
    description: 'Report violations of Twitter Rules'
  },
  {
    name: 'Instagram',
    url: 'https://help.instagram.com/contact/383679321740945',
    description: 'Report inappropriate content or behavior'
  }
];

export function ReportPlatforms({ crimeType, onBack, onSubmit }: ReportPlatformsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Reporting Platforms</h3>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="text-yellow-600 dark:text-yellow-400">
            We recommend reporting the incident to relevant authorities and platforms for proper investigation.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Official Cybercrime Portals</h4>
            <div className="grid gap-4">
              {REPORTING_PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <div>
                    <h5 className="font-medium">{platform.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Social Media Platforms</h4>
            <div className="grid gap-4">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <div>
                    <h5 className="font-medium">{platform.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Report
        </button>
      </div>
    </div>
  );
}