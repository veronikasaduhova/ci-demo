const status = document.getElementById('status')
const btn = document.getElementById('btn')

function check() {
  status.textContent = "OK " + new Date().toLocaleTimeString()
}

btn.addEventListener('click', check)
check()