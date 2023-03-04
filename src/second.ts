interface TakePhoto {
    camera: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}

class youtube implements TakePhoto, Story {
    constructor(
        public camera: string,
        public filter: string,
        public burst: number,
        public general: string
    ) {}

    createStory(): void {
        console.log("Class");
    }
}

export {};
