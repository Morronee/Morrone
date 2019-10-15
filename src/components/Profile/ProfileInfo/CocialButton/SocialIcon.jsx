import React from 'react';
import s from './../ProfileInfo.module.css'


const SocialIcon = (props) => {

    let d = props.profiles
    return (
                <div className={s.socialBlock}>
                    <ul className={s.socialList}>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-globe-3.png&r=0&g=0&b=0" alt="12312" /></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0" alt="" /></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-facebook-4.png&r=0&g=0&b=0" alt="" /></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-instagram-4.png&r=0&g=0&b=0" alt="" /></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-twitter-4.png&r=0&g=0&b=0" alt="" /></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-vk-4.png&r=0&g=0&b=0" alt="" /></li>
                        <li><img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-youtube-9.png&r=0&g=0&b=0" alt="" /></li>
                    </ul>
                </div>
    )
}
export default SocialIcon;