import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Development and DevOps',
    Svg: require('@site/static/img/devops.svg').default,
    description: (
      <>
        Development and DevOps experience obtained over several years in the Software and Services industry.
      </>
    ),
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        Security expertise to protect organizations and systems from threats and vulnerabilities.
        Solution oriented approach to ensure robust protection with adoption of tools and techniques.
      </>
    ),
  },
  {
    title: 'Human first, AI after',
    Svg: require('@site/static/img/human.svg').default,
    description: (
      <>
        Emphasizing a human-first approach while leveraging AI to enhance decision-making and productivity.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
