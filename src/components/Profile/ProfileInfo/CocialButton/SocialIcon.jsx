import React from 'react';
import s from './../ProfileInfo.module.css'


const SocialIcon = (props) => {

    let socialIcons = {
        site: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-globe-3.png&r=0&g=0&b=0',
        gitHub: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0',
        fb: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-facebook-4.png&r=0&g=0&b=0',
        instagram: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-instagram-4.png&r=0&g=0&b=0',
        twitter: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-twitter-4.png&r=0&g=0&b=0',
        vk: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-vk-4.png&r=0&g=0&b=0',
        youtube: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-youtube-9.png&r=0&g=0&b=0'

    }

    let p = props.contacts
    return (
        
                <div className={s.socialBlock}>
                    <ul className={s.socialList}>

                        {p.website !== null 
                            ? <a href={p.website}><li><img src={socialIcons.site} alt="website" /></li></a>
                            : null}

                        {p.github !== null 
                            ?<li><img src={socialIcons.gitHub} alt="" /></li>
                            : null}

                        {p.facebook !== null
                            ? <li><img src={socialIcons.fb} alt="facebook" /></li>
                            : null}

                        {p.instagram !== null
                            ? <a href={'//' + p.instagram}><li><img src={socialIcons.instagram} alt="" /></li></a>
                            : null}

                        {p.twitter !== null
                            ? <li><img src={socialIcons.twitter} alt="" /></li>
                            : null}

                        {p.vk !== null 
                            ? <a href={'//' + p.vk}><li><img src={socialIcons.vk} alt="" /></li></a>
                            : null}

                        {p.youtube !== null
                            ? <li><img src={socialIcons.youtube} alt="" /></li>
                            : null}

                    </ul>
                </div>
    )
}
export default SocialIcon;