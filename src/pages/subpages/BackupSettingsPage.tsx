import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Download, FileJson, ShieldAlert } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useWalletStore } from '@/store/walletStore';
import { motion } from 'framer-motion';

const BackupSettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentWallet } = useWalletStore();

  const handleExportData = () => {
    if (!currentWallet) return;

    const dataStr = JSON.stringify(
      {
        walletType: 'HowWallet',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        walletData: {
          tokens: currentWallet.tokens,
          seedIdentifier: currentWallet.seedPhrase
            ? currentWallet.seedPhrase.slice(0, 5).join(' ') + ' ... ' + currentWallet.seedPhrase.slice(-5).join(' ')
            : 'N/A',
        },
      },
      null,
      2
    );

    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'how_wallet_backup.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    toast({
      title: 'Backup Exportado!',
      description: 'Seu arquivo de backup JSON foi baixado.',
    });
  };

  return (
    <MobileLayout>
      <SectionHeader title="Backup" onBack={() => navigate('/settings')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-6 text-center p-4"
      >
        <div>
          <FileJson size={48} className="mx-auto text-[#B8A9C9] mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Exportar Dados da Carteira</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Crie um backup dos dados da sua carteira. Este arquivo pode ser usado para restaurar informações, mas lembre-se que a seed phrase é a chave principal para seus fundos.
          </p>
        </div>

        <div className="bg-yellow-500/10 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 flex items-start space-x-3 text-left">
          <ShieldAlert size={32} className="text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-400 mb-1">Importante: Segurança do Backup</h3>
            <p className="text-sm text-muted-foreground">
              Guarde este arquivo de backup em um local seguro e criptografado. Não o compartilhe e certifique-se de que sua seed phrase também está segura.
            </p>
          </div>
        </div>

        <Button
          onClick={handleExportData}
          className="w-full max-w-sm mx-auto h-14 bg-primary hover:bg-primary/90 text-white font-semibold text-lg rounded-2xl flex items-center justify-center space-x-2"
        >
          <Download size={20} />
          <span>Exportar Dados (JSON)</span>
        </Button>

        <p className="text-xs text-muted-foreground px-4">
          Este backup é uma conveniência. A recuperação total da sua carteira depende da sua seed phrase.
        </p>
      </motion.div>
    </MobileLayout>
  );
};

export default BackupSettingsPage;