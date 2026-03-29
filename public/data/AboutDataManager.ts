import {
    cppIconPath,
    csharpIconPath,
    flutterIconPath,
    godotIconPath,
    pytorchIconPath,
    typeScriptIconPath,
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

const vueIconPath = "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z";

export const SpecialEventDataList: EventData[] = [
    {
        title: "動域科技 SilverSole 智慧鞋墊專案",
        result: "技術長 - 負責App開發/韌體開發與後端資料庫"
    },
    {
        title: "個人應用程式獨立開發開源專案",
        result: "Lexicardio, TimeGrid, Snapledger"
    },
    {
        title: "語音性別分類專案",
        result: "PyTorch 深度學習模型建置"
    }
];

export const ExperienceEventDataList: EventData[] = [
    {
        title: "6年以上遊戲開發經驗",
        result: "Unity, Godot"
    },
    {
        title: "跨平台 App 開發經驗",
        result: "Jetpack Compose, Flutter"
    },
    {
        title: "全端開發經驗",
        result: "Next.js, Supabase"
    }
];

export const AllSkillDataList: SkillGroup[] = [
    {
        groupName: "Game Development",
        skillDataList: [
            {
                iconPath: unityIconPath,
                skillName: "Unity"
            },
            {
                iconPath: csharpIconPath,
                skillName: "C#"
            },
            {
                iconPath: godotIconPath,
                skillName: "Godot"
            }
        ]
    },
    {
        groupName: "Web / App Development",
        skillDataList: [
            {
                iconPath: vueIconPath,
                skillName: "Vue.js"
            },
            {
                iconPath: typeScriptIconPath,
                skillName: "TypeScript"
            },
            {
                iconPath: flutterIconPath,
                skillName: "Flutter"
            },
            {
                iconPath: "",
                skillName: "Kotlin"
            }
        ]
    },
    {
        groupName: "Backend / IoT",
        skillDataList: [
            {
                iconPath: "",
                skillName: "Supabase"
            },
            {
                iconPath: "",
                skillName: "Cloudflare"
            },
            {
                iconPath: "",
                skillName: "Vercel"
            },
            {
                iconPath: "",
                skillName: "ESP32/PlatformIO"
            }
        ]
    },
    {
        groupName: "Learning Now",
        skillDataList: [
            {
                iconPath: cppIconPath,
                skillName: "C++"
            },
            {
                iconPath: pytorchIconPath,
                skillName: "PyTorch"
            },
            {
                iconPath: "",
                skillName: "Deep Learning"
            },
            {
                iconPath: "",
                skillName: "Backend Architecture"
            }
        ]
    }
];
