import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '@/assets/lottie/welcome-animation.json'; // renomeie seu arquivo para welcome-animation.json

const WelcomePage = () => {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1F1F1F] text-white px-6 py-8">

      {/* Animação Lottie */}
      <div className="w-64 h-64 mb-6">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Título */}
      <h1 className="text-[30px] font-bold mb-2 font-[Inter]">Bem-vindo à How</h1>

      {/* Subtítulo */}
      <p className="text-center text-[18px] font-medium text-gray-400 mb-8 font-[Inter]">
        Sua carteira de criptomoedas segura e fácil de usar.
      </p>

      {/* Checkbox */}
      <label className="flex items-center space-x-2 text-[18px] font-bold text-white mb-6 font-[Inter] cursor-pointer">
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

      {/* Botão Começar */}
      <button
        onClick={() => navigate('/create-option')}
        disabled={!acceptedTerms}
        className={`w-full max-w-xs text-[18px] font-bold font-[Inter] py-3 rounded-xl mb-4 transition ${acceptedTerms
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
        className={`w-full max-w-xs text-[18px] font-bold font-[Inter] py-3 rounded-xl border transition ${acceptedTerms
          ? 'border-white text-white hover:text-gray-300 hover:border-gray-300'
          : 'border-gray-500 bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
      >
        Importar Carteira Existente
      </button>
    </div>
  );
};

export default WelcomePage;
