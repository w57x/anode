window.BENCHMARK_DATA = {
  "lastUpdate": 1780552556367,
  "repoUrl": "https://github.com/w57x/anode",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "a1a8425e9f6cc0e923a1ddaaf6973d1c4d965b8f",
          "message": "ci(workflow): updated benchmark action",
          "timestamp": "2026-02-28T17:30:40+01:00",
          "tree_id": "dd90e52e0469d2d327cec65ce3ee3899cfb684de",
          "url": "https://github.com/stulyproject/anode/commit/a1a8425e9f6cc0e923a1ddaaf6973d1c4d965b8f"
        },
        "date": 1772296293172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2020443289549423,
            "range": "0.25%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 827.9160 ms\nMax: 837.4645 ms\np99: 837.4645 ms\nMean: 831.9161 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 235.28505858583833,
            "range": "7.14%",
            "unit": "ops/sec",
            "extra": "Samples: 118\nMin: 3.5309 ms\nMax: 19.5650 ms\np99: 9.7193 ms\nMean: 4.2502 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1264558.9504146485,
            "range": "0.38%",
            "unit": "ops/sec",
            "extra": "Samples: 632280\nMin: 0.0007 ms\nMax: 0.5393 ms\np99: 0.0012 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1115.5275361604658,
            "range": "22.22%",
            "unit": "ops/sec",
            "extra": "Samples: 558\nMin: 0.7344 ms\nMax: 57.4478 ms\np99: 1.3339 ms\nMean: 0.8964 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 6122446.934703139,
            "range": "0.55%",
            "unit": "ops/sec",
            "extra": "Samples: 3061224\nMin: 0.0001 ms\nMax: 0.4199 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8363.624991782544,
            "range": "0.13%",
            "unit": "ops/sec",
            "extra": "Samples: 4182\nMin: 0.1137 ms\nMax: 0.1890 ms\np99: 0.1386 ms\nMean: 0.1196 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6105.613783293584,
            "range": "5.31%",
            "unit": "ops/sec",
            "extra": "Samples: 3053\nMin: 0.0652 ms\nMax: 7.7744 ms\np99: 0.6330 ms\nMean: 0.1638 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 775.2919646133017,
            "range": "0.81%",
            "unit": "ops/sec",
            "extra": "Samples: 388\nMin: 1.2206 ms\nMax: 2.1567 ms\np99: 2.0107 ms\nMean: 1.2898 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1022.7397432695973,
            "range": "1.04%",
            "unit": "ops/sec",
            "extra": "Samples: 512\nMin: 0.9023 ms\nMax: 1.8347 ms\np99: 1.4700 ms\nMean: 0.9778 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1278207.1921767895,
            "range": "0.08%",
            "unit": "ops/sec",
            "extra": "Samples: 639104\nMin: 0.0008 ms\nMax: 0.0414 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "a1a8425e9f6cc0e923a1ddaaf6973d1c4d965b8f",
          "message": "ci(workflow): updated benchmark action",
          "timestamp": "2026-02-28T16:30:40Z",
          "url": "https://github.com/stulyproject/anode/commit/a1a8425e9f6cc0e923a1ddaaf6973d1c4d965b8f"
        },
        "date": 1772296324207,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2170889997180567,
            "range": "0.32%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 817.4809 ms\nMax: 828.3760 ms\np99: 828.3760 ms\nMean: 821.6326 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 238.84067453105774,
            "range": "7.13%",
            "unit": "ops/sec",
            "extra": "Samples: 120\nMin: 3.5144 ms\nMax: 19.7078 ms\np99: 9.6287 ms\nMean: 4.1869 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1662270.8663355662,
            "range": "0.38%",
            "unit": "ops/sec",
            "extra": "Samples: 831136\nMin: 0.0006 ms\nMax: 0.6176 ms\np99: 0.0009 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1177.3101598211201,
            "range": "5.12%",
            "unit": "ops/sec",
            "extra": "Samples: 589\nMin: 0.7309 ms\nMax: 12.0980 ms\np99: 1.3900 ms\nMean: 0.8494 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 6004307.687731377,
            "range": "0.49%",
            "unit": "ops/sec",
            "extra": "Samples: 3002154\nMin: 0.0001 ms\nMax: 0.3582 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8517.861158861102,
            "range": "0.25%",
            "unit": "ops/sec",
            "extra": "Samples: 4259\nMin: 0.1129 ms\nMax: 0.7012 ms\np99: 0.1350 ms\nMean: 0.1174 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6503.86734712121,
            "range": "5.41%",
            "unit": "ops/sec",
            "extra": "Samples: 3252\nMin: 0.0647 ms\nMax: 7.1755 ms\np99: 0.6488 ms\nMean: 0.1538 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 779.8228148985772,
            "range": "0.95%",
            "unit": "ops/sec",
            "extra": "Samples: 390\nMin: 1.2196 ms\nMax: 2.3737 ms\np99: 2.0818 ms\nMean: 1.2823 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1052.8836001438028,
            "range": "0.57%",
            "unit": "ops/sec",
            "extra": "Samples: 527\nMin: 0.8959 ms\nMax: 1.8719 ms\np99: 1.0076 ms\nMean: 0.9498 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1280195.3650219338,
            "range": "0.06%",
            "unit": "ops/sec",
            "extra": "Samples: 640098\nMin: 0.0008 ms\nMax: 0.0397 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "28de19b6089276f8674525548435b2db8984d799",
          "message": "Update README.md",
          "timestamp": "2026-02-28T18:50:03+01:00",
          "tree_id": "a68fc519c5fb2bfdc852bf3a36628de8bc73a383",
          "url": "https://github.com/stulyproject/anode/commit/28de19b6089276f8674525548435b2db8984d799"
        },
        "date": 1772301052463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2648399617316852,
            "range": "0.50%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 784.5650 ms\nMax: 800.2211 ms\np99: 800.2211 ms\nMean: 790.6139 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 243.51572855016326,
            "range": "4.60%",
            "unit": "ops/sec",
            "extra": "Samples: 122\nMin: 3.3006 ms\nMax: 14.2113 ms\np99: 8.0548 ms\nMean: 4.1065 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1528815.5107789377,
            "range": "0.33%",
            "unit": "ops/sec",
            "extra": "Samples: 764408\nMin: 0.0006 ms\nMax: 0.7014 ms\np99: 0.0009 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1028.7118367508886,
            "range": "22.25%",
            "unit": "ops/sec",
            "extra": "Samples: 515\nMin: 0.8170 ms\nMax: 57.6462 ms\np99: 1.3460 ms\nMean: 0.9721 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5727062.957657646,
            "range": "0.48%",
            "unit": "ops/sec",
            "extra": "Samples: 2863532\nMin: 0.0001 ms\nMax: 0.3487 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8023.833072176826,
            "range": "0.24%",
            "unit": "ops/sec",
            "extra": "Samples: 4012\nMin: 0.1199 ms\nMax: 0.2571 ms\np99: 0.1571 ms\nMean: 0.1246 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4945.776945459853,
            "range": "4.37%",
            "unit": "ops/sec",
            "extra": "Samples: 2473\nMin: 0.0642 ms\nMax: 7.1676 ms\np99: 0.6390 ms\nMean: 0.2022 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 819.2935919562929,
            "range": "0.98%",
            "unit": "ops/sec",
            "extra": "Samples: 410\nMin: 1.1725 ms\nMax: 2.7170 ms\np99: 1.7907 ms\nMean: 1.2206 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1118.5865719050605,
            "range": "0.60%",
            "unit": "ops/sec",
            "extra": "Samples: 560\nMin: 0.8655 ms\nMax: 1.6865 ms\np99: 1.1063 ms\nMean: 0.8940 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1332977.5547868977,
            "range": "0.08%",
            "unit": "ops/sec",
            "extra": "Samples: 666489\nMin: 0.0007 ms\nMax: 0.0306 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "28de19b6089276f8674525548435b2db8984d799",
          "message": "Update README.md",
          "timestamp": "2026-02-28T17:50:03Z",
          "url": "https://github.com/stulyproject/anode/commit/28de19b6089276f8674525548435b2db8984d799"
        },
        "date": 1772301084337,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.243309525008184,
            "range": "0.91%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 794.8843 ms\nMax: 827.9952 ms\np99: 827.9952 ms\nMean: 804.3049 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 250.0458551354162,
            "range": "4.10%",
            "unit": "ops/sec",
            "extra": "Samples: 126\nMin: 3.2694 ms\nMax: 13.2966 ms\np99: 6.0770 ms\nMean: 3.9993 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1448708.1079820273,
            "range": "0.11%",
            "unit": "ops/sec",
            "extra": "Samples: 724355\nMin: 0.0006 ms\nMax: 0.1025 ms\np99: 0.0013 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1118.8156083711333,
            "range": "0.71%",
            "unit": "ops/sec",
            "extra": "Samples: 560\nMin: 0.8401 ms\nMax: 2.2003 ms\np99: 0.9793 ms\nMean: 0.8938 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5661493.354642307,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 2830747\nMin: 0.0001 ms\nMax: 0.0279 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8171.792305727795,
            "range": "0.13%",
            "unit": "ops/sec",
            "extra": "Samples: 4086\nMin: 0.1199 ms\nMax: 0.2228 ms\np99: 0.1485 ms\nMean: 0.1224 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4799.517475710617,
            "range": "5.28%",
            "unit": "ops/sec",
            "extra": "Samples: 2400\nMin: 0.0608 ms\nMax: 7.8184 ms\np99: 0.6484 ms\nMean: 0.2084 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 829.7463614726068,
            "range": "0.67%",
            "unit": "ops/sec",
            "extra": "Samples: 415\nMin: 1.1776 ms\nMax: 1.8679 ms\np99: 1.7621 ms\nMean: 1.2052 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1114.6916084308275,
            "range": "0.37%",
            "unit": "ops/sec",
            "extra": "Samples: 558\nMin: 0.8655 ms\nMax: 1.3338 ms\np99: 1.0728 ms\nMean: 0.8971 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1342697.8979556775,
            "range": "0.08%",
            "unit": "ops/sec",
            "extra": "Samples: 671349\nMin: 0.0007 ms\nMax: 0.0306 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "2d7f5dcf57178944a9df8f1156ad30c59c400743",
          "message": "Update README",
          "timestamp": "2026-02-28T20:59:29+01:00",
          "tree_id": "70336de03bcd51a6c3b0cc8db4736e10a6874846",
          "url": "https://github.com/stulyproject/anode/commit/2d7f5dcf57178944a9df8f1156ad30c59c400743"
        },
        "date": 1772308820200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2457374933425076,
            "range": "0.72%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 795.5014 ms\nMax: 824.0985 ms\np99: 824.0985 ms\nMean: 802.7373 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 243.84526554828517,
            "range": "5.44%",
            "unit": "ops/sec",
            "extra": "Samples: 122\nMin: 3.2951 ms\nMax: 16.8821 ms\np99: 7.7764 ms\nMean: 4.1010 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1226190.5751658017,
            "range": "0.28%",
            "unit": "ops/sec",
            "extra": "Samples: 613096\nMin: 0.0007 ms\nMax: 0.4393 ms\np99: 0.0013 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1108.297685787025,
            "range": "3.64%",
            "unit": "ops/sec",
            "extra": "Samples: 555\nMin: 0.8004 ms\nMax: 9.5210 ms\np99: 1.3464 ms\nMean: 0.9023 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5564319.788589096,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 2782160\nMin: 0.0001 ms\nMax: 0.0339 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8171.2793095081925,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 4086\nMin: 0.1203 ms\nMax: 0.1933 ms\np99: 0.1388 ms\nMean: 0.1224 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5079.5928538073085,
            "range": "4.68%",
            "unit": "ops/sec",
            "extra": "Samples: 2542\nMin: 0.0615 ms\nMax: 8.0505 ms\np99: 0.6414 ms\nMean: 0.1969 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 821.2148315722466,
            "range": "0.86%",
            "unit": "ops/sec",
            "extra": "Samples: 411\nMin: 1.1771 ms\nMax: 2.5752 ms\np99: 1.7763 ms\nMean: 1.2177 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1110.521147860918,
            "range": "0.58%",
            "unit": "ops/sec",
            "extra": "Samples: 556\nMin: 0.8708 ms\nMax: 1.6776 ms\np99: 1.1362 ms\nMean: 0.9005 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1333685.8106161822,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 666843\nMin: 0.0007 ms\nMax: 0.0401 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "2d7f5dcf57178944a9df8f1156ad30c59c400743",
          "message": "Update README",
          "timestamp": "2026-02-28T19:59:29Z",
          "url": "https://github.com/stulyproject/anode/commit/2d7f5dcf57178944a9df8f1156ad30c59c400743"
        },
        "date": 1772308849625,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.267725809745758,
            "range": "0.20%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 785.3574 ms\nMax: 792.9276 ms\np99: 792.9276 ms\nMean: 788.8141 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 245.58617550613323,
            "range": "4.69%",
            "unit": "ops/sec",
            "extra": "Samples: 123\nMin: 3.2595 ms\nMax: 13.5030 ms\np99: 8.2058 ms\nMean: 4.0719 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1499183.6581847449,
            "range": "0.29%",
            "unit": "ops/sec",
            "extra": "Samples: 749592\nMin: 0.0006 ms\nMax: 0.4135 ms\np99: 0.0010 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1119.808463481292,
            "range": "3.69%",
            "unit": "ops/sec",
            "extra": "Samples: 560\nMin: 0.7869 ms\nMax: 9.6630 ms\np99: 1.3048 ms\nMean: 0.8930 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5869642.227381284,
            "range": "0.38%",
            "unit": "ops/sec",
            "extra": "Samples: 2934822\nMin: 0.0001 ms\nMax: 0.5203 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8138.100795141809,
            "range": "0.24%",
            "unit": "ops/sec",
            "extra": "Samples: 4070\nMin: 0.1202 ms\nMax: 0.4703 ms\np99: 0.1402 ms\nMean: 0.1229 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6428.432867220087,
            "range": "21.22%",
            "unit": "ops/sec",
            "extra": "Samples: 3223\nMin: 0.0600 ms\nMax: 53.5279 ms\np99: 0.5992 ms\nMean: 0.1556 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 835.288277587886,
            "range": "0.80%",
            "unit": "ops/sec",
            "extra": "Samples: 418\nMin: 1.1660 ms\nMax: 1.9731 ms\np99: 1.8598 ms\nMean: 1.1972 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1110.446937796384,
            "range": "0.60%",
            "unit": "ops/sec",
            "extra": "Samples: 556\nMin: 0.8704 ms\nMax: 1.6823 ms\np99: 1.0481 ms\nMean: 0.9005 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1341878.9882219825,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 670940\nMin: 0.0007 ms\nMax: 0.0356 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "93d5104bed5103495b64d92df1ef4dd4ca25915c",
          "message": "chore: Removing most technical stuff that no one cares about anyway",
          "timestamp": "2026-02-28T21:15:42+01:00",
          "tree_id": "8df9af9fe4f5a02d8140a2d68581a543bb1ae586",
          "url": "https://github.com/stulyproject/anode/commit/93d5104bed5103495b64d92df1ef4dd4ca25915c"
        },
        "date": 1772309797276,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.0570877998875967,
            "range": "0.14%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 944.4156 ms\nMax: 950.1587 ms\np99: 950.1587 ms\nMean: 945.9952 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 254.44540119226244,
            "range": "1.40%",
            "unit": "ops/sec",
            "extra": "Samples: 128\nMin: 3.3059 ms\nMax: 6.4586 ms\np99: 5.1713 ms\nMean: 3.9301 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1688659.8547774397,
            "range": "0.89%",
            "unit": "ops/sec",
            "extra": "Samples: 844330\nMin: 0.0005 ms\nMax: 2.0234 ms\np99: 0.0011 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1191.1691214203388,
            "range": "0.67%",
            "unit": "ops/sec",
            "extra": "Samples: 596\nMin: 0.7830 ms\nMax: 2.0131 ms\np99: 0.9979 ms\nMean: 0.8395 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5627629.268385222,
            "range": "0.22%",
            "unit": "ops/sec",
            "extra": "Samples: 2813815\nMin: 0.0001 ms\nMax: 0.5009 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8079.480731772407,
            "range": "0.21%",
            "unit": "ops/sec",
            "extra": "Samples: 4040\nMin: 0.1210 ms\nMax: 0.2547 ms\np99: 0.1474 ms\nMean: 0.1238 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4819.050781930338,
            "range": "5.37%",
            "unit": "ops/sec",
            "extra": "Samples: 2410\nMin: 0.0607 ms\nMax: 8.5371 ms\np99: 0.6505 ms\nMean: 0.2075 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 764.8419970930854,
            "range": "2.24%",
            "unit": "ops/sec",
            "extra": "Samples: 383\nMin: 1.1741 ms\nMax: 2.6831 ms\np99: 2.4369 ms\nMean: 1.3075 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1088.2733216059557,
            "range": "1.07%",
            "unit": "ops/sec",
            "extra": "Samples: 545\nMin: 0.8667 ms\nMax: 1.5879 ms\np99: 1.5662 ms\nMean: 0.9189 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1335150.958582133,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 667576\nMin: 0.0007 ms\nMax: 0.0392 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "93d5104bed5103495b64d92df1ef4dd4ca25915c",
          "message": "chore: Removing most technical stuff that no one cares about anyway",
          "timestamp": "2026-02-28T20:15:42Z",
          "url": "https://github.com/stulyproject/anode/commit/93d5104bed5103495b64d92df1ef4dd4ca25915c"
        },
        "date": 1772309826359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2581947919068888,
            "range": "0.33%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 790.5054 ms\nMax: 804.2784 ms\np99: 804.2784 ms\nMean: 794.7895 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 243.53084416052764,
            "range": "5.34%",
            "unit": "ops/sec",
            "extra": "Samples: 122\nMin: 3.2966 ms\nMax: 16.7469 ms\np99: 7.6455 ms\nMean: 4.1063 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1442730.6409451347,
            "range": "3.12%",
            "unit": "ops/sec",
            "extra": "Samples: 721366\nMin: 0.0006 ms\nMax: 4.6838 ms\np99: 0.0013 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1195.9910635548022,
            "range": "0.82%",
            "unit": "ops/sec",
            "extra": "Samples: 598\nMin: 0.7860 ms\nMax: 2.0145 ms\np99: 1.1570 ms\nMean: 0.8361 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5624086.616499104,
            "range": "0.49%",
            "unit": "ops/sec",
            "extra": "Samples: 2812044\nMin: 0.0001 ms\nMax: 0.3793 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8033.78064565615,
            "range": "0.23%",
            "unit": "ops/sec",
            "extra": "Samples: 4017\nMin: 0.1210 ms\nMax: 0.5647 ms\np99: 0.1495 ms\nMean: 0.1245 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5249.718604584006,
            "range": "5.70%",
            "unit": "ops/sec",
            "extra": "Samples: 2625\nMin: 0.0599 ms\nMax: 9.4203 ms\np99: 0.6578 ms\nMean: 0.1905 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 833.8241898372737,
            "range": "0.71%",
            "unit": "ops/sec",
            "extra": "Samples: 417\nMin: 1.1682 ms\nMax: 1.8854 ms\np99: 1.7865 ms\nMean: 1.1993 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1105.1833402432198,
            "range": "1.04%",
            "unit": "ops/sec",
            "extra": "Samples: 553\nMin: 0.8650 ms\nMax: 2.7924 ms\np99: 1.2502 ms\nMean: 0.9048 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1271911.4734295267,
            "range": "0.41%",
            "unit": "ops/sec",
            "extra": "Samples: 635956\nMin: 0.0007 ms\nMax: 0.1097 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "5a6b1eae3efaf458193bf1b781a47e26b7ea29ed",
          "message": "feat(react): add auto-recalculation of socket offsets on node resize\n\nIntegrated ResizeObserver into the Socket component to ensure link\nanchors stay synchronized when nodes change dimensions due to dynamic\ncontent or styling.",
          "timestamp": "2026-03-21T21:41:08+01:00",
          "tree_id": "074b1f04287bcb6f59f9d4888b08831b86826fde",
          "url": "https://github.com/stulyproject/anode/commit/5a6b1eae3efaf458193bf1b781a47e26b7ea29ed"
        },
        "date": 1774125720910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2486440764825595,
            "range": "1.39%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 790.0376 ms\nMax: 843.1335 ms\np99: 843.1335 ms\nMean: 800.8687 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 244.74401093696096,
            "range": "4.43%",
            "unit": "ops/sec",
            "extra": "Samples: 123\nMin: 3.2918 ms\nMax: 13.5583 ms\np99: 8.2874 ms\nMean: 4.0859 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1134900.6812437975,
            "range": "0.42%",
            "unit": "ops/sec",
            "extra": "Samples: 567451\nMin: 0.0008 ms\nMax: 0.5473 ms\np99: 0.0015 ms\nMean: 0.0009 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1108.6211347257713,
            "range": "3.52%",
            "unit": "ops/sec",
            "extra": "Samples: 555\nMin: 0.7878 ms\nMax: 9.1271 ms\np99: 1.3788 ms\nMean: 0.9020 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5768622.961669718,
            "range": "0.37%",
            "unit": "ops/sec",
            "extra": "Samples: 2884312\nMin: 0.0001 ms\nMax: 0.3073 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8107.137951809053,
            "range": "0.30%",
            "unit": "ops/sec",
            "extra": "Samples: 4054\nMin: 0.1203 ms\nMax: 0.5570 ms\np99: 0.1713 ms\nMean: 0.1233 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5176.821739103439,
            "range": "4.41%",
            "unit": "ops/sec",
            "extra": "Samples: 2591\nMin: 0.0596 ms\nMax: 7.2293 ms\np99: 0.6370 ms\nMean: 0.1932 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 833.7628845058031,
            "range": "0.83%",
            "unit": "ops/sec",
            "extra": "Samples: 417\nMin: 1.1716 ms\nMax: 2.4906 ms\np99: 1.7240 ms\nMean: 1.1994 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1117.2082099630152,
            "range": "0.44%",
            "unit": "ops/sec",
            "extra": "Samples: 559\nMin: 0.8673 ms\nMax: 1.5070 ms\np99: 1.0306 ms\nMean: 0.8951 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1333622.0529138022,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 666812\nMin: 0.0007 ms\nMax: 0.0294 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "5a6b1eae3efaf458193bf1b781a47e26b7ea29ed",
          "message": "feat(react): add auto-recalculation of socket offsets on node resize\n\nIntegrated ResizeObserver into the Socket component to ensure link\nanchors stay synchronized when nodes change dimensions due to dynamic\ncontent or styling.",
          "timestamp": "2026-03-21T20:41:08Z",
          "url": "https://github.com/stulyproject/anode/commit/5a6b1eae3efaf458193bf1b781a47e26b7ea29ed"
        },
        "date": 1774125754802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.242534856484283,
            "range": "1.73%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 791.3549 ms\nMax: 851.2451 ms\np99: 851.2451 ms\nMean: 804.8064 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 253.4713044836873,
            "range": "1.96%",
            "unit": "ops/sec",
            "extra": "Samples: 127\nMin: 3.2937 ms\nMax: 6.8673 ms\np99: 6.1043 ms\nMean: 3.9452 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1717720.845692838,
            "range": "1.64%",
            "unit": "ops/sec",
            "extra": "Samples: 858861\nMin: 0.0005 ms\nMax: 3.6341 ms\np99: 0.0011 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1208.1391443527327,
            "range": "0.64%",
            "unit": "ops/sec",
            "extra": "Samples: 605\nMin: 0.7831 ms\nMax: 1.9711 ms\np99: 1.0427 ms\nMean: 0.8277 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5848773.134394135,
            "range": "0.44%",
            "unit": "ops/sec",
            "extra": "Samples: 2924387\nMin: 0.0001 ms\nMax: 0.4444 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8109.758167013615,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 4055\nMin: 0.1209 ms\nMax: 0.1898 ms\np99: 0.1388 ms\nMean: 0.1233 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5024.876859624219,
            "range": "5.05%",
            "unit": "ops/sec",
            "extra": "Samples: 2513\nMin: 0.0611 ms\nMax: 8.1909 ms\np99: 0.6342 ms\nMean: 0.1990 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 823.8542832452048,
            "range": "0.76%",
            "unit": "ops/sec",
            "extra": "Samples: 412\nMin: 1.1822 ms\nMax: 2.2080 ms\np99: 1.7621 ms\nMean: 1.2138 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1107.8435392568367,
            "range": "0.64%",
            "unit": "ops/sec",
            "extra": "Samples: 554\nMin: 0.8706 ms\nMax: 1.6962 ms\np99: 1.0696 ms\nMean: 0.9027 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1336738.9279372927,
            "range": "0.08%",
            "unit": "ops/sec",
            "extra": "Samples: 668370\nMin: 0.0007 ms\nMax: 0.0428 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "facf6b7eff3d79d9c1e3f9397c7b5ccc082654ec",
          "message": "chore(react): version update",
          "timestamp": "2026-03-21T21:43:12+01:00",
          "tree_id": "32754111e6471ba1399b5d534883bff719cb09b7",
          "url": "https://github.com/stulyproject/anode/commit/facf6b7eff3d79d9c1e3f9397c7b5ccc082654ec"
        },
        "date": 1774125841766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2190345657833828,
            "range": "4.40%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 790.8345 ms\nMax: 936.6267 ms\np99: 936.6267 ms\nMean: 820.3213 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 244.47563962439594,
            "range": "4.56%",
            "unit": "ops/sec",
            "extra": "Samples: 123\nMin: 3.2950 ms\nMax: 13.9873 ms\np99: 8.1223 ms\nMean: 4.0904 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1776304.9235602475,
            "range": "0.35%",
            "unit": "ops/sec",
            "extra": "Samples: 888153\nMin: 0.0005 ms\nMax: 0.6888 ms\np99: 0.0009 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1090.3993526318886,
            "range": "18.06%",
            "unit": "ops/sec",
            "extra": "Samples: 546\nMin: 0.7690 ms\nMax: 46.9248 ms\np99: 1.3126 ms\nMean: 0.9171 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5833822.798234728,
            "range": "0.32%",
            "unit": "ops/sec",
            "extra": "Samples: 2916912\nMin: 0.0001 ms\nMax: 0.2414 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8198.615007966646,
            "range": "0.17%",
            "unit": "ops/sec",
            "extra": "Samples: 4100\nMin: 0.1196 ms\nMax: 0.4684 ms\np99: 0.1319 ms\nMean: 0.1220 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4901.895967841106,
            "range": "5.02%",
            "unit": "ops/sec",
            "extra": "Samples: 2459\nMin: 0.0607 ms\nMax: 7.2643 ms\np99: 0.6443 ms\nMean: 0.2040 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 829.7329471320747,
            "range": "0.75%",
            "unit": "ops/sec",
            "extra": "Samples: 415\nMin: 1.1712 ms\nMax: 2.0873 ms\np99: 1.7476 ms\nMean: 1.2052 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1116.4671731898095,
            "range": "0.41%",
            "unit": "ops/sec",
            "extra": "Samples: 559\nMin: 0.8669 ms\nMax: 1.4196 ms\np99: 1.0212 ms\nMean: 0.8957 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1342301.4040186096,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 671151\nMin: 0.0007 ms\nMax: 0.0328 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "facf6b7eff3d79d9c1e3f9397c7b5ccc082654ec",
          "message": "chore(react): version update",
          "timestamp": "2026-03-21T20:43:12Z",
          "url": "https://github.com/stulyproject/anode/commit/facf6b7eff3d79d9c1e3f9397c7b5ccc082654ec"
        },
        "date": 1774125872180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2485793679558639,
            "range": "0.27%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 797.2769 ms\nMax: 806.3432 ms\np99: 806.3432 ms\nMean: 800.9102 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 240.24208666937938,
            "range": "6.01%",
            "unit": "ops/sec",
            "extra": "Samples: 121\nMin: 3.3298 ms\nMax: 18.3255 ms\np99: 7.7949 ms\nMean: 4.1625 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1215035.608762088,
            "range": "0.43%",
            "unit": "ops/sec",
            "extra": "Samples: 607518\nMin: 0.0007 ms\nMax: 0.6045 ms\np99: 0.0013 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1090.705912337696,
            "range": "4.00%",
            "unit": "ops/sec",
            "extra": "Samples: 546\nMin: 0.8008 ms\nMax: 10.3101 ms\np99: 1.5409 ms\nMean: 0.9168 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5741007.632577643,
            "range": "0.52%",
            "unit": "ops/sec",
            "extra": "Samples: 2870504\nMin: 0.0001 ms\nMax: 0.3877 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8086.83041789013,
            "range": "0.23%",
            "unit": "ops/sec",
            "extra": "Samples: 4044\nMin: 0.1215 ms\nMax: 0.6019 ms\np99: 0.1445 ms\nMean: 0.1237 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5107.920837440814,
            "range": "4.57%",
            "unit": "ops/sec",
            "extra": "Samples: 2554\nMin: 0.0616 ms\nMax: 7.2030 ms\np99: 0.6575 ms\nMean: 0.1958 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 806.3704173129391,
            "range": "1.44%",
            "unit": "ops/sec",
            "extra": "Samples: 404\nMin: 1.1828 ms\nMax: 2.6625 ms\np99: 2.3081 ms\nMean: 1.2401 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1108.4228318032012,
            "range": "0.49%",
            "unit": "ops/sec",
            "extra": "Samples: 555\nMin: 0.8686 ms\nMax: 1.5153 ms\np99: 1.0777 ms\nMean: 0.9022 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1334584.449214491,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 667293\nMin: 0.0007 ms\nMax: 0.0510 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "Delphin Blehoussi",
            "username": "luxluth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3f7e906be9d4f0e244b33228a994bfc5d1f0837",
          "message": "Merge pull request #5 from stulyproject/changeset-release/master\n\nVersion Packages",
          "timestamp": "2026-03-21T21:45:01+01:00",
          "tree_id": "7b1668e4c1e715bf812ce1517e9efc0e541b8e0d",
          "url": "https://github.com/stulyproject/anode/commit/f3f7e906be9d4f0e244b33228a994bfc5d1f0837"
        },
        "date": 1774125950388,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2521097976529003,
            "range": "1.54%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 788.2696 ms\nMax: 846.6603 ms\np99: 846.6603 ms\nMean: 798.6520 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 249.1527009285976,
            "range": "4.25%",
            "unit": "ops/sec",
            "extra": "Samples: 125\nMin: 3.2734 ms\nMax: 13.1494 ms\np99: 7.8605 ms\nMean: 4.0136 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1571003.9622950463,
            "range": "17.75%",
            "unit": "ops/sec",
            "extra": "Samples: 785502\nMin: 0.0005 ms\nMax: 45.2296 ms\np99: 0.0011 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1144.3342521346453,
            "range": "1.28%",
            "unit": "ops/sec",
            "extra": "Samples: 573\nMin: 0.7863 ms\nMax: 2.1753 ms\np99: 1.2691 ms\nMean: 0.8739 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5633930.997126043,
            "range": "0.36%",
            "unit": "ops/sec",
            "extra": "Samples: 2816966\nMin: 0.0001 ms\nMax: 0.3170 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8155.672990133854,
            "range": "0.21%",
            "unit": "ops/sec",
            "extra": "Samples: 4078\nMin: 0.1203 ms\nMax: 0.5694 ms\np99: 0.1429 ms\nMean: 0.1226 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4806.637222215156,
            "range": "5.25%",
            "unit": "ops/sec",
            "extra": "Samples: 2404\nMin: 0.0616 ms\nMax: 8.3836 ms\np99: 0.6409 ms\nMean: 0.2080 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 830.3636472001106,
            "range": "0.79%",
            "unit": "ops/sec",
            "extra": "Samples: 416\nMin: 1.1709 ms\nMax: 2.1522 ms\np99: 1.7047 ms\nMean: 1.2043 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1115.3352356621238,
            "range": "0.44%",
            "unit": "ops/sec",
            "extra": "Samples: 558\nMin: 0.8614 ms\nMax: 1.4729 ms\np99: 1.0323 ms\nMean: 0.8966 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1343388.9145446345,
            "range": "0.08%",
            "unit": "ops/sec",
            "extra": "Samples: 671695\nMin: 0.0007 ms\nMax: 0.0275 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Delphin Blehoussi",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3f7e906be9d4f0e244b33228a994bfc5d1f0837",
          "message": "Merge pull request #5 from stulyproject/changeset-release/master\n\nVersion Packages",
          "timestamp": "2026-03-21T20:45:01Z",
          "url": "https://github.com/stulyproject/anode/commit/f3f7e906be9d4f0e244b33228a994bfc5d1f0837"
        },
        "date": 1774125981380,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2363691723662094,
            "range": "2.88%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 789.2156 ms\nMax: 897.8129 ms\np99: 897.8129 ms\nMean: 808.8199 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 245.45550947970293,
            "range": "4.36%",
            "unit": "ops/sec",
            "extra": "Samples: 123\nMin: 3.2874 ms\nMax: 13.5692 ms\np99: 7.9499 ms\nMean: 4.0741 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1198614.8852877184,
            "range": "0.27%",
            "unit": "ops/sec",
            "extra": "Samples: 599308\nMin: 0.0007 ms\nMax: 0.3890 ms\np99: 0.0013 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1113.2800128703893,
            "range": "3.60%",
            "unit": "ops/sec",
            "extra": "Samples: 557\nMin: 0.7983 ms\nMax: 9.3573 ms\np99: 1.4116 ms\nMean: 0.8982 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5677096.387734523,
            "range": "0.35%",
            "unit": "ops/sec",
            "extra": "Samples: 2838549\nMin: 0.0001 ms\nMax: 0.4594 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8105.0612393858855,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 4053\nMin: 0.1212 ms\nMax: 0.2146 ms\np99: 0.1353 ms\nMean: 0.1234 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5180.596461749878,
            "range": "4.43%",
            "unit": "ops/sec",
            "extra": "Samples: 2593\nMin: 0.0611 ms\nMax: 8.1725 ms\np99: 0.6191 ms\nMean: 0.1930 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 817.2892966695647,
            "range": "1.44%",
            "unit": "ops/sec",
            "extra": "Samples: 409\nMin: 1.1748 ms\nMax: 2.5962 ms\np99: 2.4998 ms\nMean: 1.2236 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1117.9153738062014,
            "range": "0.42%",
            "unit": "ops/sec",
            "extra": "Samples: 559\nMin: 0.8651 ms\nMax: 1.4468 ms\np99: 1.0711 ms\nMean: 0.8945 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1328448.6104416645,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 664225\nMin: 0.0007 ms\nMax: 0.0395 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "25a83c01628538b2b192e119c742de2c2a5ef2c7",
          "message": "feat: support multi-selection dragging and undo/redo move history",
          "timestamp": "2026-05-30T00:30:56+02:00",
          "tree_id": "674704022f3c0785a1779469fd1f9a4c2c36d069",
          "url": "https://github.com/stulyproject/anode/commit/25a83c01628538b2b192e119c742de2c2a5ef2c7"
        },
        "date": 1780093917178,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.158421306807139,
            "range": "0.35%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 859.2368 ms\nMax: 871.5488 ms\np99: 871.5488 ms\nMean: 863.2438 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 228.8664933759845,
            "range": "5.28%",
            "unit": "ops/sec",
            "extra": "Samples: 115\nMin: 3.4883 ms\nMax: 13.9878 ms\np99: 10.1454 ms\nMean: 4.3694 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1098611.2815103286,
            "range": "0.57%",
            "unit": "ops/sec",
            "extra": "Samples: 549306\nMin: 0.0008 ms\nMax: 0.7318 ms\np99: 0.0016 ms\nMean: 0.0009 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1064.6732233931073,
            "range": "4.28%",
            "unit": "ops/sec",
            "extra": "Samples: 533\nMin: 0.8134 ms\nMax: 11.0551 ms\np99: 1.5171 ms\nMean: 0.9393 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5622638.852996791,
            "range": "0.67%",
            "unit": "ops/sec",
            "extra": "Samples: 2811320\nMin: 0.0001 ms\nMax: 0.4901 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8087.790995305077,
            "range": "0.12%",
            "unit": "ops/sec",
            "extra": "Samples: 4044\nMin: 0.1210 ms\nMax: 0.2193 ms\np99: 0.1384 ms\nMean: 0.1236 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5045.478852489919,
            "range": "5.08%",
            "unit": "ops/sec",
            "extra": "Samples: 2523\nMin: 0.0742 ms\nMax: 9.8926 ms\np99: 0.6250 ms\nMean: 0.1982 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 640.6343175434425,
            "range": "29.35%",
            "unit": "ops/sec",
            "extra": "Samples: 321\nMin: 1.2657 ms\nMax: 76.2664 ms\np99: 2.6041 ms\nMean: 1.5610 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 967.7995258316113,
            "range": "1.55%",
            "unit": "ops/sec",
            "extra": "Samples: 485\nMin: 0.9484 ms\nMax: 3.5101 ms\np99: 1.6023 ms\nMean: 1.0333 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1168769.4483436185,
            "range": "0.11%",
            "unit": "ops/sec",
            "extra": "Samples: 584385\nMin: 0.0008 ms\nMax: 0.0588 ms\np99: 0.0009 ms\nMean: 0.0009 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "25a83c01628538b2b192e119c742de2c2a5ef2c7",
          "message": "feat: support multi-selection dragging and undo/redo move history",
          "timestamp": "2026-05-29T22:30:56Z",
          "url": "https://github.com/stulyproject/anode/commit/25a83c01628538b2b192e119c742de2c2a5ef2c7"
        },
        "date": 1780093951494,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.154147838636039,
            "range": "0.33%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 860.2072 ms\nMax: 873.2177 ms\np99: 873.2177 ms\nMean: 866.4401 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 231.15822990872368,
            "range": "5.26%",
            "unit": "ops/sec",
            "extra": "Samples: 116\nMin: 3.5119 ms\nMax: 16.0201 ms\np99: 7.8333 ms\nMean: 4.3260 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1130528.5212684323,
            "range": "0.34%",
            "unit": "ops/sec",
            "extra": "Samples: 565265\nMin: 0.0008 ms\nMax: 0.5708 ms\np99: 0.0015 ms\nMean: 0.0009 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1042.647263184908,
            "range": "25.83%",
            "unit": "ops/sec",
            "extra": "Samples: 522\nMin: 0.7795 ms\nMax: 66.7705 ms\np99: 1.2549 ms\nMean: 0.9591 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5816862.918044678,
            "range": "0.11%",
            "unit": "ops/sec",
            "extra": "Samples: 2908432\nMin: 0.0001 ms\nMax: 0.0351 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8120.372011578019,
            "range": "0.24%",
            "unit": "ops/sec",
            "extra": "Samples: 4061\nMin: 0.1204 ms\nMax: 0.6618 ms\np99: 0.1420 ms\nMean: 0.1231 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4515.2165616675875,
            "range": "21.44%",
            "unit": "ops/sec",
            "extra": "Samples: 2451\nMin: 0.0724 ms\nMax: 58.4664 ms\np99: 0.6203 ms\nMean: 0.2215 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 739.6933349784125,
            "range": "2.26%",
            "unit": "ops/sec",
            "extra": "Samples: 370\nMin: 1.2573 ms\nMax: 3.6186 ms\np99: 2.9748 ms\nMean: 1.3519 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1004.4111601532323,
            "range": "0.89%",
            "unit": "ops/sec",
            "extra": "Samples: 503\nMin: 0.9376 ms\nMax: 1.7353 ms\np99: 1.3184 ms\nMean: 0.9956 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1159685.8028513975,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 579843\nMin: 0.0008 ms\nMax: 0.0306 ms\np99: 0.0009 ms\nMean: 0.0009 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "d1ca761137cf5dc0b5f54df2cda88933f956927c",
          "message": "fix: ensure correct Manhattan path routing and align nodes instantly without transitions",
          "timestamp": "2026-05-30T10:59:34+02:00",
          "tree_id": "8ef2246b21174940d61bb6aed2f59573923518fd",
          "url": "https://github.com/stulyproject/anode/commit/d1ca761137cf5dc0b5f54df2cda88933f956927c"
        },
        "date": 1780131671483,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.1442427393444057,
            "range": "1.09%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 862.4191 ms\nMax: 900.4669 ms\np99: 900.4669 ms\nMean: 873.9404 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 231.38260826507872,
            "range": "5.55%",
            "unit": "ops/sec",
            "extra": "Samples: 116\nMin: 3.5498 ms\nMax: 17.3428 ms\np99: 7.8028 ms\nMean: 4.3218 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1381321.555215967,
            "range": "0.42%",
            "unit": "ops/sec",
            "extra": "Samples: 690661\nMin: 0.0006 ms\nMax: 0.5121 ms\np99: 0.0011 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1028.886123766855,
            "range": "27.36%",
            "unit": "ops/sec",
            "extra": "Samples: 515\nMin: 0.7779 ms\nMax: 70.6827 ms\np99: 1.2844 ms\nMean: 0.9719 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5838650.306795001,
            "range": "0.54%",
            "unit": "ops/sec",
            "extra": "Samples: 2919326\nMin: 0.0001 ms\nMax: 0.3916 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 7761.144768412705,
            "range": "0.51%",
            "unit": "ops/sec",
            "extra": "Samples: 3881\nMin: 0.1209 ms\nMax: 0.6493 ms\np99: 0.2215 ms\nMean: 0.1288 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4949.754189341455,
            "range": "4.83%",
            "unit": "ops/sec",
            "extra": "Samples: 2481\nMin: 0.0742 ms\nMax: 6.9977 ms\np99: 0.6115 ms\nMean: 0.2020 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 746.5583584818542,
            "range": "1.47%",
            "unit": "ops/sec",
            "extra": "Samples: 374\nMin: 1.2716 ms\nMax: 3.1052 ms\np99: 2.6075 ms\nMean: 1.3395 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1024.246600438757,
            "range": "0.50%",
            "unit": "ops/sec",
            "extra": "Samples: 513\nMin: 0.9402 ms\nMax: 1.6289 ms\np99: 1.2673 ms\nMean: 0.9763 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1174779.1987995289,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 587390\nMin: 0.0008 ms\nMax: 0.0451 ms\np99: 0.0009 ms\nMean: 0.0009 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "d1ca761137cf5dc0b5f54df2cda88933f956927c",
          "message": "fix: ensure correct Manhattan path routing and align nodes instantly without transitions",
          "timestamp": "2026-05-30T08:59:34Z",
          "url": "https://github.com/stulyproject/anode/commit/d1ca761137cf5dc0b5f54df2cda88933f956927c"
        },
        "date": 1780131693946,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.4792260308239773,
            "range": "1.29%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 665.1148 ms\nMax: 708.6954 ms\np99: 708.6954 ms\nMean: 676.0292 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 301.1978120360433,
            "range": "3.66%",
            "unit": "ops/sec",
            "extra": "Samples: 151\nMin: 2.7022 ms\nMax: 11.2020 ms\np99: 6.3124 ms\nMean: 3.3201 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1653093.5172943345,
            "range": "40.40%",
            "unit": "ops/sec",
            "extra": "Samples: 826547\nMin: 0.0004 ms\nMax: 103.0542 ms\np99: 0.0009 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1563.0352758713868,
            "range": "0.63%",
            "unit": "ops/sec",
            "extra": "Samples: 782\nMin: 0.6025 ms\nMax: 1.6850 ms\np99: 0.7262 ms\nMean: 0.6398 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 7460652.507829068,
            "range": "0.50%",
            "unit": "ops/sec",
            "extra": "Samples: 3730327\nMin: 0.0001 ms\nMax: 0.4137 ms\np99: 0.0002 ms\nMean: 0.0001 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 10412.0485738571,
            "range": "0.20%",
            "unit": "ops/sec",
            "extra": "Samples: 5207\nMin: 0.0939 ms\nMax: 0.5346 ms\np99: 0.1055 ms\nMean: 0.0960 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 7303.763138961727,
            "range": "24.49%",
            "unit": "ops/sec",
            "extra": "Samples: 3652\nMin: 0.0590 ms\nMax: 45.1884 ms\np99: 0.4861 ms\nMean: 0.1369 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 919.8672705117724,
            "range": "2.55%",
            "unit": "ops/sec",
            "extra": "Samples: 460\nMin: 0.9809 ms\nMax: 3.2334 ms\np99: 2.4567 ms\nMean: 1.0871 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1315.299605590832,
            "range": "0.49%",
            "unit": "ops/sec",
            "extra": "Samples: 658\nMin: 0.7348 ms\nMax: 1.3976 ms\np99: 0.8401 ms\nMean: 0.7603 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1513792.6012584893,
            "range": "0.08%",
            "unit": "ops/sec",
            "extra": "Samples: 756897\nMin: 0.0006 ms\nMax: 0.1084 ms\np99: 0.0007 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "d1ca761137cf5dc0b5f54df2cda88933f956927c",
          "message": "fix: ensure correct Manhattan path routing and align nodes instantly without transitions",
          "timestamp": "2026-05-30T08:59:34Z",
          "url": "https://github.com/stulyproject/anode/commit/d1ca761137cf5dc0b5f54df2cda88933f956927c"
        },
        "date": 1780145068019,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.1967382948515521,
            "range": "0.45%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 830.2930 ms\nMax: 849.4873 ms\np99: 849.4873 ms\nMean: 835.6046 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 241.91717530052372,
            "range": "6.49%",
            "unit": "ops/sec",
            "extra": "Samples: 121\nMin: 3.4529 ms\nMax: 19.0769 ms\np99: 8.3251 ms\nMean: 4.1336 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1323487.7591237212,
            "range": "0.37%",
            "unit": "ops/sec",
            "extra": "Samples: 661744\nMin: 0.0007 ms\nMax: 0.5421 ms\np99: 0.0012 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1147.18048638163,
            "range": "21.49%",
            "unit": "ops/sec",
            "extra": "Samples: 574\nMin: 0.7225 ms\nMax: 55.5734 ms\np99: 1.3303 ms\nMean: 0.8717 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5999203.696301902,
            "range": "0.58%",
            "unit": "ops/sec",
            "extra": "Samples: 2999603\nMin: 0.0001 ms\nMax: 0.4944 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8518.98983522368,
            "range": "0.21%",
            "unit": "ops/sec",
            "extra": "Samples: 4260\nMin: 0.1126 ms\nMax: 0.5859 ms\np99: 0.1277 ms\nMean: 0.1174 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6411.916914381561,
            "range": "6.11%",
            "unit": "ops/sec",
            "extra": "Samples: 3206\nMin: 0.0666 ms\nMax: 7.5170 ms\np99: 0.6873 ms\nMean: 0.1560 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 771.359822257212,
            "range": "0.96%",
            "unit": "ops/sec",
            "extra": "Samples: 386\nMin: 1.2212 ms\nMax: 2.3696 ms\np99: 2.1068 ms\nMean: 1.2964 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1039.3296344644036,
            "range": "0.75%",
            "unit": "ops/sec",
            "extra": "Samples: 520\nMin: 0.8978 ms\nMax: 1.7467 ms\np99: 1.4560 ms\nMean: 0.9622 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1286013.5756139634,
            "range": "0.06%",
            "unit": "ops/sec",
            "extra": "Samples: 643007\nMin: 0.0008 ms\nMax: 0.0436 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Delphin Blehoussi",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9579f019bef8309c3c12711dfdefda8182078034",
          "message": "Merge pull request #6 from stulyproject/idk\n\ndev branch sync",
          "timestamp": "2026-05-31T08:43:20Z",
          "url": "https://github.com/stulyproject/anode/commit/9579f019bef8309c3c12711dfdefda8182078034"
        },
        "date": 1780217012075,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2532579042350962,
            "range": "0.32%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 793.1313 ms\nMax: 803.9855 ms\np99: 803.9855 ms\nMean: 797.9204 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 255.3767902284592,
            "range": "1.94%",
            "unit": "ops/sec",
            "extra": "Samples: 128\nMin: 3.3302 ms\nMax: 6.8354 ms\np99: 6.2485 ms\nMean: 3.9158 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1402981.7137884996,
            "range": "2.34%",
            "unit": "ops/sec",
            "extra": "Samples: 701491\nMin: 0.0006 ms\nMax: 5.4939 ms\np99: 0.0014 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1211.46093622744,
            "range": "0.68%",
            "unit": "ops/sec",
            "extra": "Samples: 606\nMin: 0.7830 ms\nMax: 2.0424 ms\np99: 0.9883 ms\nMean: 0.8254 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5883603.082109577,
            "range": "0.24%",
            "unit": "ops/sec",
            "extra": "Samples: 2941802\nMin: 0.0001 ms\nMax: 0.5531 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8165.637298722188,
            "range": "0.28%",
            "unit": "ops/sec",
            "extra": "Samples: 4083\nMin: 0.1198 ms\nMax: 0.7735 ms\np99: 0.1427 ms\nMean: 0.1225 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6073.568557983908,
            "range": "25.83%",
            "unit": "ops/sec",
            "extra": "Samples: 3037\nMin: 0.0610 ms\nMax: 64.5571 ms\np99: 0.5476 ms\nMean: 0.1646 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 828.964639744255,
            "range": "0.85%",
            "unit": "ops/sec",
            "extra": "Samples: 415\nMin: 1.1745 ms\nMax: 1.9964 ms\np99: 1.9377 ms\nMean: 1.2063 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1109.738416899448,
            "range": "0.53%",
            "unit": "ops/sec",
            "extra": "Samples: 555\nMin: 0.8693 ms\nMax: 1.6721 ms\np99: 1.0512 ms\nMean: 0.9011 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1330482.8611054432,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 665242\nMin: 0.0007 ms\nMax: 0.0323 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "Delphin Blehoussi",
            "username": "luxluth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9579f019bef8309c3c12711dfdefda8182078034",
          "message": "Merge pull request #6 from stulyproject/idk\n\ndev branch sync",
          "timestamp": "2026-05-31T10:43:20+02:00",
          "tree_id": "6515ab09ab8f88a2132682acaf9161093bcca648",
          "url": "https://github.com/stulyproject/anode/commit/9579f019bef8309c3c12711dfdefda8182078034"
        },
        "date": 1780217044919,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2528370873259667,
            "range": "0.73%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 792.1101 ms\nMax: 820.4600 ms\np99: 820.4600 ms\nMean: 798.1884 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 250.6971390020684,
            "range": "4.30%",
            "unit": "ops/sec",
            "extra": "Samples: 126\nMin: 3.2840 ms\nMax: 13.3012 ms\np99: 8.1497 ms\nMean: 3.9889 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1291557.2999762797,
            "range": "0.42%",
            "unit": "ops/sec",
            "extra": "Samples: 645779\nMin: 0.0007 ms\nMax: 0.5516 ms\np99: 0.0011 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1078.3459553328019,
            "range": "20.97%",
            "unit": "ops/sec",
            "extra": "Samples: 540\nMin: 0.7733 ms\nMax: 54.3745 ms\np99: 1.2874 ms\nMean: 0.9273 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5837583.194405261,
            "range": "0.38%",
            "unit": "ops/sec",
            "extra": "Samples: 2918792\nMin: 0.0001 ms\nMax: 0.3267 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8121.650931443689,
            "range": "0.11%",
            "unit": "ops/sec",
            "extra": "Samples: 4061\nMin: 0.1206 ms\nMax: 0.1951 ms\np99: 0.1359 ms\nMean: 0.1231 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5235.429694170406,
            "range": "4.78%",
            "unit": "ops/sec",
            "extra": "Samples: 2618\nMin: 0.0615 ms\nMax: 6.8687 ms\np99: 0.6064 ms\nMean: 0.1910 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 830.8915690436874,
            "range": "0.71%",
            "unit": "ops/sec",
            "extra": "Samples: 416\nMin: 1.1723 ms\nMax: 1.8617 ms\np99: 1.7651 ms\nMean: 1.2035 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1109.769352196487,
            "range": "0.58%",
            "unit": "ops/sec",
            "extra": "Samples: 555\nMin: 0.8678 ms\nMax: 1.6762 ms\np99: 1.0812 ms\nMean: 0.9011 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1329954.8987952583,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 664978\nMin: 0.0007 ms\nMax: 0.0356 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Delphin Blehoussi",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9579f019bef8309c3c12711dfdefda8182078034",
          "message": "Merge pull request #6 from stulyproject/idk\n\ndev branch sync",
          "timestamp": "2026-05-31T08:43:20Z",
          "url": "https://github.com/stulyproject/anode/commit/9579f019bef8309c3c12711dfdefda8182078034"
        },
        "date": 1780217076018,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2515232134154481,
            "range": "0.28%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 792.8191 ms\nMax: 803.2773 ms\np99: 803.2773 ms\nMean: 799.0263 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 245.69855391838453,
            "range": "5.71%",
            "unit": "ops/sec",
            "extra": "Samples: 123\nMin: 3.2879 ms\nMax: 16.4657 ms\np99: 9.3976 ms\nMean: 4.0700 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1053443.8019511416,
            "range": "42.29%",
            "unit": "ops/sec",
            "extra": "Samples: 526722\nMin: 0.0007 ms\nMax: 107.8719 ms\np99: 0.0013 ms\nMean: 0.0009 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1209.4941000646447,
            "range": "0.68%",
            "unit": "ops/sec",
            "extra": "Samples: 605\nMin: 0.7690 ms\nMax: 1.8965 ms\np99: 0.9609 ms\nMean: 0.8268 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5403202.379065117,
            "range": "0.39%",
            "unit": "ops/sec",
            "extra": "Samples: 2701602\nMin: 0.0002 ms\nMax: 0.4498 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8106.64432587063,
            "range": "0.21%",
            "unit": "ops/sec",
            "extra": "Samples: 4054\nMin: 0.1212 ms\nMax: 0.5642 ms\np99: 0.1412 ms\nMean: 0.1234 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5459.610653326978,
            "range": "5.11%",
            "unit": "ops/sec",
            "extra": "Samples: 2730\nMin: 0.0606 ms\nMax: 8.0571 ms\np99: 0.6140 ms\nMean: 0.1832 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 831.1035218751674,
            "range": "0.72%",
            "unit": "ops/sec",
            "extra": "Samples: 416\nMin: 1.1741 ms\nMax: 2.0062 ms\np99: 1.7815 ms\nMean: 1.2032 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1116.0790337850815,
            "range": "0.38%",
            "unit": "ops/sec",
            "extra": "Samples: 559\nMin: 0.8646 ms\nMax: 1.4519 ms\np99: 0.9960 ms\nMean: 0.8960 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1330355.4598762167,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 665178\nMin: 0.0007 ms\nMax: 0.0345 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Delphin Blehoussi",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9579f019bef8309c3c12711dfdefda8182078034",
          "message": "Merge pull request #6 from stulyproject/idk\n\ndev branch sync",
          "timestamp": "2026-05-31T08:43:20Z",
          "url": "https://github.com/w57x/anode/commit/9579f019bef8309c3c12711dfdefda8182078034"
        },
        "date": 1780549043137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.24770336551598,
            "range": "0.41%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 795.5677 ms\nMax: 810.5579 ms\np99: 810.5579 ms\nMean: 801.4726 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 261.7401972037301,
            "range": "1.23%",
            "unit": "ops/sec",
            "extra": "Samples: 131\nMin: 3.2975 ms\nMax: 6.0416 ms\np99: 4.7183 ms\nMean: 3.8206 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1330970.7888179831,
            "range": "2.17%",
            "unit": "ops/sec",
            "extra": "Samples: 665486\nMin: 0.0006 ms\nMax: 5.4652 ms\np99: 0.0015 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1223.086520708681,
            "range": "0.69%",
            "unit": "ops/sec",
            "extra": "Samples: 612\nMin: 0.7663 ms\nMax: 1.9308 ms\np99: 0.8922 ms\nMean: 0.8176 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5529035.8894227445,
            "range": "0.42%",
            "unit": "ops/sec",
            "extra": "Samples: 2764518\nMin: 0.0001 ms\nMax: 0.3678 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8081.418283349882,
            "range": "0.34%",
            "unit": "ops/sec",
            "extra": "Samples: 4041\nMin: 0.1199 ms\nMax: 0.2439 ms\np99: 0.2230 ms\nMean: 0.1237 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4620.7067763751165,
            "range": "17.73%",
            "unit": "ops/sec",
            "extra": "Samples: 2386\nMin: 0.0616 ms\nMax: 28.0557 ms\np99: 0.8354 ms\nMean: 0.2164 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 822.1538075844783,
            "range": "0.85%",
            "unit": "ops/sec",
            "extra": "Samples: 412\nMin: 1.1786 ms\nMax: 1.9319 ms\np99: 1.8401 ms\nMean: 1.2163 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1110.7526669635918,
            "range": "0.31%",
            "unit": "ops/sec",
            "extra": "Samples: 556\nMin: 0.8709 ms\nMax: 1.3405 ms\np99: 1.0009 ms\nMean: 0.9003 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1335294.6994226486,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 667648\nMin: 0.0007 ms\nMax: 0.0539 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Delphin Blehoussi",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9579f019bef8309c3c12711dfdefda8182078034",
          "message": "Merge pull request #6 from stulyproject/idk\n\ndev branch sync",
          "timestamp": "2026-05-31T08:43:20Z",
          "url": "https://github.com/w57x/anode/commit/9579f019bef8309c3c12711dfdefda8182078034"
        },
        "date": 1780549161470,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.1985100799125616,
            "range": "0.20%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 831.0167 ms\nMax: 838.8160 ms\np99: 838.8160 ms\nMean: 834.3693 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 237.41225083604576,
            "range": "5.81%",
            "unit": "ops/sec",
            "extra": "Samples: 119\nMin: 3.4522 ms\nMax: 15.0247 ms\np99: 10.0710 ms\nMean: 4.2121 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1712351.8492841907,
            "range": "0.26%",
            "unit": "ops/sec",
            "extra": "Samples: 856177\nMin: 0.0005 ms\nMax: 0.6320 ms\np99: 0.0009 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1138.5050699787087,
            "range": "4.43%",
            "unit": "ops/sec",
            "extra": "Samples: 570\nMin: 0.7559 ms\nMax: 11.1478 ms\np99: 1.6194 ms\nMean: 0.8783 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 6195145.4052821575,
            "range": "0.57%",
            "unit": "ops/sec",
            "extra": "Samples: 3097573\nMin: 0.0001 ms\nMax: 0.4155 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8361.434566348253,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 4181\nMin: 0.1136 ms\nMax: 0.1774 ms\np99: 0.1296 ms\nMean: 0.1196 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6275.593504707476,
            "range": "5.14%",
            "unit": "ops/sec",
            "extra": "Samples: 3138\nMin: 0.0676 ms\nMax: 6.8877 ms\np99: 0.6234 ms\nMean: 0.1593 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 746.9900216833508,
            "range": "1.63%",
            "unit": "ops/sec",
            "extra": "Samples: 374\nMin: 1.2304 ms\nMax: 2.7968 ms\np99: 2.7451 ms\nMean: 1.3387 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1049.7513705869358,
            "range": "0.51%",
            "unit": "ops/sec",
            "extra": "Samples: 525\nMin: 0.9052 ms\nMax: 1.8175 ms\np99: 1.0173 ms\nMean: 0.9526 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1288933.6494042457,
            "range": "0.06%",
            "unit": "ops/sec",
            "extra": "Samples: 644467\nMin: 0.0008 ms\nMax: 0.0514 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "Delphin Blehoussi",
            "username": "luxluth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a805254adb168c5a3ec38077238db26e4359119",
          "message": "Merge pull request #7 from w57x/idk\n\nexternal layouts improvements",
          "timestamp": "2026-06-04T07:00:01+02:00",
          "tree_id": "45b23310e77ce0670fe8501ecaf8605db3cbc8a9",
          "url": "https://github.com/w57x/anode/commit/1a805254adb168c5a3ec38077238db26e4359119"
        },
        "date": 1780549245824,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2425376452242323,
            "range": "1.60%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 797.4173 ms\nMax: 855.7218 ms\np99: 855.7218 ms\nMean: 804.8046 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 245.44789000711648,
            "range": "4.39%",
            "unit": "ops/sec",
            "extra": "Samples: 123\nMin: 3.3263 ms\nMax: 13.5170 ms\np99: 8.3029 ms\nMean: 4.0742 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1197853.2573298924,
            "range": "0.43%",
            "unit": "ops/sec",
            "extra": "Samples: 598927\nMin: 0.0007 ms\nMax: 0.6200 ms\np99: 0.0012 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1057.1038169828755,
            "range": "18.80%",
            "unit": "ops/sec",
            "extra": "Samples: 529\nMin: 0.7792 ms\nMax: 48.7976 ms\np99: 1.3056 ms\nMean: 0.9460 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5449769.389552701,
            "range": "0.61%",
            "unit": "ops/sec",
            "extra": "Samples: 2724885\nMin: 0.0002 ms\nMax: 0.4922 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8165.366563519996,
            "range": "0.15%",
            "unit": "ops/sec",
            "extra": "Samples: 4083\nMin: 0.1201 ms\nMax: 0.2451 ms\np99: 0.1449 ms\nMean: 0.1225 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5133.228075428033,
            "range": "4.85%",
            "unit": "ops/sec",
            "extra": "Samples: 2567\nMin: 0.0608 ms\nMax: 6.9552 ms\np99: 0.6104 ms\nMean: 0.1948 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 814.5367807886233,
            "range": "0.81%",
            "unit": "ops/sec",
            "extra": "Samples: 408\nMin: 1.1827 ms\nMax: 1.9700 ms\np99: 1.9196 ms\nMean: 1.2277 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1099.9467801750984,
            "range": "0.41%",
            "unit": "ops/sec",
            "extra": "Samples: 550\nMin: 0.8719 ms\nMax: 1.5054 ms\np99: 1.0246 ms\nMean: 0.9091 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1326564.4824100947,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 663283\nMin: 0.0007 ms\nMax: 0.0406 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Delphin Blehoussi",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1a805254adb168c5a3ec38077238db26e4359119",
          "message": "Merge pull request #7 from w57x/idk\n\nexternal layouts improvements",
          "timestamp": "2026-06-04T05:00:01Z",
          "url": "https://github.com/w57x/anode/commit/1a805254adb168c5a3ec38077238db26e4359119"
        },
        "date": 1780549276802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2583811737955644,
            "range": "0.22%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 790.7597 ms\nMax: 799.0518 ms\np99: 799.0518 ms\nMean: 794.6718 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 247.58224853008605,
            "range": "4.46%",
            "unit": "ops/sec",
            "extra": "Samples: 124\nMin: 3.2944 ms\nMax: 13.6738 ms\np99: 8.0150 ms\nMean: 4.0391 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1838626.6320601853,
            "range": "0.36%",
            "unit": "ops/sec",
            "extra": "Samples: 919314\nMin: 0.0005 ms\nMax: 0.6081 ms\np99: 0.0007 ms\nMean: 0.0005 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1037.0314831129663,
            "range": "21.92%",
            "unit": "ops/sec",
            "extra": "Samples: 519\nMin: 0.7842 ms\nMax: 56.7865 ms\np99: 1.3244 ms\nMean: 0.9643 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5319595.744707971,
            "range": "0.57%",
            "unit": "ops/sec",
            "extra": "Samples: 2659798\nMin: 0.0002 ms\nMax: 0.6631 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8177.759753773662,
            "range": "0.21%",
            "unit": "ops/sec",
            "extra": "Samples: 4089\nMin: 0.1199 ms\nMax: 0.5850 ms\np99: 0.1359 ms\nMean: 0.1223 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5587.5240993972075,
            "range": "4.96%",
            "unit": "ops/sec",
            "extra": "Samples: 2794\nMin: 0.0599 ms\nMax: 6.9019 ms\np99: 0.6350 ms\nMean: 0.1790 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 829.9727088373642,
            "range": "0.73%",
            "unit": "ops/sec",
            "extra": "Samples: 415\nMin: 1.1735 ms\nMax: 1.8495 ms\np99: 1.7970 ms\nMean: 1.2049 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1120.0190447160069,
            "range": "0.39%",
            "unit": "ops/sec",
            "extra": "Samples: 561\nMin: 0.8649 ms\nMax: 1.5206 ms\np99: 1.0002 ms\nMean: 0.8928 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1340001.5122395672,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 670001\nMin: 0.0007 ms\nMax: 0.0350 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "133df31689992a64f4ae4a73221a76a8a3efefcc",
          "message": "chore: renaming org",
          "timestamp": "2026-06-04T07:04:23+02:00",
          "tree_id": "21ad5a6c82e02b8a79f7bdae85ec50e36e67a873",
          "url": "https://github.com/w57x/anode/commit/133df31689992a64f4ae4a73221a76a8a3efefcc"
        },
        "date": 1780549507547,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.486734909944887,
            "range": "0.59%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 666.8826 ms\nMax: 684.9164 ms\np99: 684.9164 ms\nMean: 672.6149 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 299.87162555684336,
            "range": "3.68%",
            "unit": "ops/sec",
            "extra": "Samples: 150\nMin: 2.7068 ms\nMax: 10.8079 ms\np99: 6.3813 ms\nMean: 3.3348 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1737601.3119105073,
            "range": "16.74%",
            "unit": "ops/sec",
            "extra": "Samples: 868801\nMin: 0.0005 ms\nMax: 42.6923 ms\np99: 0.0010 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1550.7649614801644,
            "range": "0.64%",
            "unit": "ops/sec",
            "extra": "Samples: 776\nMin: 0.6167 ms\nMax: 1.6143 ms\np99: 0.7289 ms\nMean: 0.6448 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 7603745.7871715035,
            "range": "0.55%",
            "unit": "ops/sec",
            "extra": "Samples: 3801873\nMin: 0.0001 ms\nMax: 0.3651 ms\np99: 0.0002 ms\nMean: 0.0001 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 10349.40453666148,
            "range": "0.21%",
            "unit": "ops/sec",
            "extra": "Samples: 5175\nMin: 0.0947 ms\nMax: 0.5679 ms\np99: 0.1139 ms\nMean: 0.0966 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6885.630558378,
            "range": "5.30%",
            "unit": "ops/sec",
            "extra": "Samples: 3443\nMin: 0.0609 ms\nMax: 8.1765 ms\np99: 0.5013 ms\nMean: 0.1452 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 983.6343752336089,
            "range": "0.92%",
            "unit": "ops/sec",
            "extra": "Samples: 492\nMin: 0.9764 ms\nMax: 1.8099 ms\np99: 1.7265 ms\nMean: 1.0166 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1316.14688098548,
            "range": "0.52%",
            "unit": "ops/sec",
            "extra": "Samples: 659\nMin: 0.7352 ms\nMax: 1.5081 ms\np99: 0.8493 ms\nMean: 0.7598 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1491824.7349262699,
            "range": "0.08%",
            "unit": "ops/sec",
            "extra": "Samples: 745913\nMin: 0.0006 ms\nMax: 0.0965 ms\np99: 0.0007 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "133df31689992a64f4ae4a73221a76a8a3efefcc",
          "message": "chore: renaming org",
          "timestamp": "2026-06-04T05:04:23Z",
          "url": "https://github.com/w57x/anode/commit/133df31689992a64f4ae4a73221a76a8a3efefcc"
        },
        "date": 1780549541180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.153308845441856,
            "range": "0.45%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 858.4829 ms\nMax: 875.2315 ms\np99: 875.2315 ms\nMean: 867.0704 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 229.98384087536883,
            "range": "6.12%",
            "unit": "ops/sec",
            "extra": "Samples: 115\nMin: 3.5043 ms\nMax: 18.6113 ms\np99: 8.0082 ms\nMean: 4.3481 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1222679.1392330253,
            "range": "0.52%",
            "unit": "ops/sec",
            "extra": "Samples: 611340\nMin: 0.0007 ms\nMax: 0.7125 ms\np99: 0.0013 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 998.4743013134571,
            "range": "30.32%",
            "unit": "ops/sec",
            "extra": "Samples: 500\nMin: 0.7874 ms\nMax: 78.2801 ms\np99: 1.3106 ms\nMean: 1.0015 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5942175.821716549,
            "range": "0.65%",
            "unit": "ops/sec",
            "extra": "Samples: 2971088\nMin: 0.0001 ms\nMax: 0.7218 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 7938.889793897068,
            "range": "0.35%",
            "unit": "ops/sec",
            "extra": "Samples: 3970\nMin: 0.1213 ms\nMax: 0.6489 ms\np99: 0.1871 ms\nMean: 0.1260 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4619.743807486597,
            "range": "32.17%",
            "unit": "ops/sec",
            "extra": "Samples: 2310\nMin: 0.0732 ms\nMax: 61.0015 ms\np99: 0.5237 ms\nMean: 0.2165 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 748.7473322357222,
            "range": "1.12%",
            "unit": "ops/sec",
            "extra": "Samples: 375\nMin: 1.2653 ms\nMax: 2.2286 ms\np99: 2.0836 ms\nMean: 1.3356 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1012.061719635821,
            "range": "0.63%",
            "unit": "ops/sec",
            "extra": "Samples: 507\nMin: 0.9488 ms\nMax: 1.7455 ms\np99: 1.3042 ms\nMean: 0.9881 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1162657.4558742908,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 581329\nMin: 0.0008 ms\nMax: 0.0366 ms\np99: 0.0009 ms\nMean: 0.0009 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "694b37b81307b5bc6af757cd866f5602b41cd826",
          "message": "pnpm: approving canvas build",
          "timestamp": "2026-06-04T07:13:51+02:00",
          "tree_id": "0b555d3ea0d0a80718646a1366c38348ba9338ff",
          "url": "https://github.com/w57x/anode/commit/694b37b81307b5bc6af757cd866f5602b41cd826"
        },
        "date": 1780550080569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2467332085058414,
            "range": "0.53%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 797.0709 ms\nMax: 817.1042 ms\np99: 817.1042 ms\nMean: 802.0962 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 248.65398871482986,
            "range": "3.79%",
            "unit": "ops/sec",
            "extra": "Samples: 125\nMin: 3.3007 ms\nMax: 11.3213 ms\np99: 7.8691 ms\nMean: 4.0217 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1449097.3653017604,
            "range": "0.78%",
            "unit": "ops/sec",
            "extra": "Samples: 724549\nMin: 0.0006 ms\nMax: 1.9696 ms\np99: 0.0012 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1188.8493436303463,
            "range": "0.66%",
            "unit": "ops/sec",
            "extra": "Samples: 595\nMin: 0.7828 ms\nMax: 2.0947 ms\np99: 0.9980 ms\nMean: 0.8411 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5877262.166329803,
            "range": "0.49%",
            "unit": "ops/sec",
            "extra": "Samples: 2938632\nMin: 0.0001 ms\nMax: 0.4819 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8155.671065474198,
            "range": "0.13%",
            "unit": "ops/sec",
            "extra": "Samples: 4078\nMin: 0.1198 ms\nMax: 0.2043 ms\np99: 0.1416 ms\nMean: 0.1226 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5285.751833951646,
            "range": "5.42%",
            "unit": "ops/sec",
            "extra": "Samples: 2643\nMin: 0.0610 ms\nMax: 8.7544 ms\np99: 0.6221 ms\nMean: 0.1892 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 833.9364356970441,
            "range": "0.74%",
            "unit": "ops/sec",
            "extra": "Samples: 417\nMin: 1.1711 ms\nMax: 2.0872 ms\np99: 1.7697 ms\nMean: 1.1991 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1109.372875950853,
            "range": "0.39%",
            "unit": "ops/sec",
            "extra": "Samples: 555\nMin: 0.8688 ms\nMax: 1.5343 ms\np99: 1.0035 ms\nMean: 0.9014 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1335564.6831335248,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 667783\nMin: 0.0007 ms\nMax: 0.0455 ms\np99: 0.0008 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "694b37b81307b5bc6af757cd866f5602b41cd826",
          "message": "pnpm: approving canvas build",
          "timestamp": "2026-06-04T05:13:51Z",
          "url": "https://github.com/w57x/anode/commit/694b37b81307b5bc6af757cd866f5602b41cd826"
        },
        "date": 1780550118038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.2014436741822845,
            "range": "0.31%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 826.6542 ms\nMax: 836.8545 ms\np99: 836.8545 ms\nMean: 832.3320 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 249.11603864141568,
            "range": "5.99%",
            "unit": "ops/sec",
            "extra": "Samples: 125\nMin: 3.4375 ms\nMax: 18.3585 ms\np99: 8.2077 ms\nMean: 4.0142 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1744072.3849847447,
            "range": "1.72%",
            "unit": "ops/sec",
            "extra": "Samples: 872037\nMin: 0.0005 ms\nMax: 3.0152 ms\np99: 0.0011 ms\nMean: 0.0006 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1293.1578464704858,
            "range": "0.85%",
            "unit": "ops/sec",
            "extra": "Samples: 647\nMin: 0.7342 ms\nMax: 2.1340 ms\np99: 0.8664 ms\nMean: 0.7733 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5942754.074577295,
            "range": "0.62%",
            "unit": "ops/sec",
            "extra": "Samples: 2971378\nMin: 0.0001 ms\nMax: 0.5386 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8462.477955640445,
            "range": "0.24%",
            "unit": "ops/sec",
            "extra": "Samples: 4232\nMin: 0.1131 ms\nMax: 0.6781 ms\np99: 0.1372 ms\nMean: 0.1182 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6191.159797703885,
            "range": "38.87%",
            "unit": "ops/sec",
            "extra": "Samples: 3096\nMin: 0.0658 ms\nMax: 98.8256 ms\np99: 0.6029 ms\nMean: 0.1615 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 784.8910760618929,
            "range": "1.01%",
            "unit": "ops/sec",
            "extra": "Samples: 393\nMin: 1.2187 ms\nMax: 2.6741 ms\np99: 2.1468 ms\nMean: 1.2741 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1048.8347802195508,
            "range": "0.72%",
            "unit": "ops/sec",
            "extra": "Samples: 525\nMin: 0.8973 ms\nMax: 1.9151 ms\np99: 1.1156 ms\nMean: 0.9534 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1287352.4423033546,
            "range": "0.06%",
            "unit": "ops/sec",
            "extra": "Samples: 643677\nMin: 0.0008 ms\nMax: 0.0546 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "c0b0d99134f061c7dc474be32d21bfc5c06045ea",
          "message": "anode update",
          "timestamp": "2026-06-04T07:50:49+02:00",
          "tree_id": "387995319588cdc90df5af20a3dfdbd2917ea046",
          "url": "https://github.com/w57x/anode/commit/c0b0d99134f061c7dc474be32d21bfc5c06045ea"
        },
        "date": 1780552299480,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.4995124522700498,
            "range": "0.54%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 660.9980 ms\nMax: 674.6719 ms\np99: 674.6719 ms\nMean: 666.8834 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 290.91798698551304,
            "range": "3.91%",
            "unit": "ops/sec",
            "extra": "Samples: 146\nMin: 2.7105 ms\nMax: 11.5038 ms\np99: 6.3805 ms\nMean: 3.4374 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1120627.594333868,
            "range": "42.34%",
            "unit": "ops/sec",
            "extra": "Samples: 560314\nMin: 0.0006 ms\nMax: 108.0171 ms\np99: 0.0013 ms\nMean: 0.0009 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1484.8047856004682,
            "range": "0.82%",
            "unit": "ops/sec",
            "extra": "Samples: 743\nMin: 0.6250 ms\nMax: 1.9229 ms\np99: 0.9107 ms\nMean: 0.6735 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 7684797.339119254,
            "range": "0.10%",
            "unit": "ops/sec",
            "extra": "Samples: 3842399\nMin: 0.0001 ms\nMax: 0.0514 ms\np99: 0.0002 ms\nMean: 0.0001 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 10323.259690712857,
            "range": "0.28%",
            "unit": "ops/sec",
            "extra": "Samples: 5163\nMin: 0.0946 ms\nMax: 0.6348 ms\np99: 0.1233 ms\nMean: 0.0969 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6473.53406091399,
            "range": "4.61%",
            "unit": "ops/sec",
            "extra": "Samples: 3237\nMin: 0.0600 ms\nMax: 7.2258 ms\np99: 0.5054 ms\nMean: 0.1545 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 988.5458826172007,
            "range": "0.85%",
            "unit": "ops/sec",
            "extra": "Samples: 495\nMin: 0.9744 ms\nMax: 1.7490 ms\np99: 1.6762 ms\nMean: 1.0116 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1323.3106319128249,
            "range": "0.45%",
            "unit": "ops/sec",
            "extra": "Samples: 662\nMin: 0.7303 ms\nMax: 1.3883 ms\np99: 0.8709 ms\nMean: 0.7557 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1478771.0594947676,
            "range": "0.28%",
            "unit": "ops/sec",
            "extra": "Samples: 739386\nMin: 0.0006 ms\nMax: 0.2293 ms\np99: 0.0007 ms\nMean: 0.0007 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "luxluth",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "id": "c0b0d99134f061c7dc474be32d21bfc5c06045ea",
          "message": "anode update",
          "timestamp": "2026-06-04T05:50:49Z",
          "url": "https://github.com/w57x/anode/commit/c0b0d99134f061c7dc474be32d21bfc5c06045ea"
        },
        "date": 1780552342252,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.1839681232059656,
            "range": "0.60%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 839.4192 ms\nMax: 863.5423 ms\np99: 863.5423 ms\nMean: 844.6173 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 249.14380982323382,
            "range": "4.38%",
            "unit": "ops/sec",
            "extra": "Samples: 125\nMin: 3.4392 ms\nMax: 13.4393 ms\np99: 8.3348 ms\nMean: 4.0137 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1424288.4275881422,
            "range": "1.72%",
            "unit": "ops/sec",
            "extra": "Samples: 712145\nMin: 0.0006 ms\nMax: 3.8541 ms\np99: 0.0014 ms\nMean: 0.0007 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1270.1587068097526,
            "range": "0.78%",
            "unit": "ops/sec",
            "extra": "Samples: 636\nMin: 0.7419 ms\nMax: 2.3059 ms\np99: 0.8679 ms\nMean: 0.7873 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 6020585.434104203,
            "range": "0.56%",
            "unit": "ops/sec",
            "extra": "Samples: 3010293\nMin: 0.0001 ms\nMax: 0.5664 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8225.241764315644,
            "range": "0.32%",
            "unit": "ops/sec",
            "extra": "Samples: 4113\nMin: 0.1146 ms\nMax: 0.5918 ms\np99: 0.1735 ms\nMean: 0.1216 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 6015.584323122174,
            "range": "5.28%",
            "unit": "ops/sec",
            "extra": "Samples: 3008\nMin: 0.0677 ms\nMax: 7.1734 ms\np99: 0.6442 ms\nMean: 0.1662 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 769.21667281654,
            "range": "0.94%",
            "unit": "ops/sec",
            "extra": "Samples: 385\nMin: 1.2333 ms\nMax: 2.5591 ms\np99: 2.1275 ms\nMean: 1.3000 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1031.0461915407786,
            "range": "0.72%",
            "unit": "ops/sec",
            "extra": "Samples: 516\nMin: 0.9164 ms\nMax: 1.8277 ms\np99: 1.3162 ms\nMean: 0.9699 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1287775.0650796993,
            "range": "0.06%",
            "unit": "ops/sec",
            "extra": "Samples: 643888\nMin: 0.0007 ms\nMax: 0.0319 ms\np99: 0.0009 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "Delphin Blehoussi",
            "username": "luxluth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebce402789cbfe85ed0c4fda49015ff7e93d1c10",
          "message": "Merge pull request #8 from w57x/changeset-release/master\n\nVersion Packages",
          "timestamp": "2026-06-04T07:52:47+02:00",
          "tree_id": "718903294b13251409b054732f361308835feffd",
          "url": "https://github.com/w57x/anode/commit/ebce402789cbfe85ed0c4fda49015ff7e93d1c10"
        },
        "date": 1780552410930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.1562082081931078,
            "range": "0.44%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 857.9534 ms\nMax: 873.3406 ms\np99: 873.3406 ms\nMean: 864.8961 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 236.1739394707928,
            "range": "4.07%",
            "unit": "ops/sec",
            "extra": "Samples: 119\nMin: 3.4875 ms\nMax: 12.4991 ms\np99: 8.2529 ms\nMean: 4.2342 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 963519.0095023472,
            "range": "3.47%",
            "unit": "ops/sec",
            "extra": "Samples: 481760\nMin: 0.0007 ms\nMax: 4.2925 ms\np99: 0.0018 ms\nMean: 0.0010 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1192.1880720336608,
            "range": "0.81%",
            "unit": "ops/sec",
            "extra": "Samples: 597\nMin: 0.7831 ms\nMax: 2.1826 ms\np99: 0.9097 ms\nMean: 0.8388 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5980172.887711224,
            "range": "0.57%",
            "unit": "ops/sec",
            "extra": "Samples: 2990087\nMin: 0.0001 ms\nMax: 0.5853 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8058.533008533882,
            "range": "0.28%",
            "unit": "ops/sec",
            "extra": "Samples: 4030\nMin: 0.1207 ms\nMax: 0.7546 ms\np99: 0.1375 ms\nMean: 0.1241 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4781.250283837619,
            "range": "4.74%",
            "unit": "ops/sec",
            "extra": "Samples: 2392\nMin: 0.0794 ms\nMax: 8.9276 ms\np99: 0.6257 ms\nMean: 0.2092 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 756.617969183726,
            "range": "1.02%",
            "unit": "ops/sec",
            "extra": "Samples: 379\nMin: 1.2644 ms\nMax: 2.6753 ms\np99: 1.9412 ms\nMean: 1.3217 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1023.9953797328174,
            "range": "0.62%",
            "unit": "ops/sec",
            "extra": "Samples: 512\nMin: 0.9472 ms\nMax: 1.7381 ms\np99: 1.3306 ms\nMean: 0.9766 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1167557.6590745943,
            "range": "0.11%",
            "unit": "ops/sec",
            "extra": "Samples: 583779\nMin: 0.0008 ms\nMax: 0.1380 ms\np99: 0.0009 ms\nMean: 0.0009 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Delphin Blehoussi",
            "username": "luxluth",
            "email": "delphin.blehoussi93@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ebce402789cbfe85ed0c4fda49015ff7e93d1c10",
          "message": "Merge pull request #8 from w57x/changeset-release/master\n\nVersion Packages",
          "timestamp": "2026-06-04T05:52:47Z",
          "url": "https://github.com/w57x/anode/commit/ebce402789cbfe85ed0c4fda49015ff7e93d1c10"
        },
        "date": 1780552447895,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.188748340800343,
            "range": "0.23%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 835.4524 ms\nMax: 844.3733 ms\np99: 844.3733 ms\nMean: 841.2209 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 239.50226973606306,
            "range": "5.63%",
            "unit": "ops/sec",
            "extra": "Samples: 120\nMin: 3.5041 ms\nMax: 16.7716 ms\np99: 8.6741 ms\nMean: 4.1753 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1144663.4871932326,
            "range": "0.57%",
            "unit": "ops/sec",
            "extra": "Samples: 572332\nMin: 0.0008 ms\nMax: 0.7575 ms\np99: 0.0017 ms\nMean: 0.0009 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 1062.4112404834873,
            "range": "4.54%",
            "unit": "ops/sec",
            "extra": "Samples: 532\nMin: 0.8101 ms\nMax: 11.5629 ms\np99: 1.4521 ms\nMean: 0.9413 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5891191.457974411,
            "range": "0.73%",
            "unit": "ops/sec",
            "extra": "Samples: 2945596\nMin: 0.0001 ms\nMax: 0.6128 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 8442.51398245698,
            "range": "0.32%",
            "unit": "ops/sec",
            "extra": "Samples: 4222\nMin: 0.1130 ms\nMax: 0.7776 ms\np99: 0.1402 ms\nMean: 0.1184 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 5018.073758728985,
            "range": "5.28%",
            "unit": "ops/sec",
            "extra": "Samples: 2511\nMin: 0.0794 ms\nMax: 7.6223 ms\np99: 0.6535 ms\nMean: 0.1993 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 744.8203550113523,
            "range": "1.22%",
            "unit": "ops/sec",
            "extra": "Samples: 373\nMin: 1.2621 ms\nMax: 3.3844 ms\np99: 2.2070 ms\nMean: 1.3426 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1038.9273760535593,
            "range": "0.67%",
            "unit": "ops/sec",
            "extra": "Samples: 520\nMin: 0.9061 ms\nMax: 1.8958 ms\np99: 1.1103 ms\nMean: 0.9625 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1294302.7755900638,
            "range": "0.06%",
            "unit": "ops/sec",
            "extra": "Samples: 647152\nMin: 0.0007 ms\nMax: 0.0499 ms\np99: 0.0008 ms\nMean: 0.0008 ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "committer": {
            "email": "delphin.blehoussi93@gmail.com",
            "name": "luxluth",
            "username": "luxluth"
          },
          "distinct": true,
          "id": "ea6b46bb201ce4b6f48e8dbfabe68c8e565c53b1",
          "message": "version: anode react update",
          "timestamp": "2026-06-04T07:55:09+02:00",
          "tree_id": "4314f3811f5b71acf3cefe6a23b1e632f79123f6",
          "url": "https://github.com/w57x/anode/commit/ea6b46bb201ce4b6f48e8dbfabe68c8e565c53b1"
        },
        "date": 1780552556047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Create 1000 entities with 2 sockets",
            "value": 1.1490265883373714,
            "range": "0.67%",
            "unit": "ops/sec",
            "extra": "Samples: 10\nMin: 862.3928 ms\nMax: 887.6657 ms\np99: 887.6657 ms\nMean: 870.3019 ms"
          },
          {
            "name": "Link 1000 entities sequentially",
            "value": 231.0214435278898,
            "range": "5.62%",
            "unit": "ops/sec",
            "extra": "Samples: 116\nMin: 3.4985 ms\nMax: 16.9187 ms\np99: 8.0282 ms\nMean: 4.3286 ms"
          },
          {
            "name": "Query 2000 nodes (10% viewport)",
            "value": 1218935.5294913116,
            "range": "0.66%",
            "unit": "ops/sec",
            "extra": "Samples: 609468\nMin: 0.0008 ms\nMax: 1.4658 ms\np99: 0.0011 ms\nMean: 0.0008 ms"
          },
          {
            "name": "Move 1000 nodes (Incremental QuadTree updates)",
            "value": 950.4591403534722,
            "range": "27.37%",
            "unit": "ops/sec",
            "extra": "Samples: 476\nMin: 0.8367 ms\nMax: 70.8064 ms\np99: 1.3636 ms\nMean: 1.0521 ms"
          },
          {
            "name": "Direct value propagation (1 link)",
            "value": 5933349.703334702,
            "range": "0.59%",
            "unit": "ops/sec",
            "extra": "Samples: 2966675\nMin: 0.0001 ms\nMax: 0.6335 ms\np99: 0.0003 ms\nMean: 0.0002 ms"
          },
          {
            "name": "Chain propagation (100 links deep)",
            "value": 7508.325868581992,
            "range": "0.61%",
            "unit": "ops/sec",
            "extra": "Samples: 3755\nMin: 0.1221 ms\nMax: 0.2407 ms\np99: 0.2271 ms\nMean: 0.1332 ms"
          },
          {
            "name": "Serialize 1000 nodes to JSON",
            "value": 4735.307381105627,
            "range": "4.57%",
            "unit": "ops/sec",
            "extra": "Samples: 2369\nMin: 0.0750 ms\nMax: 8.1264 ms\np99: 0.6325 ms\nMean: 0.2112 ms"
          },
          {
            "name": "Deserialize 1000 nodes from JSON",
            "value": 755.8038084474322,
            "range": "1.06%",
            "unit": "ops/sec",
            "extra": "Samples: 378\nMin: 1.2575 ms\nMax: 2.8907 ms\np99: 1.9471 ms\nMean: 1.3231 ms"
          },
          {
            "name": "Apply 500 atomic actions",
            "value": 1025.8239850173288,
            "range": "0.61%",
            "unit": "ops/sec",
            "extra": "Samples: 513\nMin: 0.9439 ms\nMax: 1.7563 ms\np99: 1.3846 ms\nMean: 0.9748 ms"
          },
          {
            "name": "Resolve world position (50 levels deep)",
            "value": 1171518.542631667,
            "range": "0.09%",
            "unit": "ops/sec",
            "extra": "Samples: 585760\nMin: 0.0008 ms\nMax: 0.0408 ms\np99: 0.0009 ms\nMean: 0.0009 ms"
          }
        ]
      }
    ]
  }
}