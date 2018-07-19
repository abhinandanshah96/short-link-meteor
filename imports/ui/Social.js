import React from 'react';


export default class Social extends React.Component { 
	render(){
	return (
	<div className="socio-body container">
  <a href="https://twitter.com/abhioxic" className="social-container twitter">
    <div className="social-cube">
      <div className="front">
        Twitter
      </div>
      <div className="bottom">
        @abhioxic
      </div>
    </div>
  </a>

  <a href="https://fb.com/abhinandanshah96" className="social-container facebook">
    <div className="social-cube">
      <div className="front">
        Facebook
      </div>
      <div className="bottom">
        Abhinandan Shah
      </div>
    </div>
  </a>


  <a href="https://github.com/abhinandanshah96" className="social-container github">
    <div className="social-cube">
      <div className="front">
        GitHub
      </div>
      <div className="bottom">
        abhinandanshah96
      </div>
    </div>
  </a>


</div>
)
}
}