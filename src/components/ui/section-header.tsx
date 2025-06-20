import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  showBackButton?: boolean;
  rightContent?: ReactNode;
  className?: string;
  onBack?: () => void; // ✅ adicionado para resolver o erro
}

const SectionHeader = ({
  title,
  showBackButton = false,
  rightContent,
  className,
  onBack, // ✅ pegando onBack nos props
}: SectionHeaderProps) => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'sticky top-0 z-30 flex items-center justify-between p-4 bg-background backdrop-blur-md',
        className
      )}
    >
      <div className="flex items-center">
        {(showBackButton || onBack) && ( // ✅ garantir que o botão aparece se onBack for passado
          <button
            onClick={onBack ?? (() => navigate(-1))}
            className="mr-2 p-2 rounded-full bg-[#1e1e2d]/80 hover:bg-[#2a2a3d] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-300" />
          </button>
        )}
        <h1 className="font-semibold text-xl text-foreground">{title}</h1>
      </div>

      {rightContent && <div>{rightContent}</div>}
    </motion.header>
  );
};

export default SectionHeader;
