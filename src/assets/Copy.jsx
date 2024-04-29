import * as React from 'react'
const Copy = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <path
      stroke='#657081'
      strokeWidth={2}
      d='M11.667 5.833c0-.464 0-.697-.039-.89a2 2 0 0 0-1.571-1.571c-.193-.039-.426-.039-.89-.039H7.333c-1.885 0-2.828 0-3.414.586-.586.586-.586 1.529-.586 3.414v1.834c0 .464 0 .697.039.89a2 2 0 0 0 1.571 1.571c.193.039.426.039.89.039'
    />
    <rect
      width={8.333}
      height={8.333}
      x={8.333}
      y={8.333}
      stroke='#657081'
      strokeWidth={2}
      rx={2}
    />
  </svg>
)
export default Copy
