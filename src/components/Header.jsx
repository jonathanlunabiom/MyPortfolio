export default function Header ({handleChange, currentPage}){
    function handleMenu(e){
        let dropmenuview = document.getElementById('drop-menu').classList
        if(dropmenuview === 'show' ){
            dropmenuview.toggle('hide')
        }else{
            dropmenuview.toggle('show')
        }
    };
    

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
            <div id="menu">
                <img src="src/assets/bar.png" alt="bar" className="hide" id="menu-bar" onClick={(e)=>handleMenu(e)}/>
                <div id="drop-menu" className="hide">
                    <a href="#home" onClick={()=> handleChange('home')} className={currentPage === 'home' ? 'list-url-item-active list-url-item' : 'list-url-item'}>About me</a>
                    <a href="#myportfolio" onClick={()=> handleChange('myportfolio')} className={currentPage === 'myportfolio' ? 'list-url-item-active list-url-item' : 'list-url-item'}>My Portfolio</a>
                    <a href="#contact" onClick={()=> handleChange('')} className={currentPage === '' ? 'list-url-item-active list-url-item' : 'list-url-item'}>Contact</a>
                </div>
            </div>
        </header>
    )
}
