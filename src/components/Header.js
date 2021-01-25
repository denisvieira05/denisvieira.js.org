import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Link as LinkRebass } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from './Logo/lislogo.png';
import BrazilImg from './Logo/brazil.svg';
import enImg from './Logo/english.svg';
import { Link } from "gatsby"

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

// const formatLinks = allLinks =>
//   Object.entries(allLinks).reduce(
//     (acc, [key, value]) => {
//       const isHome = key === 'home';

//       return {
//         ...acc,
//         home: value,
//       }

//       // return isHome
//       //   ? {
//       //       ...acc,
//       //       home: value,
//       //     }
//       //   : {
//       //       ...acc,
//       //       links: [...acc.links, { name: capitalize(key), value }],
//       //     };
//     },
//     { links: [], home: null },
//   );


const homeLink = (
  <Link to={'/'}>
    <Image
      src={Logo}
      width="50px"
      alt="Portfolio Logo"
      style={{
        cursor: 'pointer',
      }}
    />
  </Link>
);


const externalLink = (title, link) => (
  <LinkRebass
    href={link}
    target="_blank"
    style={{ textDecoration: 'none', color: 'white', marginLeft: '16px', fontSize: '20px'}}
    >
      {title}
  </LinkRebass>
);

const portugueseLink = (
  <Image
    src={BrazilImg}
    width="25px"
    alt="Brazilian Language"
    style={{
      cursor: 'pointer',
      marginLeft: '15px'
    }}
  />
);


const englishLink = (
  <Image
    src={enImg}
    width="25px"
    alt="English Language"
    style={{
      cursor: 'pointer',
      marginLeft: '60px'
    }}
  />
);

const links = [
  {
    name: 'Sobre mim',
    value: {
      path: '/',
    }
  },
  {
    name: 'Blog',
    value: {
      path: '/blog',
    }
  },
  {
    name: 'Projetos',
    value: {
      path: '/projects',
    }
  },
]


const navLinks = links.map(({ name, value }) => (
  <RouteLink
    key={name}
    goToRoute={value.path}
    selected={location.pathname == value.path ? true : false }
  >
    {name}
  </RouteLink>
))

const mentoriaNavLink = externalLink(
  "Mentoria", "https://www.notion.so/denisvieira/MENTORIA-CARREIRA-PROGRAMADOR-TIPS-AND-TRICKS-PUBLIC-3e1e4e19cc1740028e7102e55984ef18")
const otherServicesNavLink = externalLink("Outros Serviços","https://www.notion.so/denisvieira/OUTROS-SERVI-OS-61aa2098f15b47de90add49e54c65c97")

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <Fragment>
          {homeLink}
          <Flex mr={[0, 3, 5, 7, 9]}>{navLinks} {mentoriaNavLink} {otherServicesNavLink}
          
          {/* {englishLink} {portugueseLink} */}
          </Flex>
        </Fragment>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
