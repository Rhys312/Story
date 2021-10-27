import React from 'react';

function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright &copy;{year}</p>
      </footer>
    </div>
  );
}

export default Footer;
