export const parentVariants = {
    hidden: {
        opacity: 0,
        transition: {
            when: 'afterChildren',
            ease: 'easeOut',
        }
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            ease: 'easeOut',
        }
    }
}

export const childVariants = {
    hidden: {
        x: '-100%',
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeOut',
            when: 'afterChildren',
        }
    },
    visible: {
        x: '0',
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeOut',
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