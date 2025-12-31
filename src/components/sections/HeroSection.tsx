import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" className="w-fit">
              <Icon name="Award" size={14} className="mr-1" />
              Опыт работы 12+ лет
            </Badge>
            <Badge variant="outline" className="w-fit bg-primary/10">
              <Icon name="Wrench" size={14} className="mr-1" />
              Сантехник 5-го разряда
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Ремонт бытовой техники и сантехнические работы
          </h1>
          <p className="text-lg text-muted-foreground">
            Дипломированный специалист. Быстрая диагностика и качественный ремонт любой сложности. Гарантия на все виды работ. Выезд мастера в день обращения.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              onClick={onBookingClick}
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на ремонт
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToServices}
            >
              Посмотреть услуги
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2500+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Ремонт с первого раза</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
