import React from "react"
import {Link} from "react-router-dom"
import VoiceInput from "./VoiceInput"
import VoiceNavigation from "./VoiceNavigation"
export default function Nav() {
    const [transcript, setTranscript] = React.useState('');
    const handleTranscriptChange = (newTranscript) => {
        setTranscript(newTranscript);
    };
    return (
        <nav className="navigation">
            <div className="logo">YourLogo</div>
            <ul className="nav-list">
                <li><Link to='/'>Home</Link></li>
                <li>
                   <li><Link to='/categories'>Categories</Link></li>
                </li>
                {/* <li><div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        // value={searchQuery}
                        // onChange={handleInputChange}
                    />
                    {/* onClick={handleSearch} 
                    <button >Search</button>
                </div></li> */}
                <li><VoiceInput handleTranscriptChange={handleTranscriptChange} />
                    <VoiceNavigation transcript={transcript} />
                </li>
            </ul>
        </nav>
    )
}