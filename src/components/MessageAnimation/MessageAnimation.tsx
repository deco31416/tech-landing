import clsx from 'clsx';

import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import { mq, useMq } from '../../utils/useMq';
import styles from './MessageAnimation.module.css';

export const MessageAnimation = () => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.75,
    });

    const isTablet = useMq(mq.tablet);

    console.log(isTablet);

    return (
        <div className={styles.container} ref={ref}>
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/msg-1${isTablet ? '-tablet' : ''}.svg`}
                width={537}
                height={116}
                alt="What's your crypto address so I can pay you?"
            />
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/msg-2${isTablet ? '-tablet' : ''}.svg`}
                width={633}
                height={89}
                alt="0x0b08dA7068b73A579Bd5E8a8290ff8afd37bc32A"
            />
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/msg-3${isTablet ? '-tablet' : ''}.svg`}
                width={306}
                height={88}
                alt="Wow. Go to ens.app"
            />
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/msg-4${isTablet ? '-tablet' : ''}.svg`}
                width={436}
                height={116}
                alt="This is so much simpler! Send to mynewname.eth"
            />
        </div>
    );
};
