abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia(): void;

    getReelTime(): number {
        return 89;
    }
}

class Insta extends TakePhoto {
    // extend - abstract , implement - interface
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const NN = new Insta("front", "face", 5);

NN.getReelTime();
