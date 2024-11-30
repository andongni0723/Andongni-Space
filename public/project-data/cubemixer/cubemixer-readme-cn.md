# DoCard: CubeMixer
### 3D 多人回合制策略遊戲

## 📄 概覽
![遊戲畫面](https://hackmd.io/_uploads/B1nyvALaC.png)

> CubeMixer 是一款多人遊戲，由我開發作為專案，使用 Unity 建置，重點實現了網路功能、3D 視覺效果以及穩健的回合制系統。
>
> 玩家可以選擇網格移動或使用技能，但彼此無法在行動回合開始前得知對方的動作。運用你的策略來贏得遊戲，享受遊戲的樂趣吧！

> 示範影片：  
> [https://www.youtube.com/watch?v=EniTK79sF3A](https://www.youtube.com/watch?v=EniTK79sF3A)

## 特色
- **多人網路**：透過 Unity 的 Netcode for GameObjects 實現，並搭配 Relay 和 Lobby 模組以進行無縫配對。
- **策略性遊戲玩法**：玩家在不知曉對手選擇的情況下進行動作與技能規劃，帶來動態且不可預測的戰鬥。
- **自訂視覺效果**：使用 Unity Visual Effect Graph 製作技能動畫與特效，提升視覺吸引力。
- **回合制系統**：採用有限狀態機 (FSM) 管理遊戲流程，處理玩家行動間的過渡。

## 📡 使用技術
- **Unity**：遊戲開發平台。
- **Unity Visual Effect Graph**：用於製作視覺效果。
- **Unity Timeline**：用於技能動畫的排程。
- **Cinemachine**：Unity 的相機控制插件，在此專案中使用 Cinemachine Tracks 元件來幫助建立控制相機視角的滾動條。
- **[Netcode for GameObjects](https://unity.com/products/netcode)**：網路 SDK。
- **[Unity Lobby](https://unity.com/products/lobby), [Unity Relay](https://unity.com/products/relay)**：Unity Lobby 用於連接玩家並進入遊戲。
- **[DoTween](https://dotween.demigiant.com/)**：一款用於 Unity 的動畫引擎插件。
- **[Odin Inspector](https://odininspector.com/)**：使用屬性輕鬆繪製編輯器 UI 的插件。

## 🎮 遊玩方法
1. 開啟遊戲並點擊「加入遊戲」。
2. 等待第二位玩家加入後，遊戲回合將開始。
3. 規劃本回合的技能與移動。
4. 觀察角色與對手角色執行預先規劃的行動。
5. 利用角色技能與策略決策擊敗對手！

## 安裝方法
1. 複製此專案：
   ```bash
   git clone https://github.com/yourusername/Unity_DoCard-CubeMixer.git
2. 在 Unity（版本 2023.2.11 或更高版本）中開啟專案。
