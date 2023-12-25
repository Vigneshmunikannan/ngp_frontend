import React from "react";
import Nav from "./Nav";
import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
export default function Home() {
    const [categories, setCategories] = React.useState([]);
   const [redirect,setredirect]=React.useState({
    loc:"",
    val:false,
   })
   function speak(text) {
    const voices = speechSynthesis.getVoices();
    const indianEnglishVoice = voices.find(voice => voice.lang === 'en-IN');
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = indianEnglishVoice;
    speechSynthesis.speak(utterance);
  }

    useEffect(() => {
        axios.get('http://localhost:4000/cate')
            .then(response => {
                console.log(response.data.categories); // Log the response data
                setCategories(response.data.categories);
                categories.map(cat=>{
                    console.log(cat._id+"&&&&&&&")
                    speak(cat._id)
                })
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(()=>{
        categories.map(cat=>{
            console.log(cat._id+"&&&&&&&")
            speak(cat._id)
        })
    },[categories])

function change(event){
    const selectedCategory = event.target.getAttribute("data-category");
    console.log(event.target+"****")
    console.log("-----------"+selectedCategory)
    setredirect(prev => ({ ...prev,loc:selectedCategory,val:selectedCategory}));
}
    return (
        <div>
            { redirect.val && <Navigate to={`/category/${redirect.loc}`} />}
            <Nav />
            <div className="category-list">
                {categories.map(category => (
                    <div className="category-item" key={category._id} data-category={category._id} onClick={change}>
                        <img src={category.categoryimg} alt={category._id} data-category={category._id} onClick={change}/>
                        <p data-category={category._id} onClick={change} >{category._id}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}