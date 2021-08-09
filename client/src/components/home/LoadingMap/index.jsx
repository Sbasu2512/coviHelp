import './style.css'
import loadingImg from './images/status.png'

const LoadingMap = () => {
  return (
    <div className='loading-map'>
      <img
        className="loading-image"
        src={loadingImg}
        alt="Loading"
      />
    </div>
  )
};

export default LoadingMap;