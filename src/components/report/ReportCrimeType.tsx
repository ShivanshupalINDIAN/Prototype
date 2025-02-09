import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ReportCrimeTypeProps {
  selectedCrime: string;
  onSelect: (crime: string) => void;
  onNext: () => void;
}

const CRIME_CATEGORIES = [
  {
    title: 'Cyberbullying & Online Harassment',
    types: [
      'Trolling – Posting offensive or provocative comments',
      'Hate Speech – Spreading hate based on protected characteristics',
      'Doxxing – Publishing private information without consent',
      'Impersonation – Creating fake profiles for defamation'
    ]
  },
  {
    title: 'Online Scams & Fraud',
    types: [
      'Phishing Attacks – Fraudulent messages for credentials',
      'Lottery & Investment Scams – Fake reward schemes',
      'Job Scams – Fake job offers requesting money',
      'Romance Scams – Fraudulent relationships for manipulation'
    ]
  },
  {
    title: 'Identity Theft & Fake Profiles',
    types: [
      'Fake Accounts – Fraudulent profiles for scams',
      'Catfishing – Identity deception',
      'Account Hacking – Unauthorized access'
    ]
  },
  {
    title: 'Misinformation & Fake News',
    types: [
      'Deepfake Content – AI-generated defamation',
      'Manipulated News – False information spread',
      'Fake Reviews & Ratings – Reputation manipulation'
    ]
  },
  {
    title: 'Cyberstalking & Sextortion',
    types: [
      'Continuous Digital Surveillance',
      'Threats & Intimidation',
      'Sextortion – Intimate content blackmail'
    ]
  },
  {
    title: 'Child Exploitation & Grooming',
    types: [
      'Online Grooming – Predatory behavior',
      'Child Pornography – Illegal minor content'
    ]
  },
  {
    title: 'Drug & Human Trafficking',
    types: [
      'Illegal Transactions – Drugs/weapons sales',
      'Trafficking Networks – Social media exploitation'
    ]
  }
];

export function ReportCrimeType({ selectedCrime, onSelect, onNext }: ReportCrimeTypeProps) {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <p className="text-red-600 dark:text-red-400">
          If you're reporting a crime that poses immediate danger, please contact your local law enforcement immediately.
        </p>
      </div>

      <div className="space-y-4">
        {CRIME_CATEGORIES.map((category) => (
          <div key={category.title} className="border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-semibold p-4 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
              {category.title}
            </h3>
            <div className="p-4 space-y-2">
              {category.types.map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="crimeType"
                    value={type}
                    checked={selectedCrime === type}
                    onChange={(e) => onSelect(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!selectedCrime}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}