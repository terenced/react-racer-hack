import * as React from 'react'
import RacerContext from "../racer/Context";

const ContextName = () => {
  const context = React.useContext(RacerContext);
  return (
    <div>
      {context?.displayName}
    </div>
  )
}

export default ContextName
