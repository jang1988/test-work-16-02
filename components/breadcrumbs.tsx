"use client"
import { usePathname  } from 'next/navigation';
import { NextPage } from 'next';

interface Crumb {
  title: string;
  url: string;
}

interface Props {
  crumbs: Crumb[];
}

const Breadcrumbs: NextPage<Props> = ({ crumbs }) => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '/');

  return (
    <div>
      {pathSegments.map((segment, index) => {
        const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const crumb = crumbs.find(crumb => crumb.url === url);

        if (crumb) {
          return (
            <span key={index}>
              <a href={crumb.url}>{crumb.title}</a>
              {index < pathSegments.length - 1 && ' > '}
            </span>
          );
        } else {
          return (
            <span key={index}>
              {segment}
              {index < pathSegments.length - 1 && ' > '}
            </span>
          );
        }
      })}
    </div>
  );
}

export default Breadcrumbs;
