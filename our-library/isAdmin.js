const cookie = require('cookie')

function isAdmin(event) {
  const incomingCookie = cookie.parse(event.headers.cookie || "")
  if (incomingCookie?.petadoption == "gadfhsgfdwsfjgdhbgfy4584376548yg458ght4y84g") {
    return true
  }
  return false

}

module.exports = isAdmin