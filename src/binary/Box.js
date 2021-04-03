import "./css/Box.css"
import {useSpring, animated} from 'react-spring';

function Box(prop){
  const props = useSpring({
  to: async (next, cancel) => {
    await next({opacity: 1, color: '#ffaaee',transform: 'translate3d(0,0px,0)'})
    await next({opacity: 1, color: 'rgb(14,26,19)'})
  },
  from: {opacity: 0, color: 'red',transform: 'translate3d(0,-40px,0)'},
})
  return(
    // <button className="Box" type="text">{prop.num}<button/>
    <animated.div style={props} className="Box">{prop.num}</animated.div>
  )
}

export default Box;
