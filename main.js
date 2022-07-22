const $ = selector => document.querySelector(selector)
const socialDiv = $('#social-media')

const toggleHidden = (event) => {
  socialDiv.classList.toggle("hidden")
  console.log(event)
}