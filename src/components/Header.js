import { useHistory, Link } from 'react-router-dom';

const Header = ({header, searchQuery, setSearchQuery, handleSearch}) => {

    const history = useHistory()
    const handleRoute = () => {
        history.push('/')
    }

    return ( 
        <div className="header">
            <div className="logo">
            <h1>{header}</h1>
            <svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_901_3179)">
<path d="M31 17.9998V25.9998C31 27.5498 29.75 26.8498 29.75 26.8498L25 24.9998V18.9998L29.76 17.2398C29.76 17.2398 31 16.3798 31 17.9998Z" fill="#668077"/>
<path d="M18 1C20.76 1 23 3.24 23 6C23 8.76 20.76 11 18 11C15.24 11 13 8.76 13 6C13 3.24 15.24 1 18 1ZM13 6C13 8.76 10.76 11 8 11C5.24 11 3 8.76 3 6C3 3.24 5.24 1 8 1C10.76 1 13 3.24 13 6Z" fill="#FFE6EA"/>
<path d="M25 30C25 30.55 24.55 31 24 31H2C1.45 31 1 30.55 1 30V14C1 13.45 1.45 13 2 13H24C24.55 13 25 13.45 25 14V30Z" fill="#668077"/>
<path d="M17 20C18.1 20 19 20.9 19 22C19 23.1 18.1 24 17 24C15.9 24 15 23.1 15 22C15 20.9 15.9 20 17 20ZM9 20C10.1 20 11 20.9 11 22C11 23.1 10.1 24 9 24C7.9 24 7 23.1 7 22C7 20.9 7.9 20 9 20Z" fill="#FFC44D"/>
<path d="M17 20C18.104 20 19 20.896 19 22C19 23.104 18.104 24 17 24C15.896 24 15 23.104 15 22C15 20.896 15.896 20 17 20ZM17 20H9M9 20C10.104 20 11 20.896 11 22C11 23.104 10.104 24 9 24C7.896 24 7 23.104 7 22C7 20.896 7.896 20 9 20ZM28 18L29.76 17.24C29.76 17.24 31 16.375 31 18V26C31 27.547 29.747 26.849 29.747 26.849L25 25V30C25 30.553 24.553 31 24 31H2C1.447 31 1 30.553 1 30V14C1 13.447 1.447 13 2 13H24C24.553 13 25 13.447 25 14V22M20.9727 10C22.1967 9.089 22.9997 7.644 22.9997 6C22.9997 3.238 20.7617 1 17.9997 1C15.2387 1 12.9997 3.238 12.9997 6M12.9997 6C12.9997 7.644 13.8037 9.089 15.0277 10M12.9997 6C12.9997 7.644 12.1967 9.089 10.9727 10M12.9997 6C12.9997 3.238 10.7617 1 7.9997 1C5.2387 1 2.9997 3.238 2.9997 6C2.9997 7.644 3.8037 9.089 5.0277 10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_901_3179">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
      </div> 
      <div className='header-links'>
        <Link to='/'>Home</Link>
        <Link to='/favourites'>favourites</Link>
      </div>
            <form onSubmit={handleSearch}>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Movies..."></input>
            <button onClick={handleRoute} type="submit">Search</button>
            
            </form>
            
        </div>
     );
}
 
export default Header;