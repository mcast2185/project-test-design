export const TitleControl = {
  hidden: {
    x: 0,
    transition: {
      ease: ["easeIn", "easeOut"],
      duration: .3,
      damping: 25,
      stiffness: 200
    }
  },
  visible: {
    x: 105,
    transition: {
      ease: ["easeIn", "easeOut"],
      duration: .3,
      damping: 25,
      stiffness: 200
    }
  }
};

export const TitleControlTwo = {
  hidden: {
    x: 0,
    transition: {
      ease: ["easeIn", "easeOut"],
      duration: .4,
      damping: 25,
      stiffness: 200
    }
  },
  visible: {
    x: -85,
    transition: {
      ease: ["easeIn", "easeOut"],
      duration: .4,
      damping: 25,
      stiffness: 200
    }
  }
};

export const TitleControlThree = {
  hidden: {

    transition: {
      ease: ["easeIn", "easeOut"],
      duration: .3,
      damping: 25,
      stiffness: 200
    },
    scale: 1
  },
  visible: {

    transition: {
      ease: ["easeIn", "easeOut"],
      duration: .3,
      damping: 25,
      stiffness: 200
    },
    scale: 1.1,
  }
};





