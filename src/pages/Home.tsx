import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Clock, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Encontre os Melhores Profissionais
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Conectamos você aos serviços mais qualificados da sua região
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="text"
                  placeholder="Qual serviço você precisa?"
                  className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher o ServiçosJá?
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos a melhor experiência para encontrar profissionais qualificados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Profissionais Verificados</h3>
              <p className="text-gray-600">
                Todos os prestadores são cuidadosamente avaliados e verificados
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápido e Eficiente</h3>
              <p className="text-gray-600">
                Encontre o profissional ideal em questão de minutos
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Avaliações Reais</h3>
              <p className="text-gray-600">
                Feedback genuíno de clientes que utilizaram os serviços
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  É um profissional qualificado?
                </h2>
                <p className="text-gray-600 mb-6">
                  Junte-se à nossa plataforma e expanda seus negócios. Oferecemos diferentes planos
                  para atender às suas necessidades.
                </p>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Cadastre-se Agora
                </Link>
              </div>
              <div
                className="h-64 md:h-auto bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;