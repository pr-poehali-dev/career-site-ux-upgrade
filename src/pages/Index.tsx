import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Отклик отправлен!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', resume: '', message: '' });
  };

  const benefits = [
    { icon: 'Wallet', title: 'Конкурентная зарплата', desc: 'От 250 000 ₽' },
    { icon: 'Home', title: 'Гибридный формат', desc: 'Офис или удаленка' },
    { icon: 'GraduationCap', title: 'Обучение', desc: 'Курсы и конференции' },
    { icon: 'Heart', title: 'ДМС', desc: 'Премиум страховка' },
    { icon: 'Calendar', title: 'Отпуск 28 дней', desc: 'Оплачиваемый отдых' },
    { icon: 'Zap', title: 'Быстрый рост', desc: 'Карьерное развитие' }
  ];

  const requirements = [
    'Опыт разработки на Python/Go/Java от 3 лет',
    'Знание микросервисной архитектуры',
    'Опыт работы с PostgreSQL, Redis, Kafka',
    'Понимание CI/CD процессов',
    'Английский язык на уровне B2+'
  ];

  const responsibilities = [
    'Разработка и поддержка высоконагруженных сервисов',
    'Проектирование архитектуры новых модулей',
    'Code review и менторство junior-разработчиков',
    'Участие в технических митингах и планировании',
    'Оптимизация производительности существующих систем'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667EEA] via-[#764BA2] to-[#4FA3FE]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div className="text-white/90 font-display text-2xl font-bold flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Code" className="text-white" size={24} />
              </div>
              HUD IT
            </div>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 px-4 py-2 text-sm">
              Карьера
            </Badge>
          </div>

          <div className="glass-effect rounded-3xl p-8 md:p-12 animate-scale-in">
            <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
              <div className="flex-1 min-w-[300px]">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Senior Software Engineer
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Присоединяйся к команде инноваций
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    Москва / Remote
                  </Badge>
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    <Icon name="Briefcase" size={14} className="mr-1" />
                    Full-time
                  </Badge>
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    <Icon name="Users" size={14} className="mr-1" />
                    Backend Team
                  </Badge>
                </div>
              </div>
              <Button 
                size="lg" 
                className="gradient-primary text-white rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform shadow-xl"
                onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Откликнуться
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-effect border-white/30 shadow-xl rounded-3xl overflow-hidden animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl gradient-secondary flex items-center justify-center">
                    <Icon name="Target" className="text-white" size={24} />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gray-900">Обязанности</h2>
                </div>
                <ul className="space-y-4">
                  {responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#667EEA] to-[#764BA2] flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                        <Icon name="Check" className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/30 shadow-xl rounded-3xl overflow-hidden animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl gradient-secondary flex items-center justify-center">
                    <Icon name="Star" className="text-white" size={24} />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gray-900">Требования</h2>
                </div>
                <ul className="space-y-4">
                  {requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4FA3FE] to-[#667EEA] flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                        <Icon name="ChevronRight" className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/30 shadow-xl rounded-3xl overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl gradient-secondary flex items-center justify-center">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gray-900">О команде</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Мы — динамичная команда из 15 инженеров, работающих над созданием облачной платформы следующего поколения. 
                  Наши сервисы обрабатывают более 10 миллионов запросов в день и используются тысячами компаний по всему миру.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-colors">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-1">15+</div>
                    <div className="text-gray-600">Разработчиков в команде</div>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-colors">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-1">10M</div>
                    <div className="text-gray-600">Запросов в день</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="glass-effect border-white/30 shadow-xl rounded-3xl overflow-hidden animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Условия работы</h2>
                <div className="grid gap-4">
                  {benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/50 rounded-2xl p-4 hover:bg-white/70 hover:scale-105 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                          <Icon name={benefit.icon as any} className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">{benefit.title}</div>
                          <div className="text-sm text-gray-600">{benefit.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="apply-form" className="glass-effect border-white/30 shadow-xl rounded-3xl overflow-hidden animate-slide-up scroll-mt-8" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center">
                    <Icon name="Send" className="text-white" size={24} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-gray-900">Откликнуться</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl border-white/50 bg-white/50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl border-white/50 bg-white/50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="rounded-xl border-white/50 bg-white/50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Ссылка на резюме" 
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      required
                      className="rounded-xl border-white/50 bg-white/50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сопроводительное письмо" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="rounded-xl border-white/50 bg-white/50 focus:bg-white transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-white rounded-xl py-6 text-lg hover:scale-105 transition-transform shadow-lg"
                  >
                    Отправить отклик
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <footer className="text-center text-white/80 py-8 animate-fade-in">
          <p className="text-sm">© 2024 HUD IT. Все права защищены</p>
        </footer>
      </div>
    </div>
  );
}
