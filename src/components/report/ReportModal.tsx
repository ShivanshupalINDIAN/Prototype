import React, { useState } from 'react';
import { X, AlertTriangle, Upload, Shield, ChevronRight } from 'lucide-react';
import { ReportCrimeType } from './ReportCrimeType';
import { ReportEvidence } from './ReportEvidence';
import { ReportPersonalInfo } from './ReportPersonalInfo';
import { ReportPlatforms } from './ReportPlatforms';

type Step = 'type' | 'evidence' | 'personal' | 'platforms';

export function ReportModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>('type');
  const [selectedCrime, setSelectedCrime] = useState<string>('');
  const [evidence, setEvidence] = useState<File[]>([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    idProof: null as File | null
  });

  const renderStep = () => {
    switch (step) {
      case 'type':
        return (
          <ReportCrimeType
            selectedCrime={selectedCrime}
            onSelect={setSelectedCrime}
            onNext={() => setStep('evidence')}
          />
        );
      case 'evidence':
        return (
          <ReportEvidence
            evidence={evidence}
            onEvidenceChange={setEvidence}
            onNext={() => setStep('personal')}
            onBack={() => setStep('type')}
          />
        );
      case 'personal':
        return (
          <ReportPersonalInfo
            personalInfo={personalInfo}
            onInfoChange={setPersonalInfo}
            onNext={() => setStep('platforms')}
            onBack={() => setStep('evidence')}
          />
        );
      case 'platforms':
        return (
          <ReportPlatforms
            crimeType={selectedCrime}
            onBack={() => setStep('personal')}
            onSubmit={() => {
              // Handle report submission
              console.log({
                crimeType: selectedCrime,
                evidence,
                personalInfo
              });
              onClose();
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-500" />
            <h2 className="text-xl font-bold">Report Digital Crime</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}