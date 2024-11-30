# GunShoot

![gunshoot-github-main-img](https://hackmd.io/_uploads/rJLeOXdTR.jpg)


## 遊戲描述
> 此專案是一款由我使用 **Unity2022.3.0** 開發的俯視射擊遊戲。在遊戲中，你可以選擇三個角色之一，每個角色都有獨特技能和不同的基礎屬性。

> 開始遊戲後，你需要找到控制台購買主要武器。目標是盡可能少使用生命值和金錢來擊殺敵人或抵達出口。最終分數將基於生命值的使用量、花費的金錢以及擊敗的敵人數量計算。祝你玩得愉快！

# 技術堆疊
- **Unity**: 遊戲開發平台。
- **[DoTween](https://dotween.demigiant.com/)**: Unity 的動畫引擎插件。
- **[Odin inspector](https://odininspector.com/)**: 一款使用屬性輕鬆繪製編輯器 UI 的插件。
- **[NavMeshPlus](https://github.com/h8man/NavMeshPlus)**: 用於 Unity 2D 中 NavMesh 的插件。在本專案中，用於敵人導航追蹤玩家。

# 遊玩方式
> 遊戲中存在一個 bug，敵人可能無法正常生成。
> 請按左上角的灰色槍圖示按鈕退出遊戲。
> 對此帶來的不便表示抱歉，找到原因後我將修復該問題。

1. 開啟遊戲。
2. 按左下角的「角色」按鈕選擇你的角色。
3. 按右下角的「開始遊戲」按鈕開始遊戲。
4. 使用以下控制方式：
    - `WASD`: 移動
    - `C`: 切換武器
    - `R`: 裝填彈藥
    - `Q`: 執行動作，如開門、使用控制台（商店）或進入出口
    - `滑鼠左鍵`: 射擊
    - `F`: 使用技能
    - `V`: 恢復生命值
    - `Tab`: 打開面板
5. 按螢幕上的任務提示找到控制台，你可以在那裡購買主要武器、技能和治療道具。
6. 擊敗敵人或找到出口完成任務。

# 安裝

### 下載遊戲
前往 **[Release](https://github.com/andongni0723/Unity_GunShoot/releases)** 頁面下載遊戲。

### 複製倉庫
1. 複製倉庫：
   ```bash
   git clone https://github.com/yourusername/Unity_GunShoot.git
