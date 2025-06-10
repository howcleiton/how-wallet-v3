import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Copy, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { useWalletStore } from '@/store/walletStore';
import { useState } from 'react';

const SeedPhraseSettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentWallet } = useWalletStore();
  const [showSeed, setShowSeed] = useState(false);

  const handleCopySeed = () => {
    if (!currentWallet?.seedPhrase) return;
    navigator.clipboard.writeText(currentWallet.seedPhrase.join(' '));
    toast({
      title: 'Seed Phrase Copiada!',
      description: 'Sua seed phrase foi copiada para a área de transferência.',
    });
  };

  return (
    <MobileLayout>
      <SectionHeader title="Seed Phrase" onBack={() => navigate('/settings')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-6 p-4"
      >
        {/* Alerta */}
        <div className="bg-destructive/10 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 flex items-start space-x-3">
          <AlertTriangle size={32} className="text-destructive mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-destructive mb-1">Atenção Máxima!</h3>
            <p className="text-sm text-muted-foreground">
              NUNCA compartilhe sua seed phrase com ninguém. Qualquer pessoa com acesso a ela pode roubar seus fundos. Guarde-a em um local seguro e offline.
            </p>
          </div>
        </div>

        {/* Seed Phrase */}
        <div className="bg-card border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-foreground">Sua Frase de Recuperação</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSeed(!showSeed)}
              className="text-[#B8A9C9] hover:text-foreground flex items-center space-x-2 border border-[rgba(255,255,255,0.08)] rounded-2xl"
            >
              {showSeed ? <EyeOff size={18} /> : <Eye size={18} />}
              <span>{showSeed ? 'Ocultar' : 'Mostrar'}</span>
            </Button>
          </div>

          <div
            className={`grid grid-cols-2 gap-3 select-none ${
              !showSeed ? 'blur-md' : ''
            }`}
            style={{
              WebkitUserSelect: !showSeed ? 'none' : 'auto',
              userSelect: !showSeed ? 'none' : 'auto',
              pointerEvents: !showSeed ? 'none' : 'auto',
            }}
          >
            {showSeed && currentWallet?.seedPhrase
              ? currentWallet.seedPhrase.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="bg-muted border border-[rgba(255,255,255,0.08)] rounded-2xl p-3 flex items-center space-x-3"
                  >
                    <span className="text-sm text-muted-foreground w-6 text-center">
                      {index + 1}
                    </span>
                    <span className="text-base font-medium text-foreground flex-grow">
                      {word}
                    </span>
                  </motion.div>
                ))
              : Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className="bg-muted border border-[rgba(255,255,255,0.08)] rounded-2xl p-3 flex items-center space-x-3 h-[50px]"
                  >
                    <span className="text-sm text-muted-foreground w-6 text-center">
                      {index + 1}
                    </span>
                    <span className="text-base font-medium text-foreground flex-grow">
                      ••••••
                    </span>
                  </div>
                ))}
          </div>

          {!showSeed && (
            <p className="text-muted-foreground text-center py-4 text-sm">
              Clique em "Mostrar" para revelar sua frase de recuperação.
            </p>
          )}
        </div>

        {/* Botão Copiar */}
        <Button
          onClick={handleCopySeed}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-semibold text-lg rounded-2xl flex items-center justify-center space-x-2 transition-colors"
          disabled={!showSeed}
        >
          <Copy size={20} />
          <span>Copiar para área de transferência</span>
        </Button>

        <p className="text-xs text-muted-foreground text-center px-4">
          Anote estas palavras na ordem correta e guarde-as em um local seguro. Esta é a única forma de recuperar sua carteira.
        </p>
      </motion.div>
    </MobileLayout>
  );
};

export default SeedPhraseSettingsPage;