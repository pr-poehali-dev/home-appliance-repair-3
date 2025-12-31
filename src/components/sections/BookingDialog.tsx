import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
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
    onOpenChange(false);
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              <Label htmlFor="service">Тип работы</Label>
              <Input
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                placeholder="Холодильник, замена смесителя..."
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
          
          <Button onClick={handleBooking} size="lg" className="w-full bg-accent hover:bg-accent/90">
            Отправить заявку
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
