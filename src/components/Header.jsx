export default function Header ({handleChange, currentPage}){
    return(
        <header>
            <h1><a href="/" id="title">Jonathan Luna</a></h1>
            <div>
                <div className="list-url">
                    <a href="#home" onClick={()=> handleChange('home')} className={currentPage === 'home' ? 'list-url-item-active list-url-item' : 'list-url-item'}>About me</a>
                    <a href="#myportfolio" onClick={()=> handleChange('myportfolio')} className={currentPage === 'myportfolio' ? 'list-url-item-active list-url-item' : 'list-url-item'}>My Portfolio</a>
                    <a href="#contact" onClick={()=> handleChange('')} className={currentPage === '' ? 'list-url-item-active list-url-item' : 'list-url-item'}>Contact</a>
                </div>
            </div>
            <img src="src/assets/bar.png" alt="bar" className="hide" id="menu-bar"/>
        </header>
    )
}
