const baseTracks = [
  {
    id: 'base-1',
    title: 'слон',
    artist: 'Ларек С Журнальчиками, Оральные хулиганы',
    coverUrl: 'https://avatars.yandex.net/get-music-content/13663712/91f40f37.a.33957058-1/400x400',
    iframeSrc: 'https://music.yandex.ru/iframe/track/80092264/16388667',
  },
  {
    id: 'base-2',
    title: 'Katru Karavai',
    artist: 'Mambalam Sisters',
    coverUrl: 'https://avatars.yandex.net/get-music-content/16334817/0738dab9.a.1118496-3/400x400',
    iframeSrc: 'https://music.yandex.ru/iframe/track/26606393/3141087',
  },
  {
    id: 'base-3',
    title: 'Snatched for the Gods',
    artist: 'RuPaul',
    coverUrl: 'https://avatars.yandex.net/get-music-content/42108/e220cc10.a.54386-1/400x400',
    iframeSrc: 'https://music.yandex.ru/iframe/track/508573/56580',
  },
  {
    id: 'base-4',
    title: 'Königin der U-Bahn',
    artist: 'SMT, JoDu, POSTPARTUM.',
    coverUrl: 'https://avatars.yandex.net/get-music-content/16450533/c4381aa6.a.37820524-1/400x400',
    iframeSrc: 'https://music.yandex.ru/iframe/track/65064384/10887119',
  },
  {
    id: 'base-5',
    title: 'Wannabe',
    artist: '90s Unforgettable Hits',
    coverUrl: 'https://avatars.yandex.net/get-music-content/139444/b0994078.a.5547713-1/400x400',
    iframeSrc: 'https://music.yandex.ru/iframe/track/42104011/6664801',
  },
  {
    id: 'base-6',
    title: 'Rebound',
    artist: 'Sheez King',
    coverUrl: 'https://avatars.yandex.net/get-music-content/14304155/1c07d22c.a.37230310-1/400x400',
    iframeSrc: 'https://music.yandex.ru/iframe/track/62351004/10284765',
  },
]

const copiesPerTrack = 10

export const tracks = baseTracks.flatMap((track) =>
  Array.from({ length: copiesPerTrack }, (_, index) => ({
    ...track,
    id: `${track.id}-${index + 1}`,
  })),
)
