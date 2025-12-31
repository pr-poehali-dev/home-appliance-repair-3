import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function AboutPortfolioReviews() {
  return (
    <>
      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">О мастере</h2>
            <p className="text-lg text-muted-foreground">
              Меня зовут Алексей Морозов. Я дипломированный сантехник 5-го разряда и мастер по ремонту бытовой техники с опытом работы более 12 лет. 
              За это время выполнил более 2500 ремонтов техники и сантехнических работ различной сложности.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <Card>
                <CardHeader>
                  <Icon name="Shield" size={40} className="text-primary mb-2" />
                  <CardTitle className="text-lg">Гарантия качества</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    На все виды работ предоставляется гарантия от 3 до 12 месяцев
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Icon name="Clock" size={40} className="text-primary mb-2" />
                  <CardTitle className="text-lg">Быстрый выезд</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Приеду в день обращения. Работаю без выходных с 8:00 до 22:00
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Icon name="BadgeCheck" size={40} className="text-primary mb-2" />
                  <CardTitle className="text-lg">Сертификаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Имею сертификаты производителей техники и разрешения на работы
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Портфолио</h2>
            <p className="text-lg text-muted-foreground">
              Примеры выполненных работ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о моей работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
