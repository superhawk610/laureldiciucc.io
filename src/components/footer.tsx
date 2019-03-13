import * as React from 'react';

import Icon from 'react-icons-kit';
import { mapPin } from 'react-icons-kit/feather/mapPin';
import { mail } from 'react-icons-kit/feather/mail';
import { instagram } from 'react-icons-kit/feather/instagram';

const currentYear = new Date().getFullYear();

export default () => (
  <footer>
    <div className="footer-block">
      <Icon icon={mapPin} />
      <div>Greenville, SC</div>
    </div>
    <div className="footer-block">
      <Icon icon={mail} />
      <div>mail@laureldiciucc.io</div>
    </div>
    <div className="footer-block">
      <Icon icon={instagram} />
      <div>@laureldiciuccio</div>
    </div>
    <div className="footer-block">
      <div className="footer-block-spacer" />
      <div>&copy; {currentYear} Laurel Diciuccio</div>
    </div>
  </footer>
);
