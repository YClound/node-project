const printProgramInfo = require('./module');
const { getCurrentTime } = require('../public/utils');
const argvs = process.argv || [];

setTimeout(() => {
  console.log(argvs[5]);
}, argvs[3] * 1000)

// node 进程结束监听-程序执行完毕/process.exit/throw new Error
process.on('exit', () => {
  console.log('下次再见')
})

printProgramInfo();
console.log('当前时间：', getCurrentTime(), process.argv);


// node事件机制(events)
const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.on('connect', (userName) => {
  console.log(userName, '已连接');
})

emitter.emit('connect', 'node events');