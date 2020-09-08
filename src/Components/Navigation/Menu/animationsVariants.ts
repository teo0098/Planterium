export const parentVariants = {
    hidden: {
        opacity: 0,
        transition: {
            ease: 'easeOut',
            delay: 0.25
        }
    },
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
        }
    }
}

export const childVariants = {
    hidden: {
        x: '-100%',
        transition: {
            type: 'tween',
            ease: 'linear',
            duration: 0.25
        }
    },
    visible: {
        x: '0',
        transition: {
            type: 'tween',
            duration: 0.25,
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