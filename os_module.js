const os = require("os");

// Get Info about current user

const user = os.userInfo();
console.log(user);

// method to get the system uptime

console.log(`The System Uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  userInfo: os.userInfo(),
};

console.log(currentOS);
