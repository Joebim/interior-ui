import React from 'react'

const Loader = () => {

    bodymovin.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
    })
    
  return (
    <div id="loader" className="h-[100vh] w-full"></div>
  )
}

export default Loader