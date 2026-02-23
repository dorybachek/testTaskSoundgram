# SOUNDGRAM

Клиентское приложение на React + Vite.

## Функции

- Нижняя навигация по разделам: `Лента`, `Поиск`, `Профиль`
- Лента со встроенными плеерами Яндекс Музыки
- Постепенная подгрузка треков в ленте (по 20)
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
