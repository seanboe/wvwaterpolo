// import './index.css'

function redirect(location) {

  console.log("right here")

  let base_url = window.location.origin

  if (location == 0) {
    window.location.replace(base_url)
  }
  else if (location == 1) {
    window.location.replace(base_url + "/coaches.html")
  }
  else if (location == 2) {
    window.location.replace(base_url + "/roster.html")
  }
  else if (location == 3) {
    window.location.replace(base_url + "/schedule.html")
  }
}