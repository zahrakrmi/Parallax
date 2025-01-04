import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from '@studio-freight/lenis'; // مطمئن شوید Lenis نصب شده است
import picture1 from '/4.jpg'
import picture2 from '/11.jpg'
import picture3 from '/44.jpg'

export default function Text() {
    useEffect(() => {
        const lenis = new Lenis(); // ایجاد یک instance از Lenis

        function raf(time) {
            lenis.raf(time); // فراخوانی رندر Lenis
            requestAnimationFrame(raf); // ادامه درخواست انیمیشن
        }

        requestAnimationFrame(raf); // شروع loop

        return () => {
            // اگر نیاز به cleanup است
        };
    }, []);

    const container = useRef()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })




    return (
        <section className='overflow-hidden'>
            <div className='h-[100vh]'></div>
            <div ref={container}>
                <Slider src={picture1} left='-55%' progress={scrollYProgress} direction='left' />
                <Slider src={picture2} left='-15%' progress={scrollYProgress} direction='right' />
                <Slider src={picture3} left='-40%' progress={scrollYProgress} direction='left' />
            </div>
            <div className="h-[100vh]"></div>
        </section>
    );
}

const Slider = ({ direction, left, progress, src }) => {
    const dir = direction == 'left' ? -1 : 1
    const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir])
    return (
        <motion.div className='flex relative whitespace-nowrap' style={{ left, x }}>

            <Phrase src={src} />
            <Phrase src={src} />
            <Phrase src="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/586f6200-9e45-41e2-a060-2a4c95cfc4c3/raw/story-2jpg.jpeg" />
        </motion.div>
    )
}

const Phrase = ({ src }) => {
    return (
        <div className="flex gap-5 px-5 items-center">
            <p className="text-[7.5vw] translate-y-[-10%]">Art Objects</p>
            <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
                <img src={src} alt="Example" style={{ objectFit: "cover" }} />
            </span>
        </div>
    );
};
