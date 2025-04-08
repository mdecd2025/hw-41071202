var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 學員作業網站:  https://mdecd2025.github.io/hw-41071202/content/index.html \n 學員作業倉儲:  https://github.com/mdecd2025/hw-41071202 \n \n 課程代號: cd2025 \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Tasks', 'text': 'task1 與 task2 任務目的在建立可於近端維護個人作業與協同作業的準備工作: \n \xa0 \xa0 \xa0 task1 (自行製作可攜程式系統) \n \xa0 \xa0 \xa0 task2 (使用 SSH 協定執行作業倉儲的推送) \n task3 與 task4 則為 HW2 的內容之一 \n \xa0 \xa0 \xa0 task3 (使用 Solvespace 建立平面四連桿系統零組件) \n \xa0 \xa0 \xa0 task4 (使用 Onshape 建立平面四連桿系統零組件) \n task5 與 task6 則為 HW3 的主要內容 \n \xa0 \xa0 \xa0 task5 (Webots Tutorial 1 ~3) \n \xa0 \xa0 \xa0 task6 (Webots Tutorial 4 ~6) \n', 'tags': '', 'url': 'Tasks.html'}, {'title': 'Wink', 'text': '操作影片： \n \n', 'tags': '', 'url': 'Wink.html'}, {'title': 'task1', 'text': '自行製作可攜程式系統 \n 操作影片: \n \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'repo', 'text': '此作業的目的在展示如何利用既有的 Python 可攜系統建立各版本的 Python 可攜環境 \n 操作影片： \n \n \n 說明如何取得個人作業倉儲並透過 TOKEN 修改內容： \n \n', 'tags': '', 'url': 'repo.html'}, {'title': 'list', 'text': '# 從  Brython 程式庫中的 browser 導入 html, 可用來輸出超文件內容\n# 而所導入的 document 可以指向網頁中的特定 id 內容\nfrom browser import html, document\n# 建立 url 變數與網站中 2b 學員的學號與帳號資料 URL 網誌字串對應\nurl = "https://mde.tw/list/2b.txt"\n# 利用 open() 物件中的 readlines() 方法, 取出網站中的資料並逐行放入數列中, 因此 data 的資料型別為數列\ndata = open(url).readlines()\n# 進行資料查驗時, 印出 data 數列內容\n#print(data)\n# 因為學員資料中的第一列為標題, 因此有效資料從索引值 1 開始\nall_stud = data[1:]\n# 利用 len() 函式查驗 all_stud 數列有幾筆資料, 因為要與前後的字串併接, 因此利用 str() 將整數轉為字串\nprint("總共有 " + str(len(all_stud)) + "名學員")\n# 利用 document[] 取得 id 為 "brython_div1" 的位置, 然後與 brython_div1 變數對應\nbrython_div1 = document["brython_div1"]\n# 利用 Brython 的 "<=" 特殊符號, 將右值帶有字串與超文件內容物件插入 brython_div1 變數所指定的位置\n# 其中利用 html.A 建立 anchor 標註物件, 第一個變數為 anchor 字串, 第二個變數則為 hyper text reference\nbrython_div1 <= "1. " + html.A("2b-g8", href="https://mdecd2025.github.io/2b-g8/")+ html.A("(repo)", href="https://github.com/mdecd2025/2b-g8")\n# 利用 html.BR() 插入 break 標註\nbrython_div1 <= html.BR()\nbrython_div1 <= "2. " + html.A("41023215", href="https://mdecd2025.github.io/hw-41023215/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41023215")\nbrython_div1 <= html.BR()\nbrython_div1 <= "3. " + html.A("41023216", href="https://mdecd2025.github.io/hw-41023216/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41023216")\nbrython_div1 <= html.BR()\nbrython_div1 <= "4. " + html.A("41023213", href="https://mdecd2025.github.io/hw-41023213/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41023213")\nbrython_div1 <= html.BR()\nbrython_div1 <= "5. " + html.A("41071203", href="https://mdecd2025.github.io/hw-41071203/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41071203")\nbrython_div1 <= html.BR()\nbrython_div1 <= "6. " + html.A("41071204", href="https://mdecd2025.github.io/hw-41071204/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41071204")\nbrython_div1 <= html.BR()\nbrython_div1 <= "7. " + html.A("41071202", href="https://mdecd2025.github.io/hw-41071202/")+ html.A("(repo)", href="https://github.com/mdecd2025/hw-41071202")\n \n \n 個人: \n \n 2b: \n 學員網站連結  |  學員倉儲連結 \n 分組: \n \n 2b: \n g8 網站  |  g8 倉儲 \n \n 所有倉儲及網站連結 \n \n', 'tags': '', 'url': 'list.html'}, {'title': 'IPv6', 'text': '以下為設定個人 IPv6 之步驟： \n 1.在可攜環境裡的 tmp 新增資料夾 \n 2.設定個人 IPv6 位址與 DNS 伺服器位址 \n \xa0 \xa02a 各學員固定 IPv6 分配: 2001:288:6004:17:fff1:cd25:0000:a0 01 \xa0 \xa02b 各學員固定 IPv6 分配: 2001:288:6004:17:fff1:cd25:0000:b0 01 \xa0 \xa0gateway: 2001:288:6004:17::254 \xa0 \xa0dns server: \xa0 \xa02001:288:6004:17::3 \xa0 \xa02001:b000:168::1 \n 3.開啟 init.py 更改 IP \n 4.在 命令列裡打 cms 之指令 \n 5.此網址為個人位址的學員網站(9441) \n 6.打\xa0 python -m http.server 之指令 \n 7.連到學員靜態網站(8000) \n 操作影片： \n \n \n 2b IPv6 port 8000連線列表 \n 連線結果 \n', 'tags': '', 'url': 'IPv6.html'}, {'title': 'task2', 'text': '使用 SSH 協定執行作業倉儲的推送 \n SSH \xa0 是一種加密的網路傳輸協定, PuTTY 則是可用於 Windows 環境的 SSH 協定工具, 其中支援遠端登入 (putty.exe) 與檔案傳輸工具 (psftp.exe). \n 使用 PuTTY 所建立的公私鑰進行 Github push 認證 \n 操作影片： \n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'w3', 'text': '2a \n 2a尚未納組的學員學號： \n 41023220 41223111 41223119 41223124 41223148 \n 2b \n 2b尚未納組的學員學號： \n 40923137 41023237 41223210 41223214 41223232 41223233 41223239 41271217 41271236 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'task3', 'text': '使用 Solvespace 建立平面四連桿系統零組件 (HW2) \n base \n \n link1 \n \n link2 \n \n link3 \n \n shaft1 \n \n shaft2 \n \n fourbar \n \n fourbar assembly \n \n', 'tags': '', 'url': 'task3.html'}, {'title': 'task4', 'text': '使用 Onshape 建立平面四連桿系統零組件 (HW2) \n 1.在 onshape 上繪製零件 \n 2.將零件檔匯出成  .OBJ \n 3.在 webots 上組裝零件 \n \n 調整後之結果 \n \n', 'tags': '', 'url': 'task4.html'}, {'title': 'w4', 'text': '建立四連桿機構 \n \n 調整參數後之結果 \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'task5', 'text': 'Webots Tutorial 1 ~3 (HW3) \n', 'tags': '', 'url': 'task5.html'}, {'title': 'w7', 'text': 'shaft1 \n \n shaft2 \n \n shaft3 \n \n shaft4 \n \n base plate \n \n connected board \n \n shooter board \n \n shooter assembly \n', 'tags': '', 'url': 'w7.html'}, {'title': 'task6', 'text': 'Webots Tutorial 4 ~6 (HW3) \n', 'tags': '', 'url': 'task6.html'}, {'title': 'Homework', 'text': '作業 (30%) \n HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n part1: \n 請各學員在 USB 隨身碟或個人電腦上完成 cd2025 課程所需的可攜系統配置: \n 下載  portable_wcm2025.7z  (330MB, 解開壓縮後 1.4GB) \n Webots_2025a.7z  (1.5 GB, 解開後約為 2.9GB, 可單獨運作) \n Webots_2025a_web.7z  (171 MB, 解開壓縮後約為 1GB, 必須連網運作) \n Blender4.2.7z \n part2: \n 請各學員完成可攜程式系統配置後, 利用 Webots R2025a 中寬度與高度都為 0.1m 的 box 物件建立一個簡單的平面四連桿機構模擬場景. \n base (基座) 長度 1m, link1 長度 0.4m, link2 長度 0.6m, link3 長度 0.9m, 各轉軸均為 HingeJoint, joint1 旋轉速度設定為 1radian/sec. \n part3: \n 模擬場景啟動後, 按下 s 鍵機構開始作動, 按下 p 鍵後機構暫停. \n 參考資料: \n cd2025_hw1_demo.7z \n HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 各學員請利用 CAD 系統依據 HW1 的連桿尺寸與運動方式, 配置適當大小的旋轉軸以及基座後, 利用 Webots R2025a 完成一個簡單的平面四連桿機構模擬場景. \n 參考資料: \n fourbar_slvs.7z \n HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 請各分組利用CAD 系統建立一個能在電腦桌 (1600W X 700D X 740H mm) 上運作的投籃機構 ( 參考影片 )後, 導入 Webots R2025a 套件, 建立一個能由使用者透過鍵盤按鍵操作, 且具備計分板的籃球遊戲機模擬系統. \n 參考資料: \n 參考資料: \n fourbar_ball_throwing_linkage.slvs \n sixbar_ball_throwing_linkage.slvs \n \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': 'HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW1 - 41071202 \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW2 - 學員學號 \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW3 - 學員學號 \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Midterm', 'text': '本課程所繳交的期中成績為學員自評之學習期望成績. \n 期中考週的自評期望成績繳交流程: \n \n 整理先前所完成的各週的進度、作業網頁內容以及心得 \n 拍攝期中自評影片, 上傳至 Youtube 後, 以" 國立虎尾科技大學 - 機械設計工程系 - cd2025 期中自評- 學員學號 "為影片標題後嵌入本頁面中 \n 回填期中自評表單 \n 上傳學員期中成績 \n \n 各週進度: \n \n 各週網頁內容: \n w1 建立個人倉儲與網站 \n w2 新增個人與小組的倉儲、網站連結、 上傳製作可攜程式系統影片 \n w3 利用 wink 錄製 solvespace 操作影片 \n w4 增加各學員的 倉儲與網站連結 \n w6 上傳\xa0 webots 建立四連桿(HW1)、IPv6 位址設定、repo、SSH、未納組名單 操作影片 \n w7 上傳在\xa0 solvespace、webots\xa0 組合四連桿(HW2)操作影片 \n w8  上傳在\xa0 solvespace \xa0組合投籃機(HW3)操作影片 \n 期中心得: \n 期中自評影片: \n \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'Exam', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 各學員利用 Webots R2025a 套件中的 Shape 物件, 隨堂建立指定的機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam2 (10%): 利用 CAD 零組件建立模擬場景\xa0 \n 各學員利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam3 (20%): Webots 機電模擬場景的協同設計 \n 各分組利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. 過程中各學員必須採同步協同模式, 維護從 Github Classroom 取得的分組協同倉儲以及網站. \n 協同分組方式: \n \n 分配學員負責利用 Solvespace 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 NX2312 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 Webots 建立機電系統模擬場景, 並利用 Python 程式進行控制, 過程中必須將建構過程拍成帶有說明字幕的影片上傳至分組網頁. \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'Exam1', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam1 - 學員學號 \n', 'tags': '', 'url': 'Exam1.html'}, {'title': 'Exam2', 'text': 'Exam2 (10%): 利用 CAD 零組件建立模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam2 - 學員學號 \n', 'tags': '', 'url': 'Exam2.html'}, {'title': 'Exam3', 'text': 'Exam3 (20%): Webots 機電模擬場景的協同設計 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam3 - 學員學號 \n', 'tags': '', 'url': 'Exam3.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};