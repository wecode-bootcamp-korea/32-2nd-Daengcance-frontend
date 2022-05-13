import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = ({ setIsDarkMode, isDarkMode }) => {
  const [scrollY, setScrollY] = useState(0);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChatValue, setIsChatValue] = useState(false);

  const isBtnVisible = scrollY > 150;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
  };

  return (
    <NavBox scrollY={scrollY} darkMode={isDarkMode}>
      <NavItem>
        <Link to="/">
          <Logo
            src={isDarkMode ? `/images/Logo.png` : `/images/Logo3.png`}
            alt="HomepageLogo"
          />
        </Link>
        <NavMenu darkMode={isDarkMode}>
          <Menu darkMode={isDarkMode}>
            <Link to="/review">이용 후기</Link>
          </Menu>
          <Menu
            darkMode={isDarkMode}
            onClick={() => {
              setIsChatValue(!isChatValue);
            }}
          >
            채팅 문의
          </Menu>
          <Login darkMode={isDarkMode}>
            <Link to="/login">로그인</Link>
          </Login>
        </NavMenu>
      </NavItem>
      <DarkModeBtn
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        darkMode={isDarkMode}
        src="/images/DarkMode2.png"
      />
      <Upbtn darkMode={isDarkMode} onClick={scrollUp} btnVisible={isBtnVisible}>
        <Btn src={isDarkMode ? `/images/btn2.png` : `/images/btn.png`} />
      </Upbtn>

      {isChatValue && (
        <Chat>
          <iframe
            src="https://service.dongledongle.com/DaengCance"
            frameborder="0"
            width="100%"
            height="500"
          />
        </Chat>
      )}
    </NavBox>
  );
};

export default Nav;

const NavBox = styled.nav`
  position: sticky;
  display: flex;
  top: 0;
  height: 86px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.darkMode ? 'rgba(0,0,0,80%)' : 'rgba(255,255,255,90%)'};
  border-bottom: ${props => (props.scrollY > 0 ? '1px solid #e5e5e5' : 'none')};
  transition: all 200ms ease-in;
`;

const NavItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  @media screen and (max-width: 900px) {
    width: 90px;
    margin-left: 15%;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  padding: 4px 10px;
  justify-content: space-between;
  align-items: center;
  color: ${props => (props.darkMode ? 'white' : '#393c47;')};
  @media screen and (max-width: 900px) {
    margin-right: 10%;
  }
`;

const Menu = styled.li`
  padding: 6px 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.btnColor};
  }
  &:not(:last-child) {
    &::after {
      content: ' ';
      border-right: ${props =>
        props.darkMode ? '1px solid white;' : '1px solid black;'};
      margin-left: 20px;
    }
  }
`;

const Login = styled(Menu)`
  border: ${props =>
    props.darkMode ? '0.8px solid white;' : '0.8px solid black;'};
  border-radius: 14px;
  margin-left: 10px;
  transition: all 90ms;
  &:hover {
    border: 0.8px solid ${({ theme }) => theme.btnColor};
    color: ${({ theme }) => theme.btnColor};
    transition: all 0.2s;
  }
`;

const Upbtn = styled.div`
  position: fixed;
  width: 70px;
  height: 70px;
  padding: 15px;
  right: ${props => (props.btnVisible ? '2%' : '-70px')};
  bottom: 5%;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: ${props => (props.darkMode ? 'rgba(0,0,0,80%)' : 'white;')};
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
  }
`;

const Btn = styled.img`
  width: 40px;
  height: 40px;
  transition: all 0.3s;
  &:hover {
    padding: 5px;
    transition: all 0.3s;
  }
`;

const DarkModeBtn = styled.img`
  position: absolute;
  width: 30px;
  right: 15px;
  transition: all 1s;
  cursor: pointer;
  filter: ${props => (props.darkMode ? 'invert()' : 'none')};
  &:hover {
    transform: rotate(3turn);
    transition: all 1s;
  }
  @media screen and (max-width: 900px) {
    width: 20px;
  }
`;

const Chat = styled.div`
  position: fixed;
  height: 100px;
  width: 300px;
  right: 2%;
  top: 14%;
  text-align: center;
  font-size: 14px;
  background-color: white;
`;
