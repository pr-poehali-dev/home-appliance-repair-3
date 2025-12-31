import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
          <p className="text-lg text-muted-foreground">
            Свяжитесь со мной удобным способом
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <Icon name="Phone" size={40} className="text-primary mb-3" />
              <CardTitle>Телефон</CardTitle>
              <CardDescription>Звоните в любое время с 8:00 до 22:00</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+79991234567" className="text-lg">
                  +7 (999) 123-45-67
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Icon name="Mail" size={40} className="text-primary mb-3" />
              <CardTitle>Email</CardTitle>
              <CardDescription>Отвечу в течение часа</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:master@example.ru" className="text-lg">
                  master@example.ru
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden border">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A64e2d698c8d5f7f4e7c857e31d3f1c7f0b2e8f5e3c1d9a4b6e7f8c2d3e4f5a6b&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            title="Карта"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
