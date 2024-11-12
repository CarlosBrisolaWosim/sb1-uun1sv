import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Register = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 49,90',
      features: [
        'Perfil básico na plataforma',
        'Até 10 serviços por mês',
        'Suporte por email',
        'Avaliações de clientes',
      ],
      recommended: false,
    },
    {
      name: 'Profissional',
      price: 'R$ 99,90',
      features: [
        'Perfil destacado na plataforma',
        'Serviços ilimitados',
        'Suporte prioritário',
        'Avaliações de clientes',
        'Relatórios mensais',
        'Certificado de verificação',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: 'R$ 199,90',
      features: [
        'Perfil premium na plataforma',
        'Serviços ilimitados',
        'Suporte 24/7',
        'Avaliações de clientes',
        'Relatórios detalhados',
        'Certificado de verificação',
        'Marketing personalizado',
        'Área exclusiva',
      ],
      recommended: false,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal para Você
          </h1>
          <p className="text-xl text-gray-600">
            Comece a expandir seus negócios hoje mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform ${
                plan.recommended ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-blue-500 text-white text-center py-2">
                  <p className="text-sm font-semibold">Mais Popular</p>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-gray-900 mb-6">
                  {plan.price}
                  <span className="text-lg text-gray-600">/mês</span>
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulário de Cadastro</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Área de Atuação
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Selecione uma área</option>
                <option>Eletricista</option>
                <option>Encanador</option>
                <option>Pintor</option>
                <option>Pedreiro</option>
                <option>Jardineiro</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição dos Serviços
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Enviar Cadastro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;