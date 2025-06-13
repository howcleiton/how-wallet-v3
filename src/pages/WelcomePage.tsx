import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '@/assets/lottie/welcome-animation.json';
import MobileLayout from '@/components/layout/MobileLayout';
import BasePageLayout from '@/components/layout/BasePageLayout';
import PageHeader from '@/components/layout/PageHeader';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <MobileLayout>
      <PageHeader />
      <BasePageLayout>
        {/* Animação */}
        <div className="w-[289px] h-[296px]">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Título */}
        <h1 className="text-[30px] font-bold font-[Inter] text-center">Bem-vindo à How</h1>

        {/* Subtítulo */}
        <p className="text-center text-[18px] font-medium text-gray-400 font-[Inter]">
          Sua carteira de criptomoedas segura e fácil de usar.
        </p>

        {/* Checkbox */}
        <label className="flex items-center space-x-2 text-[18px] font-bold text-white font-[Inter] cursor-pointer">
          <input
            type="checkbox"
            className="appearance-none w-5 h-5 rounded-full border-2 border-white checked:bg-[#d47eae] checked:border-[#d47eae] transition-all cursor-pointer"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />

          <span>
            Aceito os{' '}
            <a href="/termos" className="text-[#d47eae] underline">
              termos de serviço
            </a>
          </span>
        </label>

        {/* Botões */}
        <div className="flex flex-col gap-4 w-full max-w-[350px]">
          {/* Botão Começar */}
          <button
            onClick={() => navigate('/create-option')}
            disabled={!acceptedTerms}
            className={`w-full text-[18px] font-bold font-[Inter] py-3 rounded-xl transition ${acceptedTerms
              ? 'bg-gradient-to-r from-[#d47eae] to-[#168bc2] text-white hover:opacity-90'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
          >
            Começar
          </button>

          {/* Botão Importar */}
          <button
            onClick={() => navigate('/import-wallet')}
            disabled={!acceptedTerms}
            className={`w-full text-[18px] font-bold font-[Inter] py-3 rounded-xl border transition ${acceptedTerms
              ? 'border-white text-white hover:text-gray-300 hover:border-gray-300'
              : 'border-gray-500 bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
          >
            Importar Carteira Existente
          </button>
        </div>
      </BasePageLayout>
    </MobileLayout>
  );
};

export default WelcomePage;
