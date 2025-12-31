import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import HeroSection from "@/components/sections/HeroSection";
import BookingDialog from "@/components/sections/BookingDialog";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutPortfolioReviews from "@/components/sections/AboutPortfolioReviews";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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

          <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
        </div>
      </header>

      <HeroSection onBookingClick={() => setIsBookingOpen(true)} />
      
      <AboutPortfolioReviews />
      
      <ServicesSection onBookingClick={() => setIsBookingOpen(true)} />

      <ContactSection />

      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={20} className="text-primary" />
              <span className="font-bold">РемонтМастер</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 РемонтМастер. Все права защищены.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+79991234567">
                  <Icon name="Phone" size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:info@remont-master.ru">
                  <Icon name="Mail" size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://wa.me/79991234567">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
