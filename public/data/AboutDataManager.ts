import {
    cppIconPath,
    csharpIconPath,
    flutterIconPath,
    godotIconPath, pytorchIconPath,
    rustIconPath, swiftIconPath,
    typeScriptIconPath, ueIconPath,
    unityIconPath
} from "./SvgPaths";

export interface EventData {
    title: string;
    result: string;
}

export interface SkillData {
    iconPath: string; // svg path
    skillName: string;
}

export interface SkillGroup {
    groupName: string;
    skillDataList: SkillData[];
}

export const SpecialEventDataList: EventData[] = [
    {
        title: "113中大壢中校內數理及資訊學科能力競賽 資訊科",
        result: "第五名"
    },
    {
        title: "113普通型高級中等學校數理及資訊學科能力競賽",
        result: "參加資格"
    },
    {
        title: "APCS大學程式設計先修檢測",
        result: "觀念4級分 實作3級分"
    }
];

export const ExperienceEventDataList: EventData[] = [
    {
        title: "7年 Unity遊戲開發經驗",
        result: ""
    },
    {
        title: "2年 前端開發經驗",
        result: ""
    },
];

export const SkilledSkillDataList: SkillData[] = [
    {
        iconPath: unityIconPath,
        skillName: "Unity"
    },
    {
        iconPath: csharpIconPath,
        skillName: "C#"
    },
];

export const LearningSkillDataList: SkillData[] = [
    {
        iconPath: cppIconPath,
        skillName: "C++"
    },
    {
        iconPath: typeScriptIconPath,
        skillName: "TypeScript"
    },
    {
        iconPath: "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",
        skillName: "Vue.js"
    },
    {
        iconPath: godotIconPath,
        skillName: "Godot"
    },
];

export const WantToLearnSkillDataList: SkillData[] = [
    {
        iconPath: pytorchIconPath,
        skillName: "PyTorch"
    },
    // {
    //     iconPath: ueIconPath,
    //     skillName: "Unreal Engine"
    // },
    // {
    //     iconPath: rustIconPath,
    //     skillName: "Rust"
    // },
    // {
    //     iconPath: flutterIconPath,
    //     skillName: "Flutter"
    // },
    // {
    //     iconPath: swiftIconPath,
    //     skillName: "Swift"
    // },
];



export const AllSkillDataList: SkillGroup[] = [
    {
        groupName: "熟練",
        skillDataList: SkilledSkillDataList
    },
    {
        groupName: "學習中",
        skillDataList: LearningSkillDataList
    },
    {
        groupName: "計畫學習",
        skillDataList: WantToLearnSkillDataList
    }

];
