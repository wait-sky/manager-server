// 日志存储
const log4js = require('log4js')

const levels = {
  'trace': log4js.levels.TRACE,
  'debug': log4js.levels.DEBUG,
  'info': log4js.levels.INFO,
  'warn': log4js.levels.WARN,
  'error': log4js.levels.ERROR,
  'fatal': log4js.levels.FATAL
}

log4js.configure({
  appenders: {
    console: { type: 'console' },
    info: {
      type: 'file',
      filename: 'logs/all-logs.log'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true // filename + pattern 的组合体
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug'},
    info: {
      appenders: ['console', 'info'],
      level: 'info'
    },
    error: {
      appenders: ['console', 'error'],
      level: 'error'
    }
  }
})

// debug 日志信息的输出
exports.debug = content => {
  let logger = log4js.getLogger('debug')
  logger.level = levels.debug
  logger.debug(content)
}

// error 日志信息的输出
exports.error = content => {
  let logger = log4js.getLogger('error')
  logger.level = levels.error
  logger.error(content)
}

// info 日志信息的输出
exports.info = content => {
  let logger = log4js.getLogger('info')
  logger.level = levels.info
  logger.info(content)
}