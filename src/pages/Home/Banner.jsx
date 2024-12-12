import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import team1 from '../../assets/images/happy-team.jpg'
import team2 from '../../assets/images/pHappy.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{y:[30, 60, 30]}}
                        transition={{duration: 10, repeat: Infinity}}
                        className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-[5px] border-blue-500 border-t border-r shadow-2xl" />

<motion.img
                        src={team2}
                        animate={{x:[100, 130, 100]}}
                        transition={{duration: 10, repeat: Infinity}}
                        className="max-w-sm w-64  rounded-t-[40px] rounded-br-[40px] border-[5px] border-blue-500 border-t border-r shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}

                        className="text-5xl font-bold">Latest <motion.span
                            animate={{color: ['#f4870d', '#069d91 ', '#eb4605']}}
                            transition={{duration: 1.5, repeat: Infinity}}
                        >Jobs </motion.span>For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;