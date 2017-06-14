const token = '3fb8962312d82869a0529ae8b2c45f8247a94c43'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
