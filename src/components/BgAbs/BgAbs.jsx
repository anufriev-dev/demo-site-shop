import './BgAbs.scss';

function BgAbs ({background,height,boxShadow,zindex,top}) {
  return (
    <div className='BgAbs' style={{height: height, background:background,boxShadow: boxShadow, zIndex: zindex,top:top}}></div>
  );
}
export {BgAbs};