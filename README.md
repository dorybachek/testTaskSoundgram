# SOUNDGRAM

Небольшое SPA-приложение на React + Vite.

## Функциональность

- Навигация по вкладкам: `Лента`, `Поиск`, `Профиль`
- Лента с встраиваемыми плеерами Яндекс Музыки
- Пакетная подгрузка ленты (20 элементов за шаг)
- Экран профиля с карточкой пользователя
- Список подписок в `BottomSheet`
- Отписка от пользователя из списка

## Технологии

- React
- React Router (`HashRouter`)
- Vite
- CSS Modules

## Запуск локально

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

## Структура проекта

```text
src/
  components/
  data/
  pages/
  App.jsx
  main.jsx
```

## Деплой на GitHub Pages

В проект добавлен workflow: `.github/workflows/deploy-pages.yml`.

### Что нужно сделать один раз

1. Создать репозиторий на GitHub.
2. Запушить проект в ветку `main`.
3. Открыть `Settings -> Pages`.
4. В разделе `Build and deployment` выбрать `Source: GitHub Actions`.

После каждого пуша в `main` сайт будет пересобираться и публиковаться автоматически.

## Примечания

- Для GitHub Pages в `vite.config.js` используется `base: './'`.
- Навигация работает через hash-маршруты (`#/feed`, `#/search`, `#/profile`), поэтому приложение корректно открывается на Pages без дополнительной серверной настройки.
