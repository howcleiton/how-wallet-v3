import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Eye, UserCheck, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PrivacySettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [allowAnalytics, setAllowAnalytics] = useState(false);

  return (
    <MobileLayout>
      <SectionHeader title="Privacidade" onBack={() => navigate('/settings')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-4 p-4"
      >
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Eye size={20} className="text-[#B8A9C9]" />
            </div>
            <div>
              <div className="font-semibold text-base text-foreground">Coleta de Dados Anônimos</div>
              <div className="text-sm text-muted-foreground">Ajude-nos a melhorar o app.</div>
            </div>
          </div>
          <Switch
            checked={allowAnalytics}
            onCheckedChange={setAllowAnalytics}
            className="data-[state=checked]:bg-[#4C3F91] data-[state=unchecked]:bg-white/20"
          />
        </div>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => toast({ title: 'Gerenciar Consentimentos', description: 'Funcionalidade em desenvolvimento.' })}
          className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] p-4 rounded-2xl flex items-center justify-between transition-colors text-left"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <UserCheck size={20} className="text-[#B8A9C9]" />
            </div>
            <div>
              <div className="font-semibold text-base text-foreground">Gerenciar Consentimentos</div>
              <div className="text-sm text-muted-foreground">Controle suas permissões de dados.</div>
            </div>
          </div>
          <ChevronRight size={20} className="text-muted-foreground" />
        </motion.button>
      </motion.div>
    </MobileLayout>
  );
};

export default PrivacySettingsPage;
