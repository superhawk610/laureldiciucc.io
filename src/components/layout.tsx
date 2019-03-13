import * as React from 'react';

import { useScrolled } from '../hooks/useScrolled';

import Styles from './styles';
import Header from './header';
import Footer from './footer';

interface Props {
  children: React.ReactNode;
  wrap?: boolean;
}

export default ({ children, wrap = true }: Props) => {
  const scrolled = useScrolled();

  // pad out the top of the page (where the navbar would be) when it's
  // moved to a fixed position
  const headerSpacer = scrolled && <div style={{ height: '82px' }} />;

  return (
    <Styles>
      <Header fixed={scrolled} />
      {headerSpacer}
      {wrap ? (
        <div id="page-content">
          <div id="content-wrapper">{children}</div>
        </div>
      ) : (
        children
      )}
      <Footer />
    </Styles>
  );
};
