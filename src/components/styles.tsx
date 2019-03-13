import * as React from 'react';

import 'normalize.css';
import './styles.scss';

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => <>{children}</>;
