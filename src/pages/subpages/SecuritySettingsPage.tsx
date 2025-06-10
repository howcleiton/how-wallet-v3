import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { ShieldCheck, Fingerprint, RotateCcw, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const SecuritySettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const securityOptions = [
    {
      icon: ShieldCheck,
      title: 'Alterar PIN',
      subtitle: 'Modifique seu PIN de acesso',
      action: () =>
        toast({
          title: 'Alterar PIN',
          description: 'Funcionalidade em desenvolvimento.',
        }),
    },
    {
      icon: Fingerprint,
      title: 'Ativar Biometria',
      subtitle: 'Use sua digital para acesso rápido',
      action: () =>
        toast({
          title: 'Ativar Biometria',
          description: 'Funcionalidade em desenvolvimento.',
        }),
    },
    {
      icon: RotateCcw,
      title: 'Fazer Backup',
      subtitle: 'Garanta a segurança dos seus fundos',
      action: () => navigate('/backup-settings'),
    },
  ];

  return (
    <MobileLayout>
      <SectionHeader title="Segurança" onBack={() => navigate('/settings')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-4 p-4"
      >
        {securityOptions.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
            whileTap={{ scale: 0.98 }}
            onClick={item.action}
            className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] p-4 rounded-2xl flex items-center justify-between transition-colors text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
                <item.icon size={20} className="text-[#B8A9C9]" />
              </div>
              <div>
                <div className="font-semibold text-base text-foreground">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.subtitle}</div>
              </div>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </motion.button>
        ))}
      </motion.div>
    </MobileLayout>
  );
};

export default SecuritySettingsPage;