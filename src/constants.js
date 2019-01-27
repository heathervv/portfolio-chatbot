const bot = require('./images/bot.svg')
const email = require('./images/email.svg')
const briefcase = require('./images/briefcase.svg')

const apps = {
  messenger: 'Chat',
  work: 'Work',
  contact: 'Contact'
}

const icons = {
  chat: {
    url: bot,
    alt: 'Icon of bot'
  },
  work: {
    url: briefcase,
    alt: 'Icon of briefcase'
  },
  contact: {
    url: email,
    alt: 'Icon of email'
  }
}

const work = [
  {
    title: 'Telus Digital Life',
    url: '//telus.com/mobility/accessories',
    copy: 'Nascent worked closely with TELUS to innovate the accessory space, and as a part of Nascent I lead the team that worked on this project. The main problem we looked at for TELUS.com/accessories was how to bring a lifestyle feel and journey on the website. It also presented some fantastic opportunities to release features like real time inventory and create a cohesive mobility cart experience.'
  },
  {
    title: 'Bokeh',
    url: '//bokeh.agency',
    copy: 'This project was an incredible experience for quite a few reasons! Not only because David and Doug are some of the nicest, funniest people I\'ve ever met, but also because they really wanted to try and push the envelope with their website. I implemented physics on this project - not many things are cooler than that. I\'m also incredibly proud of the individual project template as I think it blends functionality and form together in a really delightful way. I built them to offer incredibe flexibility in the CMS, be optimized to load tons of videos, and added some really great animations.'
  },
  {
    title: 'Blunt',
    url: '//blunt.af',
    copy: 'Blunt is a small agency I co-founded with Maxim (maximsiebert.com) with the desire to create unique work. The self-titled website was a lot of fun with the interesting challenge of also writing and laying out the content to describe our goals. V1 of this site had infinite scrolling!'
  },
  {
    title: 'Let\'s Find Momo',
    url: '//letsfindmomo.com',
    copy: 'Filament teamed up with Andrew Knapp and Momo (his dog) to create this playful website. As lead dev on this project I helped make sure the project stayed on time, solved any problems the team had, and focused on building out the gameplay functionality. Built with React and WordPress.'
  },
  {
    title: 'The Gordon Foundation',
    url: '//gordonfoundation.ca',
    copy: 'Another client of Filament\'s. The Gordon Foundation helps empower Northern Canada and protect their waters. For this project we focused on optimization and speed, as Northern Canada\'s internet speeds are kind of awful. As lead dev on this project, I lead user testing and implemented/refactored features that optimized the speed of the site. I also helped the other developers with code reviews and side-by-sides, and taught the team at The Gordon Foundation how to navigate the CMS.'
  }
]

const initialResponse = "Hi there! I'm Heather. You can talk to me about anything, but if I can suggest some topics, you might like to ask more about me, my work, or how you can connect with me in real life! But to start us off, what's your name?"

const dialogFlow = {
  token: '184dc97ff8e442a7991119cf7e45e47f'
}

module.exports = {
  apps,
  icons,
  work,
  dialogFlow,
  initialResponse
}
