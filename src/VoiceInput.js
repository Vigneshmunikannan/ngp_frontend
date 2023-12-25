import React, { useState, useEffect } from 'react';

const VoiceInput = ({ handleTranscriptChange }) => {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false); // Track recognition state
    const [recognition, setRecognition] = useState(null); // Store the recognition instance

    useEffect(() => {
        const newRecognition = new window.webkitSpeechRecognition();
        newRecognition.continuous = true;
        newRecognition.onresult = (event) => {
            const newTranscript = event.results[event.results.length - 1][0].transcript;
            handleTranscriptChange(newTranscript);
            setTranscript(newTranscript);
        };
        setRecognition(newRecognition);
    }, [handleTranscriptChange]);

    const toggleListening = () => {
        if (recognition) {
            if (!isListening) {
                recognition.start();
            } else {
                recognition.stop();
            }
            setIsListening(!isListening);
        }
    };

    const handleKeyPress = (event) => {
        // Only trigger the toggleListening function when the pressed key is not an input key
        if (!event.target.matches('input, textarea')) {
            toggleListening();
        }
    };

    // Attach key press event listener to the window
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    if (!recognition) {
        return <p>Initializing...</p>;
    }

    return (
        <div>
            <button onClick={toggleListening} className="voice-input-button">
                {isListening ? 'Stop Listening' : 'Start Listening'}
            </button>
            <p>Transcript: {transcript}</p>
        </div>
    );
};

export default VoiceInput;
