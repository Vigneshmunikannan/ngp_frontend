import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
const ProductList = () => {
    const { category } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function speak(text) {
        const voices = speechSynthesis.getVoices();
        const indianEnglishVoice = voices.find(voice => voice.lang === 'en-IN');
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.voice = indianEnglishVoice;
        speechSynthesis.speak(utterance);
      }


    useEffect(() => {
        fetch(`http://localhost:4000/cate/${category}`)
            .then(response => response.json())
            .then(data => {

                console.log("data----"+data)
                
                setCategoryProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [category]);
    useEffect(()=>{
        categoryProducts.map(data=>{
            speak(data.title+"Description"+data.description)
        })
        speak("To place order Give Voice command Call space YourNumber our executive will call you soon")
    },[categoryProducts])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <Nav/>
            <div className="product-list-container1">
            <h2 >Products in {category}</h2>
            <ul className="product-list1">
                {categoryProducts.map(product => (
                    <li key={product._id} className="product-item1">
                        <img src={product.img} alt={product.title} />
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default ProductList;
