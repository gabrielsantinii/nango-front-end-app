class MeasureEquivalence {
    width = (width: number) => {
        const equivalence = (width * 100) / 1440;
        return `${equivalence}vw`;
    };

    height = (height: number) => {
        const equivalence = (height * 100) / 1024;
        return `${equivalence}vh`;
    };
}

export default new MeasureEquivalence();
