import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router"

function Toggle() {
    const router = useRouter();
    const [toggle, setToggle] = useState('en');
    const toggleClass = " transform translate-x";
    

    function changeLog() {
        if (toggle == 'es') {
            setToggle('en')
            router.push(router.pathname, router.pathname, {
                locale: toggle
            })
        } else {
            setToggle('es')
            router.push(router.pathname, router.pathname, {
                locale: toggle
            })
        }
    }



    return (
        <div className="flex">
            <p className="mx-2 uppercase">en</p>
                <div
                    className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#a2dfd2] rounded-full p-1 cursor-pointer"
                    onClick={changeLog}>

                    <div
                        className={
                            "bg-[#15a185] md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                            (toggle == 'es' ? toggleClass : 'transform translate-x-5')
                        }
                    >
                    </div>
                </div>
                <p className="mx-2 uppercase">es</p>
        </div>
    );
}

export default Toggle;
