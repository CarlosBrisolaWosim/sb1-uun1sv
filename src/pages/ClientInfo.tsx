import React from 'react';
import { Smartphone, Search, Calendar, MessageSquare, Star, Shield } from 'lucide-react';

const ClientInfo = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Como Funciona o ServiçosJá
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontrar o profissional ideal nunca foi tão fácil. Siga os passos abaixo e
              tenha acesso aos melhores prestadores de serviço da sua região.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Busque o Serviço</h3>
              <p className="text-gray-600">
                Digite o tipo de serviço que você precisa e encontre profissionais qualificados
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Agende o Serviço</h3>
              <p className="text-gray-600">
                Escolha o profissional e agende o serviço no horário mais conveniente
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Avalie o Serviço</h3>
              <p className="text-gray-600">
                Após a conclusão, avalie o profissional e ajude outros usuários
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Principais Funcionalidades
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Busca Inteligente</h3>
                    <p className="text-gray-600">
                      Encontre profissionais baseado em localização, avaliações e disponibilidade
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Chat Integrado</h3>
                    <p className="text-gray-600">
                      Comunique-se diretamente com os profissionais através do nosso chat
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
                    <p className="text-gray-600">
                      Todos os profissionais são verificados e avaliados pela comunidade
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="App Interface"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
                <Smartphone className="h-8 w-8 mb-2" />
                <p className="text-lg font-semibold">
                  Disponível para
                  <br />
                  iOS e Android
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Dicas para o Melhor Uso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Verifique as Avaliações</h3>
              <p className="text-gray-600">
                Sempre leia as avaliações e comentários de outros clientes antes de contratar
                um profissional
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Compare Orçamentos</h3>
              <p className="text-gray-600">
                Solicite orçamentos de diferentes profissionais para encontrar o melhor
                custo-benefício
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Seja Específico</h3>
              <p className="text-gray-600">
                Descreva detalhadamente o serviço que você precisa para receber propostas mais
                precisas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Como garantir a qualidade do serviço?
              </h3>
              <p className="text-gray-600">
                Todos os profissionais passam por uma verificação rigorosa e são avaliados
                constantemente pelos clientes. Além disso, oferecemos garantia em todos os
                serviços.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Qual é o custo para usar a plataforma?
              </h3>
              <p className="text-gray-600">
                O uso da plataforma é totalmente gratuito para clientes. Você só paga pelo
                serviço contratado diretamente ao profissional.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Como funciona o pagamento?
              </h3>
              <p className="text-gray-600">
                O pagamento é feito diretamente ao profissional após a conclusão do serviço.
                Você pode combinar a forma de pagamento que preferir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientInfo;