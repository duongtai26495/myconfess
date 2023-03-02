import React from 'react'
import JoinWithSocialButton from './JoinWithSocialButton'
import fb_logo from '../../assets/images/fb_icon.png'
import gg_logo from '../../assets/images/gg_icon.png'
import ptr_logo from '../../assets/images/prs_icon.png'
const SocialAuthen = () => {
    return (
        <div className='columns-3 gap-3 my-5 '>
            <JoinWithSocialButton
                icon={gg_logo}
                style={"text-sm bg-white text-black"}
            />
            <JoinWithSocialButton
                icon={fb_logo}
                style={"text-sm bg-white text-white"}
            />
            <JoinWithSocialButton
                icon={ptr_logo}
                style={"text-sm bg-white text-white"}
            />
        </div>
    )
}

export default SocialAuthen