"use strict";

module.exports = function hill(channelUri, callback) {
  return new Promise((resolve, reject) => {
    if (channelUri === null) {
      reject('You need to specify a channel URI.')
      return callback('You need to specify a channel URI')
    } else if (typeof sentence === 'function') {
      callback = channelUri

      reject('Your channel URI should be a String. Using argument as a callback instead.')
      return callback('Your channel URI should be a String. Using argument as a callback instead.')
    } else {
      resolve(channelUri)
      return callback(null, channelUri)
    }
  });
}