import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Jamie Duncan />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            // If the text is fully typed, clear the interval and call onComplete
            if (index > fullText.length) {
                clearInterval(interval);
                setText(fullText); // Ensure the full text is displayed
                setTimeout(() => {
                    onComplete(); // Trigger the callback after 1 second
                }, 1000);
            }
        }, 100);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [onComplete]); // Dependency array ensures the effect runs only on mount

    return (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1">|</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-purple-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};
