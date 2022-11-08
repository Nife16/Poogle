import logo from '../usvote.webp'
import '../css/components/main-well.css'

const MainWell = () => {
    return (
        <div className="flex-col center">
            <div className="logo flex-row">
                <img src={logo} />
            </div>
            <div className="search-bar flex-row">
                <input type='text' className='search-box' />
            </div>
            <div className="feelin-lucky flex-row">
                <button className='center'>
                    Poogle Search
                </button>
                <button className='center'>
                    Im feelin plucky
                </button>
            </div>
        </div>
    )
}

export default MainWell