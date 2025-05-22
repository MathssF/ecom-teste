'use client';

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/top-list" style={styles.link}>Top List</Link>
        <Link href="/tops-genre" style={styles.link}>Top By Genres</Link>
        <Link href="/top-trends" style={styles.link}>Tops In Trends</Link>
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '1rem',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
} as const;
