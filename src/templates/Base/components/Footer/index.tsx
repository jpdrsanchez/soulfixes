import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import {
  IoLogoWhatsapp,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram
} from 'react-icons/io5'

import { menuItems } from 'shared/constants'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterAbout>
          <Image
            src="/images/footer-logo.svg"
            width={81}
            height={74}
            alt="soulfixes"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor quis
            non eget consequat dui nascetur. Egestas amet diam gravida in urna
            ultricies eget.
          </p>
        </S.FooterAbout>
        <S.FooterMenu>
          <h3>Navegue</h3>
          <ul>
            {menuItems
              .filter(item => !item.hasItems)
              .map(item => (
                <li key={uuid()}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </S.FooterMenu>
        <S.FooterMenu>
          <h3>Explore</h3>
          <ul>
            {menuItems
              .filter(item => item.hasItems)
              .map(item =>
                item.items?.map(subitem => (
                  <li key={uuid()}>
                    <Link href={`${item.link}${subitem.link}`}>
                      {subitem.name}
                    </Link>
                  </li>
                ))
              )}
          </ul>
        </S.FooterMenu>
        <S.FooterSocial>
          <h3>Nossas Redes</h3>
          <ul>
            <li>
              <a href="https://whatsapp.com.br">
                <IoLogoWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://twitter.com.br">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="https://instagram.com.br">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="https://facebook.com.br">
                <IoLogoFacebook />
              </a>
            </li>
          </ul>
        </S.FooterSocial>
      </S.FooterContainer>
      <S.FooterNoweb>
        <p>© Copyright 2021 - Soul Fixes - Todos os direitos reservados</p>
        <a href="https://www.noweb.io/">
          Desenvolvido por{' '}
          <span className="visually-hidden">Noweb Publicidade</span>
          <img src="https://www.noweb.io/shared/favicon.png" alt="Noweb" />
        </a>
      </S.FooterNoweb>
    </S.Footer>
  )
}

export default Footer
