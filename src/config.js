const bot = require('./images/bot.svg').default;
const email = require('./images/email.svg').default;
const briefcase = require('./images/briefcase.svg').default;
const settings = require('./images/settings.svg').default;
const moon = require('./images/moon.svg').default;
const backgroundClassic = require('./images/backgrounds/classic.jpg').default;
const backgroundXp = require('./images/backgrounds/xp.jpg').default;
const backgroundNasa = require('./images/backgrounds/nasa.jpg').default;
const backgroundClouds = require('./images/backgrounds/clouds.jpg').default;
const backgroundLogo = require('./images/backgrounds/logo.jpg').default;
const backgroundVaporwave = require('./images/backgrounds/vaporwave.jpg').default;

const apps = {
  messenger: 'Chat',
  work: 'Work',
  contact: 'Contact',
  shutdown: 'Shutdown',
  settings: 'Settings',
};

const icons = {
  chat: {
    url: bot,
    alt: 'Icon of bot',
  },
  work: {
    url: briefcase,
    alt: 'Icon of briefcase',
  },
  contact: {
    url: email,
    alt: 'Icon of email',
  },
  shutdown: {
    url: moon,
    alt: 'Icon of moon',
  },
  settings: {
    url: settings,
    alt: 'Icon of settings',
  },
};

const resumeLink = 'https://standardresume.co/heathervandervecht';

const contact = {
  content: "Let's chat! It's a pretty safe bet that you're awesome, and I'm always looking to meet awesome people. I'd love to grab a coffee, or even a beer if that's what you're into - just shoot me a message!",
  emailLink: 'mailto:heathervandervecht@gmail.com',
  linkedin: 'https://linkedin.com/in/heathervandervecht',
  github: 'http://github.com/heathervv',
  twitter: 'http://twitter.com/_heathervv',
  instagram: 'http://instagram.com/heathervv',
};

const work = [
  {
    title: 'Telus Digital Life',
    url: '//telus.com/mobility/accessories',
    copy: 'Nascent worked closely with TELUS to innovate the accessory space, and as a part of Nascent I co-lead the team that worked on this project. The main goal we worked towards with TELUS.com/accessories was how to bring the incredible in-store experience they\'d already developed onto the website. It also presented some fantastic technical opportunities with features like real time inventory and a mobility-wide cart.',
  },
  {
    title: 'Bokeh',
    url: '//bokeh.agency',
    copy: 'This project was an incredible experience for quite a few reasons! Not only because David and Doug are some of the nicest, funniest people I\'ve ever met, but also because they really wanted to try and push the envelope with their website. I had the opportunity to implement physics on this project - not many things are cooler than that. I\'m also incredibly proud of the case study template as I think it blends functionality and form together in a really delightful way. While the whole site is built to be editable via a CMS, I focused on really supporting flexibility from the CMS for the case studies - it can be ordered however they need, optimized to load tons of videos, with some great animations automatically scattered throughout each page.',
  },
  {
    title: 'Let\'s Find Momo',
    url: '//letsfindmomo.com',
    copy: 'Filament teamed up with Andrew Knapp and Momo (his dog) to create this playful website. As lead dev on this project I helped make sure the project stayed on time, solved any problems the team had, and focused on building out the gameplay functionality. Built with React and WordPress.',
  },
];

const initialResponse = "Hi there, I'm HeatherBot - the digital version of Heather! Thanks for stopping by for a chat. You can ask me anything using the \"Free type\" button below, but for now I've gone ahead and given you some quick select options to help get you started. Go ahead and ask me something!";

const changeInputResponse = {
  free: 'Feel free to ask me whatever you want. 🚀',
  options: 'A little guidance never hurt anybody. 🔮',
};

// TODO: update URLs to be correct
const systemSettingsBackground = [
  {
    name: 'Classic',
    url: backgroundClassic,
  },
  {
    name: 'XP',
    url: backgroundXp,
  },
  {
    name: 'Nasa',
    url: backgroundNasa,
  },
  {
    name: 'Clouds',
    url: backgroundClouds,
  },
  {
    name: 'Logo',
    url: backgroundLogo,
  },
  {
    name: 'Vaporwave',
    url: backgroundVaporwave,
  },
];

const systemSettingsTheme = ['Light', 'Dark'];

const API = 'https://portfolio-chatbot-api.herokuapp.com/api/message';

module.exports = {
  apps,
  icons,
  resumeLink,
  contact,
  work,
  initialResponse,
  changeInputResponse,
  systemSettings: {
    background: systemSettingsBackground,
    theme: systemSettingsTheme,
  },
  API,
};
