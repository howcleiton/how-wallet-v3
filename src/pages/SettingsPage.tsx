import { useNavigate } from 'react-router-dom';
import { useWalletStore } from '@/store/walletStore';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Shield,
  Key,
  Bell,
  Globe,
  Eye,
  Smartphone,
  Download as DownloadIcon,
  HelpCircle,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { formatAddress } from '@/lib/utils';

const SettingsPage = () => {
  const { currentWallet } = useWalletStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!currentWallet) return null;

  const handleLogout = () => {
    toast({
      title: 'Logout realizado',
      description: 'Você foi desconectado da carteira.',
    });
    navigate('/welcome');
  };

  const settingsItems = [
    {
      icon: Shield,
      title: 'Segurança',
      subtitle: 'PIN, biometria e backup',
      action: () => navigate('/security-settings'),
    },
    {
      icon: Key,
      title: 'Seed Phrase',
      subtitle: 'Visualizar e fazer backup',
      action: () => navigate('/seedphrase-settings'),
    },
    {
      icon: Bell,
      title: 'Notificações',
      subtitle: 'Alertas de transações',
      action: () => navigate('/notifications-settings'),
    },
    {
      icon: Globe,
      title: 'Rede',
      subtitle: currentWallet.network === 'mainnet' ? 'Mainnet' : 'Devnet',
      action: () => {
        const newNetwork = currentWallet.network === 'mainnet' ? 'devnet' : 'mainnet';
        useWalletStore.getState().changeNetwork(newNetwork);
        toast({
          title: 'Network Changed',
          description: `Switched to ${newNetwork}`,
        });
      },
    },
    {
      icon: Eye,
      title: 'Privacidade',
      subtitle: 'Controle de dados',
      action: () => navigate('/privacy-settings'),
    },
    {
      icon: Smartphone,
      title: 'Conectar Dispositivos',
      subtitle: 'Sincronizar carteiras',
      action: () => navigate('/connect-devices-settings'),
    },
    {
      icon: DownloadIcon,
      title: 'Backup',
      subtitle: 'Exportar dados',
      action: () => navigate('/backup-settings'),
    },
    {
      icon: HelpCircle,
      title: 'Ajuda e Suporte',
      subtitle: 'FAQ e contato',
      action: () => navigate('/help-support-settings'),
    },
  ];

  return (
    <MobileLayout>
      <SectionHeader title="Configurações" />

      <div className="p-4">
        {/* Card da Wallet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-gradient-to-r from-[#3A1C71] to-[#7F5283] rounded-2xl p-6 mb-6 border border-[rgba(255,255,255,0.08)]"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
              <span className="text-2xl font-bold text-white">H</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">How Wallet</h2>
              <p className="text-white/80 text-sm font-mono">
                {formatAddress(currentWallet.address)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lista de Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-3 mb-6"
        >
          {settingsItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
              whileTap={{ scale: 0.98 }}
              onClick={item.action}
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] p-4 rounded-2xl flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
                  <item.icon size={20} className="text-[#B8A9C9]" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-base text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </motion.button>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="text-center mb-6 text-xs text-muted-foreground">
          <p>How Wallet v1.0.0</p>
          <p className="mt-1">Wallet Address: {formatAddress(currentWallet.address)}</p>
        </div>

        {/* Botão Logout */}
        <Button
          onClick={handleLogout}
          className="w-full h-14 bg-destructive hover:bg-destructive/90 text-white font-semibold text-base rounded-2xl flex items-center justify-center space-x-2 transition-colors border border-[rgba(255,255,255,0.08)]"
        >
          <LogOut size={20} />
          <span>Sair da Carteira</span>
        </Button>
      </div>
    </MobileLayout>
  );
};

export default SettingsPage;