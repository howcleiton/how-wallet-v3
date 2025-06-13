// src/components/layout/PageHeader.tsx

import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
    showBack?: boolean;
    onBack?: () => void;
}

const PageHeader = ({ showBack = false, onBack }: PageHeaderProps) => {
    return (
        <div className="w-full flex items-center justify-start h-[56px] px-4">
            {showBack && (
                <button
                    onClick={onBack}
                    className="text-[#D47EAE] p-2 flex items-center justify-center"
                >
                    <ArrowLeft size={28} />
                </button>
            )}
        </div>
    );
};

export default PageHeader;
