import React from 'react'
import Particles from 'react-particles-js'

const ParticlesScript = () => {
    return (
        <div
    style={{
		display: 'grid',
      	position: "absolute",
    //   top: 0,
	  	width: "100%",
      	height: "100%",
	//   zIndex: "5",
    }}
  >
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50,
	            "density": {
	                "enable": true,
	                "value_area": 1250
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1.2,
				"direction": 'bottom',
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	                // "circle"
	            ],
	            "image": [
	                {
	                    "src": require("../../images/img-16.png").default,
	                    "height": 5,
	                    "width": 5
	                },
	                {
	                    "src": require("../../images/img-29.png").default,
	                    "height": 5,
	                    "width": 5
	                },
	                {
	                    "src": require("../../images/img-17.png").default,
	                    "height": 5,
	                    "width": 5
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 40,
	            "random": true,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 40,
	                "sync": false
	            }
	        }
	    },
		"interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    },

	    "retina_detect": false
	}} />
  </div>
    )
}

export default ParticlesScript;
