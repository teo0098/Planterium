export const parentVariants = {
    hidden: {
        opacity: 0,
        transition: {
            ease: 'linear',
            when: 'afterChildren',
            duration: 0.3
        }
    },
    visible: {
        opacity: 1,
        transition: {
            ease: 'linear',
            when: 'beforeChildren',
            duration: 0.3
        }
    }
}

export const childVariants = {
    hidden: {
        x: '-100%',
        transition: {
            type: 'tween',
            ease: 'linear',
            duration: 0.35
        }
    },
    visible: {
        x: '0',
        transition: {
            type: 'tween',
            duration: 0.35,
            ease: 'linear',
            when: 'beforeChildren'
        }
    }
}

export const childVariants2 = {
    hidden: {
        opacity: 0,
        transition: {
            type: 'tween',
            ease: 'easeOut'
        }
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeOut'
        }
    }
}