import React, { useState, useEffect } from 'react'
import graphic from '../images/screensaver.gif'
import '../css/screensaver.css'

const Screensaver = () => {
    const [screensaverIsVisible, changeScreensaverVisibility] = useState(false)
    const classNames = [
        'screensaver',
        screensaverIsVisible ? 'screensaver-visible' : 'screensaver-not-visible'
    ]

    useEffect(() => {
        const originalDocTitle = document.title
        let timeout

        // Set screensaver if user stops moving for X seconds
        document.onmousemove = () => {
            clearTimeout(timeout)
            setScreensaver(originalDocTitle, false)

            timeout = setTimeout(() => {
                setScreensaver("Zzz... 🌚", true)
            }, 30000)
        }

        // Set screensaver if user changes tab
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                setScreensaver("Zzz... 🌚", true)
            } else {
                setScreensaver(originalDocTitle, false)
            }
        })
    }, [])

    const setScreensaver = (title, visibility) => {
        document.title = title
        changeScreensaverVisibility(visibility)
    }

    return (
        <div className={classNames.join(' ')} style={{ backgroundImage: `url(${graphic})` }} />
    )
}

export default Screensaver