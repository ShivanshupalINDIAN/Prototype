import React from 'react';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  idProof: File | null;
}

interface ReportPersonalInfoProps {
  personalInfo: PersonalInfo;
  onInfoChange: (info: PersonalInfo) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ReportPersonalInfo({
  personalInfo,
  onInfoChange,
  onNext,
  onBack
}: ReportPersonalInfoProps) {
  const handleIdProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onInfoChange({ ...personalInfo, idProof: e.target.files[0] });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="text-blue-600 dark:text-blue-400">
            Your information will be kept confidential and used only for official investigation purposes.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={personalInfo.name}
              onChange={(e) => onInfoChange({ ...personalInfo, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={personalInfo.email}
              onChange={(e) => onInfoChange({ ...personalInfo, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={personalInfo.phone}
              onChange={(e) => onInfoChange({ ...personalInfo, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">ID Proof</label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4">
              <input
                type="file"
                id="id-proof"
                onChange={handleIdProofChange}
                className="hidden"
                accept="image/*,.pdf"
              />
              <label
                htmlFor="id-proof"
                className="flex items-center justify-center gap-2 cursor-pointer"
              >
                <Upload className="w-5 h-5" />
                <span>Upload ID Proof</span>
              </label>
            </div>
            {personalInfo.idProof && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Uploaded: {personalInfo.idProof.name}
              </p>
            )}
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
          onClick={onNext}
          disabled={!personalInfo.name || !personalInfo.email || !personalInfo.phone}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}