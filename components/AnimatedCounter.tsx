'use cl'
import CountUp from "react-countup"

const AnimatedCounter = ({amount }: {amount: number}) => {
  return (
    <div className="W-full">
     <CountUp 
     duration={2}
      decimal=","
      prefix="FCFA"

     end={amount}/>
     
    </div>
  )
}

export default AnimatedCounter
