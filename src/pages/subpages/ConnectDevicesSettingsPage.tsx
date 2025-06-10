import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Link2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const ConnectDevicesSettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <MobileLayout>
      <SectionHeader title="Conectar Dispositivos" onBack={() => navigate('/settings')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-6 text-center p-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Sincronize sua Carteira</h2>
          <p className="text-muted-foreground">
            Acesse sua How Wallet em múltiplos dispositivos de forma segura.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="qr-code-container mx-auto max-w-[240px] p-4 bg-card border border-border rounded-xl"
        >
          <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mx-auto">
            <div className="grid grid-cols-10 gap-0.5">
              {Array.from({ length: 100 }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    Math.random() > 0.5 ? 'bg-foreground' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <p className="text-muted-foreground">
          Escaneie este QR Code com outro dispositivo para conectar sua carteira instantaneamente.
        </p>

        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-border"></div>
          <span className="flex-shrink mx-4 text-muted-foreground text-sm">OU</span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        <Button
          onClick={() =>
            toast({
              title: 'Conectar Manualmente',
              description: 'Funcionalidade em desenvolvimento.',
            })
          }
          className="w-full max-w-sm mx-auto h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-2xl flex items-center justify-center space-x-2"
        >
          <Link2 size={18} />
          <span>Conectar Manualmente</span>
        </Button>

        <p className="text-xs text-muted-foreground px-4">
          Para conectar manualmente, você precisará da sua seed phrase no novo dispositivo.
        </p>
      </motion.div>
    </MobileLayout>
  );
};

export default ConnectDevicesSettingsPage;
