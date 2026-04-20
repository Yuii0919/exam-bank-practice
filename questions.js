/* eslint-disable max-len */
/**
 * 題庫來源：使用者匯入；題幹與選項維持原文。
 * 合併規則：新批次在前，題幹（略去開頭題號並去空白）相同者刪除重複、保留先出現者。
 * image：相對於本頁的 images/ 檔名。
 * referenceAnswer：參考用；若與課程標準不同請自行修改。
 */
const QUESTIONS_RAW = [
  {
    "id": "q001",
    "stem": "1. 下列哪一項不是資料科學的基礎組成部分？",
    "type": "single",
    "options": [
      "領域知識",
      "電腦科學",
      "統計學",
      "演算邏輯"
    ],
    "referenceAnswer": "演算邏輯",
    "score": 2,
    "image": null
  },
  {
    "id": "q002",
    "stem": "2. 下列哪些是跨產業資料探勘標準作業程序（CRISP-DM）的流程？ (複選)",
    "type": "multi",
    "options": [
      "商業理解、資料理解",
      "資料準備",
      "模式建立",
      "評估與測試"
    ],
    "referenceAnswer": "商業理解、資料理解；資料準備；模式建立；評估與測試",
    "score": 2,
    "image": null
  },
  {
    "id": "q003",
    "stem": "3. 關於巨量資料平台 Hadoop 的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "Name-Node 節點適合存放大量的小檔案",
      "支援一次寫入一次存取，確保資料完整存取",
      "容錯功能是透過資料複製多份，並每一次執行都寫入到硬碟 的方式來完成",
      "需要高效能且昂貴的機器"
    ],
    "referenceAnswer": "容錯功能是透過資料複製多份，並每一次執行都寫入到硬碟 的方式來完成",
    "score": 2,
    "image": null
  },
  {
    "id": "q004",
    "stem": "4. 關於資料探勘流程，下列哪些敘述正確？(複選)",
    "type": "multi",
    "options": [
      "資料探勘通常是一次性任務，一般不需要重複循環這六個步驟",
      "資料探勘一般需要六個流程：商業理解、資料理解、資料準備、建模、評估、發佈",
      "資料探勘項目只需要資料探勘工程師即可完成",
      "資料探勘的結果評估需要從商業價值方面考慮"
    ],
    "referenceAnswer": "資料探勘一般需要六個流程：商業理解、資料理解、資料準備、建模、評估、發佈；資料探勘的結果評估需要從商業價值方面考慮",
    "score": 2,
    "image": null
  },
  {
    "id": "q005",
    "stem": "5. 資料採礦社群網站 KDNuggets 對使用者所做的調查中，下列哪一 項不是處理 Big data 的常見軟體工具？",
    "type": "single",
    "options": [
      "Word",
      "SQL",
      "R",
      "Python"
    ],
    "referenceAnswer": "Word",
    "score": 2,
    "image": null
  },
  {
    "id": "q006",
    "stem": "6. 校務系統的關聯式資料庫中，下列哪些資料欄位（或欄位組合）可 以設定為學生資料表之主索引鍵 PK？(複選)",
    "type": "multi",
    "options": [
      "姓名、生日",
      "身分證字號",
      "學號",
      "電話、地址"
    ],
    "referenceAnswer": "身分證字號；學號",
    "score": 2,
    "image": null
  },
  {
    "id": "q007",
    "stem": "7. 如附圖所示，下列哪一項 SQL 語法可以找出所有居住於台中市的 設計者，並依設計者姓名的字典順序降冪排列？",
    "type": "single",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 C",
    "score": 2,
    "image": "WMBBEESp.png"
  },
  {
    "id": "q008",
    "stem": "8. 下列哪一項不屬於 SQL 的三大種類？",
    "type": "single",
    "options": [
      "資料定義語言（Data Definition Language，DDL）",
      "資料驗證語言（Data Verification Language，DVL）",
      "資料控制語言（Data Control Language，DCL）",
      "資料操作語言（Data Manipulation Language，DML）"
    ],
    "referenceAnswer": "資料驗證語言（Data Verification Language，DVL）",
    "score": 2,
    "image": null
  },
  {
    "id": "q009",
    "stem": "9. 如附圖所示，已知產品資料表與設計人員資料表的欄位名稱如下： 產品資料表：Product〈產品編號,設計日期,設計者編號〉，設計人 員資料表：Designer〈設計者編號,部門編號,姓名,戶籍〉，資料庫 管理者希望使用 INNER JOIN 敘述，將產品資料表與設計人員資料 表中設計者編號相同者列出資料，下列敘述哪一項正確？",
    "type": "single",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 D",
    "score": 2,
    "image": "WMhYQb27.png"
  },
  {
    "id": "q010",
    "stem": "10. 下列哪一項為名目尺度〈nominal scale〉？",
    "type": "single",
    "options": [
      "長度",
      "日期",
      "郵遞區號",
      "年級"
    ],
    "referenceAnswer": "郵遞區號",
    "score": 2,
    "image": null
  },
  {
    "id": "q011",
    "stem": "11. 通過屬性對應數值的性質，可以分為四類：a.名目（nominal）、b. 順序（order）、c.區間（interval）和 d.比率（ratio），以及四 個屬性：(1)長度、(2)礦石硬度（好，較好，最好）、(3)郵政編 碼、(4)攝氏溫度，下列配對哪一項正確？",
    "type": "single",
    "options": [
      "(1)-b、(2)-c、(3)-b、(4)-c",
      "(1)-d、(2)-c、(3)-a、(4)-b",
      "(1)-b、(2)-c、(3)-a、(4)-c",
      "(1)-d、(2)-b、(3)-a、(4)-c"
    ],
    "referenceAnswer": "(1)-d、(2)-b、(3)-a、(4)-c",
    "score": 2,
    "image": null
  },
  {
    "id": "q012",
    "stem": "12. 關於 XML 的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "XML 與 HTML 都是非結構化資料",
      "HTML 用來傳輸和儲存資料，而 XML 被用來顯示資料",
      "通過 XML，可以在不同的系統之間輕鬆地交換資料",
      "XML 允許創作者定義自己的標籤和文檔結構"
    ],
    "referenceAnswer": "HTML 用來傳輸和儲存資料，而 XML 被用來顯示資料",
    "score": 2,
    "image": null
  },
  {
    "id": "q013",
    "stem": "13. NoSQL 適用於不需要使用關聯模型的資料，近年來因大型網頁應用 程式（例如：Google、Facebook、Yahoo、Twitter 等公司的系 統）興起，下列哪一項不為其特色？",
    "type": "single",
    "options": [
      "採用綱要式（schema）的資料表達方式，彈性且無須太多的事前規劃，但仍可與時俱進",
      "可處理大量資料",
      "有較高的可用性，亦即可以同時多人連線，克服關聯式資料庫（RDBMS）資料鎖住（data lock）的問題",
      "縮放性（scalability）佳"
    ],
    "referenceAnswer": "採用綱要式（schema）的資料表達方式，彈性且無須太多的事前規劃，但仍可與時俱進",
    "score": 2,
    "image": null
  },
  {
    "id": "q014",
    "stem": "14. 下列哪一項不是非結構化的多媒體資料之應用？",
    "type": "single",
    "options": [
      "通過文本資料進行語義分析",
      "通過電影的色調來分析不同類型電影的偏好",
      "通過音頻分析對音樂進行分類",
      "通過人臉識別實現自動對焦"
    ],
    "referenceAnswer": "通過人臉識別實現自動對焦",
    "score": 2,
    "image": null
  },
  {
    "id": "q015",
    "stem": "15. 如附圖所示，已知產品資料表：Product（ProductID, DesignDate, DesignerID），找出產品資料表中設計師編號為 2 或 3 所有資料的 SQL 指令，下列哪一項正確？",
    "type": "single",
    "options": [
      "SELECT * FROM Product WHERE DesignerID = 2 AND DesignerID =3",
      "SELECT * FROM Product WHERE DesignerID = 2 IN DesignerID =3",
      "SELECT * FROM Product WHERE DesignerID = 2 OR DesignerID =3",
      "SELECT * FROM Product WHERE DesignerID = 2 BOTH DesignerID =3"
    ],
    "referenceAnswer": "SELECT * FROM Product WHERE DesignerID = 2 OR DesignerID =3",
    "score": 2,
    "image": "WMR3d8n4.png"
  },
  {
    "id": "q016",
    "stem": "16. 區間尺度（interval scale）可做下列哪些運算？(複選)",
    "type": "multi",
    "options": [
      "不等性（distinctness）運算",
      "順序性（order）運算",
      "可加性（addition）運算",
      "可乘性（multiplication）運算"
    ],
    "referenceAnswer": "不等性（distinctness）運算；順序性（order）運算；可加性（addition）運算",
    "score": 2,
    "image": null
  },
  {
    "id": "q017",
    "stem": "17. 常用資料庫中，下列哪一項不是關聯式資料庫？",
    "type": "single",
    "options": [
      "MySQL",
      "Oracle",
      "MongoDB",
      "SQL Server"
    ],
    "referenceAnswer": "MongoDB",
    "score": 2,
    "image": null
  },
  {
    "id": "q018",
    "stem": "18. 關於 JSON（JavaScript Object Notation）格式的敘述，下列哪 一項錯誤？",
    "type": "single-wrong",
    "options": [
      "易於人們閱讀和編寫",
      "陣列可用大括弧｛ ｝來寫入資料",
      "是一種資料交換格式源自於 JavaScript",
      "與其他程式相容性高"
    ],
    "referenceAnswer": "陣列可用大括弧｛ ｝來寫入資料",
    "score": 2,
    "image": null
  },
  {
    "id": "q019",
    "stem": "19. 如附圖所示，已知產品資料表：Product（ProductID, DesignDate, DesignerID），找出產品資料表中設計日期為 2014 年 9 月 13 日（含）以前所有資料的 SQL 指令，下列哪一項正確？",
    "type": "single",
    "options": [
      "SELECT * FROM Product WITH DesignDate < '9/13/2014'",
      "SELECT * FROM Product WHERE DesignDate < '9/13/2014'",
      "SELECT * FROM Product WITH DesignDate <= '9/13/2014'",
      "SELECT * FROM Product WHERE DesignDate <= '9/13/2014'"
    ],
    "referenceAnswer": "SELECT * FROM Product WHERE DesignDate <= '9/13/2014'",
    "score": 2,
    "image": "WMV5ZFbP.png"
  },
  {
    "id": "q020",
    "stem": "20. 下列哪些是影響資料分析技術的重要資料集特質？(複選)",
    "type": "multi",
    "options": [
      "維度（dimensionality）",
      "連續性（continuity）",
      "稀疏性（sparsity）",
      "分辨度（resolution）"
    ],
    "referenceAnswer": "維度（dimensionality）；稀疏性（sparsity）；分辨度（resolution）",
    "score": 2,
    "image": null
  },
  {
    "id": "q021",
    "stem": "21. SQL 可以使用 SELECT 語句的 GROUP BY 子句進行分組，關於子句敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "使用聚集函數（如 SUM 求和函數）時，藉助 GROUP BY 子句可以實現對每個小組的資料進行計算",
      "如果分組行中有 NULL 值，那麼 NULL 對應的列會被跳過，不會放入任何一組",
      "GROUP BY 子句可以包含任意數目的行（column），實現嵌套分組",
      "GROUP BY 子句中列出的每個行（column）都必須是檢索行或有效的表達式"
    ],
    "referenceAnswer": "如果分組行中有 NULL 值，那麼 NULL 對應的列會被跳過，不會放入任何一組",
    "score": 2,
    "image": null
  },
  {
    "id": "q022",
    "stem": "22. 關於主鍵（Primary Key）的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "不考慮複合主鍵的情況下，該表格中該欄位內的值不得重複",
      "主鍵只能包含一個欄位",
      "包含多個欄位的主鍵，稱為複合主鍵（Composite Key）",
      "一張表內僅能有一個主鍵"
    ],
    "referenceAnswer": "不考慮複合主鍵的情況下，該表格中該欄位內的值不得重複；包含多個欄位的主鍵，稱為複合主鍵（Composite Key）；一張表內僅能有一個主鍵",
    "score": 2,
    "image": null
  },
  {
    "id": "q023",
    "stem": "23. 若要符合下述情境的 SQL 指令「找出 Product 資料表中設計日期 為 2014 年 10 月 2 日且設計者編號是 1001 的所有資料」，下列哪 一項正確？",
    "type": "single",
    "options": [
      "SELECT * FROM Product WHERE DesignDate = '10/2/2014' OR DesignerID =1001",
      "SELECT * FROM Product WHERE DesignDate = '10/2/2014' AND DesignerID =1001",
      "SELECT DesignDate AND DesignerID FROM Product WHERE= '10/2/2014' AND 1001",
      "SELECT DesignDate='10/2/2014' AND DesignerID =1001 FROM Product"
    ],
    "referenceAnswer": "SELECT * FROM Product WHERE DesignDate = '10/2/2014' AND DesignerID =1001",
    "score": 2,
    "image": null
  },
  {
    "id": "q024",
    "stem": "24. 考慮下列數據：6, 47, 49, 15, 42, 41, 7, 39, 43, 40, 36，關 於第 3 四分位數（Q3），下列哪一項正確？",
    "type": "single",
    "options": [
      "40",
      "41",
      "42",
      "43"
    ],
    "referenceAnswer": "43",
    "score": 2,
    "image": null
  },
  {
    "id": "q025",
    "stem": "25. 關於 NoSQL 資料庫的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "NoSQL 適用於需要使用關聯模型的資料",
      "對於行動裝置用戶，NoSQL 資料庫的反應速度較快",
      "泛指非關聯式資料庫管理系統模型的資料庫管理系統",
      "無法同時多人連線"
    ],
    "referenceAnswer": "對於行動裝置用戶，NoSQL 資料庫的反應速度較快；泛指非關聯式資料庫管理系統模型的資料庫管理系統",
    "score": 2,
    "image": null
  },
  {
    "id": "q026",
    "stem": "26. 執行迴歸分析時理想上須先驗證資料是否遵守先決條件，下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "以 Normal probability plot 驗證獨立性",
      "以 Q-Q plot 驗證常態性",
      "以 Modified Levene Test 驗證一致性",
      "以 Residual time sequence plot 驗證獨立性"
    ],
    "referenceAnswer": "以 Normal probability plot 驗證獨立性",
    "score": 2,
    "image": null
  },
  {
    "id": "q027",
    "stem": "27. 下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "抽樣是指利用具有代表性的樣本資料，藉此分析欲研究母體的一些特性",
      "若對母體的每一個元素進行調查，稱之為普查（census）",
      "常用的抽樣方法可以分為：隨機抽樣、非隨機抽樣",
      "非隨機抽樣中，母體中所有單位或元素皆有可能被選到"
    ],
    "referenceAnswer": "非隨機抽樣中，母體中所有單位或元素皆有可能被選到",
    "score": 2,
    "image": null
  },
  {
    "id": "q028",
    "stem": "28. 關於變異數的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "變異數值恆大於或等於零",
      "變異數其值越大代表資料分散程度越大",
      "變異數可用於比較不同單位之資料間分散程度的大小",
      "變異數其值越小代表資料分散程度越小"
    ],
    "referenceAnswer": "變異數可用於比較不同單位之資料間分散程度的大小",
    "score": 2,
    "image": null
  },
  {
    "id": "q029",
    "stem": "29. 有八個數字分別為 11,11,12,13,13,13,13,13，試問此八個數字之全距、眾數、平均數分別，下列哪一項正確？",
    "type": "single",
    "options": [
      "全距為 13, 眾數為 2, 平均數為 11",
      "全距為 3, 眾數為 13, 平均數為 11",
      "全距為 2, 眾數為 13, 平均數為 12.375",
      "全距為 13, 眾數為 13, 平均數為 2"
    ],
    "referenceAnswer": "全距為 2, 眾數為 13, 平均數為 12.375",
    "score": 2,
    "image": null
  },
  {
    "id": "q030",
    "stem": "30. 顯著性檢驗常用來判斷某現象是否因為機遇而碰巧發生，關於顯著性檢驗，下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "做檢驗前先寫出虛無假設（null hypothesis），這個假設是 表明，你所尋求的現象在總體中並不存在，而對立假設 （alternative hypothesis）陳述的是該現象存在",
      "P 值是在虛無假設（null hypothesis）正確的情況下計算 得到的",
      "如果設置顯著水準（significance level）為 0.05，而計 算出來的 P 值為 0.01，那麼我們接受虛無假設 (null hypothesis)，認為虛無假設正確",
      "如果設置顯著水準（significance level）為 0.05，而計 算出來的 P 值為 0.02，那麼我們拒絕虛無假設（null hypothesis），認為對立假設（alternative hypothesis） 正確"
    ],
    "referenceAnswer": "如果設置顯著水準（significance level）為 0.05，而計 算出來的 P 值為 0.01，那麼我們接受虛無假設 (null hypothesis)，認為虛無假設正確",
    "score": 2,
    "image": null
  },
  {
    "id": "q031",
    "stem": "31. 抽樣調查中，誤差來源可以分為兩大類：抽樣誤差和非抽樣誤差。 假設有以下情境：(1)受訪對象隱瞞曾用過毒品的事實、(2)記錄資 料時打字錯誤、(3)用一個地區的電話號碼簿當作抽樣結構進行抽 樣調查、(4)訪問員在某條街上隨機找人進行訪問、(5)打了 5 次電 話都聯絡不到受訪者。判斷上述哪些屬於非抽樣誤差的來源，下列 哪一項正確？",
    "type": "single",
    "options": [
      "123",
      "235",
      "234",
      "125"
    ],
    "referenceAnswer": "125",
    "score": 2,
    "image": null
  },
  {
    "id": "q032",
    "stem": "32. 關於卡方分配的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "卡方分配是右偏分配",
      "卡方分配只有一個參數：自由度",
      "卡方分配的自由度接近無窮大時，卡方分配趨近於常態分配",
      "常態分配的隨機變數平方之後服從卡方分配"
    ],
    "referenceAnswer": "常態分配的隨機變數平方之後服從卡方分配",
    "score": 2,
    "image": null
  },
  {
    "id": "q033",
    "stem": "33. 如附圖所示，為一個最小平方迴歸方程式，請計算出 y 的最後一 個數值，並精確到小數點後一位，下列哪一項正確？",
    "type": "single",
    "options": [
      "9.3",
      "8.9",
      "9.8",
      "8.7"
    ],
    "referenceAnswer": "9.5",
    "answerNote": "依方程 y=2.33x-0.29 且 x=4.2 得 9.5，與選項疑似不一致。",
    "score": 2,
    "image": "WMNqz1w5.png"
  },
  {
    "id": "q034",
    "stem": "34. 如附圖所示，列出自 91 年度起至 100 年度，每年的廣告經費支 出及年度銷售金額（單位：百萬元）。分析 \" 廣告支出是否會影響 銷售金額 \" 可採用之分析方法為下列哪一項？",
    "type": "single",
    "options": [
      "簡單迴歸分析（Simple regression analysis）",
      "卡方適合度檢定（Chi-square test for goodness of fit）",
      "單一樣本平均數 t 檢定（one-sample t-test）",
      "（獨立）多樣本平均數差異檢定（或稱變異數分析） （ANalysis Of VAriance, ANOVA）"
    ],
    "referenceAnswer": "簡單迴歸分析（Simple regression analysis）",
    "score": 2,
    "image": "WMz2nCDt.png"
  },
  {
    "id": "q035",
    "stem": "35. 關於平均數和中位數的定義如下：(1)比較不同教育程度者的收 入，平均數比中位數更合適、(2)可以使用平均數比較兩個班級的 總成績、(3)一次射擊訓練中，甲的平均射擊環數比乙高，那麼甲 一定比乙優秀(4)在資料偏斜程度較大時，中位數比平均數更能代 表整體。上述有幾項說法是正確的？",
    "type": "single",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "referenceAnswer": "2",
    "score": 2,
    "image": null
  },
  {
    "id": "q036",
    "stem": "36. 如附圖所示，關於迴歸分析的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 C",
    "score": 2,
    "image": "WMJviuQH.png"
  },
  {
    "id": "q037",
    "stem": "37. 已知一組樣本大小為 3 的資料，其樣本平均數為 2，樣本標準差 為 1，如果要評斷此組資料與母體平均數 0 之間的差異程度，其 統計量 t 值，下列哪一項正確？（計算至小數點後二位，四捨五 入）",
    "type": "single",
    "options": [
      "1.33",
      "3.46",
      "2.12",
      "-1.44"
    ],
    "referenceAnswer": "3.46",
    "score": 2,
    "image": null
  },
  {
    "id": "q038",
    "stem": "38. 關於判定係數（coefficient of determination）的敘述，下列哪 一項正確？",
    "type": "single",
    "options": [
      "判定係數介於 -1 跟 1 之間",
      "判定係數越高，表示迴歸模式之預測值越接近觀察值",
      "當模型中解釋變數增加時，判定係數會降低",
      "判定係數越接近 1 代表越迴歸線的解釋力越小"
    ],
    "referenceAnswer": "判定係數越高，表示迴歸模式之預測值越接近觀察值",
    "score": 2,
    "image": null
  },
  {
    "id": "q039",
    "stem": "39. 關於決策樹（dicision trees）的基本概念，下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "決策樹是功能強大的預測工具",
      "決策樹不是分類的工具",
      "決策樹資料探勘（Data Mining）包含了分析者認為與決策關於的變數，以及這些變數對預測結果的能力",
      "在資料探勘（Data Mining）的領域中，決策樹被認為是一種樹狀結構的規則"
    ],
    "referenceAnswer": "決策樹不是分類的工具",
    "score": 2,
    "image": null
  },
  {
    "id": "q040",
    "stem": "40. 集群與分類的不同在於，集群所要求劃分的類是未知的。 集群分 析計算方法主要有：階層的方法（hierarchical method）、分割方 法（partitioning method）、基於密度的方法（density-based method）、基於網格的方法（grid-based method）、基於模型的方 法（model-based method）等。下列哪些演算法是利用統計學定義 的距離進行度量？(複選)",
    "type": "multi",
    "options": [
      "階層的方法（hierarchical method）",
      "基於模型的方法（model-based method）",
      "基於密度的方法（density-based method）",
      "分割方法（partitioning method）"
    ],
    "referenceAnswer": "階層的方法（hierarchical method）；基於密度的方法（density-based method）；分割方法（partitioning method）",
    "score": 2,
    "image": null
  },
  {
    "id": "q041",
    "stem": "41. 下列哪一項不是常用的群間距離衡量？",
    "type": "single",
    "options": [
      "最短距離法",
      "最長距離法",
      "中位數法",
      "圓心法"
    ],
    "referenceAnswer": "中位數法",
    "score": 2,
    "image": null
  },
  {
    "id": "q042",
    "stem": "42. 關於集群分析的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "同群組內的個體相似性高，不同群組的個體相似性低",
      "集群分析為一種非監督式學習的過程",
      "集群分析需要按照相似性來分組",
      "可以利用集群分析，將學生姓名的首字母組成不同的組別"
    ],
    "referenceAnswer": "可以利用集群分析，將學生姓名的首字母組成不同的組別",
    "score": 2,
    "image": null
  },
  {
    "id": "q043",
    "stem": "43. 關於視覺化的原則，下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "明確視覺化的具體目標",
      "選擇合適的視覺編碼方法",
      "風格簡約、凸顯主題",
      "只用在數值資料"
    ],
    "referenceAnswer": "只用在數值資料",
    "score": 2,
    "image": null
  },
  {
    "id": "q044",
    "stem": "44. 下列哪些屬於變數維度縮減的方法？(複選)",
    "type": "multi",
    "options": [
      "R 型集群分析",
      "Q 型集群分析",
      "主成分分析",
      "相關分析"
    ],
    "referenceAnswer": "R 型集群分析；Q 型集群分析；主成分分析",
    "score": 2,
    "image": null
  },
  {
    "id": "q045",
    "stem": "45. 將原始資料進行清理、變換、縮減…等，是在下列哪一步驟中的任務？",
    "type": "single",
    "options": [
      "資料前處理",
      "頻繁物項集探勘",
      "資料探勘流程",
      "分類和預測"
    ],
    "referenceAnswer": "資料前處理",
    "score": 2,
    "image": null
  },
  {
    "id": "q046",
    "stem": "46. 異常值通常是指一個偶發的數值，與其他的測量值相差甚遠，可使用下列哪一項統計量判別異常值？",
    "type": "single",
    "options": [
      "標準差",
      "相關係數",
      "判定係數",
      "變異係數"
    ],
    "referenceAnswer": "標準差",
    "score": 2,
    "image": null
  },
  {
    "id": "q047",
    "stem": "47. 資料清理是指發現並糾正資料中的錯誤，下列哪一項不是資料清理的方法？",
    "type": "single",
    "options": [
      "驗證資料的正確性",
      "缺失值的處理",
      "異常值的處理",
      "迴歸係數的處理"
    ],
    "referenceAnswer": "迴歸係數的處理",
    "score": 2,
    "image": null
  },
  {
    "id": "q048",
    "stem": "48. 關於資料視覺化圖形的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "將企業營運所需之各項資訊，濃縮在儀表板（Dashboard） 之中，以幫助經營決策者",
      "用來說明多個變數（例：四個變數）間兩兩變數的相關性稱 為散佈圖矩陣（Scatterplot Matrix）",
      "將二維數值矩陣以顏色表示稱為熱繪圖（Heat Map）",
      "由一個或多個特定類型的相互依存關係所構成稱為社會文字 雲（Word cloud）"
    ],
    "referenceAnswer": "將企業營運所需之各項資訊，濃縮在儀表板（Dashboard） 之中，以幫助經營決策者；用來說明多個變數（例：四個變數）間兩兩變數的相關性稱 為散佈圖矩陣（Scatterplot Matrix）；將二維數值矩陣以顏色表示稱為熱繪圖（Heat Map）",
    "score": 2,
    "image": null
  },
  {
    "id": "q049",
    "stem": "49. 關於 K 平均法（K-means）的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "必須先確定群數 k",
      "各群都有自己的群中心",
      "基本算法非常簡單",
      "群中的樣本點都離自己的群中心最遠"
    ],
    "referenceAnswer": "群中的樣本點都離自己的群中心最遠",
    "score": 2,
    "image": null
  },
  {
    "id": "q050",
    "stem": "50. 下列哪一項不能用於比較決策樹的分類效果？",
    "type": "single",
    "options": [
      "通過對測試資料集的分類，得到分類準確率；然後透過統計 計算，得到決策樹分類準確率的信賴區間（confidence interval），結合兩個一起判斷效果",
      "用包含 10 個紀錄的測試資料集進行檢驗，準確率越高的效果越好",
      "比較兩個決策樹分類效果時，檢驗兩樹準確率是否在統計上有顯著差別",
      "用 k 折交叉驗證的方法比較分類效果"
    ],
    "referenceAnswer": "用包含 10 個紀錄的測試資料集進行檢驗，準確率越高的效果越好",
    "score": 2,
    "image": null
  },
  {
    "id": "q051",
    "stem": "1. 下列哪些是屬於跨產業資料探勘標準作業流程（CRoss Industry Standard Process for Data Mining）的一部分？(複選)",
    "type": "multi",
    "options": [
      "問卷調查",
      "商業理解",
      "資料準備",
      "模式建立"
    ],
    "referenceAnswer": "商業理解；資料準備；模式建立",
    "score": 2,
    "image": null
  },
  {
    "id": "q052",
    "stem": "2. HDFS 會先將原始檔案切割成多個區塊（block），並將每一個區塊 複製三份，分別存入三個不同的節點，假設每一個區塊的大小是 128MB，若今日要將一個 256MB 的檔案放入 HDFS，請問會產生幾 個區塊？使用了 HDFS 多少空間？",
    "type": "single",
    "options": [
      "6 個區塊，使用了 768MB",
      "2 個區塊，使用了 256MB",
      "3 個區塊，使用了 384MB",
      "4 個區塊，使用了 512MB"
    ],
    "referenceAnswer": "6 個區塊，使用了 768MB",
    "score": 2,
    "image": null
  },
  {
    "id": "q053",
    "stem": "3. CRISP-DM 資料探勘流程包括下列六項：(1)資料準備、(2)資料理解、(3)評估與測試、(4)模式建立、(5)商業理解、(6)部署應用， 其正確流程步驟哪一項正確？",
    "type": "single",
    "options": [
      "521346",
      "512436",
      "512346",
      "521436"
    ],
    "referenceAnswer": "521346",
    "score": 2,
    "image": null
  },
  {
    "id": "q054",
    "stem": "4. 在資料準備時，下列敘述哪些正確？(複選)",
    "type": "multi",
    "options": [
      "資料準備時，經過資料整合、清理、轉換、減少等步驟架構良好的資料",
      "資料整合包括搜集資料、選擇資料、整合資料",
      "資料清理包括減少變數數目、消除不一致、平衡偏斜資料",
      "資料轉換包括正常化資料、分散／整合資料、建構新屬性"
    ],
    "referenceAnswer": "資料準備時，經過資料整合、清理、轉換、減少等步驟架構良好的資料；資料整合包括搜集資料、選擇資料、整合資料；資料轉換包括正常化資料、分散／整合資料、建構新屬性",
    "score": 2,
    "image": null
  },
  {
    "id": "q055",
    "stem": "5. 下列哪些不是 Hadoop 的基本組件？(複選)",
    "type": "multi",
    "options": [
      "檔案存儲系統 HDFS",
      "資料分析程式庫 Mahout",
      "分散式計算框架 MapReduce",
      "資料存儲系統 HIVE"
    ],
    "referenceAnswer": "資料分析程式庫 Mahout；資料存儲系統 HIVE",
    "score": 2,
    "image": null
  },
  {
    "id": "q056",
    "stem": "6. 選項語句中，與語句 \" WHERE vend_id = 'DLL01' OR vend_id = 'BRS01' \" 等價的為下列哪一項？",
    "type": "single",
    "options": [
      "WHERE vend_id = 'DLL01'AND'BRS01'",
      "WHERE vend_id IS 'DLL01'OR'BRS01'",
      "WHERE vend_id %I N% ( 'DLL01''BRS01')",
      "WHERE vend_id I N ( 'DLL01','BRS01')"
    ],
    "referenceAnswer": "WHERE vend_id I N ( 'DLL01','BRS01')",
    "score": 2,
    "image": null
  },
  {
    "id": "q057",
    "stem": "9. 關於資料屬性尺度的範例中，下列哪一項正確？",
    "type": "single",
    "options": [
      "攝氏溫度是區間尺度",
      "華氏溫度是比例尺度",
      "郵遞區號是順序尺度",
      "年級是名目尺度"
    ],
    "referenceAnswer": "攝氏溫度是區間尺度",
    "score": 2,
    "image": null
  },
  {
    "id": "q058",
    "stem": "10. 關於非結構化與結構化資料，下列哪一項正確？",
    "type": "single",
    "options": [
      "非結構化資料其訊息形式通常是相對固定",
      "網際網路上出現的海量資料，只有非結構化一種",
      "結構化訊息是不可以數字化的",
      "非結構化資料相對於結構化資料，從巨觀上看也是結構化訊 息的一種形式"
    ],
    "referenceAnswer": "非結構化資料相對於結構化資料，從巨觀上看也是結構化訊 息的一種形式",
    "score": 2,
    "image": null
  },
  {
    "id": "q059",
    "stem": "11. 下列哪一項不是常見的 NoSQL 資料儲存方式？",
    "type": "single",
    "options": [
      "JSON 文件儲存方式",
      "實體關聯儲存方式",
      "鍵值對（key-value pair）儲存方式",
      "節點、邊、關係（relation）等屬性的圖形（graph）結構儲存方式"
    ],
    "referenceAnswer": "實體關聯儲存方式",
    "score": 2,
    "image": null
  },
  {
    "id": "q060",
    "stem": "12. 關於 SQL 語句的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "在 SELECT 語句中，如果給定一個萬用字符 (*)，則返回所有行（column）",
      "檢索不需要的行（column）通常會降低檢索和程序性能，所以一般情況下最好不要使用萬用字符",
      "SQL 語句區分大小寫",
      "藉助萬用字符 (*)，還能檢索出名字未知的行（column）"
    ],
    "referenceAnswer": "SQL 語句區分大小寫",
    "score": 2,
    "image": null
  },
  {
    "id": "q061",
    "stem": "13. 關於資料格式的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "JSON 格式（JavaScript Object Notation）是一種輕量級 的資料交換格式，源自於 JavaScript",
      "HTML 格式現已成為網頁及其他領域中，在進行各種資料交 換的依循標準",
      "XML 格式是一個簡單且非常彈性的文字資料格式",
      "XML 並不是用來編排內容，而是用來描述資料，它並沒有如 同 HTML 一般的預設標籤，事實上使用者需要定義描述資料 的各種標籤"
    ],
    "referenceAnswer": "JSON 格式（JavaScript Object Notation）是一種輕量級 的資料交換格式，源自於 JavaScript；XML 並不是用來編排內容，而是用來描述資料，它並沒有如 同 HTML 一般的預設標籤，事實上使用者需要定義描述資料 的各種標籤",
    "score": 2,
    "image": null
  },
  {
    "id": "q062",
    "stem": "14. SQL 語法中用來修改資料表的指令，下列哪一項正確？",
    "type": "single",
    "options": [
      "UPDATE TABLE",
      "CREAT TABLE",
      "DROP TABLE",
      "ALTER TABLE"
    ],
    "referenceAnswer": "ALTER TABLE",
    "score": 2,
    "image": null
  },
  {
    "id": "q063",
    "stem": "15. 針對屬性衡量尺度的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "名目尺度（nominal scale）僅表示群或類別，例如身分證字號、瞳孔顏色、居住地、期中考排名等",
      "區間尺度（interval scale）無絕對零點，但差異或距離有意義。如日期、攝氏或華氏溫度",
      "順序尺度（ordinal scale）通常用於順序有別時，例如身 高高度（低、中、高）、河水流速、年收入排名等",
      "比例尺度（ratio scale）其有自然零點，且比率有意義， 例如克式（Kelvin）溫度、長度、時間、次數等"
    ],
    "referenceAnswer": "區間尺度（interval scale）無絕對零點，但差異或距離有意義。如日期、攝氏或華氏溫度",
    "score": 2,
    "image": null
  },
  {
    "id": "q064",
    "stem": "16. 結構化查詢語言（SQL）包含下列哪些種類？(複選)",
    "type": "multi",
    "options": [
      "資料控制語言（Data Control Language，DCL）",
      "資料查詢語言（Data Query Language，DQL）",
      "資料定義語言（Data Definition Language，DDL）",
      "資料操作語言（Data Manipulation Language，DML）"
    ],
    "referenceAnswer": "資料控制語言（Data Control Language，DCL）；資料查詢語言（Data Query Language，DQL）；資料定義語言（Data Definition Language，DDL）；資料操作語言（Data Manipulation Language，DML）",
    "score": 2,
    "image": null
  },
  {
    "id": "q065",
    "stem": "18. 結構化查詢語言（SQL）的刪除資料指令，下列哪一項正確？",
    "type": "single",
    "options": [
      "DROP",
      "REMOVE",
      "CLEAR",
      "DELETE"
    ],
    "referenceAnswer": "DELETE",
    "score": 2,
    "image": null
  },
  {
    "id": "q066",
    "stem": "19. 下列哪些資料庫屬於 NoSQL 資料庫？(複選)",
    "type": "multi",
    "options": [
      "MongoDB 資料庫",
      "CouchDB 資料庫",
      "Redis 資料庫",
      "MySQL 資料庫"
    ],
    "referenceAnswer": "MongoDB 資料庫；CouchDB 資料庫；Redis 資料庫",
    "score": 2,
    "image": null
  },
  {
    "id": "q067",
    "stem": "23. 下列哪一項並不是將非結構化資料轉換成結構化資料？",
    "type": "single",
    "options": [
      "將斷詞前的文字資料轉換成文件詞項矩陣",
      "將矩陣資料轉換成熱圖",
      "將 JSON 文件轉換成表格形式",
      "將圖像（image）資料轉換成顏色代碼矩陣"
    ],
    "referenceAnswer": "將矩陣資料轉換成熱圖",
    "score": 2,
    "image": null
  },
  {
    "id": "q068",
    "stem": "24. 在 SQL 語言中，下列哪一個命令並不會修改資料庫？",
    "type": "single",
    "options": [
      "INSERT",
      "UPDATE",
      "DELETE",
      "SELECT"
    ],
    "referenceAnswer": "SELECT",
    "score": 2,
    "image": null
  },
  {
    "id": "q069",
    "stem": "25. 下列哪一項不是 SQL 語言格式？",
    "type": "single",
    "options": [
      "資料定義語言（DDL）",
      "資料操作語言（DML）",
      "資料控制語言（DCL）",
      "資料分析語言（DAL）"
    ],
    "referenceAnswer": "資料分析語言（DAL）",
    "score": 2,
    "image": null
  },
  {
    "id": "q070",
    "stem": "26. 關於顯著水準的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "顯著水準越大，越可能拒絕虛無假設",
      "顯著水準是發生型 I 誤差的最大機率",
      "顯著水準又稱為型 II 誤差",
      "給定的顯著水準下，樣本量增加會造成型 II 誤差的機率降低"
    ],
    "referenceAnswer": "顯著水準又稱為型 II 誤差",
    "score": 2,
    "image": null
  },
  {
    "id": "q071",
    "stem": "27. 關於變異數分析的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "變異數分析需要假定獨立性、常態性、變異數齊一性",
      "變異數分析檢定各類別間中位數是否相等",
      "假設存在三個類別，如果 F 檢定 P 值小於 0.05，說明在 該顯著性水準下，三個類別之間沒有顯著差異",
      "假設存在三個類別，如果 F 檢定 P 值小於 0.05，說明在 該顯著性水準下，三個類別分別存在顯著差異"
    ],
    "referenceAnswer": "變異數分析需要假定獨立性、常態性、變異數齊一性",
    "score": 2,
    "image": null
  },
  {
    "id": "q072",
    "stem": "28. 如附圖所示，關於常態分配，下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 C",
    "score": 2,
    "image": "WM9uaDA1.png"
  },
  {
    "id": "q073",
    "stem": "30. 下列抽樣方法，哪一項不屬於離散機率分配？",
    "type": "single",
    "options": [
      "二項分配",
      "指數分配",
      "卜瓦松分配",
      "超幾何分配"
    ],
    "referenceAnswer": "指數分配",
    "score": 2,
    "image": null
  },
  {
    "id": "q074",
    "stem": "32. 下列抽樣調查哪一項正確？",
    "type": "single",
    "options": [
      "隨機抽樣中每組樣本彼此不是獨立的",
      "若對母體的每一個元素進行調查，稱之為抽樣",
      "抽樣是指利用具有代表性的樣本資料，藉此分析欲研究母體的一些特性",
      "抽樣的重要性不包括節省成本"
    ],
    "referenceAnswer": "抽樣是指利用具有代表性的樣本資料，藉此分析欲研究母體的一些特性",
    "score": 2,
    "image": null
  },
  {
    "id": "q075",
    "stem": "33. 我們常用統計推論中的 P 值作為資料分析的一種結果，關於 P 值，下列哪一項正確？",
    "type": "single",
    "options": [
      "P 值檢定的結果和臨界值檢定的結果不會一致",
      "信賴區間不能用在假設檢定問題中",
      "P 值檢定的結果和臨界值檢定的結果是一致的",
      "在假設檢定問題的計算中，Z 值檢定和 t 值檢定是完全一樣的"
    ],
    "referenceAnswer": "P 值檢定的結果和臨界值檢定的結果是一致的",
    "score": 2,
    "image": null
  },
  {
    "id": "q076",
    "stem": "34. 如附圖所示，關於統計假設檢定的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 A",
    "score": 2,
    "image": "WMtfJiWf.png"
  },
  {
    "id": "q077",
    "stem": "35. 迴歸模式之整體配適情況， 可由下列哪一項係數得知？",
    "type": "single",
    "options": [
      "相關係數",
      "判定係數",
      "共變異數",
      "中位數"
    ],
    "referenceAnswer": "判定係數",
    "score": 2,
    "image": null
  },
  {
    "id": "q078",
    "stem": "36. 如附圖所示，關於 f(x) 為一卜瓦松機率函數（Possion distribution），下列敘述哪些正確？(複選)",
    "type": "multi",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 A；選項 C；選項 D",
    "score": 2,
    "image": "WMV0sRBH.png"
  },
  {
    "id": "q079",
    "stem": "37. 關於四個數值 1、2、5、6 的變異係數，下列哪一項正確？",
    "type": "single",
    "options": [
      "3.5",
      "2.38",
      "0.68",
      "5.67"
    ],
    "referenceAnswer": "0.68",
    "score": 2,
    "image": null
  },
  {
    "id": "q080",
    "stem": "38. 針對常態分配（Normal distribution）的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "常態分配又稱作高斯分配（Gaussian distribution）",
      "常態分配其分配圖形為一個對稱鐘型",
      "在大樣本下，可以利用常態分配近似一些離散機率",
      "常態分配之平均數、中位數，和變異數相等"
    ],
    "referenceAnswer": "常態分配之平均數、中位數，和變異數相等",
    "score": 2,
    "image": null
  },
  {
    "id": "q081",
    "stem": "39. 在關聯規則方法中，同時購買產品 X 和產品 Y 的機率 P(X∪Y)， 一般稱為下列哪一項？",
    "type": "single",
    "options": [
      "信賴度（Confidence）",
      "增益值（Lift）",
      "支持度（Support）",
      "閥值（Threshold）"
    ],
    "referenceAnswer": "支持度（Support）",
    "score": 2,
    "image": null
  },
  {
    "id": "q082",
    "stem": "40. 變數的維度縮減技術中，將多個變數通過線性組合的方法，以得到數量較少且互相獨立的新變數集合，下列哪一項正確？",
    "type": "single",
    "options": [
      "決策樹〈Decision tree〉",
      "集群分析〈Clustering〉",
      "關聯規則〈Association rule〉",
      "主成份分析〈Principal Component Analysis, PCA〉"
    ],
    "referenceAnswer": "主成份分析〈Principal Component Analysis, PCA〉",
    "score": 2,
    "image": null
  },
  {
    "id": "q083",
    "stem": "43. 下列哪一個集群（clustering）技術，最適合處理任意形狀與大小的集群問題？",
    "type": "single",
    "options": [
      "階層式集群法",
      "k-means",
      "決策樹",
      "以密度為基礎的集群法"
    ],
    "referenceAnswer": "以密度為基礎的集群法",
    "score": 2,
    "image": null
  },
  {
    "id": "q084",
    "stem": "44. 下列哪一項不是用來評估關聯規則（association rules）的指標？",
    "type": "single",
    "options": [
      "可靠度（reliablility）",
      "支持度（support）",
      "信賴度（confidence）",
      "增益（lift）"
    ],
    "referenceAnswer": "可靠度（reliablility）",
    "score": 2,
    "image": null
  },
  {
    "id": "q085",
    "stem": "45. 視覺化能夠幫助讀者更好的理解資料，下列哪一項做法違背了視覺化的原則？",
    "type": "single",
    "options": [
      "進行視覺化之前，先去分析資料的內容，明確了解它的構造和每個變量的意義",
      "在第一時間想好如何設計圖形，盡量將圖形設計得很複雜， 看起來很美觀",
      "視覺化需要能夠讓讀者在沒有資料的情況下，也能從圖中得到相應的資訊",
      "在視覺化之前，先想好要表達的內容，和相應的資料，再去進行設計"
    ],
    "referenceAnswer": "在第一時間想好如何設計圖形，盡量將圖形設計得很複雜， 看起來很美觀",
    "score": 2,
    "image": null
  },
  {
    "id": "q086",
    "stem": "47. 下列哪一項不是決策樹的優點？",
    "type": "single",
    "options": [
      "可以輸出多個屬性",
      "分類非常迅速",
      "易於理解和解釋",
      "構建模型的成本低"
    ],
    "referenceAnswer": "可以輸出多個屬性",
    "score": 2,
    "image": null
  },
  {
    "id": "q087",
    "stem": "48. 下列哪一項不是資料前處理該進行的動作？",
    "type": "single",
    "options": [
      "資料清理",
      "資料分析",
      "資料轉換",
      "資料縮減"
    ],
    "referenceAnswer": "資料分析",
    "score": 2,
    "image": null
  },
  {
    "id": "q088",
    "stem": "49. 關於階層集群，下列哪一項不是常用的群間距離度量？",
    "type": "single",
    "options": [
      "組平均距離（group average）法",
      "最短距離（single linkage）法",
      "最長距離（complete linkage）法",
      "最佳距離（optimal linkage）法"
    ],
    "referenceAnswer": "最佳距離（optimal linkage）法",
    "score": 2,
    "image": null
  },
  {
    "id": "q089",
    "stem": "50. 資料探勘中將預測結果與真實值進行比較，下列敘述哪些正確？ (複選)",
    "type": "multi",
    "options": [
      "對感興趣的類別作了正確的分類稱正確陽性 True Positive （TP）",
      "真陽性比率稱為特異性（specificity）",
      "對不感興趣的類別作了正確的分類稱正確陰性 True Negative（TN）",
      "真陰性比率稱為靈敏度（sensitivity），這部分為試卷二"
    ],
    "referenceAnswer": "對感興趣的類別作了正確的分類稱正確陽性 True Positive （TP）；對不感興趣的類別作了正確的分類稱正確陰性 True Negative（TN）",
    "score": 2,
    "image": null
  },
  {
    "id": "q090",
    "stem": "2. 根據 IBM 的定義，下列哪一項不是巨量資料（Big Data）的特 性？",
    "type": "single",
    "options": [
      "Volume",
      "Visualization",
      "Variety",
      "Veracity"
    ],
    "referenceAnswer": "Visualization",
    "score": 2,
    "image": null
  },
  {
    "id": "q091",
    "stem": "3. 美國某百貨根據客戶消費資訊分析出星期五的下班時段購買尿布的消費者多會也購買啤酒，因此其改變了貨架的擺放位置，把啤酒和尿布擺在一起，甚至把比較貴的尿布放在啤酒旁邊，成功增加了這 兩項商品的銷售金額。請問上述情境屬於商業問題中資料科學任務 的哪一項？",
    "type": "single",
    "options": [
      "相似度分析（similarity matching）",
      "分類及類別的機率估計（classification）",
      "共同出現群組（co-occurrence or affinity grouping）",
      "集群（clustering）"
    ],
    "referenceAnswer": "共同出現群組（co-occurrence or affinity grouping）",
    "score": 2,
    "image": null
  },
  {
    "id": "q092",
    "stem": "7. 關於 HTML 的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "HTML 文檔也被稱為網頁",
      "HTML 元素都要以開始標籤起始，以結束標籤終止",
      "〈h3〉與 〈/h3〉之間的文本為三級標題",
      "〈body〉 與 〈/body〉之間的文本是段落"
    ],
    "referenceAnswer": "〈body〉 與 〈/body〉之間的文本是段落",
    "score": 2,
    "image": null
  },
  {
    "id": "q093",
    "stem": "8. 關於資料庫的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "在許多領域裡，如：商業、電子商務、工程和圖書館等，資料庫扮演重要的角色",
      "資料庫內所儲存的資料，一般而言為不相關的資料",
      "使用者可以對資料庫中的檔案資料執行新增、擷取、更新、刪除等操作",
      "資料庫為儲存電子檔案的場所"
    ],
    "referenceAnswer": "資料庫內所儲存的資料，一般而言為不相關的資料",
    "score": 2,
    "image": null
  },
  {
    "id": "q094",
    "stem": "9. 關於訊息的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "非結構化訊息形式相對較不固定",
      "結構化訊息是可以數字化的",
      "非結構化訊息通常包括 Excel 檔案",
      "結構化訊息包括訂單資料"
    ],
    "referenceAnswer": "非結構化訊息通常包括 Excel 檔案",
    "score": 2,
    "image": null
  },
  {
    "id": "q095",
    "stem": "14. 下列哪一項資料不是非結構化資料？",
    "type": "single",
    "options": [
      "HTML 格式的文本資料",
      "XML 格式的文本資料",
      "空間資料",
      "影像資料"
    ],
    "referenceAnswer": "空間資料",
    "score": 2,
    "image": null
  },
  {
    "id": "q096",
    "stem": "16. 若欲使用 SQL 語言，找出 Product 資料表中設計日期 （designDate）為 95 年 10 月 2 日之前（包括 95 年 10 月 2 日）所有資料，建議日期格式以 '10/2/2006' 為主（'月/日/西元 年'），下列哪一項正確？",
    "type": "single",
    "options": [
      "SELECT * FROM Product WHERE designDate<='10/2/2006'",
      "SELECT * FROM designDate WHERE Date > 951002",
      "SELECT * FROM designDate WHERE Product <='10/2/2006'",
      "SELECT * FROM Product"
    ],
    "referenceAnswer": "SELECT * FROM Product WHERE designDate<='10/2/2006'",
    "score": 2,
    "image": null
  },
  {
    "id": "q097",
    "stem": "17. 如附圖所示，已知產品資料表：Product（ProductID, DesignDate, DesignerID），以下 SQL 指令結果，下列哪一項正 確？",
    "type": "single",
    "options": [
      "3",
      "4",
      "5",
      "9"
    ],
    "referenceAnswer": "5",
    "score": 2,
    "image": "WMd6nwUz.png"
  },
  {
    "id": "q098",
    "stem": "21. 關於 SQL 語言敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "SQL 是美國國家標準局訂定的語言標準",
      "資料操作語言（DML）用來對資料進行定義和擷取",
      "SQL 語言在不同的資料庫版本中可能會不同",
      "資料控制語言（DCL）用來對資料的存取權進行控制"
    ],
    "referenceAnswer": "SQL 是美國國家標準局訂定的語言標準；SQL 語言在不同的資料庫版本中可能會不同；資料控制語言（DCL）用來對資料的存取權進行控制",
    "score": 2,
    "image": null
  },
  {
    "id": "q099",
    "stem": "27. 關於卡方分配的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "在大於等於 0（正數）範圍的右偏分配，不同的自由度決定不同的卡方分配",
      "自由度趨近無窮大，其分配不會趨近於常態分配",
      "自由度趨近無窮大，其分配會趨近於常態分配",
      "其機率密度曲線呈左右對稱的鐘型曲線"
    ],
    "referenceAnswer": "在大於等於 0（正數）範圍的右偏分配，不同的自由度決定不同的卡方分配；自由度趨近無窮大，其分配會趨近於常態分配",
    "score": 2,
    "image": null
  },
  {
    "id": "q100",
    "stem": "28. 如附圖所示，關於統計量的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 C",
    "score": 2,
    "image": "WMXJa1lG.png"
  },
  {
    "id": "q101",
    "stem": "29. 某位老師想瞭解四種教學法與學生成績的關係，建議應使用下列哪 一項統計方法？",
    "type": "single",
    "options": [
      "迴歸分析",
      "變異數分析",
      "Z 檢定",
      "卡方檢定"
    ],
    "referenceAnswer": "變異數分析",
    "score": 2,
    "image": null
  },
  {
    "id": "q102",
    "stem": "31. 下列哪一項不是常見的分散度衡量統計量？",
    "type": "single",
    "options": [
      "變異係數",
      "眾數",
      "平均絕對差",
      "全距"
    ],
    "referenceAnswer": "眾數",
    "score": 2,
    "image": null
  },
  {
    "id": "q103",
    "stem": "32. 如附圖所示，關於附圖模型及選項，下列敘述哪些正確？(複選)",
    "type": "multi",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 A；選項 C",
    "score": 2,
    "image": "WM78W172.png"
  },
  {
    "id": "q104",
    "stem": "33. 進行變異數分析可以得知若干個母體平均數是否相等，若檢定結果拒絕虛無假設時，我們可以進行多重比較（multiple comparisons），以瞭解哪些母體平均數不同，下列哪一項不是多重 比較的技術？",
    "type": "single",
    "options": [
      "Bonferroni test",
      "Dunnett's test",
      "Tukey's test",
      "Goodness of fit test"
    ],
    "referenceAnswer": "Goodness of fit test",
    "score": 2,
    "image": null
  },
  {
    "id": "q105",
    "stem": "35. 下列哪一項不是隨機抽樣方法？",
    "type": "single",
    "options": [
      "集群抽樣",
      "系統抽樣",
      "分層抽樣",
      "滾雪球抽樣"
    ],
    "referenceAnswer": "滾雪球抽樣",
    "score": 2,
    "image": null
  },
  {
    "id": "q106",
    "stem": "36. 關於信賴區間的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "當樣本數越大，信賴區間長度越長",
      "重複兩次蒐集資料的過程，在相同樣本數的條件下，這兩次所求得的信賴區間相同",
      "當樣本數固定的情況下，信心水準越大，信賴區間長度越長",
      "信賴區間長度與樣本數無關"
    ],
    "referenceAnswer": "當樣本數固定的情況下，信心水準越大，信賴區間長度越長",
    "score": 2,
    "image": null
  },
  {
    "id": "q107",
    "stem": "37. 在單因子變異數分析之中，考慮四大飲料品牌之平均銷售量分析， 每一品牌隨機抽取 5 個樣本，下列敘述哪些正確？(複選)",
    "type": "multi",
    "options": [
      "組間變異 SSB〈Sum of Squares of Between〉的自由度為 3",
      "總變異的自由度為 20",
      "隨機誤差的自由度為 16",
      "如果 F 統計值大於 F 分配查表的臨界值時，則表示四大飲料品牌之平均銷售量不全相等"
    ],
    "referenceAnswer": "組間變異 SSB〈Sum of Squares of Between〉的自由度為 3；隨機誤差的自由度為 16；如果 F 統計值大於 F 分配查表的臨界值時，則表示四大飲料品牌之平均銷售量不全相等",
    "score": 2,
    "image": null
  },
  {
    "id": "q108",
    "stem": "38. 某校高二有四個班級，甲班同學身高平均值為 168 公分，標準差 為 6.8 公分；乙班同學身高平均值為 169 公分，標準差為 6.5 公分；丙班同學身高平均值為 160 公分，標準差為 5 公分；丁班 同學身高平均值為 165 公分，標準差為 6 公分。下列哪一個班級 學生的身高較為懸殊？",
    "type": "single",
    "options": [
      "甲班",
      "乙班",
      "丙班",
      "丁班"
    ],
    "referenceAnswer": "甲班",
    "score": 2,
    "image": null
  },
  {
    "id": "q109",
    "stem": "39. 關於 K-means 集群的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "每個類別都有自己的集群中心",
      "類別中的點都是離自己類別的集群中心最近",
      "無須先確定集群個數",
      "資料需為標準形式，以避免因量度單位的不同而產生困擾"
    ],
    "referenceAnswer": "無須先確定集群個數",
    "score": 2,
    "image": null
  },
  {
    "id": "q110",
    "stem": "43. 下列哪一項不是處理缺失值的方法？",
    "type": "single",
    "options": [
      "直接刪除缺失值",
      "對缺失值進行手工填補",
      "將缺失值標記為異常值",
      "使用模型來預測缺失值"
    ],
    "referenceAnswer": "將缺失值標記為異常值",
    "score": 2,
    "image": null
  },
  {
    "id": "q111",
    "stem": "44. 購物籃分析（market-basket analysis）是運用下列哪一項資料探勘的技術？",
    "type": "single",
    "options": [
      "趨勢分析（Trend Analysis）",
      "迴歸分析（Regression Analysis）",
      "關聯分析（Association Analysis）",
      "集群分析（Clustering Analysis）"
    ],
    "referenceAnswer": "關聯分析（Association Analysis）",
    "score": 2,
    "image": null
  },
  {
    "id": "q112",
    "stem": "45. 關於資料視覺化的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "資料視覺化主要將資料、文字、圖表，轉成各種圖表與影像，使得資料較容易瞭解",
      "資料視覺化需考慮觀眾不同",
      "熱繪圖、文字雲、網路圖等都屬於資料視覺化圖形",
      "資料視覺化不可以追求絢麗"
    ],
    "referenceAnswer": "資料視覺化不可以追求絢麗",
    "score": 2,
    "image": null
  },
  {
    "id": "q113",
    "stem": "48. 關於集群分析的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "集群分析是一種非監督式學習（Unsupervised learning）",
      "群內差異大，群間差異小",
      "依據個體間的相似性將樣本分成幾群互相沒有交集的群組",
      "同群組內的個體相似性高，不同群組的個體相似性低"
    ],
    "referenceAnswer": "集群分析是一種非監督式學習（Unsupervised learning）；依據個體間的相似性將樣本分成幾群互相沒有交集的群組；同群組內的個體相似性高，不同群組的個體相似性低",
    "score": 2,
    "image": null
  },
  {
    "id": "q114",
    "stem": "50. 關於購物籃分析所得出的關聯規則，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "可以提升其他商品的買氣",
      "可以提供關於產品間被同時購買的有用資訊",
      "可以尋找更多潛在的目標客戶",
      "可以進行相關產品推薦或挑選相應的關聯產品進行精準行銷"
    ],
    "referenceAnswer": "可以提升其他商品的買氣",
    "score": 2,
    "image": null
  },
  {
    "id": "q115",
    "stem": "2. Hadoop 生態圖譜系統中執行資料分散式計算框架為哪一個技術？",
    "type": "single",
    "options": [
      "HDFS",
      "HBase",
      "MapReduce",
      "Hive"
    ],
    "referenceAnswer": "MapReduce",
    "score": 2,
    "image": null
  },
  {
    "id": "q116",
    "stem": "3. GB, PB, TB, ZB 為四種電腦記憶體容量的單位，請問它們的大小排序，下列哪一項正確？",
    "type": "single",
    "options": [
      "ZB＞PB＞TB＞GB",
      "PB＞TB＞ZB＞GB",
      "TB＞ZB＞GB＞PB",
      "PB＞ZB＞GB＞TB"
    ],
    "referenceAnswer": "ZB＞PB＞TB＞GB",
    "score": 2,
    "image": null
  },
  {
    "id": "q117",
    "stem": "4. 關於資料科學任務集的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "小型資料集較容易處理，且訊息揭露性較佳",
      "剖繪：描繪個體、群組或母體的典型行為",
      "集群：將一群物體中相似的個體聚集在一起，並非因為特定 的目的而驅動，故屬於監督式的學習",
      "分類及類別的機率估計：用來預測群體中的每一位顧客屬於 哪一項類別，類別集合中的類別通常為互斥的"
    ],
    "referenceAnswer": "集群：將一群物體中相似的個體聚集在一起，並非因為特定 的目的而驅動，故屬於監督式的學習",
    "score": 2,
    "image": null
  },
  {
    "id": "q118",
    "stem": "6. 關於 JSON 的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "JSON 是 JavaScript 的物件表示法（JavaScript Object Notation）",
      "JSON 解析器和 JSON 資料集支援許多不同的程式語言",
      "JSON 非常易於解析",
      "JSON 文本格式在語法上與創建 JavaScript 物件的代碼不同"
    ],
    "referenceAnswer": "JSON 文本格式在語法上與創建 JavaScript 物件的代碼不同",
    "score": 2,
    "image": null
  },
  {
    "id": "q119",
    "stem": "10. 下列哪一項是非結構化資料庫儲存資料的方式？",
    "type": "single",
    "options": [
      "矩陣方式儲存",
      "表格方式儲存",
      "資料以鍵值對（key-value pair）的方式儲存，無需事先定 義綱要",
      "XML 格式儲存"
    ],
    "referenceAnswer": "資料以鍵值對（key-value pair）的方式儲存，無需事先定 義綱要",
    "score": 2,
    "image": null
  },
  {
    "id": "q120",
    "stem": "11. 如附圖所示，附圖為一 SQL 語法敘述，試問別名 a,b 分別指哪一 張表格？",
    "type": "single",
    "options": [
      "a 是 dept 資料表的別名、b 是 emp 資料表的別名",
      "a 是 empno 資料表的別名、b 是 deptno 資料表的別名",
      "a 是 emp 資料表的別名、b 是 dept 資料表的別名",
      "a 是 sal 資料表的別名、b 是 dname 資料表的別名"
    ],
    "referenceAnswer": "a 是 emp 資料表的別名、b 是 dept 資料表的別名",
    "score": 2,
    "image": "WMR4mv1l.png"
  },
  {
    "id": "q121",
    "stem": "12. 關於關聯式資料庫中資料表的說法，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "資料表是二維表",
      "資料表的行列可以互換",
      "資料表的單欄主索引鍵是唯一的",
      "資料表的主索引鍵必須是數值型"
    ],
    "referenceAnswer": "資料表是二維表；資料表的單欄主索引鍵是唯一的",
    "score": 2,
    "image": null
  },
  {
    "id": "q122",
    "stem": "15. 每日股票交易價格，可視為下列哪一項有序資料？",
    "type": "single",
    "options": [
      "時間（temporal）資料",
      "次序（sequential）資料",
      "空間（spatial）資料",
      "基因序列（genetic sequence）資料"
    ],
    "referenceAnswer": "時間（temporal）資料",
    "score": 2,
    "image": null
  },
  {
    "id": "q123",
    "stem": "17. 關於屬性運算性質的說法，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "我們可以說“2 米是 1 米的 2 倍”，所以這個資料具有比例屬性",
      "我們可以說“30 攝氏度比 20 攝氏度高 10 度”，所以這 資料具有區間屬性",
      "我們可以說“代表男性的 2 大於代表女性的 1”，所以這個資料具有順序屬性",
      "我們可以說“黑色與白色不同”，所以這個資料具有名目屬性"
    ],
    "referenceAnswer": "我們可以說“代表男性的 2 大於代表女性的 1”，所以這個資料具有順序屬性",
    "score": 2,
    "image": null
  },
  {
    "id": "q124",
    "stem": "25. 關於比例（ratio）屬性值，擁有下列哪些運算性質？(複選)",
    "type": "multi",
    "options": [
      "不等性（distinctness）",
      "順序性（order）",
      "可加性（addition）",
      "可乘性（multiplication）"
    ],
    "referenceAnswer": "不等性（distinctness）；順序性（order）；可加性（addition）；可乘性（multiplication）",
    "score": 2,
    "image": null
  },
  {
    "id": "q125",
    "stem": "26. 若隨機變數 X 具有二項分配（Binomial Distribution），成功的機率為 0.2，試驗次數為 10，則期望值與變異數分別為下列哪一 項？",
    "type": "single",
    "options": [
      "期望值 8，變異數 2.5",
      "期望值 8，變異數 1.6",
      "期望值 2，變異數 2.5",
      "期望值 2，變異數 1.6"
    ],
    "referenceAnswer": "期望值 2，變異數 1.6",
    "score": 2,
    "image": null
  },
  {
    "id": "q126",
    "stem": "28. 如附圖所示，為某商品在各時期的銷售價格時，所成交的次數，成 交次數出現最多次的組別是哪一組",
    "type": "single",
    "options": [
      "第一組銷售價格為 5-10 時，成交次數最多",
      "第三組銷售價格為 15-20 時，成交次數最多",
      "第四組銷售價格為 20-25 時，成交次數最多",
      "第五組銷售價格為 30-35 時，成交次數最多"
    ],
    "referenceAnswer": "第三組銷售價格為 15-20 時，成交次數最多",
    "score": 2,
    "image": "WMrpIuum.png"
  },
  {
    "id": "q127",
    "stem": "29. 下列哪些為平均數的優點？(複選)",
    "type": "multi",
    "options": [
      "資料無極端值或偏態時，具有代表性",
      "考慮所有觀察值，敏感度較高",
      "適合代數與統計推論計算",
      "不受極端值影響"
    ],
    "referenceAnswer": "資料無極端值或偏態時，具有代表性；考慮所有觀察值，敏感度較高；適合代數與統計推論計算",
    "score": 2,
    "image": null
  },
  {
    "id": "q128",
    "stem": "30. 下列哪一項為理想上的迴歸分析運作流程？",
    "type": "single",
    "options": [
      "驗證資料符合模型前提假設 → 確認變數之間具有線性關係 → 執行迴歸分析 → 評估模型配適是否合適，適度校正模型",
      "確認變數之間具有線性關係 → 驗證資料符合模型前提假設 → 執行迴歸分析 → 評估模型配適是否合適，適度校正模型",
      "執行迴歸分析 → 確認變數之間具有線性關係 → 驗證資料符 合模型前提假設 → 評估模型配適是否合適，適度校正模型",
      "執行迴歸分析→ 驗證資料符合模型前提假設 → 確認變數 之間具有線性關係 → 評估模型配適是否合適，適度校正模型"
    ],
    "referenceAnswer": "確認變數之間具有線性關係 → 驗證資料符合模型前提假設 → 執行迴歸分析 → 評估模型配適是否合適，適度校正模型",
    "score": 2,
    "image": null
  },
  {
    "id": "q129",
    "stem": "32. 如附圖所示，假設檢定的兩種誤差，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 A；選項 B",
    "score": 2,
    "image": "WMBch9Yh.png"
  },
  {
    "id": "q130",
    "stem": "33. 四分位距（Interquartile Range, IQR）指的是中間多少比例的資 料？",
    "type": "single",
    "options": [
      "20 %",
      "30 %",
      "40 %",
      "50 %"
    ],
    "referenceAnswer": "50 %",
    "score": 2,
    "image": null
  },
  {
    "id": "q131",
    "stem": "35. 關於卜瓦松分配（Poisson distribution）的敘述，下列哪一項錯 誤？",
    "type": "single-wrong",
    "options": [
      "在特定區間內，事件發生的平均次數固定",
      "事件發生的機率與區間的起點無關",
      "在任何區間內，事件發生彼此會互相影響",
      "在特定區間內，事件發生兩次以上的機率為 0"
    ],
    "referenceAnswer": "在任何區間內，事件發生彼此會互相影響",
    "score": 2,
    "image": null
  },
  {
    "id": "q132",
    "stem": "39. 如附圖所示，試計算出附圖表格內的吉尼指數（Gini 指數），下列哪一項正確？",
    "type": "single",
    "options": [
      "1",
      "1.5",
      "0",
      "0.5"
    ],
    "referenceAnswer": "0",
    "score": 2,
    "image": "WMXLg2UW.png"
  },
  {
    "id": "q133",
    "stem": "43. 如附圖所示，附圖中交易資料計算 { whole milk , other vegetables} 的支持度，下列哪一項正確？",
    "type": "single",
    "options": [
      "0.6",
      "0.3",
      "0.2",
      "0.18"
    ],
    "referenceAnswer": "0.2",
    "score": 2,
    "image": "WMTjLiOC.png"
  },
  {
    "id": "q134",
    "stem": "46. 下列哪一項不是資料視覺化的基本原則？",
    "type": "single",
    "options": [
      "明確視覺化的具體目標",
      "在圖形中盡可能呈現多樣化訊息",
      "考慮觀眾／聽眾的不同",
      "選擇合適的視覺編碼方法"
    ],
    "referenceAnswer": "在圖形中盡可能呈現多樣化訊息",
    "score": 2,
    "image": null
  },
  {
    "id": "q135",
    "stem": "47. 下列哪一項不是資料視覺化圖形？",
    "type": "single",
    "options": [
      "散佈圖（scatter plot）",
      "儀表板（dashboard）",
      "甘特圖（Gantt chart）",
      "社會網路圖（Social Network Graph, SNG）"
    ],
    "referenceAnswer": "儀表板（dashboard）",
    "score": 2,
    "image": null
  },
  {
    "id": "q136",
    "stem": "48. 關於資料縮減（Data Reduction），下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "資料縮減的方法只有一種",
      "可消除資料間的相互影響，增強模型的效果",
      "資料縮減（Data Reduction）是指從原始資料中挑選出部分資料來進行分析",
      "能夠高性能地進行運算"
    ],
    "referenceAnswer": "資料縮減的方法只有一種",
    "score": 2,
    "image": null
  },
  {
    "id": "q137",
    "stem": "49. 關於長寬表的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "長表變數很少，紀錄很多",
      "Database 的結構通常是長表",
      "長表指的是變數比較多紀錄比較少的資料",
      "任何包含離散變數的資料都不可以在長表和寬表之間自由轉換"
    ],
    "referenceAnswer": "長表變數很少，紀錄很多；Database 的結構通常是長表",
    "score": 2,
    "image": null
  },
  {
    "id": "q138",
    "stem": "50. 如附圖所示，此名稱及運用的分析，下列哪一項正確？",
    "type": "single",
    "options": [
      "決策樹（Decision Tree），用在分類",
      "K 平均法（K-means），用在分群",
      "文字雲（Word Cloud），用在文字探勘（text mining）",
      "階層式分群（hierarchical clustering），用在分群"
    ],
    "referenceAnswer": "文字雲（Word Cloud），用在文字探勘（text mining）",
    "score": 2,
    "image": "WMXMXtyC.png"
  },
  {
    "id": "q139",
    "stem": "5. 關於量化模型，下列哪一項正確？",
    "type": "single",
    "options": [
      "獨立變數已知或在決策者控制之下一定是敘述性模型",
      "線性規劃屬於敘述性模型",
      "函數 f〈.〉 的型式未知且缺乏定義是預測性模型",
      "計劃評核術是規範性模型"
    ],
    "referenceAnswer": "計劃評核術是規範性模型",
    "score": 2,
    "image": null
  },
  {
    "id": "q140",
    "stem": "6. 在 SQL 語言中，INSERT 指令的功用，下列哪一項正確？",
    "type": "single",
    "options": [
      "新增資料",
      "修改資料",
      "刪除資料",
      "沒有此指令"
    ],
    "referenceAnswer": "新增資料",
    "score": 2,
    "image": null
  },
  {
    "id": "q141",
    "stem": "9. 衣服尺寸包括大、中、小是屬於下列哪一種衡量尺度？",
    "type": "single",
    "options": [
      "比例尺度〈ratio scale〉",
      "名目尺度〈nominal scale〉",
      "區間尺度〈interval scale〉",
      "順序尺度〈ordinal scale〉"
    ],
    "referenceAnswer": "順序尺度〈ordinal scale〉",
    "score": 2,
    "image": null
  },
  {
    "id": "q142",
    "stem": "10. 關於 NoSQL 資料庫，下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "NoSQL 可以理解為 \" NotOnlySQL \"，是對不同於傳統的關 聯式資料庫（relational database）的統稱",
      "NoSQL 使用 SQL 作為查詢語言，因此具有靈活的資料模型",
      "NoSQL 資料庫都去掉了關聯式資料庫的關聯式特性，這使得資料庫更容易擴展",
      "NoSQL 資料庫都具有非常高的讀寫性能"
    ],
    "referenceAnswer": "NoSQL 使用 SQL 作為查詢語言，因此具有靈活的資料模型",
    "score": 2,
    "image": null
  },
  {
    "id": "q143",
    "stem": "12. 結構化查詢語言（SQL）的更新資料指令，下列哪一項正確？",
    "type": "single",
    "options": [
      "RENEW",
      "UPDATE",
      "INSERT",
      "REVISE"
    ],
    "referenceAnswer": "UPDATE",
    "score": 2,
    "image": null
  },
  {
    "id": "q144",
    "stem": "17. 將非結構化資料轉換為結構化格式，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "文件轉為各文件與詞項的橫列縱行矩陣",
      "剖析 XML 的語法後轉換為列表（list）或表格（table）的 資料格式",
      "擷取圖片、音訊與影片中的特徵製成表格的形式",
      "將資料以 XML 格式儲存"
    ],
    "referenceAnswer": "將資料以 XML 格式儲存",
    "answerNote": "若教師答案不同，請以講義為準。",
    "score": 2,
    "image": null
  },
  {
    "id": "q145",
    "stem": "18. 如附圖所示，下列哪一項 SQL 語法可以找出所有設計者之最新設 計產品的日期，並顯示欄位三個：設計者編號、設計者姓名、最新 設計產品的日期？",
    "type": "single",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 A",
    "answerNote": "附圖：WMxEi6Y7.png。典型為子查詢 MAX(DesignDate) 再 JOIN Designer；若課程答案為 C 請以教師為準。",
    "score": 2,
    "image": "WMxEi6Y7.png"
  },
  {
    "id": "q146",
    "stem": "19. 關於 NoSQL 資料庫，下列哪一項正確？",
    "type": "single",
    "options": [
      "MongoDB 可以採用 BSON（Binary Format Of JSON）形式的儲存文件",
      "Redis 無法採用鍵值對（Key-Value Pair）的方式儲存",
      "鍵值儲存資料需事先定義綱要",
      "Neo4j 是以文件為基礎的儲存方式"
    ],
    "referenceAnswer": "MongoDB 可以採用 BSON（Binary Format Of JSON）形式的儲存文件",
    "score": 2,
    "image": null
  },
  {
    "id": "q147",
    "stem": "27. 如附圖所示，某輪胎工廠宣稱其生產之輪胎平均壽命至少 50,000 公里。今某一汽車修理廠欲採購其輪胎，抽取 25 個輪胎檢測其平 均壽命為 49,500 公里，標準差為 500 公里，試利用附圖資料計 算，輪胎平均壽命在 95% 的信心水準下之信賴區間，下列哪一項 正確？",
    "type": "single",
    "options": [
      "（49328.9, 49671.1）",
      "（49293.6, 49706.4）",
      "（49329.2, 49670.8）",
      "（49294, 49706）"
    ],
    "referenceAnswer": "（49293.6, 49706.4）",
    "answerNote": "附圖：WMDCa5rQ.png。",
    "score": 2,
    "image": "WMDCa5rQ.png"
  },
  {
    "id": "q148",
    "stem": "28. 下列哪一項不是 Poisson 實驗的性質？",
    "type": "single",
    "options": [
      "在特定區間內，某事件發生的平均次數固定",
      "在特定區間內，某事件發生兩次以上的機率為 0",
      "在任何區間內，事件發生彼此不會互相影響",
      "在特定區間內，事件發生彼此會互相影響"
    ],
    "referenceAnswer": "在特定區間內，事件發生彼此會互相影響",
    "score": 2,
    "image": null
  },
  {
    "id": "q149",
    "stem": "29. 關於平均絕對離差（Mean Absolute Deviation, MAD）的敘述，下 列哪一項正確？",
    "type": "single",
    "options": [
      "其值越大，則資料的分散情況也越小",
      "觀念簡單，易於了解",
      "當資料數較多時，計算十分容易",
      "不易受極端值的影響"
    ],
    "referenceAnswer": "觀念簡單，易於了解",
    "score": 2,
    "image": null
  },
  {
    "id": "q150",
    "stem": "31. 常用的統計值中，平均數的優點有下列哪些？(複選)",
    "type": "multi",
    "options": [
      "資料無極端值或偏態時，具有代表性",
      "考慮所有觀察值，敏感度較高",
      "適合代數與統計推論計算",
      "不容易受極端值影響"
    ],
    "referenceAnswer": "資料無極端值或偏態時，具有代表性；考慮所有觀察值，敏感度較高；適合代數與統計推論計算",
    "score": 2,
    "image": null
  },
  {
    "id": "q151",
    "stem": "32. 關於抽樣的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "抽樣可以做為描繪資料特徵的工具之一",
      "行政院主計處發布家庭收支調查資料為抽樣結果",
      "系統抽樣是屬於隨機抽樣方法",
      "分層抽樣是屬於非隨機抽樣方法"
    ],
    "referenceAnswer": "分層抽樣是屬於非隨機抽樣方法",
    "score": 2,
    "image": null
  },
  {
    "id": "q152",
    "stem": "33. 關於資料的離散程度常用三個指標：a.標準差、b.四分位距、c.變 異係數。假設有三個情境分別為：\n(1)有一個大公司和一個小公司，比較這兩個公司的業績，哪個波動更大、\n(2)用一周的訓練資 料，比較兩個同一級別的射擊選手較能發揮穩定性、\n(3)現有兩個業績相近的公司給所有員工的薪資資料。\n若要比較哪一間公司薪水 整體差距更大，下列哪一項配對正確？",
    "type": "single",
    "options": [
      "（1）- c、（2）- a、（3）- b",
      "（1）- a、（2）- b、（3）- c",
      "（1）- c、（2）- b、（3）- a",
      "（1）- a、（2）- c、（3）- b"
    ],
    "referenceAnswer": "（1）- c、（2）- a、（3）- b",
    "score": 2,
    "image": null
  },
  {
    "id": "q153",
    "stem": "37. 在 5 個始祖鳥的化石標本中，記錄了股骨與肱骨的長度資料分別 是，股骨：38、56、59、64、74，肱骨：41、63、70、72、84；使 用相關係數分析這組資料，下列敘述哪一項正確？",
    "type": "single",
    "options": [
      "相關係數為 0.794，說明股骨和肱骨長度正相關",
      "相關係數為 0.794，說明股骨和肱骨長度負相關",
      "相關係數為 0.994，說明股骨和肱骨長度正相關",
      "相關係數為 0.994，說明股骨和肱骨長度負相關"
    ],
    "referenceAnswer": "相關係數為 0.994，說明股骨和肱骨長度正相關",
    "score": 2,
    "image": null
  },
  {
    "id": "q154",
    "stem": "38. 如附圖所示，統計檢定中，下列哪一項是該理論的虛無假設？",
    "type": "single",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 C",
    "answerNote": "附圖：WMRVYXkI.png。欲證明 μ>40000 時，H0 常取 μ≤40000。",
    "score": 2,
    "image": "WMRVYXkI.png"
  },
  {
    "id": "q155",
    "stem": "39. 在 150 筆交易資料中，若想知道購買麵包的人會不會也購買牛奶，經由調查發現購買麵包的交易共有 80 筆，買麵包同時也會買牛奶的交易有 50 筆，關於支持度（support）和信賴度 （confidence）的計算哪一項正確？",
    "type": "single",
    "options": [
      "支持度 53.3%、信賴度 33.3%",
      "支持度 33.3%、信賴度 53.3%",
      "支持度 33.3%、信賴度 62.5%",
      "支持度 62.5%、信賴度 33.3%"
    ],
    "referenceAnswer": "支持度 33.3%、信賴度 62.5%",
    "score": 2,
    "image": null
  },
  {
    "id": "q156",
    "stem": "47. 關於決策樹的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "決策樹是功能強大的分類和預測工具",
      "構建模型的成本低是決策樹的優點之一",
      "決策樹可以輸出多個屬性",
      "決策樹的結構是一種類似流程圖的樹結構"
    ],
    "referenceAnswer": "決策樹可以輸出多個屬性",
    "score": 2,
    "image": null
  },
  {
    "id": "q157",
    "stem": "2. 商業問題中，希望能將顧客群中屬性相似的顧客聚集在一起，但事先並不清楚各群的樣貌時，資料科學家通常可以採用下列哪一項分 析方法？",
    "type": "single",
    "options": [
      "分類及類別的機率估計（classification）",
      "迴歸（regression）",
      "相似度分析（similarity matching）",
      "集群（clustering）"
    ],
    "referenceAnswer": "集群（clustering）",
    "score": 2,
    "image": null
  },
  {
    "id": "q158",
    "stem": "6. 若要符合下述情境的 SQL 指令「找出 Product 資料表中設計日期 為 103 年 10 月 2 日之前（包括 103 年 10 月 2 日）所有資料，建議 日期格式以（'月/日/西元年'）為主」，下列哪一項正確？",
    "type": "single",
    "options": [
      "SELECT * FROM Product WHERE DesignDate <= '10/2/2014'",
      "SELECT DesignDate FROM Product WHERE '10/2/2014'",
      "SELECT * FROM Product WHERE DesignDate => '10/2/2014'",
      "UPDATE * FROM Product WHERE DesignDate => '10/2/2014'"
    ],
    "referenceAnswer": "SELECT * FROM Product WHERE DesignDate <= '10/2/2014'",
    "score": 2,
    "image": null
  },
  {
    "id": "q159",
    "stem": "7. 如附圖所示，附圖中之 SQL 語法敘述，下列選項哪一項最貼近全 意？",
    "type": "single",
    "options": [
      "找出 emp 資料表內 dname 欄位是 Research 的資料列，並 對該些資料列的 sal 欄位進行更新的動作，調整為原 sal 的 1.05 倍",
      "子查詢內先在 dept 資料表中找出 dname 為 Research 的 deptno 值，再將這些 deptno 值回傳到父查詢，父查詢為 更新 emp 資料表，找出 emp 資料表的 deptno 欄位符合子 查詢回傳結果的資料列，並將該些資料列的 sal 欄位值調 整成原值的 1.05 倍",
      "更新資料表 emp，對其所有資料列中的 sal 欄位值都進行 更新動作，調整幅度為原 sal 的 1.05 倍",
      "子查詢內先在 emp 資料表中找出 dname 為 Research 的 deptno 值，再將這些 deptno 值回傳到父查詢，父查詢為 更新 dept 資料表，找出 dept 資料表的 deptno 欄位符合 子查詢回傳結果的資料列，並將該些資料列的 sal 欄位值 調整成原值的 1.05 倍"
    ],
    "referenceAnswer": "子查詢內先在 dept 資料表中找出 dname 為 Research 的 deptno 值，再將這些 deptno 值回傳到父查詢，父查詢為 更新 emp 資料表，找出 emp 資料表的 deptno 欄位符合子 查詢回傳結果的資料列，並將該些資料列的 sal 欄位值調 整成原值的 1.05 倍",
    "answerNote": "附圖：images/WMPEWKkA.png（UPDATE emp 與子查詢）。",
    "score": 2,
    "image": "WMPEWKkA.png"
  },
  {
    "id": "q160",
    "stem": "14. 如附圖所示，已知產品資料表：Product（ProductID, DesignDate, DesignerID），找出產品資料表中不重覆的 DesignerID 資料的 SQL 指令，下列哪一項正確？",
    "type": "single",
    "options": [
      "SELECT DIFFERENT DesignerID FROM Product",
      "SELECT SINGLE DesignerID FROM Product",
      "SELECT PRECISE DesignerID FROM Product",
      "SELECT DISTINCT DesignerID FROM Product"
    ],
    "referenceAnswer": "SELECT DISTINCT DesignerID FROM Product",
    "score": 2,
    "image": "WMRyrmZj.png"
  },
  {
    "id": "q161",
    "stem": "18. 如附圖所示，下列哪一項 SQL 語法可以找出所有產品編號、設計 日期、以及設計人員姓名？",
    "type": "single",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "",
    "answerNote": "附圖檔：images/WMpKltFQ.png（請自行放入）；選項以圖中 A～D 為準。",
    "score": 2,
    "image": "WMpKltFQ.png"
  },
  {
    "id": "q162",
    "stem": "19. 下列哪一項不屬於非結構化資料？",
    "type": "single",
    "options": [
      "語音檔",
      "影像檔",
      "電子郵件",
      "XML 檔"
    ],
    "referenceAnswer": "XML 檔",
    "score": 2,
    "image": null
  },
  {
    "id": "q163",
    "stem": "20. 非結構化訊息的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "訊息形式相對不固定，通常是各種格式的文件（text）、影 像（image）、音訊（audio）、影片（video）",
      "非結構化相對於結構化訊息而言，從巨觀上看也是結構化訊 息的一種形式",
      "結構化訊息是可以數字化的，方便地通過電腦與資料庫技術 進行管理",
      "網際網路上出現的海量訊息，大概分為結構化和非結構化兩種"
    ],
    "referenceAnswer": "非結構化相對於結構化訊息而言，從巨觀上看也是結構化訊 息的一種形式",
    "score": 2,
    "image": null
  },
  {
    "id": "q164",
    "stem": "29. 如附圖所示，關於迴歸分析的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "選項 A",
      "選項 B",
      "選項 C",
      "選項 D"
    ],
    "referenceAnswer": "選項 C",
    "answerNote": "附圖：WMbfzYLz.png。R 輸出殘差自由度 28，簡單線性迴歸時 n-2=28，故樣本數 n=30。",
    "score": 2,
    "image": "WMbfzYLz.png"
  },
  {
    "id": "q165",
    "stem": "30. 簡單隨機抽樣的樣本結果，其單個觀測值與樣本平均數都有對應的 抽樣分佈，關於它們的抽樣分佈，下列敘述哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "許多樣本計算出的平均值都是以母體平均值 μ 為中心",
      "一些觀測值平均數的分佈，要比個別觀測值的分佈更接近常 態分佈",
      "如果從母體隨機抽取愈來愈多的觀測值，則這些觀測值平均 數的分佈，遲早會接近常態分佈",
      "只有在樣本數足夠大的情況下，樣本平均數的抽樣分佈才會是近似常態分佈"
    ],
    "referenceAnswer": "如果從母體隨機抽取愈來愈多的觀測值，則這些觀測值平均 數的分佈，遲早會接近常態分佈",
    "score": 2,
    "image": null
  },
  {
    "id": "q166",
    "stem": "32. 若隨機變數 X 具有卜瓦松分配（Poisson Distribution），單位時間內，事件發生的平均次數為 5，則期望值與變異數分別為下列哪 一項？",
    "type": "single",
    "options": [
      "期望值 5，變異數 10",
      "期望值 5，變異數 5",
      "期望值 10，變異數 5",
      "期望值 10，變異數 10"
    ],
    "referenceAnswer": "期望值 5，變異數 5",
    "score": 2,
    "image": null
  },
  {
    "id": "q167",
    "stem": "36. 關於相關性的敘述，下列哪一項為因果關係？",
    "type": "single",
    "options": [
      "買了啤酒要買尿布",
      "天蠍座的人更容易成功",
      "喝紅酒可以延緩衰老",
      "下雨要撐傘"
    ],
    "referenceAnswer": "下雨要撐傘",
    "score": 2,
    "image": null
  },
  {
    "id": "q168",
    "stem": "37. 關於長條圖的敘述，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "長條圖是表示數值資料最常用的統計圖",
      "長條圖是表示質性資料最常用的統計圖",
      "長條圖中的位置並沒有一定的順序",
      "長條圖的長條是連續且緊密貼近的"
    ],
    "referenceAnswer": "長條圖是表示質性資料最常用的統計圖",
    "score": 2,
    "image": null
  },
  {
    "id": "q169",
    "stem": "38. 下列哪一項不是用來衡量集中趨勢的統計量？",
    "type": "single",
    "options": [
      "變異數",
      "眾數",
      "平均數",
      "中位數"
    ],
    "referenceAnswer": "變異數",
    "score": 2,
    "image": null
  },
  {
    "id": "q170",
    "stem": "42. 關於主成分分析的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "主成分分析適用於分析變量的各種組合，包含線性和非線性的組合",
      "主成分分析的優點是能夠實現資料的維度縮減",
      "主成分分析之後，各主成分會失去原始變量的業務意義",
      "主成分之間互不相關"
    ],
    "referenceAnswer": "主成分分析適用於分析變量的各種組合，包含線性和非線性的組合",
    "score": 2,
    "image": null
  },
  {
    "id": "q171",
    "stem": "43. 購物籃分析所得出的關聯規則，下列哪些正確？(複選)",
    "type": "multi",
    "options": [
      "可以提供關於產品間被同時購買的有用資訊",
      "可用以調整商品擺設及交叉銷售的設計，藉以增加商店的銷售收入",
      "可以進行相關產品推薦或者挑選相應的關聯產品進行精準行銷",
      "可以尋找更多潛在的目標客戶"
    ],
    "referenceAnswer": "可以提供關於產品間被同時購買的有用資訊；可用以調整商品擺設及交叉銷售的設計，藉以增加商店的銷售收入；可以進行相關產品推薦或者挑選相應的關聯產品進行精準行銷；可以尋找更多潛在的目標客戶",
    "score": 2,
    "image": null
  },
  {
    "id": "q172",
    "stem": "46. 關於 NoSQL 的敘述，下列哪一項錯誤？",
    "type": "single-wrong",
    "options": [
      "NoSQL 的意思是「不同於一般 SQL 指令的資料庫」〈No SQL〉",
      "NoSQL 適用於不需要使用關聯模型的資料",
      "NoSQL 資料庫主要並非以關聯式資料表建構而成，所以通常不以 SQL 指令做資料操作",
      "NoSQL 資料庫一般不支援 ACID 特性"
    ],
    "referenceAnswer": "NoSQL 的意思是「不同於一般 SQL 指令的資料庫」〈No SQL〉",
    "answerNote": "部分選項敘述過於絕對；若與教師答案不同請以課堂為準。",
    "score": 2,
    "image": null
  },
  {
    "id": "q173",
    "stem": "47. 如附圖所示，關聯分析中得到了如附圖之結果，下列哪一項正確？",
    "type": "single",
    "options": [
      "73.3% 的交易會同時購買 honey 和 whole milk",
      "Whole Milk 是最受歡迎的商品",
      "tidbits 和 rolls / buns 的消費會互相促進",
      "購買 pudding powder 的交易中有 0.13% 會購買 whole milk"
    ],
    "referenceAnswer": "tidbits 和 rolls / buns 的消費會互相促進",
    "answerNote": "附圖：WMfWw6AY.png。規則 tidbits=>rolls/buns 之 lift>1 表正向關聯；A 為信賴度非「交易占比」。",
    "score": 2,
    "image": "WMfWw6AY.png"
  },
  {
    "id": "q174",
    "stem": "4. 下列哪些是量化模型的特質？(複選)",
    "type": "multi",
    "options": [
      "模型是現實的抽象表徵",
      "所有的模型無法完全代表真相，但總有一些模型是有用的",
      "有效的模型必須正確地表達欲研究事物的相關特質",
      "不需透過電腦進行實作"
    ],
    "referenceAnswer": "模型是現實的抽象表徵；所有的模型無法完全代表真相，但總有一些模型是有用的；有效的模型必須正確地表達欲研究事物的相關特質",
    "score": 2,
    "image": null
  },
  {
    "id": "q175",
    "stem": "8. 關於 NoSQL 資料庫的敘述，下列哪些錯誤？(複選)",
    "type": "multi-wrong",
    "options": [
      "NoSQL 的意思是 \" 不使用 SQL \"",
      "NoSQL 資料庫具有很好的縮放性",
      "NoSQL 資料庫通過資料表建構而成",
      "NoSQL 資料庫可以使用文件存儲、鍵值存儲、圖形存儲等多種方式"
    ],
    "referenceAnswer": "NoSQL 的意思是 \" 不使用 SQL \"；NoSQL 資料庫通過資料表建構而成",
    "score": 2,
    "image": null
  },
  {
    "id": "q176",
    "stem": "14. 下列哪一項不是 NoSQL 資料庫的特性？",
    "type": "single",
    "options": [
      "採用無綱要（schemaless）的資料表達方式，彈性且無須太多的事前規劃",
      "無需撰寫複雜的 SQL 查詢指令，因此基於 NoSQL 的應用系統開發速度較快",
      "資料皆經過正規化，因此節省儲存空間",
      "採用 NoSQL 資料庫可為應用系統的規模縮放性 （scalability）預做準備，彈性的應用系統可以應付突來的人流高峰"
    ],
    "referenceAnswer": "資料皆經過正規化，因此節省儲存空間",
    "score": 2,
    "image": null
  },
  {
    "id": "q177",
    "stem": "18. 下列哪一項屬於量化屬性？",
    "type": "single",
    "options": [
      "公司部門",
      "一批產品的不良數",
      "學校學生的性別",
      "商品付款方式"
    ],
    "referenceAnswer": "一批產品的不良數",
    "score": 2,
    "image": null
  },
  {
    "id": "q178",
    "stem": "26. 關於假設檢定中的 P 值，下列敘述哪些正確？",
    "type": "single",
    "options": [
      "如果 P 值很小，可以接受對立假設",
      "如果 P 值很小，可以接受虛無假設",
      "P 值衡量了 型 I 誤差的概率",
      "P 值衡量了 型 II 誤差的概率"
    ],
    "referenceAnswer": "如果 P 值很小，可以接受對立假設",
    "score": 2,
    "image": null
  },
  {
    "id": "q179",
    "stem": "27. 下述常用的抽樣方法，哪一項不是隨機抽樣？",
    "type": "single",
    "options": [
      "系統抽樣：將母體編號隨機抽取一個號碼後，隔若干號取出下一個樣本，直到所需樣本數為止",
      "集群抽樣：將母體分群然後隨機抽取出若干群，抽到之群每個都要被調查",
      "配額抽樣：將母體分成若干層根據比例決定各層樣本數，研究者在每層配額內選擇樣本",
      "分層抽樣：將母體分為若干層再對各層進行簡單隨機抽樣"
    ],
    "referenceAnswer": "配額抽樣：將母體分成若干層根據比例決定各層樣本數，研究者在每層配額內選擇樣本",
    "score": 2,
    "image": null
  },
  {
    "id": "q180",
    "stem": "30. 關於相關分析的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "二隨機變數具有相關性，但是不一定存在因果關係",
      "散佈圖（scatter plot）無法反映兩變數之間的相互關係",
      "共變異數（covariance）範圍會介於 -1 與 1 之間",
      "相關係數為零，表示兩變數間無任何相關關係"
    ],
    "referenceAnswer": "二隨機變數具有相關性，但是不一定存在因果關係",
    "score": 2,
    "image": null
  },
  {
    "id": "q181",
    "stem": "32. 盒鬚圖（box plot）能顯示下列哪些統計量？(複選)",
    "type": "multi",
    "options": [
      "平均數",
      "中位數",
      "變異數",
      "第 3 四分位數（Q3）"
    ],
    "referenceAnswer": "中位數；第 3 四分位數（Q3）",
    "score": 2,
    "image": null
  },
  {
    "id": "q182",
    "stem": "37. 美國大型連鎖超商曾對顧客購物清單進行探勘，發現啤酒與尿布同 時出現的比例很高，難道尿布的使用者不喝奶粉，這份調查反映了 兩者間，下列哪一項正確？",
    "type": "single",
    "options": [
      "因果關係",
      "相關性",
      "毫無關係",
      "差異性"
    ],
    "referenceAnswer": "相關性",
    "score": 2,
    "image": null
  },
  {
    "id": "q183",
    "stem": "38. 關於於平均絕對離差（MAD）的敘述，下列哪一項正確？",
    "type": "single",
    "options": [
      "敏感度較低，代表性較佳",
      "會考慮各均差之正負號",
      "其值越小，則資料的分散情況也越大",
      "當資料數多時，較不易計算"
    ],
    "referenceAnswer": "敏感度較低，代表性較佳",
    "score": 2,
    "image": null
  },
  {
    "id": "q184",
    "stem": "39. 資料清理（Data Cleaning）時，針對缺失值的處理不包含下列哪一項方式？",
    "type": "single",
    "options": [
      "使用迴歸模型填補缺失值",
      "直接刪除缺失值之資料",
      "隨機亂數填入",
      "使用平均值填補缺失值"
    ],
    "referenceAnswer": "隨機亂數填入",
    "score": 2,
    "image": null
  }
];
