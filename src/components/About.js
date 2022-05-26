import React from 'react'

function About(props) {
   
  return (
      <>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>About</h2>
        This website is owned by and was made by 'Developer - Yash Mundankar' . You can look source code at github.
        </div>
      </>
  )
}

export default About