import React, { useCallback } from 'react';
import { Upload, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ReportEvidenceProps {
  evidence: File[];
  onEvidenceChange: (files: File[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ReportEvidence({
  evidence,
  onEvidenceChange,
  onNext,
  onBack
}: ReportEvidenceProps) {
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        onEvidenceChange([...evidence, ...Array.from(e.target.files)]);
      }
    },
    [evidence, onEvidenceChange]
  );

  const removeFile = (index: number) => {
    onEvidenceChange(evidence.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Evidence Collection</h3>
        
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>Please provide any relevant evidence such as:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Screenshots of messages, emails, or social media posts</li>
            <li>Transaction details for financial fraud</li>
            <li>Email headers for phishing attempts</li>
            <li>Server or access logs</li>
            <li>Any other relevant digital evidence</li>
          </ul>
        </div>

        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
          <input
            type="file"
            id="evidence-upload"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="evidence-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-center text-gray-600 dark:text-gray-400">
              Click to upload or drag and drop evidence files
            </p>
          </label>
        </div>

        {evidence.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Uploaded Evidence:</h4>
            <div className="space-y-2">
              {evidence.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
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
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Next Step
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}