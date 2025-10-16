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
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! ✨",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Маникюр',
      description: 'Классический и европейский маникюр с покрытием',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Palette',
      title: 'Nail-арт',
      description: 'Дизайн любой сложности, роспись, декор',
      price: 'от 300 ₽'
    },
    {
      icon: 'Heart',
      title: 'SPA-уход',
      description: 'Парафинотерапия, массаж рук и восстановление',
      price: 'от 800 ₽'
    },
    {
      icon: 'Gem',
      title: 'Наращивание',
      description: 'Гель, акрил, укрепление натуральных ногтей',
      price: 'от 2500 ₽'
    },
    {
      icon: 'Star',
      title: 'Педикюр',
      description: 'Аппаратный и комбинированный педикюр',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Экспресс-услуги',
      description: 'Быстрое покрытие, коррекция, снятие',
      price: 'от 500 ₽'
    }
  ];

  const priceList = [
    { service: 'Маникюр классический', price: '1500 ₽' },
    { service: 'Маникюр европейский', price: '1200 ₽' },
    { service: 'Покрытие гель-лак', price: '800 ₽' },
    { service: 'Укрепление ногтей', price: '600 ₽' },
    { service: 'Наращивание гелем', price: '2500 ₽' },
    { service: 'Коррекция нарощенных', price: '1800 ₽' },
    { service: 'Педикюр аппаратный', price: '2000 ₽' },
    { service: 'Педикюр + покрытие', price: '2500 ₽' },
    { service: 'Дизайн 1 ноготь', price: 'от 300 ₽' },
    { service: 'Снятие покрытия', price: '500 ₽' },
    { service: 'Парафинотерапия', price: '800 ₽' },
    { service: 'Массаж рук', price: '600 ₽' }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/c9e95f68-62f5-4f0d-b9e9-8d62f1c5131f.jpg',
    'https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/a5c27e63-df49-4f24-bc4f-5e236e1aa277.jpg',
    'https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/c9e95f68-62f5-4f0d-b9e9-8d62f1c5131f.jpg',
    'https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/a5c27e63-df49-4f24-bc4f-5e236e1aa277.jpg',
    'https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/c9e95f68-62f5-4f0d-b9e9-8d62f1c5131f.jpg',
    'https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/a5c27e63-df49-4f24-bc4f-5e236e1aa277.jpg'
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-sm z-50 border-b border-primary/20 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Sparkles" className="text-secondary" size={32} />
            <span className="text-3xl font-bold text-foreground" style={{fontFamily: 'Cormorant, serif'}}>Nails71</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#main" className="text-foreground hover:text-secondary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-secondary transition-colors">Услуги</a>
            <a href="#price" className="text-foreground hover:text-secondary transition-colors">Прайс</a>
            <a href="#gallery" className="text-foreground hover:text-secondary transition-colors">Галерея</a>
            <a href="#contacts" className="text-foreground hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            <Icon name="Phone" size={18} className="mr-2" />
            Записаться
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section id="main" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in text-center md:text-left">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight" style={{fontFamily: 'Cormorant, serif'}}>
                  Красота<br />
                  <span className="text-secondary">в каждой детали</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Премиальная ногтевая студия в самом сердце города. Создаём шедевры на ваших ногтях с 2018 года
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться онлайн
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                    Наши работы
                  </Button>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2" style={{fontFamily: 'Cormorant, serif'}}>6+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2" style={{fontFamily: 'Cormorant, serif'}}>5000+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2" style={{fontFamily: 'Cormorant, serif'}}>100%</div>
                    <div className="text-sm text-muted-foreground">Качество</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/9dade495-0074-428b-b4ef-4a8b36e26cf6/files/a5c27e63-df49-4f24-bc4f-5e236e1aa277.jpg" 
                    alt="Интерьер студии Nails71"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'Cormorant, serif'}}>Наши услуги</h2>
              <p className="text-xl text-muted-foreground">Индивидуальный подход к каждому клиенту</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in border-2 border-primary/10 hover:border-secondary/30 bg-gradient-to-br from-white to-primary/5">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-secondary" size={32} />
                    </div>
                    <CardTitle className="text-2xl" style={{fontFamily: 'Cormorant, serif'}}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                    <div className="text-2xl font-bold text-secondary" style={{fontFamily: 'Cormorant, serif'}}>{service.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="py-24 bg-gradient-to-br from-accent/20 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'Cormorant, serif'}}>Прайс-лист</h2>
              <p className="text-xl text-muted-foreground">Прозрачные цены на все услуги</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {priceList.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0 hover:bg-primary/5 px-4 rounded-lg transition-colors">
                        <span className="text-lg">{item.service}</span>
                        <span className="text-xl font-bold text-secondary" style={{fontFamily: 'Cormorant, serif'}}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-secondary/10 rounded-2xl text-center">
                    <p className="text-lg mb-4">
                      <Icon name="Gift" className="inline mr-2 text-secondary" size={24} />
                      <span className="font-semibold">Скидка 10%</span> на первое посещение
                    </p>
                    <Button className="bg-secondary hover:bg-secondary/90 text-white">
                      Получить скидку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'Cormorant, serif'}}>Галерея работ</h2>
              <p className="text-xl text-muted-foreground">Наши лучшие работы — ваше вдохновение</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in">
                  <img 
                    src={image} 
                    alt={`Работа ${index + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button variant="secondary" className="bg-white text-secondary hover:bg-white/90">
                      <Icon name="Eye" size={18} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-gradient-to-br from-primary/20 to-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'Cormorant, serif'}}>Контакты</h2>
              <p className="text-xl text-muted-foreground">Будем рады видеть вас в нашей студии</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8 animate-fade-in shadow-2xl border-2 border-primary/20">
                <CardHeader className="px-0">
                  <CardTitle className="text-3xl mb-4" style={{fontFamily: 'Cormorant, serif'}}>Записаться на приём</CardTitle>
                  <CardDescription className="text-base">Оставьте заявку и мы перезвоним в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input 
                        placeholder="Анна"
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
                      <label className="text-sm font-medium mb-2 block">Услуга</label>
                      <Input 
                        placeholder="Маникюр, педикюр, nail-арт..."
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Комментарий</label>
                      <Textarea 
                        placeholder="Дополнительные пожелания..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="space-y-6 animate-fade-in">
                <Card className="p-6 border-2 border-primary/20 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2" style={{fontFamily: 'Cormorant, serif'}}>Телефон</h3>
                      <p className="text-lg text-muted-foreground mb-1">+7 (900) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-primary/20 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2" style={{fontFamily: 'Cormorant, serif'}}>Адрес</h3>
                      <p className="text-lg text-muted-foreground">г. Тула, ул. Красивая, д. 71</p>
                      <p className="text-sm text-muted-foreground mt-1">2 минуты от метро</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-primary/20 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Instagram" className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2" style={{fontFamily: 'Cormorant, serif'}}>Instagram</h3>
                      <p className="text-lg text-muted-foreground">@nails71_studio</p>
                      <p className="text-sm text-muted-foreground mt-1">Следите за новинками</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-secondary/30 bg-gradient-to-br from-secondary/10 to-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2" style={{fontFamily: 'Cormorant, serif'}}>Время работы</h3>
                      <p className="text-lg font-semibold text-foreground">Пн-Вс: 9:00 — 21:00</p>
                      <p className="text-sm text-muted-foreground mt-1">Работаем без выходных</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Sparkles" className="text-secondary" size={32} />
                <span className="text-2xl font-bold" style={{fontFamily: 'Cormorant, serif'}}>Nails71</span>
              </div>
              <p className="text-white/70">
                Премиальная ногтевая студия. Красота и качество в каждой детали.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4" style={{fontFamily: 'Cormorant, serif'}}>Навигация</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#main" className="hover:text-secondary transition-colors">Главная</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Услуги</a></li>
                <li><a href="#price" className="hover:text-secondary transition-colors">Прайс</a></li>
                <li><a href="#gallery" className="hover:text-secondary transition-colors">Галерея</a></li>
                <li><a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4" style={{fontFamily: 'Cormorant, serif'}}>Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (900) 123-45-67</li>
                <li>@nails71_studio</li>
                <li>г. Тула, ул. Красивая, д. 71</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Nails71. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
