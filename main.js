const $ = selector => document.querySelector(selector)
const socialDiv = $('#social-media')

const toggleHidden = () => {
  socialDiv.classList.toggle("hidden")
}