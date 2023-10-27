export default function Header ({handleChange}){
    return(
        <header>
            <h1 className="title">Jonathan Luna</h1>
            <div>
                <div className="list-url">
                    <a href="#home" onClick={()=> handleChange('home')} className="list-url-item">About me</a>
                    <a href="#myportfolio" onClick={()=> handleChange('myportfolio')} className="list-url-item">My Portfolio</a>
                    <a href="#contact" on onClick={()=> handleChange('')} className="list-url-item">Contact</a>
                </div>
            </div>
        </header>
    )
}
