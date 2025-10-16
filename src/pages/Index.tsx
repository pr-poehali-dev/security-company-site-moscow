import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">НЕСИИТЯ 24/7</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#main" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#licenses" className="text-foreground hover:text-primary transition-colors">Лицензии</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section id="main" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Надёжная охрана<br />
                  <span className="text-primary">вашего бизнеса</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Современные технологии безопасности и профессиональная команда для защиты вашего имущества 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    Оставить заявку
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Наши услуги
                  </Button>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Объектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Мониторинг</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/b0b485f9-c95f-420c-916e-88ccf9d89e5c.jpg" 
                  alt="Профессиональный охранник"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground">Комплексные решения для безопасности вашего бизнеса</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Shield',
                  title: 'Физическая охрана',
                  description: 'Профессиональные сотрудники с опытом работы и лицензиями'
                },
                {
                  icon: 'Video',
                  title: 'Видеонаблюдение',
                  description: 'Современные системы видеомониторинга с AI-аналитикой'
                },
                {
                  icon: 'Smartphone',
                  title: 'Пультовая охрана',
                  description: 'Круглосуточный мониторинг и быстрое реагирование'
                },
                {
                  icon: 'UserCheck',
                  title: 'Контроль доступа',
                  description: 'СКУД с биометрией и электронными пропусками'
                },
                {
                  icon: 'BellRing',
                  title: 'Сигнализация',
                  description: 'Охранно-пожарные системы последнего поколения'
                },
                {
                  icon: 'Users',
                  title: 'Консалтинг',
                  description: 'Аудит безопасности и разработка концепций защиты'
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/b9dee918-8f7e-4a86-9bb9-44dba46a183a.jpg" 
                  alt="Центр мониторинга"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  НЕСИИТЯ 24/7 — ведущая охранная компания Москвы с 15-летним опытом работы. 
                  Мы сочетаем профессионализм сотрудников с передовыми технологиями безопасности.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Лицензированная деятельность</h3>
                      <p className="text-muted-foreground">Все необходимые разрешения и сертификаты</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Инновационные технологии</h3>
                      <p className="text-muted-foreground">AI-аналитика, нейросети, IoT-датчики</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Быстрое реагирование</h3>
                      <p className="text-muted-foreground">Выезд группы за 3-7 минут по Москве</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="licenses" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Лицензии и сертификаты</h2>
              <p className="text-xl text-muted-foreground">Официальная деятельность с полным комплектом документов</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/4217a700-dc1a-4a21-ba0e-0a25dc7df37a.jpg" 
                  alt="Лицензии"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="FileCheck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Лицензия МВД РФ</h3>
                    <p className="text-muted-foreground">№ ЧО-77-123456 от 15.03.2009</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Сертификат ISO 9001</h3>
                    <p className="text-muted-foreground">Система менеджмента качества</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Членство в СРО</h3>
                    <p className="text-muted-foreground">Ассоциация охранных предприятий</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Страхование ответственности</h3>
                    <p className="text-muted-foreground">Покрытие до 10 млн рублей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8 animate-fade-in">
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl mb-4">Оставьте заявку</CardTitle>
                  <CardDescription className="text-base">Мы свяжемся с вами в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input 
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea 
                        placeholder="Опишите ваши потребности..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="space-y-6 animate-fade-in">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground mb-1">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Круглосуточно, без выходных</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">info@nesiitya247.ru</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                      <p className="text-muted-foreground font-semibold">24 часа в сутки, 7 дней в неделю</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} />
                <span className="text-xl font-bold">НЕСИИТЯ 24/7</span>
              </div>
              <p className="text-primary-foreground/80">
                Ведущая охранная компания Москвы. Надёжность и инновации с 2009 года.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#main" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#licenses" className="hover:text-white transition-colors">Лицензии</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@nesiitya247.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 НЕСИИТЯ 24/7. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
