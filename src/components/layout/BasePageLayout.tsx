// src/components/layout/BasePageLayout.tsx

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BasePageLayoutProps {
    children: ReactNode;
    className?: string;
}

/**
 * BasePageLayout:
 * → Alinha consistentemente o conteúdo das páginas:
 * - Padding top fixo para alinhar animação no mesmo topo
 * - Gap fixo entre elementos
 * - Padding bottom fixo para que os botões fiquem na mesma base
 */
const BasePageLayout = ({ children, className }: BasePageLayoutProps) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center w-full pt-12 pb-10 gap-6',
                className
            )}
        >
            {children}
        </div>
    );
};

export default BasePageLayout;
