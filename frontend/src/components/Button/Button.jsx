import './Button.scss'
import classNames from 'classnames'

function Button ({text,className,onCl}) {
  const classes = classNames('Button',className) 
  return (
    <button type="submit" className={classes}>{text}</button>
  )
}
export {Button}