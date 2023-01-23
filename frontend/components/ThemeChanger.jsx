import { useIsMounted } from '@/hooks/useIsMounted';
import { useTheme } from 'next-themes';
import React from 'react'
import { BiMoon, BiSun } from "react-icons/bi";

function ThemeChanger() {
    const mounted = useIsMounted();
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        
        if(!mounted) return;

        const currentTheme = theme === 'system'? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <div className='p-1 border rounded-lg text-dark-50'>
                    <BiSun
                        size={20}
                        onClick={() => setTheme('light')}
                    />
                </div>
            )
        } else {
            return (
                <div className='p-1 border rounded-lg text-gray-200'>
                    <BiMoon
                        className='text-white'
                        size={20}
                        onClick={() => setTheme('dark')}
                    />
                </div>
            )
        }

    }


    return (
        <div>
            {renderThemeChanger()}
        </div>
    )
}

export default ThemeChanger