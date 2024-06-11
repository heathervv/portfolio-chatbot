const bot = require('./images/bot.svg').default;
const email = require('./images/email.svg').default;
const briefcase = require('./images/briefcase.svg').default;
const settings = require('./images/settings.svg').default;
const moon = require('./images/moon.svg').default;
const backgroundClassic = require('./images/backgrounds/classic.jpg');
const backgroundXp = require('./images/backgrounds/xp.jpg');
const backgroundNasa = require('./images/backgrounds/nasa.jpg');
const backgroundClouds = require('./images/backgrounds/clouds.jpg');
const backgroundLogo = require('./images/backgrounds/logo.jpg');
const backgroundVaporwave = require('./images/backgrounds/vaporwave.jpg');

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
};

const work = [
  {
    title: 'Mentoring',
    url: '//www.get-merit.com/p/heather-vandervecht',
    copy: 'Realizing that I\'ve been working in tech for over a decade, I wanted to help the next generation of developers and creative thinkers, so I started offering free mentorship sessions. If you\'re interested, feel free to drop some time in my calendar.',
  },
  {
    title: 'Dialogue',
    url: '//dialogue.co/en/',
    copy: 'Currently at Dialogue, I\'m the tech lead and staff engineer for a team under the client stream. Like most product companies, what I\'m working on can change quickly, so if you\'re curious to hear more about what I do here, shoot me an email!',
  },
  {
    title: 'Opencare: Patient Growth',
    url: '//opencare.com',
    copy: 'I spent most of my time with Opencare on the Patient Growth team as a tech lead. The mission for this product line was to connect patients to top-tier dentists in their neighbourhood based on their wants/needs. Operating in both Canada and the United States, we built and maintained a marketing site (opencare.com), a patient app, and a practice app. There was *a lot* we managed to build, but I\'m personally most proud of the completely rebuilt patient funnel (search.opencare.com/recommendation) which I built entirely in React to replace the original in AngularJS, and mentoring the team through improving QA processes, app accessibility, and feature scoping.',
  },
  {
    title: 'Opencare: Revenue Cycle Management',
    copy: 'This was a product line to help practices manage patient insurance before and after their appointments. This was done through an internal product that enabled the operations team to work through cases. When I joined this product line, the relationship between product and operations was strained - the product team was operating under a "ship fast and often" ethos, which, while great, often disrupted the operations team as they had tight timelines and had a low risk threshold for bugs and mid-day releases. So I focused on improving this communication-breakdown by refreshing the bug process and introducing functional reviews with key stakeholders before releases.',
  },
  {
    title: 'Telus Digital Life',
    url: '//telus.com/mobility/accessories',
    copy: 'Nascent worked closely with TELUS to innovate the accessory space, and as a part of Nascent I co-lead the team that worked on this project. The main goal we worked towards with TELUS.com/accessories was how to bring the incredible in-store experience they\'d already developed onto the website. It also presented some fantastic technical opportunities with features like real time inventory and a mobility-wide cart.',
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

const API = 'https://portfolio-chatbot-server.adaptable.app/api/message';

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
