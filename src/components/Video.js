import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const plyrProps = {
  source: [ {
    
  }],
  options: {
    controls: ['play-large', 'play', 'progress', 'current-time', 'volume', 'captions', 'settings', 'pip', 'airpalay', 'fullscreen', 'loop'],
    settings: ['captions', 'quality', 'speed', 'loop'],
    autoplay: true

  }}

function Video() {
  return <Plyr {...plyrProps} />
}
export default Video;