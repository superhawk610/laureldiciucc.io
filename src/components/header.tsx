import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';

import { buildNavigationSections } from '../utils/buildNavigationSections';

import Icon from 'react-icons-kit';
import { shoppingBag } from 'react-icons-kit/feather/shoppingBag';
import { chevronDown } from 'react-icons-kit/feather/chevronDown';

interface OwnProps {
  fixed: boolean;
}

interface LocationProps {
  location: {
    pathname: string;
  };
}

type Props = OwnProps & LocationProps;

function getActive(actual: string, _expected: string | string[]): string {
  const expected = Array.isArray(_expected) ? _expected : [_expected];
  return expected.some(path => path === actual) ? 'active' : '';
}

const Header = ({ fixed, location }: Props) => {
  const path = location.pathname;
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      allPrismicNavigationSection {
        edges {
          node {
            prismicId
            data {
              name {
                text
              }
            }
          }
        }
      }
      allPrismicPage {
        edges {
          node {
            uid
            data {
              alias_parent
              parent {
                id
              }
              heading {
                text
              }
            }
          }
        }
      }
    }
  `);

  const navigationSections = buildNavigationSections(data);

  return (
    <nav className={fixed ? 'fixed' : ''}>
      <div id="nav-left">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </div>
      <div id="nav-right">
        <div className="nav-item nav-dropdown">
          <Link to="/" className={getActive(path, '/')}>
            Home
          </Link>
        </div>
        {navigationSections.map((section, sectionIndex) => (
          <div className="nav-item" key={sectionIndex}>
            <Link
              to={section.href}
              className={getActive(path, section.links.map(link => link.href))}
            >
              {section.name}
              {section.links.length && (
                <Icon icon={chevronDown} style={{ marginLeft: '5px' }} />
              )}
            </Link>
            {section.links.length && (
              <ul className="nav-menu">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="nav-item">
          <Link to="/portfolio" className={getActive(path, '/portfolio')}>
            Portfolio
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/contact" className={getActive(path, '/contact')}>
            Contact
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/shop" className={getActive(path, '/shop')}>
            Shop
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/cart">
            <Icon icon={shoppingBag} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default props => (
  <Location>
    {locationProps => <Header {...locationProps} {...props} />}
  </Location>
);
