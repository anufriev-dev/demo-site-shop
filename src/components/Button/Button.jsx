import './Button.scss';

function Button ({text}) {
  return (
    <button type='submit' className="Button">{text}</button>
  );
}
export {Button};