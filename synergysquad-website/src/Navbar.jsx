import React from 'react';
import StaggeredMenu from '../Components/StaggeredMenu';
import collegeLogo from './assets/college-logo.webp';
import clubLogo from './assets/club-logo.webp';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Squad', ariaLabel: 'Meet the squad', link: '#squad' },
  { label: 'History', ariaLabel: 'View our history', link: '#history' },
  { label: 'Frame of Honor', ariaLabel: 'View Frame of Honor', link: '#honor' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/synergysquad-kiot' },
  { label: 'Instagram', link: 'https://www.instagram.com/synergysquad_kiot/' }
];

function Navbar() {
  return (
    <nav className="w-full">
      <StaggeredMenu
        position="right"
        isFixed={true}
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={false}
        colors={['#B497CF', '#5227FF']}
        collegeLogoUrl={collegeLogo}
        logoUrl={clubLogo}
        accentColor="#5227FF"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </nav>
  );
}

export default Navbar;

