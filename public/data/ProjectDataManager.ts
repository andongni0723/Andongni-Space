export interface ProjectData
{
    projectName: string,
    description: string,
    type: string,
    madeData: string,
    projectImg: string[],
    projectStudyImg: string[]
}

export const crossingData: ProjectData = {
    projectName: "Crossing",
    description: "這是我在2022年1月製作的遊戲，是我第一次製作3D遊戲。起初是因為我的腦海中有一個有趣的小遊戲，但我一直找不到它。最後我決定自己復刻一款出來。原本我是打算自己製作3D美術模型，奈何技術不夠，最後使用Unity Asset Store 的素材。",
    type: "2D俯視射擊小遊戲",
    madeData: "2023/8",
    projectImg: [
        "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling4.png",
        "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling5.png",
        "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling3.png"
    ],
    projectStudyImg: [
        "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling4.png",
        "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling5.png",
        "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling3.png",
    ]
};
