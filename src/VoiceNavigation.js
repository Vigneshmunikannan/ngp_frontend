import React, { useEffect, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
const VoiceNavigation = ({ transcript }) => {
  const [redirect, setRedirect] = React.useState({
    home: false,
    cart: false,
    categories: false,
    BoysBlazer: false,
    GirlShoe: false,
    GirlsDress: false,
    GirlsWatch: false,
    Boysshoe:false,
    BoysShirt:false
  });

  

  function speak(text) {
    const voices = speechSynthesis.getVoices();
    const indianEnglishVoice = voices.find(voice => voice.lang === 'en-IN');

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = indianEnglishVoice;
    speechSynthesis.speak(utterance);
  };
  function call(text) {
    speak(text);
  }

  async function  submit(ph)
  {
    try{
      const res= await axios.post("http://localhost:4000/send-email",{
        ph:ph
      })
      console.log("done")
    }
    catch (err){
      console.log("error  "+err)
    }
  }


  
  const handleVoiceCommand = useCallback(() => {
    console.log("hello")
    const str = transcript.replace(/\.$/, '');

    if ((str.toLowerCase() === 'go to cart') || (str.toLowerCase() === 'go to car') || (str.toLowerCase() === 'card') || (str.toLowerCase() === 'go to party') || (str.toLowerCase() === 'go to card')) {
      setRedirect(prev => ({ ...prev, cart: true }));
    } else if (str.toLowerCase() === 'go to home') {
      setRedirect(prev => ({ ...prev, home: true }));
    } else if ((str.toLowerCase() === 'go to categories') || ((str.toLowerCase() === 'go to category')) || (str.toLowerCase() === 'categories') || (str.toLowerCase() === 'category')) {
      setRedirect(prev => ({ ...prev, categories: true }));
    }
    else if ((str.toLowerCase() === 'go to boys blazer') || (str.toLowerCase() === 'go to voice blazer')) {

      setRedirect(prev => ({ ...prev, BoysBlazer: true }))
    }
    else if ((str.toLowerCase() === 'go to girl shoe')) {

      setRedirect(prev => ({ ...prev, GirlShoe: true }))
    }
    else if ((str.toLowerCase() === 'go to girls dress')) {

      setRedirect(prev => ({ ...prev, GirlsDress: true }))
    }
    else if ((str.toLowerCase() === 'go to girls watch')||(str.toLowerCase() === 'go to watch') ) {

      setRedirect(prev => ({ ...prev, GirlsWatch: true }))
    }
    else if ((str.toLowerCase() === 'go to boys shoe')) {

      setRedirect(prev => ({ ...prev, Boysshoe: true }))
    }
    else if ((str.toLowerCase() === 'go to boys shirt')) {

      setRedirect(prev => ({ ...prev, BoysShirt: true }))
    }
    else if(str.toLowerCase().startsWith("call")){
      const ph="5987309879034"
      submit(ph)
    }
    else {
      call("Comment Not Valid");
    }
  }, [transcript]);

  useEffect(() => {
    if (transcript) {
      handleVoiceCommand();
    }
  }, [transcript, handleVoiceCommand]);

  return (
    <div>
      {redirect.home && <Navigate to="/" />}
      {redirect.categories && <Navigate to="/categories" />}
      {redirect.cart && <Navigate to="/cart" />}

      {redirect.BoysBlazer && <Navigate to="/category/Boys Blazer" />}
      {redirect.GirlShoe && <Navigate to="/category/Girl Shoe" />}
      {redirect.GirlsDress && <Navigate to="/category/Girls Watch" />}
      {redirect.GirlsWatch && <Navigate to="/category/Girls Dress" />}
      {redirect.GirlsWatch && <Navigate to="/category/Boys shoe" />}
      {redirect.GirlsWatch && <Navigate to="/category/Boys Shirt" />}
    </div>
  );
};

export default VoiceNavigation;
