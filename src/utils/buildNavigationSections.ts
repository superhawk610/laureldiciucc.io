interface Data {
  allPrismicNavigationSection: {
    edges: Array<{
      node: {
        prismicId: string;
        data: {
          name: {
            text: string;
          };
        };
      };
    }>;
  };
  allPrismicPage: {
    edges: Array<{
      node: {
        uid: string;
        data: {
          alias_parent: string;
          parent: {
            id: string;
          };
          heading: {
            text: string;
          };
        };
      };
    }>;
  };
}

interface NavigationSectionMap {
  [prismicId: string]: NavigationSection;
}

interface NavigationSection {
  href: string;
  name: string;
  links: NavigationSectionLink[];
}

interface NavigationSectionLink {
  href: string;
  name: string;
}

export function buildNavigationSections(data: Data): NavigationSection[] {
  const sectionMap: NavigationSectionMap = {};

  for (const edge of data.allPrismicNavigationSection.edges) {
    sectionMap[edge.node.prismicId] = {
      href: '#',
      name: edge.node.data.name.text,
      links: [],
    };
  }

  for (const edge of data.allPrismicPage.edges) {
    const parentId = edge.node.data.parent.id;
    if (edge.node.data.alias_parent === 'Yes') {
      sectionMap[parentId].href = '/' + edge.node.uid;
    }
    sectionMap[edge.node.data.parent.id].links.push({
      href: '/' + edge.node.uid,
      name: edge.node.data.heading.text,
    });
  }

  return Object.values(sectionMap);
}
