import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import securityAnimation from '@/assets/lottie/security.json';
import { LockKeyhole, Fingerprint } from 'lucide-react';
import MobileLayout from '@/components/layout/MobileLayout';
import BasePageLayout from '@/components/layout/BasePageLayout';
import PageHeader from '@/components/layout/PageHeader';

const CreateOptionPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <MobileLayout>
      <PageHeader showBack onBack={handleBack} />
      <BasePageLayout>
        {/* Animação */}
        <div className="w-[257px] h-[263px]">
          <Lottie animationData={securityAnimation} loop={true} />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-6 text-center px-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <LockKeyhole size={20} color="#D47EAE" />
              <span className="text-[#D47EAE] text-[18px] font-bold">Segurança reforçada</span>
            </div>
            <p className="text-[18px] font-medium text-white">
              Sua carteira está guardada de forma segura e descentralizada com múltiplos fatores.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Fingerprint size={20} color="#D47EAE" />
              <span className="text-[#D47EAE] text-[18px] font-bold">Recuperação fácil</span>
            </div>
            <p className="text-[18px] font-medium text-white">
              Recupere sua carteira com seu e-mail e um PIN de 4 dígitos.
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col w-full max-w-[350px] mt-auto pb-[104px] gap-[13px]">
          <button
            onClick={() => navigate('/create-email')}
            className="text-white py-3 rounded-lg text-[18px] font-bold font-[Inter]"
            style={{
              background: 'linear-gradient(90deg, #D47EAE 0%, #168BC2 100%)',
            }}
          >
            Continuar com Email
          </button>

          <button
            onClick={() => navigate('/create-wallet')}
            className="text-white text-[18px] font-bold font-[Inter]"
          >
            Crie uma carteira
          </button>
        </div>

      </BasePageLayout>
    </MobileLayout>
  );
};

export default CreateOptionPage;
