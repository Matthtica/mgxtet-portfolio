interface Confidence {
    name: string,
    level: number
};

type LanguageConfidence = {
    [id: string]: Confidence;
};


export {
    type LanguageConfidence,
}
