import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const services = [
  {
    icon: "Refrigerator",
    title: "Ремонт холодильников",
    description: "Диагностика и устранение неисправностей любой сложности",
    price: "от 1500 ₽"
  },
  {
    icon: "Waves",
    title: "Ремонт стиральных машин",
    description: "Замена подшипников, насосов, электроники",
    price: "от 1800 ₽"
  },
  {
    icon: "Wind",
    title: "Ремонт посудомоечных машин",
    description: "Устранение протечек, замена датчиков",
    price: "от 1600 ₽"
  },
  {
    icon: "Microwave",
    title: "Ремонт микроволновок",
    description: "Замена магнетрона, ремонт электроники",
    price: "от 1200 ₽"
  },
  {
    icon: "AirVent",
    title: "Ремонт кондиционеров",
    description: "Заправка фреоном, чистка, диагностика",
    price: "от 2000 ₽"
  },
  {
    icon: "Flame",
    title: "Ремонт плит и духовок",
    description: "Газовые и электрические, любой сложности",
    price: "от 1400 ₽"
  }
];

const portfolio = [
  {
    image: "https://cdn.poehali.dev/projects/94e8656a-f286-43b1-886e-74999cc9b5f2/files/3927b535-bd08-4986-bb5a-1c76dcd4f0e1.jpg",
    title: "Ремонт стиральной машины Bosch",
    description: "Замена подшипников и сальника"
  },
  {
    image: "https://cdn.poehali.dev/projects/94e8656a-f286-43b1-886e-74999cc9b5f2/files/42d397a8-76f0-4469-aab0-2e6ed72e3c96.jpg",
    title: "Диагностика холодильника Samsung",
    description: "Устранение утечки фреона"
  },
  {
    image: "https://cdn.poehali.dev/projects/94e8656a-f286-43b1-886e-74999cc9b5f2/files/3927b535-bd08-4986-bb5a-1c76dcd4f0e1.jpg",
    title: "Ремонт посудомоечной машины",
    description: "Замена циркуляционного насоса"
  }
];

const reviews = [
  {
    name: "Анна Петрова",
    rating: 5,
    text: "Быстро и качественно отремонтировали холодильник. Мастер приехал в тот же день, всё объяснил. Рекомендую!",
    date: "15 декабря 2024"
  },
  {
    name: "Михаил Соколов",
    rating: 5,
    text: "Профессиональный подход к делу. Стиральная машина работает как новая. Цены адекватные.",
    date: "10 декабря 2024"
  },
  {
    name: "Елена Иванова",
    rating: 5,
    text: "Отличный сервис! Мастер нашёл проблему за 10 минут и сразу устранил. Спасибо!",
    date: "5 декабря 2024"
  }
];

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleBooking = () => {
    if (!formData.name || !formData.phone) {
      toast.error("Заполните обязательные поля");
      return;
    }
    toast.success("Заявка отправлена! Мастер свяжется с вами в ближайшее время.");
    setIsBookingOpen(false);
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={24} className="text-primary" />
            <span className="font-bold text-xl">РемонтМастер</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
              О мастере
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button className="bg-accent hover:bg-accent/90">
                <Icon name="Calendar" size={18} className="mr-2" />
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Запись на ремонт</DialogTitle>
                <DialogDescription>
                  Выберите удобную дату и заполните форму. Мастер свяжется с вами для подтверждения.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-6 py-4">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="service">Тип техники</Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="Холодильник, стиральная машина..."
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="message">Описание проблемы</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите неисправность..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              
              <Button onClick={handleBooking} className="w-full bg-accent hover:bg-accent/90">
                Отправить заявку
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <Icon name="Award" size={14} className="mr-1" />
                Опыт работы 12+ лет
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Профессиональный ремонт бытовой техники
              </h1>
              <p className="text-lg text-muted-foreground">
                Быстрая диагностика и качественный ремонт любой сложности. Гарантия на все виды работ. Выезд мастера в день обращения.
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-accent hover:bg-accent/90">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться на ремонт
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("services")}>
                  Наши услуги
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/94e8656a-f286-43b1-886e-74999cc9b5f2/files/3927b535-bd08-4986-bb5a-1c76dcd4f0e1.jpg"
                alt="Мастер за работой"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">О мастере</h2>
            <p className="text-lg text-muted-foreground">
              Меня зовут Алексей Морозов. Я профессионально занимаюсь ремонтом бытовой техники более 12 лет. 
              За это время успешно восстановил работоспособность более 2500 единиц техники различных брендов.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card>
              <CardHeader>
                <Icon name="GraduationCap" size={32} className="text-primary mb-2" />
                <CardTitle>Сертифицированный специалист</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Официальные сертификаты от ведущих производителей техники
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Clock" size={32} className="text-primary mb-2" />
                <CardTitle>Быстрый выезд</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Приеду в день обращения. Работаю без выходных с 8:00 до 21:00
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="ShieldCheck" size={32} className="text-primary mb-2" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Гарантия на все виды работ от 3 до 12 месяцев
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Wrench" size={32} className="text-primary mb-2" />
                <CardTitle>Оригинальные запчасти</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Использую только качественные комплектующие от производителей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ремонтирую все виды бытовой техники с выездом на дом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={service.icon} size={40} className="text-primary mb-3" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm" onClick={() => setIsBookingOpen(true)}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных работ
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о моей работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь со мной удобным способом
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:master@remont.ru" className="text-muted-foreground hover:text-primary">
                        master@remont.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Район работы</div>
                      <p className="text-muted-foreground">
                        Москва и Московская область
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <p className="text-muted-foreground">
                        Ежедневно с 8:00 до 21:00
                      </p>
                    </div>
                  </div>
                  
                  <Button onClick={() => setIsBookingOpen(true)} className="w-full bg-accent hover:bg-accent/90" size="lg">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на ремонт
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={20} className="text-primary" />
              <span className="font-semibold">РемонтМастер</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
