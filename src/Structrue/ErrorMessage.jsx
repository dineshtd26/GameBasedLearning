import React, { useState, useEffect } from 'react';
import {Text} from "@chakra-ui/react";

const ErrorMessage = () => {
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1366) {
                setIsErrorVisible(true); 
                document.body.style.overflow = 'hidden';
            } else {
                setIsErrorVisible(false);
                document.body.style.overflow = 'auto';
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        isErrorVisible && (
            <div className="error-overlay">
                <div className="error-message">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" id="exclamation-triangle" className='svg'><path fill="#FF0000" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"></path></svg>
                    <Text color="red" fontSize={20} as='b' >Error : Screen Size Too Small</Text>
                    <Text>Please use a larger screen for better experience.</Text>
                </div>
            </div>
        )
    );
};

export default ErrorMessage;
