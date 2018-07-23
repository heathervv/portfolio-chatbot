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

module.exports = {
  apps,
  icons
}
