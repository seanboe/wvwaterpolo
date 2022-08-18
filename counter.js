// import './index.css'

function redirect(page) {

  console.log("right here")

  let base_url = window.location.origin

  if (page == 1) {
    window.location.replace(base_url)
  }
}