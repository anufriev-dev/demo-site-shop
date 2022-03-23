import './BgAbs.scss';

function BgAbs ({background,height,boxShadow}) {
  return (
    <div className='BgAbs' style={{height: height, background:background,boxShadow: boxShadow}}></div>
  );
}
export {BgAbs};