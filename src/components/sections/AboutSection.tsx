import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

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

export default function AboutSection() {
  return (
    <>
      <section id="about" className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <Icon name="User" size={14} className="mr-1" />
                О мастере
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">О мастере</h2>
              <p className="text-lg text-muted-foreground">
                Меня зовут Алексей Морозов. Я дипломированный сантехник 5-го разряда и мастер по ремонту бытовой техники с опытом работы более 12 лет. 
                За это время выполнил более 2500 ремонтов техники и сантехнических работ различной сложности.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <Icon name="Award" size={32} className="text-primary mb-2" />
                    <CardTitle className="text-xl">12+ лет</CardTitle>
                    <CardDescription>Опыт работы</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Users" size={32} className="text-primary mb-2" />
                    <CardTitle className="text-xl">2500+</CardTitle>
                    <CardDescription>Довольных клиентов</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Clock" size={32} className="text-primary mb-2" />
                    <CardTitle className="text-xl">24/7</CardTitle>
                    <CardDescription>Приём заявок</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Shield" size={32} className="text-primary mb-2" />
                    <CardTitle className="text-xl">Гарантия</CardTitle>
                    <CardDescription>На все работы</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/94e8656a-f286-43b1-886e-74999cc9b5f2/files/42d397a8-76f0-4469-aab0-2e6ed72e3c96.jpg"
                alt="Мастер за работой"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных работ
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят наши клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={32} className="text-primary mb-2 mx-auto" />
                <CardTitle>Телефон</CardTitle>
                <CardDescription>
                  <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Mail" size={32} className="text-primary mb-2 mx-auto" />
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  <a href="mailto:info@remont-master.ru" className="hover:text-primary transition-colors">
                    info@remont-master.ru
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="MessageCircle" size={32} className="text-primary mb-2 mx-auto" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>
                  <a href="https://wa.me/79991234567" className="hover:text-primary transition-colors">
                    Написать в WhatsApp
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
