/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import SectionFive from './SectionFive.js';
import SectionThree from './SectionThree.js';
import TopHeaderSection from './TopHeaderSection.js';

function App() {
  return (
    <div className="App">
      <TopHeaderSection />
      <Header />
      <Main />
      <SectionThree />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default App;
