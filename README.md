# SOUNDGRAM

Клиентское приложение на React + Vite.

## Функции

- Нижняя навигация по разделам: `Лента`, `Поиск`, `Профиль`
- Лента с карточками песен.
- Плеер Яндекс Музыки в `BottomSheet`
- Экран профиля с расширенной карточкой
- Список подписок в `BottomSheet`
- Отписка от пользователя из списка подписок

## Стек

- React
- React Router (`HashRouter`)
- Vite
- CSS Modules

## Локальный запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

## Структура

```text
src/
  components/
  data/
  pages/
  App.jsx
  main.jsx
  index.css
```

## Маршруты

Используется `HashRouter`, поэтому URLs выглядят так:

- `#/feed`
- `#/search`
- `#/profile`
