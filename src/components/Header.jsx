export default function Header ({handleChange}){
    return(
        <header>
            <h1 className="title">Jonathan Luna</h1>
            <div className="list-url">
                <a href="#home" onClick={()=> handleChange('home')}>About me</a>
                <a href="#myportfolio" onClick={()=> handleChange('myportfolio')}>My Portfolio</a>
                <a href="#contact" on onClick={()=> handleChange('')}>Contact</a>
            </div>
        </header>
    )
}
