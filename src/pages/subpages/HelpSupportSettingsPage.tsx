import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { HelpCircle, BookOpen, Mail, MessageSquare, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const HelpSupportSettingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const supportOptions = [
    {
      icon: BookOpen,
      title: 'FAQ - Perguntas Frequentes',
      subtitle: 'Encontre respostas rápidas para suas dúvidas.',
      action: () => toast({ title: 'FAQ', description: 'Funcionalidade em desenvolvimento.' }),
    },
    {
      icon: Mail,
      title: 'Suporte por E-mail',
      subtitle: 'Envie-nos uma mensagem para suporte.',
      action: () => toast({ title: 'Suporte por E-mail', description: 'Funcionalidade em desenvolvimento.' }),
    },
    {
      icon: MessageSquare,
      title: 'Comunidade',
      subtitle: 'Junte-se à nossa comunidade para discutir e obter ajuda.',
      action: () => toast({ title: 'Comunidade', description: 'Funcionalidade em desenvolvimento.' }),
    },
  ];

  return (
    <MobileLayout>
      <SectionHeader title="Ajuda e Suporte" onBack={() => navigate('/settings')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-4 p-4"
      >
        <div className="text-center mb-8">
          <HelpCircle size={48} className="mx-auto text-[#B8A9C9] mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Precisa de Ajuda?</h2>
          <p className="text-muted-foreground">
            Estamos aqui para ajudar! Confira nossos recursos de suporte.
          </p>
        </div>

        {supportOptions.map((item, index) => (
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
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
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

export default HelpSupportSettingsPage;
