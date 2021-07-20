import React from 'react';
import './styles/Header.css';

const gitHubURL = 'https://github.com/marklaham';
const linkedInURL = 'https://www.linkedin.com/in/marklaham/';


const styles = {
  footerStyle: {
    background: '#343A40',
  },
  h1Style: {
    fontSize: '25px',
  },
  headerFont: {
    fontColor: 'White',
  },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
     <p>
      <a href={gitHubURL}>GitHub Account</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href={linkedInURL}>LinkedIn Account</a>
      </p> 
    </footer>
  );
}

export default Footer;