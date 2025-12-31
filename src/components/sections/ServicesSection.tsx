import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Refrigerator",
    title: "Ремонт холодильников",
    description: "Диагностика и устранение неисправностей любой сложности",
    price: "от 1500 ₽",
    category: "Бытовая техника"
  },
  {
    icon: "Waves",
    title: "Ремонт стиральных машин",
    description: "Замена подшипников, насосов, электроники",
    price: "от 1800 ₽",
    category: "Бытовая техника"
  },
  {
    icon: "Wind",
    title: "Ремонт посудомоечных машин",
    description: "Устранение протечек, замена датчиков",
    price: "от 1600 ₽",
    category: "Бытовая техника"
  },
  {
    icon: "Microwave",
    title: "Ремонт микроволновок",
    description: "Замена магнетрона, ремонт электроники",
    price: "от 1200 ₽",
    category: "Бытовая техника"
  },
  {
    icon: "AirVent",
    title: "Ремонт кондиционеров",
    description: "Заправка фреоном, чистка, диагностика",
    price: "от 2000 ₽",
    category: "Бытовая техника"
  },
  {
    icon: "Flame",
    title: "Ремонт плит и духовок",
    description: "Газовые и электрические, любой сложности",
    price: "от 1400 ₽",
    category: "Бытовая техника"
  },
  {
    icon: "Droplet",
    title: "Замена смесителей",
    description: "Установка и замена смесителей на кухне и в ванной",
    price: "от 800 ₽",
    category: "Сантехника"
  },
  {
    icon: "Droplets",
    title: "Устранение протечек",
    description: "Ремонт труб, устранение течей, замена прокладок",
    price: "от 1000 ₽",
    category: "Сантехника"
  },
  {
    icon: "Bath",
    title: "Установка ванн и унитазов",
    description: "Монтаж и подключение сантехники под ключ",
    price: "от 2500 ₽",
    category: "Сантехника"
  },
  {
    icon: "PipetteIcon",
    title: "Прочистка канализации",
    description: "Устранение засоров любой сложности",
    price: "от 1200 ₽",
    category: "Сантехника"
  },
  {
    icon: "Gauge",
    title: "Установка счетчиков воды",
    description: "Монтаж, замена, опломбировка счетчиков",
    price: "от 1500 ₽",
    category: "Сантехника"
  },
  {
    icon: "Shower",
    title: "Установка душевых кабин",
    description: "Монтаж и подключение душевых систем",
    price: "от 3000 ₽",
    category: "Сантехника"
  }
];

interface ServicesSectionProps {
  onBookingClick: () => void;
}

export default function ServicesSection({ onBookingClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ремонт бытовой техники и полный спектр сантехнических работ
          </p>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Icon name="Zap" size={24} className="text-primary" />
              Ремонт бытовой техники
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(s => s.category === "Бытовая техника").map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon name={service.icon} size={40} className="text-primary mb-3" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm" onClick={onBookingClick}>
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Icon name="Droplet" size={24} className="text-primary" />
              Сантехнические работы
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter(s => s.category === "Сантехника").map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon name={service.icon} size={40} className="text-primary mb-3" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm" onClick={onBookingClick}>
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
