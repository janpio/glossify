import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { cs } from '../utils/cs.ts';

import styles from './Navigation.module.scss';

type Props = {
  items: {
    label: string,
    icon: [IconDefinition, IconDefinition],
    to: string
  }[]
};

export function Navigation({ items }: Props) {
  return (
    <nav className={styles.navigation}>
      <span className={styles.logo}>
        gfy
      </span>
      {items.map((item, i) => (
        <NavLink key={i} to={item.to} className={({ isActive }) => cs(styles.item, { [styles.active]: isActive })}>
          {({ isActive }) => (
            <>
              <div className={styles.wrapper}>
                <div className={cs(styles.state)}/>
                <FontAwesomeIcon icon={item.icon[isActive ? 1 : 0]} className={styles.icon}/>
              </div>
              <span className={styles.label}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
