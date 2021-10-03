let button = document.getElementById('button')

document.getElementById('button').addEventListener("click", ()=>{
  let item = document.querySelector("input").value;
  fetch(`https://api.unsplash.com/search/photos/?query=${item}&client_id=MQw8nyQzJVCvWXax7lNCFVIHVTuKsXb5zk4O2rYR7Zg`)
    .then(res => res.json()) 
    .then(res => {
      console.log(res);
      document.getElementById('img1').src = res.results[0].urls.regular;
      document.getElementById('img2').src = res.results[1].urls.regular;
      document.getElementById('img3').src = res.results[2].urls.regular;
      document.getElementById('img4').src = res.results[3].urls.regular;
      document.getElementById('img5').src = res.results[4].urls.regular;
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
    })