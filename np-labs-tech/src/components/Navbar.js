import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="218.000000pt"
          height="231.000000pt"
          viewBox="0 0 218.000000 231.000000"
          preserveAspectRatio="xMidYMid meet"
          style={{ maxHeight: '50px', maxWidth: '150px', verticalAlign: 'middle' }}
        >
          <g transform="translate(0.000000,231.000000) scale(0.100000,-0.100000)"
          fill="#FFD700" stroke="none">
            <path d="M1225 2064 l-50 -13 50 6 c28 3 77 9 110 13 l60 7 -60 1 c-33 0 -82
            -6 -110 -14z"/>
            <path d="M1465 2009 c-4 -18 -3 -35 4 -42 13 -13 15 -47 2 -47 -12 0 -20 -46
            -11 -60 5 -7 12 1 19 21 14 41 14 76 0 85 -6 4 -8 20 -4 40 8 43 -1 45 -10 3z"/>
            <path d="M1307 2013 c-11 -10 -8 -25 3 -18 5 3 18 0 29 -7 27 -16 53 4 32 25
            -10 10 -11 9 -6 -5 5 -13 2 -18 -9 -18 -9 0 -19 7 -22 15 -7 16 -17 19 -27 8z"/>
            <path d="M1380 1943 c-8 -2 -22 -7 -30 -10 -16 -7 -26 -10 -37 -12 -4 0 -2 -6
            5 -13 9 -9 15 -8 25 7 8 10 18 16 23 12 5 -3 18 1 29 9 19 14 13 17 -15 7z"/>
            <path d="M615 1851 c-3 -5 -1 -12 5 -16 6 -4 7 -11 4 -17 -4 -6 7 0 24 12 33
            25 37 35 8 24 -9 -3 -16 -10 -16 -16 0 -5 -5 -6 -10 -3 -6 4 -8 11 -5 16 4 5
            4 9 1 9 -3 0 -7 -4 -11 -9z"/>
            <path d="M1300 1849 c0 -4 9 -11 20 -14 24 -7 27 -25 4 -25 -10 0 -7 -7 12
            -25 31 -28 43 -33 23 -8 -13 14 -11 14 20 -1 18 -10 30 -13 27 -7 -11 18 7 13
            44 -12 19 -13 49 -32 65 -41 l30 -18 -29 23 c-15 13 -55 40 -87 61 -33 20 -54
            38 -47 40 6 2 -9 11 -35 20 -26 8 -47 12 -47 7z"/>
            <path d="M1440 1798 c0 -6 3 -9 6 -5 3 3 13 -1 22 -9 50 -44 150 -111 148
            -101 -3 20 -17 38 -26 32 -4 -3 -11 2 -14 11 -3 8 -10 12 -16 9 -6 -3 -13 1
            -16 9 -3 8 -26 27 -51 41 -52 29 -53 29 -53 13z"/>
            <path d="M1248 1734 c-4 -4 6 -23 23 -42 24 -27 28 -37 17 -43 -9 -6 -6 -9 12
            -9 19 0 21 3 12 12 -7 7 -13 28 -13 48 -1 19 -3 27 -6 18 -6 -24 -18 -23 -29
            3 -5 11 -13 17 -16 13z"/>
            <path d="M733 1663 c-26 -20 -67 -53 -91 -74 -25 -21 -50 -35 -58 -32 -8 3
            -14 1 -14 -5 0 -11 18 -11 38 2 22 13 23 0 2 -19 -11 -10 -20 -13 -20 -7 0 14
            -27 9 -43 -8 -10 -10 -9 -12 6 -7 11 4 16 3 12 -3 -3 -6 -12 -10 -20 -10 -8 0
            -17 -4 -20 -10 -3 -5 0 -7 8 -4 8 3 18 0 23 -7 4 -7 3 -10 -4 -6 -14 9 -43 -3
            -36 -14 3 -5 -1 -9 -8 -9 -9 0 -9 -3 2 -10 13 -8 12 -10 -2 -10 -10 0 -19 -6
            -19 -12 -1 -7 -3 -23 -4 -35 -1 -13 -1 -23 1 -23 4 0 49 74 49 81 0 4 11 17
            25 29 14 12 19 19 13 15 -18 -9 -16 10 2 25 8 7 15 9 15 4 0 -4 13 5 30 21 16
            15 27 31 25 36 -4 6 62 64 130 114 11 8 17 15 13 15 -3 0 -28 -16 -55 -37z"/>
            <path d="M1695 1620 c33 -33 62 -60 64 -60 3 0 -21 27 -54 60 -33 33 -62 60
            -64 60 -3 0 21 -27 54 -60z"/>
            <path d="M435 863 c4 -10 10 -30 13 -45 2 -16 11 -29 18 -29 8 -1 19 -2 26 -3
            6 0 13 -7 16 -15 3 -9 0 -11 -9 -6 -8 5 -11 4 -6 -1 5 -5 14 -9 20 -9 7 0 12
            -9 12 -20 1 -11 6 -19 13 -17 7 1 13 -2 13 -8 1 -5 2 -14 3 -19 2 -14 15 -25
            32 -27 13 -2 11 2 -5 20 -12 12 -21 26 -21 31 0 5 -6 16 -14 24 -8 9 -26 39
            -41 66 -25 48 -26 49 -20 15 5 -35 5 -34 -20 13 -24 45 -45 66 -30 30z"/>
            <path d="M1688 833 c-4 -14 -1 -24 8 -27 8 -3 14 -10 14 -16 0 -7 -7 -7 -22 1
            l-23 12 20 -22 c18 -21 20 -21 32 -5 16 22 17 35 1 32 -6 -2 -14 8 -18 22 -6
            24 -6 24 -12 3z"/>
            <path d="M1871 801 c-6 -10 -7 -21 -4 -25 3 -3 1 -6 -6 -6 -7 0 -10 -4 -7 -9
            3 -5 -1 -12 -10 -15 -14 -5 -14 -9 -3 -23 12 -15 12 -16 -3 -10 -19 7 -34 -8
            -18 -18 5 -3 10 -11 10 -17 0 -7 -5 -6 -14 1 -10 8 -16 9 -21 1 -3 -5 -5 -10
            -3 -11 32 -8 40 -4 54 23 13 25 14 32 2 39 -10 7 -9 9 3 9 18 0 29 20 34 58 4
            27 -1 28 -14 3z"/>
            <path d="M1654 768 c-4 -7 -4 -10 1 -6 4 4 14 1 21 -7 19 -18 18 -26 -2 -18
            -11 4 -15 2 -12 -7 7 -21 22 -22 34 -2 9 14 7 21 -12 35 -17 13 -24 14 -30 5z"/>
            <path d="M447 711 c35 -66 261 -239 277 -212 4 5 -4 13 -16 17 -13 4 -29 14
            -36 23 -11 12 -12 13 -7 1 4 -8 -2 -4 -14 10 -11 14 -28 25 -38 25 -10 0 -17
            5 -16 11 1 6 -17 30 -40 55 -22 24 -40 48 -39 52 1 4 -5 10 -13 13 -8 3 -13 9
            -10 13 2 4 -2 8 -9 8 -11 0 -12 -4 -3 -18 6 -10 16 -15 22 -12 5 4 7 2 2 -2
            -4 -5 5 -21 20 -37 15 -15 23 -28 18 -28 -5 0 -34 26 -63 58 -44 47 -50 51
            -35 23z"/>
            <path d="M1627 676 c-9 -13 -14 -32 -13 -42 2 -10 -5 -25 -15 -32 -11 -7 -19
            -18 -19 -24 0 -17 58 41 74 73 12 23 12 27 0 22 -10 -4 -12 0 -8 11 9 24 -1
            19 -19 -8z"/>
            <path d="M450 594 c0 -5 15 -25 32 -44 18 -19 33 -39 33 -45 0 -5 5 -10 10
            -10 6 0 17 -4 25 -9 8 -5 -9 17 -39 50 -30 32 -56 61 -58 63 -2 2 -3 0 -3 -5z"/>
            <path d="M1689 507 c-37 -34 -73 -71 -80 -81 -8 -11 23 16 69 59 75 73 87 85
            80 85 -2 0 -33 -28 -69 -63z"/>
            <path d="M539 467 c8 -9 16 -15 19 -12 3 3 33 -20 66 -52 l61 -58 -59 62 c-33
            34 -62 60 -65 58 -2 -3 -11 1 -20 8 -14 11 -14 10 -2 -6z"/>
            <path d="M1323 447 c-24 -5 -43 -14 -43 -19 0 -10 26 -4 75 17 36 16 26 16
            -32 2z"/>
            <path d="M957 430 c7 -8 47 -14 105 -16 51 -2 111 -6 133 -9 27 -3 34 -2 20 4
            -11 4 -60 11 -110 15 -49 4 -106 9 -125 13 -28 4 -33 3 -23 -7z"/>
            <path d="M590 405 c7 -8 9 -15 5 -15 -4 0 -2 -7 5 -15 7 -8 16 -12 21 -9 5 3
            12 -2 15 -11 4 -8 16 -20 28 -26 11 -6 -1 12 -29 40 -47 48 -72 69 -45 36z"/>
            <path d="M1048 393 c23 -2 61 -2 85 0 23 2 4 4 -43 4 -47 0 -66 -2 -42 -4z"/>
            <path d="M1048 233 c23 -2 61 -2 85 0 23 2 4 4 -43 4 -47 0 -66 -2 -42 -4z"/>
          </g>
        </svg>
        <span style={{ fontFamily: 'Helvetica World', fontSize: '1.5rem', color: '#fff' }}>
          <span style={{ fontWeight: 'bold' }}>np</span>labs
        </span>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
