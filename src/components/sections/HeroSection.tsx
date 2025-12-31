import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex flex-wrap gap-2">
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
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={onBookingClick}>
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на ремонт
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+79991234567">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
