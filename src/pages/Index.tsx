import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    { date: '15 ноября', title: 'Практическое занятие: Оказание первой помощи', type: 'practice' },
    { date: '22 ноября', title: 'Контрольная работа по теме "Пожарная безопасность"', type: 'test' },
    { date: '28 ноября', title: 'Экскурсия в МЧС', type: 'event' },
    { date: '5 декабря', title: 'Урок: Безопасность на дорогах', type: 'lesson' },
  ];

  const materials = [
    { id: 1, title: 'Пожарная безопасность', description: 'Правила поведения при пожаре, средства тушения', icon: 'Flame', color: 'bg-red-100 text-red-600' },
    { id: 2, title: 'Первая помощь', description: 'Алгоритмы оказания помощи при травмах', icon: 'Heart', color: 'bg-pink-100 text-pink-600' },
    { id: 3, title: 'ПДД', description: 'Правила дорожного движения для пешеходов', icon: 'Car', color: 'bg-blue-100 text-blue-600' },
    { id: 4, title: 'ЧС природного характера', description: 'Действия при стихийных бедствиях', icon: 'CloudRain', color: 'bg-cyan-100 text-cyan-600' },
    { id: 5, title: 'Личная безопасность', description: 'Безопасность в быту и на улице', icon: 'Shield', color: 'bg-orange-100 text-orange-600' },
    { id: 6, title: 'Терроризм и экстремизм', description: 'Правила поведения при угрозе теракта', icon: 'AlertTriangle', color: 'bg-yellow-100 text-yellow-700' },
  ];

  const lessonPlans = [
    { class: '5 класс', topics: ['Основы безопасности жизнедеятельности', 'Опасные ситуации в квартире', 'Пожарная безопасность'] },
    { class: '6 класс', topics: ['Экстремальные ситуации в природе', 'Первая помощь при травмах', 'Безопасность на воде'] },
    { class: '7 класс', topics: ['ЧС природного характера', 'ЧС техногенного характера', 'Здоровый образ жизни'] },
    { class: '8 класс', topics: ['Производственные аварии', 'Взрывы и пожары', 'Химические аварии'] },
    { class: '9 класс', topics: ['Терроризм и экстремизм', 'Национальная безопасность', 'Гражданская оборона'] },
  ];

  const achievements = [
    { title: '1 место в городской олимпиаде по ОБЖ', student: 'Иванов Алексей, 9А', year: '2024' },
    { title: 'Победитель конкурса "Школа безопасности"', student: 'Команда 8Б класса', year: '2024' },
    { title: 'Диплом за лучший проект по ПДД', student: 'Петрова Мария, 7В', year: '2023' },
    { title: 'Грамота МЧС за активное участие', student: 'Сидоров Дмитрий, 10А', year: '2023' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Кабинет ОБЖ</h1>
                <p className="text-sm text-gray-600">Учитель: Иванов Сергей Петрович</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#materials" className="text-gray-700 hover:text-primary transition-colors font-medium">Материалы</a>
              <a href="#plans" className="text-gray-700 hover:text-primary transition-colors font-medium">Планы уроков</a>
              <a href="#achievements" className="text-gray-700 hover:text-primary transition-colors font-medium">Достижения</a>
              <a href="#calendar" className="text-gray-700 hover:text-primary transition-colors font-medium">Календарь</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-white">
          <div className="relative z-10 max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Кабинет №215</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Основы безопасности жизнедеятельности</h2>
            <p className="text-lg text-white/90 mb-6">
              Добро пожаловать на образовательный портал кабинета ОБЖ! Здесь вы найдете учебные материалы, планы уроков и информацию о наших достижениях.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Учебные материалы
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Calendar" size={20} className="mr-2" />
                Расписание
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute right-32 bottom-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
        </section>

        <section id="materials" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Учебные материалы</h2>
            <p className="text-gray-600">Все необходимые материалы для изучения курса ОБЖ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${material.color} flex items-center justify-center mb-3`}>
                    <Icon name={material.icon as any} size={24} />
                  </div>
                  <CardTitle className="text-xl">{material.title}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                    Открыть материалы
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="plans" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Планы уроков</h2>
            <p className="text-gray-600">Тематическое планирование по классам</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {lessonPlans.map((plan, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="GraduationCap" size={20} className="text-primary" />
                        </div>
                        {plan.class}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-14 space-y-2">
                        {plan.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 py-2">
                            <Badge variant="outline" className="mt-1">{i + 1}</Badge>
                            <span className="text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section id="achievements" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Достижения учеников</h2>
            <p className="text-gray-600">Гордимся успехами наших учеников!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{achievement.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="User" size={14} />
                        {achievement.student}
                      </CardDescription>
                      <Badge variant="outline" className="mt-2">{achievement.year}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="calendar" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Календарь занятий</h2>
            <p className="text-gray-600">Важные даты и мероприятия</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Ближайшие события</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center flex-shrink-0">
                      <Icon name="Calendar" size={20} className="text-primary mb-1" />
                      <span className="text-xs font-semibold text-primary">{event.date.split(' ')[0]}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{event.title}</h4>
                      <Badge variant={event.type === 'test' ? 'destructive' : event.type === 'event' ? 'default' : 'secondary'}>
                        {event.type === 'test' ? 'Контроль' : event.type === 'event' ? 'Мероприятие' : 'Урок'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Календарь</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Контакты</h2>
            <p className="text-gray-600">Свяжитесь со мной по любым вопросам</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-600">obzh.teacher@school.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-sm text-gray-600">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Кабинет</p>
                    <p className="text-sm text-gray-600">Кабинет №215, 2 этаж</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Часы приема</p>
                    <p className="text-sm text-gray-600">Пн-Пт: 14:00 - 16:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Написать сообщение</CardTitle>
                <CardDescription>Заполните форму и я отвечу вам в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold">Кабинет ОБЖ</p>
                <p className="text-sm text-gray-400">Средняя школа №1</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
