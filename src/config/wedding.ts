export const wedding = {
  couple: {
    partner1: '宛樺',
    partner2: 'Max',
  },

  date: {
    // TODO: Exact Dates and Time Zones
    datetime: '2027-07-03T14:00:00+02:00',
    display: '03 Juli 2027',
  },

  venue: {
    // TODO
    name: 'Augustiner am Wörthsee',
    address: 'Seepromenade 1, 82237 Wörthsee-Steinebach',
    googleMapsUrl: 'https://maps.app.goo.gl/CHzDKNzYgTzktK1a7',
  },

  spotify: {
    // TODO
    url: 'https://open.spotify.com/playlist/YOUR_PLAYLIST_ID',
    title: 'Our Wedding Playlist',
    description: 'Songs that remind us of our journey together.',
  },

  rsvp: {
    googleScriptUrl: 'https://script.google.com/macros/s/AKfycbz3fyGCUiWbK_wsThoXaF5BkYULdQcueWmNTF16gVJxXmPzldEIrdvSC3BePseKJgy1HA/exec',
  },

  story: {
    title: 'Our Story',
    paragraphs: [
      'meow',
      'meow',
      'meow'
    ],
  },
} as const;


export const hotels = [
  {
    name: "Pension am See | Lago mio",
    address: "Seestraße 61, 82237 Wörthsee",
    link: "http://lago-mio.de/"
  },
  {
    name: "Hotel Jackl-Hof",
    address: "Dorfstraße 16, 82237 Wörthsee",
    link: "https://jakl-hof.de/"
  }
];


export const agenda = [
  {
    time: "14:30",
    title: "Guest Arrival",
    description: "Welcome drinks and getting settled",
  },
  {
    time: "15:30",
    title: "Wedding Ceremony",
    description: "The moment we've been waiting for",
  },
  {
    time: "16:30",
    title: "Drinks & Photos",
    description: "Champagne, conversations and photographs",
  },
  {
    time: "18:00",
    title: "Dinner",
    description: "Dinner, speeches and celebrations",
  },
  {
    time: "21:00",
    title: "Party",
    description: "Music, dancing and everything in between",
  },
];