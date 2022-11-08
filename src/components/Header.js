import '../css/components/header.css'

const Header = () => {

    return (
        <div className="flex-row header-padding">
            <div className="half-width">
                <a href="/another-page" className='firstAnchor center'>Another Page</a>
                <a href="/" className='center'>Home</a>
            </div>
            <div className="half-width right">
                <a href="#" className='center'>Gmail</a>
                <a href="#" className='center'>Images</a>
                <div className='margin-vert'>
                    <div className='letter-button center'>
                        N
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header