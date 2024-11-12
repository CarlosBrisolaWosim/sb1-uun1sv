import React, { useState } from 'react';
import { User, Bell, Calendar, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4">
                  <User className="w-full h-full p-4 text-gray-600" />
                </div>
                <h2 className="text-xl font-semibold">João Silva</h2>
                <p className="text-gray-600">Eletricista</p>
              </div>

              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  <User className="h-5 w-5" />
                  <span>Perfil</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  <Bell className="h-5 w-5" />
                  <span>Notificações</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  <Calendar className="h-5 w-5" />
                  <span>Agenda</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  <Settings className="h-5 w-5" />
                  <span>Configurações</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 rounded-lg hover:bg-red-50">
                  <LogOut className="h-5 w-5" />
                  <span>Sair</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Status Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Status de Disponibilidade</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isAvailable}
                    onChange={() => setIsAvailable(!isAvailable)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {isAvailable ? 'Disponível' : 'Indisponível'}
                  </span>
                </label>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-lg font-semibold mb-2">Serviços Realizados</h4>
                <p className="text-3xl font-bold text-blue-600">127</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-lg font-semibold mb-2">Avaliação Média</h4>
                <p className="text-3xl font-bold text-blue-600">4.8</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-lg font-semibold mb-2">Ganhos do Mês</h4>
                <p className="text-3xl font-bold text-blue-600">R$ 3.450</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Atividades Recentes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Instalação Elétrica</p>
                    <p className="text-sm text-gray-600">Maria Santos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Hoje, 14:30</p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                      Concluído
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Manutenção Preventiva</p>
                    <p className="text-sm text-gray-600">Carlos Oliveira</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Ontem, 10:15</p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                      Agendado
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Reparo de Tomadas</p>
                    <p className="text-sm text-gray-600">Ana Lima</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">22/03/2024</p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">
                      Pendente
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;