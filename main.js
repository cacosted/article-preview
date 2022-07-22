const $ = selector => document.querySelector(selector)
const socialDiv = $('#social-media')

document.querySelectorAll('#btn-share').forEach(element => {
    element.addEventListener('click', event => {
      socialDiv.classList.toggle("hidden")
    })
  }
)