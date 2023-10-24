export default function Header (handleChange){
    return(
        <header>
            <h1 className="title">Jonathan Luna</h1>
            <div className="list-url">
                <a href="/" onClick={()=> handleChange('/')}>
                About me
                </a>
                <a href="/MyPortfolio" onClick={()=> handleChange('/MyPortfolio')}>Portfolio</a>
                <a href="#">Contact</a>
            </div>
        </header>
    )
}
