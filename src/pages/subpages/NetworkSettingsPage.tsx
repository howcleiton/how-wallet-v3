import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Globe2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useWalletStore } from '@/store/walletStore';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NetworkSettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentWallet, changeNetwork } = useWalletStore();
  const [selectedNetwork, setSelectedNetwork] = useState<'mainnet' | 'devnet' | 'testnet'>(currentWallet?.network || 'mainnet');

  const networks = [
    { id: 'mainnet', name: 'Mainnet', description: 'Rede principal para transações reais.' },
    { id: 'testnet', name: 'Testnet', description: 'Rede de testes para desenvolvedores.' },
    { id: 'devnet', name: 'Devnet', description: 'Rede de desenvolvimento com fundos de teste.' },
  ];

  const handleNetworkChange = (value: 'mainnet' | 'devnet' | 'testnet') => {
    setSelectedNetwork(value);

    // Só chama changeNetwork se for uma rede válida para sua carteira:
    if (value === 'mainnet' || value === 'devnet') {
      changeNetwork(value);
    }

    toast({
      title: 'Rede Alterada',
      description: `Você agora está conectado à ${networks.find(n => n.id === value)?.name}.`,
    });
  };

  return (
    <MobileLayout>
      <SectionHeader title="Rede" onBack={() => navigate('/settings')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="p-4"
      >
        <div className="mb-6 p-4 bg-card border border-border rounded-2xl flex items-center space-x-3">
          <Globe2 size={24} className="text-[#B8A9C9]" />
          <div>
            <h3 className="font-semibold text-lg text-foreground">Selecionar Rede</h3>
            <p className="text-sm text-muted-foreground">Escolha a rede blockchain para interagir.</p>
          </div>
        </div>

        <RadioGroup
          value={selectedNetwork}
          onValueChange={handleNetworkChange}
          className="space-y-3"
        >
          {networks.map((network, index) => (
            <motion.div
              key={network.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
            >
              <Label
                htmlFor={network.id}
                className={`w-full bg-[rgba(255,255,255,0.03)] border ${
                  selectedNetwork === network.id
                    ? 'border-[#7F5283]'
                    : 'border-[rgba(255,255,255,0.08)]'
                } p-4 rounded-2xl flex items-center justify-between transition-all cursor-pointer hover:bg-[rgba(255,255,255,0.06)]`}
              >
                <div className="flex items-center space-x-4">
                  <RadioGroupItem
                    value={network.id}
                    id={network.id}
                    className="border-white/50 data-[state=checked]:border-[#7F5283] data-[state=checked]:text-[#B8A9C9]"
                  />
                  <div>
                    <div className="font-semibold text-base text-foreground">
                      {network.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {network.description}
                    </div>
                  </div>
                </div>
                {selectedNetwork === network.id && (
                  <CheckCircle size={20} className="text-[#B8A9C9]" />
                )}
              </Label>
            </motion.div>
          ))}
        </RadioGroup>
      </motion.div>
    </MobileLayout>
  );
};

export default NetworkSettingsPage;
