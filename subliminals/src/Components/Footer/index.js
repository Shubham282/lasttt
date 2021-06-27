import React from 'react'
import { FaInstagram,FaFacebook,FaEnvelope} from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkTitle,FooterLinkItems,FooterLink,
 SoacialMediaWrap,SocialIconLink,SocialIcons,SocialMedia,WebsiteRights,} from './FooterElements'



const Footer = () => {

    

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        
                        
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                       
                        <FooterLinkItems>
                            <FooterLinkTitle id="contact">Contact Us</FooterLinkTitle>
                                <FooterLink href="itssubliminals@gmail.com/" target="_blank"> itssubliminals@gmail.com</FooterLink>
                                <FooterLink >8855060175</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SoacialMediaWrap>
                       
                        <WebsiteRights>Copyright © {new Date().getFullYear()} |
                        All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="mailto:itssubliminals@gmail.com"  aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/sublliminalls/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaEnvelope/></SocialIconLink>
                        </SocialIcons>
                    </SoacialMediaWrap>
                </SocialMedia>
            </FooterWrap>           
        </FooterContainer>
    )
}

export default Footer
