import Picture1 from '/wellness-1.png';
import Picture2 from '/5.jpg';
import Picture3 from '/11.jpg';
import Picture4 from '/2.webp';
import Picture5 from '/1.webp';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scaleCenter = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scaleOthers = useTransform(scrollYProgress, [0, 1], [1, 1]); // ثابت نگه‌داشتن بقیه تصاویر
    
    const pictures = [
        {
            src: Picture2, // بالا
            scale: scaleOthers,
            className: 'top-[5%] left-[40%] transform -translate-x-1/2 w-[15vw] h-[40vh]'
        },
        {
            src: Picture3, // پایین
            scale: scaleOthers,
            className: 'top-[75%] left-[40%] transform -translate-x-1/2 w-[15vw] h-[40vh]'
        },
        {
            src: Picture4, // چپ
            scale: scaleOthers,
            className: 'top-[35%] left-[20%] transform -translate-y-1/2 w-[15vw] h-[50vh]'
        },
        {
            src: Picture5, // راست
            scale: scaleOthers,
            className: 'top-[35%] left-[65%] transform -translate-y-1/2 w-[15vw] h-[50vh]'
        },
        {
            src: Picture1, // مرکز
            scale: scaleCenter,
            className: 'top-[50%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vh] z-100'
        },
    ];

    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="sticky overflow-hidden top-0 h-[100vh] ">
                {pictures.map(({ src, scale, className }, index) => (
                    <motion.div
                        key={index}
                        style={{ scale }}
                        className={`absolute flex items-center justify-center ${className}`}
                    >
                        <div className="relative w-full h-full ">
                            <img
                                src={src}
                                alt={`image-${index}`}
                                placeholder="blur"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
