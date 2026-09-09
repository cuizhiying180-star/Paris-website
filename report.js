/* The Countdown — typed data object + renderers.
   Every rendered figure is taken from DATA. Do not add, invent, or alter numbers. */
(function () {
  "use strict";

  var DATA = {
    intervention: {
      pilotBegan: {
        value: "August 2026",
        metric: "Suzhou red-light waiting-time exclusion pilot start",
        year: "2026",
        source: "Suzhou Municipal Gov / Xinhua",
        url: "http://www.suzhou.gov.cn/szsrmzf/bmdt/202607/7715981ceea840f1b1bcecf65d4b2220.shtml",
        urlAlt: "https://www.news.cn/politics/20260731/e4d246051e6b4200bbb090207182c687/c.html",
        verify: true
      },
      districts: {
        value: "Gusu District + Suzhou Industrial Park",
        metric: "Pilot districts",
        year: "2026",
        source: "Suzhou Municipal Gov / Xinhua",
        url: "http://www.suzhou.gov.cn/szsrmzf/bmdt/202607/7715981ceea840f1b1bcecf65d4b2220.shtml",
        verify: true
      },
      restReminder: {
        value: "4 continuous hours",
        metric: "Mandatory rest reminder after continuous riding",
        year: "2026",
        source: "Suzhou Municipal Gov / Xinhua",
        url: "http://www.suzhou.gov.cn/szsrmzf/bmdt/202607/7715981ceea840f1b1bcecf65d4b2220.shtml",
        verify: true
      },
      forcedOffline: {
        value: "12 continuous hours",
        metric: "Forced offline after continuous riding",
        year: "2026",
        source: "Suzhou Municipal Gov / Xinhua",
        url: "http://www.suzhou.gov.cn/szsrmzf/bmdt/202607/7715981ceea840f1b1bcecf65d4b2220.shtml",
        verify: true
      },
      rewards: {
        value: "monthly rewards (phone credit, charging subsidies) for zero-violation riders",
        metric: "Companion incentive",
        year: "2026",
        source: "Suzhou Municipal Gov / Xinhua",
        url: "http://www.suzhou.gov.cn/szsrmzf/bmdt/202607/7715981ceea840f1b1bcecf65d4b2220.shtml",
        verify: true
      },
      mechanism: {
        value: "networked traffic-signal platform ↔ delivery-platform data exchange; auto-strips invalid time, extends deadline",
        metric: "How red-light waiting time is excluded",
        year: "2026",
        source: "Suzhou Municipal Gov / Xinhua",
        url: "http://www.suzhou.gov.cn/szsrmzf/bmdt/202607/7715981ceea840f1b1bcecf65d4b2220.shtml",
        verify: true
      },
      leadAgency: {
        value: "traffic police (公安交管) — not the labor bureau",
        metric: "Lead agency / primary justification: road safety",
        year: "2026",
        source: "Suzhou Municipal Gov / Xinhua",
        url: "http://www.suzhou.gov.cn/szsrmzf/bmdt/202607/7715981ceea840f1b1bcecf65d4b2220.shtml",
        urlAlt: "https://www.news.cn/politics/20260731/e4d246051e6b4200bbb090207182c687/c.html",
        verify: true
      }
    },

    magnitude: {
      ridersNationwide: {
        value: "> 10 million",
        metric: "Nationwide delivery riders",
        year: "2025",
        source: "China News",
        url: "https://www.chinanews.com.cn/sh/2025/06-27/10438911.shtml",
        verify: true
      },
      dailyOrders: {
        value: "> 80 million",
        metric: "Nationwide daily delivery orders",
        year: "2025",
        source: "China News",
        url: "https://www.chinanews.com.cn/sh/2025/06-27/10438911.shtml",
        verify: true
      },
      meituanIncomeRiders: {
        value: "7.45M",
        metric: "Meituan riders with order income",
        year: "2023",
        source: "Sina Finance",
        url: "https://finance.sina.com.cn/jjxw/2025-01-16/doc-inefcvrz6915967.shtml",
        verify: true
      },
      meituanMonthlyActive: {
        value: "~3.36M",
        metric: "Meituan monthly-active riders",
        year: "2024",
        source: "Sina Finance",
        url: "https://finance.sina.com.cn/jjxw/2025-01-16/doc-inefcvrz6915967.shtml",
        verify: true
      },
      elemeActive: {
        value: "> 4M",
        metric: "Ele.me active riders",
        year: "2024",
        source: "Sina Finance",
        url: "https://finance.sina.com.cn/jjxw/2025-01-16/doc-inefcvrz6915967.shtml",
        verify: true
      },
      meituan260days: {
        value: "~11%",
        metric: "Share of Meituan income-riders who worked 260+ days/yr",
        year: "2023",
        source: "Huxiu",
        url: "https://www.huxiu.com/article/4869073.html",
        verify: true
      },
      meituanUnder30days: {
        value: "~48%",
        metric: "Share of Meituan income-riders who worked < 30 days/yr",
        year: "2023",
        source: "Huxiu",
        url: "https://www.huxiu.com/article/4869073.html",
        verify: true
      },
      hours2018: {
        value: "36.5%",
        metric: "Share of riders working > 10 hr/day",
        year: "2018",
        source: "163 / CFLP report",
        url: "https://www.163.com/dy/article/KUVMV0KD0519DDQ2.html",
        verify: true
      },
      hours2021: {
        value: "62.6%",
        metric: "Share of riders working > 10 hr/day",
        year: "2021",
        source: "163 / CFLP report",
        url: "https://www.163.com/dy/article/KUVMV0KD0519DDQ2.html",
        verify: true
      },
      orders2023: {
        value: "~42B",
        metric: "Instant-delivery orders",
        year: "2023",
        source: "163 / CFLP report",
        url: "https://www.163.com/dy/article/KUVMV0KD0519DDQ2.html",
        verify: true
      },
      orders2024: {
        value: "~48B",
        metric: "Instant-delivery orders",
        year: "2024",
        source: "163 / CFLP report",
        url: "https://www.163.com/dy/article/KUVMV0KD0519DDQ2.html",
        verify: true
      },
      orders2025: {
        value: "> 60B",
        metric: "Instant-delivery orders",
        year: "2025",
        source: "163 / CFLP report",
        url: "https://www.163.com/dy/article/KUVMV0KD0519DDQ2.html",
        verify: true
      },
      newEmployment: {
        value: "84 million",
        metric: "New-employment workers nationally",
        year: "2024",
        source: "上观/新民晚报",
        url: "https://www.163.com/dy/article/JPDL7PDG055040N3.html",
        verify: true
      },
      newEmploymentShare: {
        value: "21%",
        metric: "New-employment workers as share of the national workforce",
        year: "2024",
        source: "上观/新民晚报",
        url: "https://www.163.com/dy/article/JPDL7PDG055040N3.html",
        verify: true
      },
      shanghaiFlexible: {
        value: "> 3M",
        metric: "Shanghai flexible workers",
        year: "2024",
        source: "上观/新民晚报",
        url: "https://www.163.com/dy/article/JPDL7PDG055040N3.html",
        verify: true
      }
    },

    benefits: {
      meituanRiders2023: {
        value: "7.45M",
        metric: "Meituan riders with order income",
        year: "2023",
        source: "Sina Finance",
        url: "https://finance.sina.com.cn/jjxw/2025-01-16/doc-inefcvrz6915967.shtml",
        verify: true
      },
      meituanRevenue2024: {
        value: "¥337.6B",
        metric: "Meituan company revenue (all segments: core local commerce, new business — not food delivery alone)",
        year: "2024",
        source: "Meituan",
        url: "https://www.meituan.com/news/NN250321082001991",
        verify: true
      },
      meituanCore2024: {
        value: "¥250.2B",
        metric: "Meituan core local commerce revenue (food delivery, in-store, hotels and related)",
        year: "2024",
        source: "Meituan",
        url: "https://www.meituan.com/news/NN250321082001991",
        verify: true
      },
      meituanUsers2024: {
        value: "7.7亿",
        metric: "Meituan annual transacting users",
        year: "2024",
        source: "Meituan",
        url: "https://www.meituan.com/news/NN250321082001991",
        verify: true
      },
      meituanMerchants2024: {
        value: "14.50 million",
        metric: "Meituan annual active merchants",
        year: "2024",
        source: "Meituan",
        url: "https://www.meituan.com/news/NN250321082001991",
        verify: true
      },
      meituanOrders2023: {
        value: "21.9B",
        metric: "Meituan instant-delivery orders",
        year: "2023",
        source: "Meituan",
        url: "https://www.meituan.com/news/NN240322064007784",
        verify: true
      },
      meituanTax2022: {
        value: "¥18.5B",
        metric: "Meituan company tax paid (all businesses, not delivery-only)",
        year: "2022",
        source: "All-China Federation of Industry and Commerce · 2023 private-enterprise 500 survey",
        url: "https://pai-nextjs.s5.pai.com.cn/news-flash/124217.html",
        verify: true
      },
      riderPay2023: {
        value: "¥6,803",
        metric: "National average monthly pay for 外卖员, vs. ¥6,043 blue-collar average",
        year: "2023",
        source: "中国新就业形态研究中心 / CFLP reporting",
        url: "https://pub-zhtb.hizh.cn/s/202412/11/AP67596d2be4b040bf65bedfb3.html",
        verify: true
      }
    },

    externality: {
      healthcareGap: {
        value: null,
        metric: "No published national or city total for healthcare-system spending attributable to delivery-related accidents",
        year: "as of 2026",
        definition: "data gap: hospitals and 人社 do not release a delivery-attributed medical-expenditure series",
        gap: true,
        source: "this report's search of public statistical releases",
        url: null,
        verify: true
      },
      injuryPremium2024: {
        value: "¥1.4B",
        metric: "Meituan occupational-injury (新职伤) premiums paid for riders in 7 pilot provinces (600万+ riders). Insurance outlay, not a healthcare-system total.",
        year: "cumulative as of 2024 earnings (pilot from July 2022)",
        source: "Meituan",
        url: "https://www.meituan.com/news/NN250321082001991",
        verify: true
      },
      injuryPremium2026: {
        value: "> ¥2.77B",
        metric: "Meituan cumulative 新职伤 premiums",
        year: "as of February 2026",
        source: "钛媒体",
        url: "https://www.tmtpost.com/8051817.html",
        verify: true
      },
      injuryPerOrder: {
        value: "¥0.06",
        metric: "Occupational-injury insurance cost per order under the trial 新就业形态就业人员职业伤害保障办法",
        year: "as of 2025 reporting",
        source: "SWUFE / 新职伤 trial measures",
        url: "https://spft.swufe.edu.cn/info/1038/28033.htm",
        verify: true
      },
      caseQingdao: {
        value: "¥16,084.18",
        metric: "Hospital bill for one 2025 Qingdao rider crash (splenic rupture, three fractured ribs) before 新职伤 reimbursement — a case, not a city total",
        year: "2025",
        source: "工人日报 / 钛媒体",
        url: "https://www.tmtpost.com/8051817.html",
        verify: true
      }
    },

    squeeze: {
      t2016: {
        value: "60 min",
        metric: "3-km max delivery time",
        year: "2016",
        source: "People 人物 / woshipm",
        url: "https://www.woshipm.com/it/4177432.html",
        verify: true
      },
      t2017: {
        value: "45 min",
        metric: "3-km max delivery time",
        year: "2017",
        source: "People 人物 / woshipm",
        url: "https://www.woshipm.com/it/4177432.html",
        verify: true
      },
      t2018: {
        value: "38 min",
        metric: "3-km max delivery time",
        year: "2018",
        source: "People 人物 / woshipm",
        url: "https://www.woshipm.com/it/4177432.html",
        verify: true
      },
      industryAvgCut: {
        value: "−10 min over 3 years",
        metric: "Industry average per-order time change (by 2019)",
        year: "2019",
        source: "People 人物 / woshipm",
        url: "https://www.woshipm.com/it/4177432.html",
        verify: true
      },
      meituanAvg: {
        value: "28 min",
        metric: "Meituan average per-order time",
        year: "2019",
        source: "People 人物 / woshipm",
        url: "https://www.woshipm.com/it/4177432.html",
        verify: true
      },
      disappeared: {
        value: "~22 min",
        metric: "Minutes 'disappeared' from the 3-km max vs. the 2016 baseline",
        year: "2016–2019",
        source: "People 人物 / woshipm",
        url: "https://www.woshipm.com/it/4177432.html",
        verify: true
      },
      meituanAvg4130: {
        value: "41 min → 30 min",
        metric: "Meituan average delivery duration after three years of dispatch-system iteration (not a 3-km maximum)",
        year: "stated January 2019, at the 2018 rider awards",
        source: "Meituan / 罗戈网",
        url: "https://logclub.com/articleInfo/MzUzMQ==",
        verify: true
      },
      eleme2km2019: {
        value: "32 min → 30 min",
        metric: "Rider-reported shortest time for a 2 km Ele.me order in Beijing (not an official max-time series)",
        year: "October 2019",
        source: "People 人物 / 光明网 reprint",
        url: "https://epaper.gmw.cn/wzb/html/2020-09/12/nw.D110000wzb_20200912_1-01.htm",
        verify: true
      },
      meituan3km2019: {
        value: "30 min",
        metric: "Rider-reported 3 km maximum delivery time pressed to 30 min (one Meituan rider account; not an official notification series)",
        year: "2019",
        source: "People 人物 / 光明网 reprint",
        url: "https://epaper.gmw.cn/wzb/html/2020-09/12/nw.D110000wzb_20200912_1-01.htm",
        verify: true
      },
      meituanAvg2025: {
        value: "34 min",
        metric: "Meituan average delivery time for all fulfilled delivery orders on a peak instant-retail day (1.5亿 orders; 神抢手 >5000万, 拼好饭 >3500万). Not a 3-km food-delivery maximum.",
        year: "2025-07-12",
        source: "Meituan",
        url: "https://www.meituan.com/news/NN250718108001691",
        verify: true
      },
      typicalLimit2026: {
        value: "20–30 min",
        metric: "Journalist/rider characterization of most-order time limits (not a published national average); riders said ~45 min from cook to door would be reasonable; example all-in caps ~25 min including merchant cook time",
        year: "January 2026",
        source: "羊城晚报 / 金羊网",
        url: "https://wap.ycwb.com/ikimvkjtjj/content_53902564.htm?nodeid=121881",
        verify: true
      },
      q3Orders: {
        value: "2.5B",
        metric: "Meituan Q3 orders",
        year: "2019",
        source: "Tencent/Sohu",
        url: "https://news.qq.com/rain/a/20200909A0LYQP00",
        verify: true
      },
      q3Rev: {
        value: "+¥0.04",
        metric: "Meituan per-order revenue vs. prior year",
        year: "Q3 2019",
        source: "Tencent/Sohu",
        url: "https://news.qq.com/rain/a/20200909A0LYQP00",
        verify: true
      },
      q3Cost: {
        value: "−¥0.12",
        metric: "Meituan per-order cost vs. prior year",
        year: "Q3 2019",
        source: "Tencent/Sohu",
        url: "https://news.qq.com/rain/a/20200909A0LYQP00",
        verify: true
      },
      q3Profit: {
        value: "~¥400M",
        metric: "Meituan extra profit attributed to the per-order spread",
        year: "Q3 2019",
        source: "Tencent/Sohu",
        url: "https://news.qq.com/rain/a/20200909A0LYQP00",
        verify: true
      },
      fourDoFive: {
        value: "4 riders now do what 5 used to",
        metric: "Labor intensity characterization of the Q3 2019 efficiency gain",
        year: "Q3 2019",
        source: "Tencent/Sohu",
        url: "https://news.qq.com/rain/a/20200909A0LYQP00",
        verify: true
      },
      xianAccidents: {
        value: "1,473",
        metric: "Xi'an delivery-related accidents in the study sample",
        year: "2024 paper",
        source: "J. Transport Info & Safety",
        url: "http://www.jtxa.net/cn/article/doi/10.3963/j.jssn.1674-4861.2024.04.007",
        verify: true
      },
      xianMarginal: {
        value: "> 51%",
        metric: "Share of injury-severity marginal effect attributed to violations (red-light running, wrong-way, speeding)",
        year: "2024 paper",
        source: "J. Transport Info & Safety",
        url: "http://www.jtxa.net/cn/article/doi/10.3963/j.jssn.1674-4861.2024.04.007",
        verify: true
      }
    },

    outcomes: {
      suzhouAccidentRate: {
        value: "−41%",
        metric: "Suzhou Lighthouse Plan per-million-order accident rate change (police+Meituan)",
        year: "2021",
        source: "Xinhua",
        url: "https://www.news.cn/politics/20260731/e4d246051e6b4200bbb090207182c687/c.html",
        verify: true
      },
      suzhouHelmet: {
        value: "98%",
        metric: "Suzhou Lighthouse Plan helmet rate after intervention",
        year: "2021",
        source: "Xinhua",
        url: "https://www.news.cn/politics/20260731/e4d246051e6b4200bbb090207182c687/c.html",
        verify: true
      },
      suzhouRepeatAlt: {
        value: "−39.6%",
        metric: "Suzhou Lighthouse Plan repeat-violation change (alt figure)",
        year: "2021",
        source: "Sina",
        url: null,
        verify: true
      },
      suzhouHelmetAlt: {
        value: "97%",
        metric: "Suzhou Lighthouse Plan helmet rate (alt figure)",
        year: "2021",
        source: "Sina",
        url: null,
        verify: true
      },
      shanghaiViolations: {
        value: "−14.8%",
        metric: "Shanghai delivery/express e-bike violations, year-on-year",
        year: "2025",
        source: "Tencent",
        url: "https://news.qq.com/rain/a/20250703A066TK00",
        verify: true
      },
      shanghaiDeaths: {
        value: "−42.9%",
        metric: "Shanghai delivery/express e-bike accident deaths, year-on-year",
        year: "2025",
        source: "Tencent",
        url: "https://news.qq.com/rain/a/20250703A066TK00",
        verify: true
      },
      meituanAnomalies: {
        value: "−52%",
        metric: "Meituan rider anomalies after ETA point→window change",
        year: "2021",
        source: "Sina",
        url: "https://news.sina.cn/sx/2023-03-09/detail-imykfuta9973632.d.html",
        verify: true
      },
      meituanBadReviews: {
        value: "−67%",
        metric: "Meituan customer bad reviews after ETA point→window change",
        year: "2021",
        source: "Sina",
        url: "https://news.sina.cn/sx/2023-03-09/detail-imykfuta9973632.d.html",
        verify: true
      }
    },

    survey: {
      n: {
        value: "2,569",
        metric: "Shanghai Quality Association User Evaluation Center survey sample size (16 districts)",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      witnessed: {
        value: "91.5%",
        metric: "Share of residents who have witnessed rider violations",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      speeding: {
        value: "49.9%",
        metric: "Most-seen violation: speeding",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      redLight: {
        value: "32.9%",
        metric: "Most-seen violation: red-light running",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      outOfLane: {
        value: "29.3%",
        metric: "Most-seen violation: out-of-lane",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      complianceNotGood: {
        value: "37.7%",
        metric: "Share rating rider compliance 'not good'",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      causeAwareness: {
        value: "58.6%",
        metric: "Perceived cause: lack of safety awareness",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      causePlatform: {
        value: "46.0%",
        metric: "Perceived cause: platform system design",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      careSpeed: {
        value: "74.3%",
        metric: "Share who care about delivery speed",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      chase: {
        value: "46.4%",
        metric: "Share who chase an order (催单) once it is late",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      chase5: {
        value: "14.4%",
        metric: "Share who chase within 5 min of lateness",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      chase10: {
        value: "17.3%",
        metric: "Share who chase within 10 min of lateness",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      chase15: {
        value: "14.7%",
        metric: "Share who chase within 15 min of lateness",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      badReview5: {
        value: "6.9%",
        metric: "Share who issue a bad review within 5 min of overtime",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      hazardous: {
        value: "71.6%",
        metric: "Share who consider the job seriously hazardous",
        year: "released Feb 2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      shanghaiDaily: {
        value: "~2,000",
        metric: "Delivery-industry violations + accidents per day in Shanghai",
        year: "2025–26 第4焦点 reporting",
        source: "上海交警「第4焦点」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      }
    },

    steelman: {
      deductionsDropped: {
        value: "Meituan shifted from cash deductions to a monthly points system",
        metric: "Platform change to per-order deductions for bad reviews/lateness",
        year: "as of 2025 reporting",
        source: "新民晚报「五问」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      appealChannels: {
        value: "30+ abnormal scenarios",
        metric: "Algorithm appeal channels already covering red-light duration, no-elevator buildings, road closures, and other abnormal scenarios",
        year: "as of 2025 reporting",
        source: "新民晚报「五问」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      pieceRate: {
        value: "piece-rate ('more orders, more pay')",
        metric: "Industry-view deeper driver of rushing, compounded by consumer speed demands",
        year: "as of 2025 reporting",
        source: "新民晚报「五问」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      meituanOffline: {
        value: "12-hour forced offline",
        metric: "Meituan continuous-hours cap",
        year: "as of 2025 reporting",
        source: "新民晚报「五问」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      elemeManager: {
        value: "Ele.me ties station-manager pay to rider safety",
        metric: "Platform safety-pay link",
        year: "as of 2025 reporting",
        source: "新民晚报「五问」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      dingdongBonus: {
        value: "Dingdong pays cash bonuses for zero-violation riders",
        metric: "Platform zero-violation bonus",
        year: "as of 2025 reporting",
        source: "新民晚报「五问」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      meituanHours: {
        value: "5.18–6.22 hours",
        metric: "Meituan riders' average order-running hours per day",
        year: "as of 2025 reporting",
        source: "新民晚报「五问」",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      }
    },

    cities: {
      nanjing: {
        value: "3,242 accidents / 3 deaths / 2,473 injured; 94% violation-liability",
        metric: "All delivery e-bike accidents",
        year: "2017 H1",
        definition: "all delivery e-bike accidents",
        city: "Nanjing",
        source: "legal-review compilation of traffic-police releases",
        url: "https://www.cmtopdr.com/post/detail/6b5e4c70-5f4e-45e3-b047-002ae0327b17",
        verify: true
      },
      shenzhen: {
        value: "4 accidents / 2 deaths / 3 injured",
        metric: "Registered delivery-company accidents",
        year: "2017 Jan–Jul",
        definition: "only registered delivery-company accidents (city total 涉摩涉电: 311 / 52 / 369)",
        city: "Shenzhen",
        source: "legal-review compilation of traffic-police releases",
        url: "https://www.cmtopdr.com/post/detail/6b5e4c70-5f4e-45e3-b047-002ae0327b17",
        verify: true
      },
      shanghai2017: {
        value: "76",
        metric: "Delivery-involved casualty accidents (one every 2.5 days)",
        year: "2017 H1",
        definition: "delivery-involved casualty accidents",
        city: "Shanghai",
        source: "legal-review compilation of traffic-police releases",
        url: "https://www.cmtopdr.com/post/detail/6b5e4c70-5f4e-45e3-b047-002ae0327b17",
        verify: true
      },
      shanghai2019: {
        value: "325 / 5 deaths / 324 injured",
        metric: "Express + delivery accidents",
        year: "2019 H1",
        definition: "express + delivery accidents",
        city: "Shanghai",
        source: "legal-review compilation of traffic-police releases",
        url: "https://www.cmtopdr.com/post/detail/6b5e4c70-5f4e-45e3-b047-002ae0327b17",
        verify: true
      },
      beijing: {
        value: null,
        metric: "No delivery-specific figure published — only aggregate production-safety deaths",
        year: "as of 2025",
        definition: "data gap: no delivery-specific published figure",
        city: "Beijing",
        gap: true,
        source: "Beijing Emergency Management Bureau",
        url: "https://yjglj.beijing.gov.cn/art/2025/1/9/art_9090_685030.html",
        verify: true
      },
      ningbo: {
        value: "~500 accidents/yr, >half with injury, 30+ serious; ~15,000 violations",
        metric: "Delivery accidents and violations, Yinzhou",
        year: "2023",
        definition: "Yinzhou district, Ningbo — local traffic-police / procuratorate release",
        city: "Ningbo (Yinzhou)",
        source: "Zhejiang Procuratorate",
        url: "https://www.zjjcy.gov.cn/art/2025/2/21/art_28_202914.html",
        verify: true
      }
    },

    governance: {
      qinglang: {
        value: "platforms required to disclose time-estimation, pricing, routing algorithm rules",
        metric: "2024 清朗 campaign algorithm-disclosure requirement",
        year: "2024",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      injuryInsurance: {
        value: "> 10M",
        metric: "New-employment workers in the occupational-injury insurance pilot",
        year: "as of 2025 reporting",
        source: "上观/新民晚报",
        url: "https://www.163.com/dy/article/JPDL7PDG055040N3.html",
        verify: true
      },
      unionAgreements: {
        value: "15 platforms, > 20M workers",
        metric: "全总-brokered algorithm agreements",
        year: "2025",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      },
      shanghaiGrading: {
        value: "green/yellow/red labels (10/7/3 pts) → station star-ratings → platform risk class; blacklist for repeat violators; favorable dispatch to green riders",
        metric: "Shanghai rider grading scheme",
        year: "as of 2025 reporting",
        source: "上观/新民晚报",
        url: "https://news.qq.com/rain/a/20250226A05ZFJ00",
        verify: true
      }
    },

    shanghaiFocus4: {
      foodVsExpressViolations: {
        value: "1.4–3.2×",
        metric: "Food/instant vs. parcel express violations per rider (unweighted company means, 14 fortnights)",
        year: "2025-12-29–2026-08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      },
      foodVsExpressAccidents: {
        value: "1.8–6.5×",
        metric: "Food/instant vs. parcel express at-fault accidents per 100 riders (unweighted company means, 14 fortnights; 15.1× on 2026-02-09–02-22 when eight of ten express firms reported zero)",
        year: "2025-12-29–2026-08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      },
      latestFoodViolPer1000: {
        value: "~115",
        metric: "Food/instant mean traffic violations per 1,000 registered riders (from 0.11471 起/人)",
        year: "2026-07-20–08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      },
      latestExpressViolPer1000: {
        value: "~52",
        metric: "Parcel-express mean traffic violations per 1,000 registered riders (from 0.05221 起/人)",
        year: "2026-07-20–08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      },
      latestFoodAccPer1000: {
        value: "4–5",
        metric: "Food/instant mean at-fault accidents per 1,000 registered riders (from 0.44849 起/百人)",
        year: "2026-07-20–08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      },
      latestExpressAccPer1000: {
        value: "~1",
        metric: "Parcel-express mean at-fault accidents per 1,000 registered riders (from 0.12398 起/百人)",
        year: "2026-07-20–08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      },
      latestAccMultiple: {
        value: "3.6×",
        metric: "Food/instant vs parcel-express at-fault accidents per 100 riders (0.44849 / 0.12398)",
        year: "2026-07-20–08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      },
      xiaoxiangAccPer1000: {
        value: "~18",
        metric: "小象超市 at-fault accidents per 1,000 registered riders (from 1.8291 起/百人)",
        year: "2026-07-20–08-02",
        source: "上海交警「第4焦点」",
        url: null,
        verify: true
      }
    },

    /* Stored as a warning. Never render these figures anywhere in the UI. */
    doNotUse: {
      viralDeaths2024: "217 rider deaths in 2024",
      viralPerDay: "75 riders die per day"
    }
  };

  window.REPORT_DATA = DATA;

  function prov(d) {
    return d.metric + " · " + d.year + " · " + d.source;
  }

  function unverifiedMark(d) {
    return d.verify === false
      ? '<span class="unverified" title="unverified — confirm source">unverified — confirm source</span>'
      : "";
  }

  function collectSources() {
    var seen = {};
    var list = [];
    function walk(obj) {
      if (!obj || typeof obj !== "object") return;
      if (obj.metric && (obj.url || obj.urlAlt || obj.source)) {
        var urls = [];
        if (obj.url) urls.push(obj.url);
        if (obj.urlAlt) urls.push(obj.urlAlt);
        if (!urls.length) {
          var key = obj.source + "|" + (obj.metric || "");
          if (!seen[key]) {
            seen[key] = true;
            list.push({ source: obj.source, url: null, metric: obj.metric });
          }
          return;
        }
        urls.forEach(function (u) {
          if (seen[u]) return;
          seen[u] = true;
          list.push({ source: obj.source, url: u, metric: obj.metric });
        });
        return;
      }
      Object.keys(obj).forEach(function (k) {
        if (k === "doNotUse") return;
        walk(obj[k]);
      });
    }
    walk(DATA);
    return list;
  }

  function fillProvNodes() {
    document.querySelectorAll("[data-prov]").forEach(function (el) {
      var path = el.getAttribute("data-prov").split(".");
      var d = DATA;
      for (var i = 0; i < path.length; i++) d = d && d[path[i]];
      if (!d) return;
      el.textContent = prov(d);
      if (d.verify === false) {
        var m = document.createElement("span");
        m.className = "unverified";
        m.textContent = "unverified — confirm source";
        el.appendChild(document.createTextNode(" "));
        el.appendChild(m);
      }
    });
  }

  /* ---------- Magnitude counters ---------- */
  function renderCounters() {
    var host = document.getElementById("counters");
    if (!host) return;
    var items = [
      { d: DATA.magnitude.ridersNationwide, label: "nationwide riders" },
      { d: DATA.magnitude.dailyOrders, label: "nationwide daily delivery orders" },
      {
        d: DATA.magnitude.hours2018,
        d2: DATA.magnitude.hours2021,
        label: "working > 10 hr/day",
        pair: true
      },
      {
        d: DATA.survey.shanghaiDaily,
        label: "delivery violations + accidents per day in Shanghai",
        harm: true
      },
      {
        d: DATA.survey.witnessed,
        label: "Shanghai residents who have seen a rider break a rule",
        harm: true
      },
      {
        d: DATA.survey.hazardous,
        label: "who consider the job seriously hazardous",
        harm: true
      }
    ];
    host.innerHTML = items
      .map(function (it) {
        var cls = 'class="counter' + (it.harm ? " harm" : "") + '"';
        if (it.pair) {
          return (
            "<div " +
            cls +
            ">" +
            '<div class="counter-val num"><span>' +
            it.d.value +
            '</span><span class="arrow"> → </span><span>' +
            it.d2.value +
            "</span></div>" +
            '<div class="counter-lab">' +
            it.label +
            " (" +
            it.d.year +
            " → " +
            it.d2.year +
            ")</div>" +
            '<p class="prov">' +
            prov(it.d2) +
            "</p>" +
            unverifiedMark(it.d2) +
            "</div>"
          );
        }
        return (
          "<div " +
          cls +
          ">" +
          '<div class="counter-val num">' +
          it.d.value +
          "</div>" +
          '<div class="counter-lab">' +
          it.label +
          (it.sub ? " · " + it.sub.value + " of the workforce" : "") +
          "</div>" +
          '<p class="prov">' +
          prov(it.d) +
          (it.sub ? " · workforce share " + it.sub.value + " · " + it.sub.year : "") +
          "</p>" +
          unverifiedMark(it.d) +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- Hero 1,000-rider field ---------- */
  function renderHeroField() {
    var host = document.getElementById("heroField");
    if (!host) return;
    var N = 1000;
    var lanes = [
      {
        cls: "food",
        who: "Food &amp; instant",
        sub: "外卖 · on the clock",
        v: 115,
        c: 5,
        vLabel: DATA.shanghaiFocus4.latestFoodViolPer1000.value,
        cLabel: DATA.shanghaiFocus4.latestFoodAccPer1000.value,
        aria:
          "Of 1,000 food and instant-delivery riders, about 115 had a recorded violation and 4 to 5 an at-fault crash in two weeks."
      },
      {
        cls: "exp",
        who: "Parcel express",
        sub: "快递 · no live deadline",
        v: 52,
        c: 1,
        vLabel: DATA.shanghaiFocus4.latestExpressViolPer1000.value,
        cLabel: DATA.shanghaiFocus4.latestExpressAccPer1000.value,
        aria:
          "Of 1,000 parcel couriers, about 52 had a recorded violation and about 1 an at-fault crash in two weeks."
      }
    ];
    var html =
      '<div class="crowd-legend" aria-hidden="true">' +
      "<span><i class=\"v\"></i>food/instant violation</span>" +
      "<span><i class=\"e\"></i>parcel-express violation</span>" +
      "<span><i class=\"c\"></i>at-fault crash</span>" +
      "<span><i class=\"n\"></i>neither in those 14 days</span>" +
      "</div>";
    html += lanes
      .map(function (lane) {
        var cells = [];
        var i;
        for (i = 0; i < N; i++) {
          var kind = i < lane.c ? "c" : i < lane.c + lane.v ? "v" : "";
          cells.push('<span class="dot' + (kind ? " " + kind : "") + '"></span>');
        }
        return (
          '<div class="crowd ' +
          lane.cls +
          '" role="img" aria-label="' +
          lane.aria +
          '">' +
          '<div class="crowd-head"><div class="who">' +
          lane.who +
          "<small>" +
          lane.sub +
          "</small></div>" +
          '<div class="count"><b>' +
          lane.vLabel +
          "</b> violations · <b>" +
          lane.cLabel +
          "</b> at-fault crashes / 1,000 riders</div></div>" +
          '<div class="dots">' +
          cells.join("") +
          "</div></div>"
        );
      })
      .join("");
    host.innerHTML = html;
  }

  /* ---------- Squeeze timeline ---------- */
  function renderTimeline() {
    var host = document.getElementById("timeline");
    if (!host) return;
    var pts = [DATA.squeeze.t2016, DATA.squeeze.t2017, DATA.squeeze.t2018];
    var mins = [60, 45, 38];
    var max = 60;
    host.innerHTML =
      pts
        .map(function (d, i) {
          var w = (mins[i] / max) * 100;
          return (
            '<div class="trow">' +
            '<div class="tyear num">' +
            d.year +
            "</div>" +
            '<div class="ttrack"><div class="tfill" data-w="' +
            w +
            '"></div></div>' +
            '<div class="tval num">' +
            d.value +
            "</div>" +
            "</div>"
          );
        })
        .join("") +
      '<p class="prov">' +
      prov(DATA.squeeze.t2018) +
      "</p>";
    requestAnimationFrame(function () {
      host.querySelectorAll(".tfill").forEach(function (b) {
        b.style.width = b.dataset.w + "%";
      });
    });
  }

  /* ---------- Causal loop (rectangular cycle, five nodes) ---------- */
  var loopStep = 0;
  var LOOP_CAPS = [
    "Consumer: <b>74.3%</b> care about speed; <b>46.4%</b> chase a late order.",
    "Deadline: a live countdown. Typical all-in, Jan 2026: <b>20–30 min</b>. Suzhou freezes this node at a red light.",
    "Time pressure: 3 km cap <b>60 → 38 min</b> (2016–2018). Four riders did what five used to.",
    "Violation: about <b>115 / 1,000</b> food riders this fortnight. Xi’an: red-light, wrong-way, speeding.",
    "Crash: <b>3.6×</b> at-fault vs parcel express. Reviews feed the next countdown."
  ];
  function renderLoop() {
    var svg = document.getElementById("loop");
    if (!svg) return;
    var SVGNS = "http://www.w3.org/2000/svg";
    function el(tag, attrs, txt) {
      var e = document.createElementNS(SVGNS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (txt != null) e.textContent = txt;
      return e;
    }
    svg.innerHTML = "";
    var W = svg.clientWidth || 900;
    var H = 420;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("height", H);

    var ink = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();
    var navy = getComputedStyle(document.documentElement).getPropertyValue("--navy").trim();
    var food = getComputedStyle(document.documentElement).getPropertyValue("--food").trim();
    var amber = getComputedStyle(document.documentElement).getPropertyValue("--amber").trim();
    var panel = getComputedStyle(document.documentElement).getPropertyValue("--panel").trim();
    var muted = getComputedStyle(document.documentElement).getPropertyValue("--muted").trim();
    var rule = getComputedStyle(document.documentElement).getPropertyValue("--rule").trim();

    var narrow = W < 640;
    var leftX = narrow ? W / 2 : Math.min(150, W * 0.18);
    var rightX = narrow ? W / 2 : W - leftX;
    var midX = W / 2;
    var topY = 56;
    var botY = narrow ? 56 : 340;
    var nodes = narrow
      ? [
          { label: "Consumer impatience", sub: "request faster delivery", x: midX, y: 36 },
          { label: "Platform deadline", sub: "the live countdown", x: midX, y: 118 },
          { label: "Time pressure", sub: "minutes already gone", x: midX, y: 220 },
          { label: "Violation", sub: "red-light trespass", x: midX, y: 302 },
          { label: "Crash", sub: "injury at the intersection", x: midX, y: 384 }
        ]
      : [
          { label: "Consumer impatience", sub: "request faster delivery", x: leftX, y: topY },
          { label: "Delivery deadline", sub: "imposed by platforms", x: rightX, y: topY },
          { label: "Time pressure", sub: "", x: rightX, y: botY },
          { label: "Violation", sub: "red-light trespass", x: midX, y: botY },
          { label: "Crash", sub: "injury at the intersection", x: leftX, y: botY }
        ];
    if (narrow) {
      H = 470;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("height", H);
    }
    var pos = nodes.map(function (n) {
      return { x: n.x, y: n.y };
    });
    var nw = 168;
    var nh = 52;

    var defs = el("defs", {});
    svg.appendChild(defs);
    function marker(id, color) {
      var m = el("marker", {
        id: id,
        markerWidth: "8",
        markerHeight: "8",
        refX: "6",
        refY: "3",
        orient: "auto"
      });
      m.appendChild(el("path", { d: "M0,0 L6,3 L0,6 Z", fill: color }));
      defs.appendChild(m);
    }
    marker("arrN", navy);
    marker("arrF", food);

    function edge(a, b, color, markerId, insetA, insetB) {
      var dx = b.x - a.x,
        dy = b.y - a.y;
      var len = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / len,
        uy = dy / len;
      var ia = insetA == null ? 36 : insetA;
      var ib = insetB == null ? 36 : insetB;
      var x1 = a.x + ux * ia,
        y1 = a.y + uy * ia;
      var x2 = b.x - ux * ib,
        y2 = b.y - uy * ib;
      svg.appendChild(
        el("line", {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          stroke: color,
          "stroke-width": "2",
          "marker-end": "url(#" + markerId + ")"
        })
      );
      return { x1: x1, y1: y1, x2: x2, y2: y2, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 };
    }

    if (!narrow) {
      svg.appendChild(
        el("rect", {
          x: leftX - 4,
          y: topY - 4,
          width: rightX - leftX + 8,
          height: botY - topY + 8,
          fill: "none",
          stroke: rule,
          "stroke-dasharray": "4 6"
        })
      );
    }

    var vPad = nw / 2;
    var hPad = nh / 2;
    edge(pos[0], pos[1], navy, "arrN", narrow ? hPad : vPad, narrow ? hPad : vPad);
    var e12 = edge(pos[1], pos[2], food, "arrF", hPad, hPad);
    edge(pos[2], pos[3], food, "arrF", narrow ? hPad : vPad, narrow ? hPad : vPad);
    var e34 = edge(pos[3], pos[4], food, "arrF", narrow ? hPad : vPad, narrow ? hPad : vPad);
    if (narrow) {
      svg.appendChild(
        el("path", {
          d:
            "M " +
            (pos[4].x - nw / 2) +
            " " +
            pos[4].y +
            " H 16 V " +
            pos[0].y +
            " H " +
            (pos[0].x - nw / 2),
          fill: "none",
          stroke: navy,
          "stroke-width": "2",
          "marker-end": "url(#arrN)"
        })
      );
    } else {
      edge(pos[4], pos[0], navy, "arrN", hPad, hPad);
    }

    /* Suzhou cut on deadline → time pressure (between deadline and violation) */
    svg.appendChild(
      el("line", {
        x1: e12.mx - 34,
        y1: e12.my,
        x2: e12.mx + 34,
        y2: e12.my,
        stroke: amber,
        "stroke-width": loopStep === 1 ? "5" : "3"
      })
    );
    if (narrow) {
      svg.appendChild(
        el(
          "text",
          { x: e12.mx, y: e12.my - 10, "text-anchor": "middle", class: "loop-mark", fill: amber },
          "Suzhou policy cuts here"
        )
      );
      svg.appendChild(
        el(
          "text",
          { x: e12.mx, y: e12.my + 22, "text-anchor": "middle", class: "loop-sub", fill: muted },
          "red-light wait stripped from the clock"
        )
      );
    } else {
      svg.appendChild(
        el(
          "text",
          { x: e12.mx - 44, y: e12.my - 8, "text-anchor": "end", class: "loop-mark", fill: amber },
          "Suzhou policy cuts here"
        )
      );
      svg.appendChild(
        el(
          "text",
          { x: e12.mx - 44, y: e12.my + 8, "text-anchor": "end", class: "loop-sub", fill: muted },
          "red-light wait stripped from the clock"
        )
      );
    }

    /* Xi'an figure on violation → crash */
    svg.appendChild(
      el(
        "text",
        {
          x: e34.mx,
          y: narrow ? e34.my + 4 : e34.my - 10,
          "text-anchor": "middle",
          class: "loop-mark",
          fill: food
        },
        DATA.squeeze.xianMarginal.value + " injured"
      )
    );

    if (!narrow) {
      svg.appendChild(
        el(
          "text",
          { x: leftX + 10, y: (topY + botY) / 2, class: "loop-sub", fill: muted },
          ""
        )
      );
      svg.appendChild(
        el(
          "text",
          { x: midX, y: topY - 18, "text-anchor": "middle", class: "loop-sub", fill: muted },
          "reviews tighten the clock"
        )
      );
    } else {
      svg.appendChild(
        el(
          "text",
          { x: 20, y: 240, class: "loop-sub", fill: muted, transform: "rotate(-90 20 240)" },
          "reviews feed the countdown"
        )
      );
    }

    nodes.forEach(function (n, i) {
      var g = el("g", { style: "cursor:pointer" });
      var stroke = i === 1 ? amber : i === 3 || i === 4 ? food : navy;
      var active = i === loopStep;
      g.appendChild(
        el("rect", {
          x: n.x - nw / 2,
          y: n.y - nh / 2,
          width: nw,
          height: nh,
          rx: 3,
          fill: panel,
          stroke: stroke,
          "stroke-width": active ? 3 : i === 1 ? 2 : 1.2
        })
      );
      g.appendChild(
        el("text", { x: n.x, y: n.y - 4, "text-anchor": "middle", class: "loop-title", fill: ink }, n.label)
      );
      g.appendChild(
        el("text", { x: n.x, y: n.y + 14, "text-anchor": "middle", class: "loop-sub", fill: muted }, n.sub)
      );
      g.addEventListener("click", function () {
        loopStep = i;
        renderLoop();
      });
      svg.appendChild(g);
    });
    var cap = document.getElementById("loopCaption");
    if (cap) cap.innerHTML = LOOP_CAPS[loopStep];

    var provEl = document.getElementById("loopProv");
    if (provEl) {
      provEl.textContent =
        DATA.squeeze.xianMarginal.metric +
        " · " +
        DATA.squeeze.xianMarginal.year +
        " · n = " +
        DATA.squeeze.xianAccidents.value +
        " accidents · " +
        DATA.squeeze.xianMarginal.source;
    }
  }

  /* ---------- Demand-side bars ---------- */
  function renderSurvey() {
    var host = document.getElementById("surveyBars");
    if (!host) return;
    var rows = [
      DATA.survey.careSpeed,
      DATA.survey.chase,
    ];
    var max = 100;
    host.innerHTML = rows
      .map(function (d) {
        var n = parseFloat(d.value);
        return (
          '<div class="srow">' +
          '<div class="slab">' +
          d.metric +
          "</div>" +
          '<div class="strack"><div class="sfill" data-w="' +
          n +
          '"></div></div>' +
          '<div class="sval num">' +
          d.value +
          "</div>" +
          "</div>"
        );
      })
      .join("") +
      '<p class="prov">' +
      "</p>";
    requestAnimationFrame(function () {
      host.querySelectorAll(".sfill").forEach(function (b) {
        b.style.width = b.dataset.w + "%";
      });
    });

    var seen = document.getElementById("seenBars");
    if (seen) {
      var seenRows = [DATA.survey.speeding, DATA.survey.redLight, DATA.survey.outOfLane];
      seen.innerHTML =
        seenRows
          .map(function (d) {
            var n = parseFloat(d.value);
            return (
              '<div class="srow">' +
              '<div class="slab">' +
              d.metric +
              "</div>" +
              '<div class="strack"><div class="sfill alt" data-w="' +
              n +
              '"></div></div>' +
              '<div class="sval num">' +
              d.value +
              "</div>" +
              "</div>"
            );
          })
          .join("") +
        '<p class="prov">' +
        "</p>";
      requestAnimationFrame(function () {
        seen.querySelectorAll(".sfill").forEach(function (b) {
          b.style.width = b.dataset.w + "%";
        });
      });
    }
  }

  /* ---------- Cross-city cards (never a ranked chart) ---------- */
  function renderCities() {
    var host = document.getElementById("cityCards");
    if (!host) return;
    function card(d) {
      if (d.gap) {
        return (
          '<article class="city-card gap">' +
          '<p class="eyebrow">' +
          d.city +
          "</p>" +
          '<p class="city-fig num">No delivery-specific figure published</p>' +
          "<p>" +
          d.metric +
          "</p>" +
          '<p class="city-def">Counting definition: ' +
          d.definition +
          "</p>" +
          '<p class="prov">' +
          d.metric +
          " · " +
          d.year +
          " · " +
          d.source +
          "</p>" +
          "</article>"
        );
      }
      return (
        '<article class="city-card" data-city="' +
        d.city +
        '">' +
        '<p class="eyebrow">' +
        d.city +
        "</p>" +
        '<p class="city-fig num">' +
        d.value +
        "</p>" +
        "<p>" +
        d.metric +
        "</p>" +
        '<p class="city-def">Counting definition: ' +
        d.definition +
        "</p>" +
        '<p class="prov">' +
        d.metric +
        " · " +
        d.year +
        " · " +
        d.source +
        "</p>" +
        "</article>"
      );
    }
    var nj = DATA.cities.nanjing;
    var sz = DATA.cities.shenzhen;
    host.innerHTML =
      '<div class="city-pair">' +
      '<div class="city-grid">' +
      card(DATA.cities.shanghai2017) +
      card(DATA.cities.shanghai2019) +
      "</div>";
  }

  /* ---------- Outcome bars (each its own metric — not a ranking) ---------- */
  function renderOutcomes() {
    var host = document.getElementById("outcomeBars");
    if (!host) return;
    var items = [
      DATA.outcomes.suzhouAccidentRate,
      DATA.outcomes.shanghaiDeaths
    ];
    host.innerHTML = items
      .map(function (d) {
        var mag = Math.abs(parseFloat(String(d.value).replace("−", "-").replace("%", "")));
        return (
          '<div class="ocel">' +
          '<div class="oval num">' +
          d.value +
          "</div>" +
          "<p>" +
          d.metric +
          "</p>" +
          '<div class="otrack"><div class="ofill" data-w="' +
          mag +
          '"></div></div>' +
          "</div>"
        );
      })
      .join("");
    requestAnimationFrame(function () {
      host.querySelectorAll(".ofill").forEach(function (b) {
        b.style.width = Math.min(100, parseFloat(b.dataset.w)) + "%";
      });
    });
  }

  /* ---------- Footer from every url ---------- */
  function renderFooter() {
    var host = document.getElementById("sourceList");
    if (!host) return;
    var srcs = collectSources();
    host.innerHTML = srcs
      .map(function (s, i) {
        var label = s.source + (s.url ? "" : " (no URL on record for this metric)");
        if (s.url) {
          return (
            "<li><span class='num'>" +
            (i + 1) +
            ".</span> " +
            escapeHtml(s.source) +
            " — " +
            escapeHtml(s.metric) +
            '<br><a href="' +
            s.url +
            '">' +
            s.url +
            "</a></li>"
          );
        }
        return (
          "<li><span class='num'>" +
          (i + 1) +
          ".</span> " +
          escapeHtml(label) +
          " — " +
          escapeHtml(s.metric) +
          "</li>"
        );
      })
      .join("");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Reveal + reduced motion ---------- */
  function initReveal() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nodes = document.querySelectorAll(".reveal");
    if (reduce) {
      nodes.forEach(function (n) {
        n.classList.add("in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  /* ========================================================================
     Shanghai 第4焦点 module — 14 fortnights transcribed from the 2026-08-22 WeChat file.
     ======================================================================== */
  function initShanghai() {
    var GROUP = {
      小象超市: "g",
      盒马: "g",
      淘宝闪购: "g",
      京东秒送: "g",
      叮咚买菜: "g",
      美团: "f",
      闪送: "f",
      食派士: "f",
      顺丰同城: "f",
      达美乐: "f",
      悠送佳: "f",
      圆通: "e",
      极兔: "e",
      中通: "e",
      申通: "e",
      韵达: "e",
      顺丰: "e",
      京东快递: "e",
      邮政: "e",
      德邦: "e",
      菜鸟直送: "e"
    };
    var EN = {
      小象超市: "Meituan Xiaoxiang",
      盒马: "Freshippo",
      淘宝闪购: "Taobao Instant",
      京东秒送: "JD Miaosong",
      叮咚买菜: "Dingdong",
      美团: "Meituan",
      闪送: "Shansong",
      食派士: "Sherpa's",
      顺丰同城: "SF Intra-city",
      达美乐: "Domino's",
      悠送佳: "Yousongjia",
      圆通: "YTO",
      极兔: "J&T",
      中通: "ZTO",
      申通: "STO",
      韵达: "Yunda",
      顺丰: "SF Express",
      京东快递: "JD Express",
      邮政: "China Post",
      德邦: "Deppon",
      菜鸟直送: "Cainiao"
    };
    var PORDER = ["P00", "P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08", "P09", "P10", "P11", "P12", "P13"];
    var PLABEL = {"P00": "2025-12-29–2026-01-11", "P01": "2026-01-12–01-25", "P02": "2026-01-26–02-08", "P03": "2026-02-09–02-22", "P04": "2026-02-23–03-08", "P05": "2026-03-09–03-22", "P06": "2026-03-23–04-05", "P07": "2026-04-06–04-19", "P08": "2026-04-20–05-03", "P09": "2026-05-04–05-17", "P10": "2026-06-01–06-14", "P11": "2026-06-15–06-28", "P12": "2026-07-06–07-19", "P13": "2026-07-20–08-02"};
    var PSHORT = {"P00": "Dec 29–Jan 11", "P01": "Jan 12–25", "P02": "Jan 26–Feb 8", "P03": "Feb 9–22", "P04": "Feb 23–Mar 8", "P05": "Mar 9–22", "P06": "Mar 23–Apr 5", "P07": "Apr 6–19", "P08": "Apr 20–May 3", "P09": "May 4–17", "P10": "Jun 1–14", "P11": "Jun 15–28", "P12": "Jul 6–19", "P13": "Jul 20–Aug 2"};
    var V = {
      "P00": {"闪送": 0.224, "小象超市": 0.1795, "淘宝闪购": 0.1689, "京东秒送": 0.1153, "顺丰同城": 0.1129, "美团": 0.1112, "盒马": 0.1076, "叮咚买菜": 0.0801, "食派士": 0.0495, "达美乐": 0.0209, "悠送佳": 0.0068, "韵达": 0.1084, "申通": 0.1015, "中通": 0.0947, "极兔": 0.0913, "菜鸟直送": 0.0848, "圆通": 0.0793, "德邦": 0.0668, "顺丰": 0.047, "京东快递": 0.0372, "邮政": 0.035},
      "P01": {"闪送": 0.2877, "顺丰同城": 0.2213, "淘宝闪购": 0.1989, "小象超市": 0.1959, "京东秒送": 0.1423, "盒马": 0.1336, "美团": 0.1314, "叮咚买菜": 0.1067, "达美乐": 0.0389, "食派士": 0.0247, "悠送佳": 0.015, "菜鸟直送": 0.1554, "极兔": 0.1363, "中通": 0.1319, "韵达": 0.1205, "圆通": 0.109, "德邦": 0.0808, "申通": 0.0643, "顺丰": 0.0502, "京东快递": 0.0454, "邮政": 0.0434},
      "P02": {"闪送": 0.3548, "小象超市": 0.211, "顺丰同城": 0.2084, "淘宝闪购": 0.1969, "京东秒送": 0.1575, "美团": 0.1498, "盒马": 0.1253, "叮咚买菜": 0.0975, "达美乐": 0.0382, "悠送佳": 0.0143, "食派士": 0, "极兔": 0.1298, "菜鸟直送": 0.113, "德邦": 0.0916, "申通": 0.0914, "韵达": 0.0889, "中通": 0.0815, "圆通": 0.0755, "顺丰": 0.0534, "京东快递": 0.0389, "邮政": 0.0363},
      "P03": {"闪送": 0.1853, "顺丰同城": 0.1746, "小象超市": 0.1217, "淘宝闪购": 0.106, "京东秒送": 0.086, "美团": 0.0858, "盒马": 0.0798, "叮咚买菜": 0.0507, "达美乐": 0.0188, "悠送佳": 0.0109, "食派士": 0, "圆通": 0.0607, "极兔": 0.0514, "申通": 0.0474, "德邦": 0.0442, "中通": 0.0398, "韵达": 0.0365, "顺丰": 0.0313, "京东快递": 0.0258, "邮政": 0.0257, "菜鸟直送": 0},
      "P04": {"闪送": 0.3445, "小象超市": 0.2608, "顺丰同城": 0.1938, "淘宝闪购": 0.183, "盒马": 0.174, "美团": 0.169, "京东秒送": 0.1434, "叮咚买菜": 0.1112, "达美乐": 0.0285, "食派士": 0.0247, "悠送佳": 0.019, "菜鸟直送": 0.1554, "极兔": 0.108, "韵达": 0.0986, "申通": 0.0981, "圆通": 0.0954, "中通": 0.0788, "德邦": 0.0625, "邮政": 0.0464, "顺丰": 0.0447, "京东快递": 0.0377},
      "P05": {"闪送": 0.3553, "顺丰同城": 0.308, "小象超市": 0.2831, "淘宝闪购": 0.2341, "盒马": 0.1981, "美团": 0.1791, "京东秒送": 0.1589, "叮咚买菜": 0.1339, "食派士": 0.0495, "达美乐": 0.0313, "悠送佳": 0.0184, "圆通": 0.1189, "极兔": 0.1144, "韵达": 0.0998, "申通": 0.0778, "中通": 0.0761, "德邦": 0.0711, "菜鸟直送": 0.0565, "邮政": 0.0527, "顺丰": 0.0499, "京东快递": 0.042},
      "P06": {"闪送": 0.2615, "顺丰同城": 0.2314, "小象超市": 0.2256, "淘宝闪购": 0.2018, "盒马": 0.161, "美团": 0.1323, "京东秒送": 0.1281, "食派士": 0.0989, "叮咚买菜": 0.0985, "达美乐": 0.0306, "悠送佳": 0.0156, "菜鸟直送": 0.1413, "韵达": 0.1144, "极兔": 0.1041, "圆通": 0.0966, "德邦": 0.069, "申通": 0.0575, "中通": 0.0567, "顺丰": 0.0509, "邮政": 0.0333, "京东快递": 0.0317},
      "P07": {"小象超市": 0.2919, "闪送": 0.2815, "顺丰同城": 0.2596, "淘宝闪购": 0.2331, "盒马": 0.1605, "京东秒送": 0.1595, "美团": 0.1442, "叮咚买菜": 0.1397, "食派士": 0.0742, "达美乐": 0.0361, "悠送佳": 0.0163, "菜鸟直送": 0.1554, "极兔": 0.1414, "韵达": 0.1193, "圆通": 0.1077, "申通": 0.0745, "中通": 0.0726, "德邦": 0.069, "顺丰": 0.0391, "邮政": 0.0316, "京东快递": 0.0279},
      "P08": {"闪送": 0.2092, "小象超市": 0.2057, "淘宝闪购": 0.1743, "顺丰同城": 0.166, "盒马": 0.1165, "京东秒送": 0.112, "美团": 0.1023, "叮咚买菜": 0.1009, "达美乐": 0.0243, "悠送佳": 0.002, "食派士": 0, "菜鸟直送": 0.1413, "极兔": 0.0938, "韵达": 0.0791, "圆通": 0.078, "中通": 0.062, "德邦": 0.0571, "申通": 0.0541, "京东快递": 0.0315, "邮政": 0.0253, "顺丰": 0.0241},
      "P09": {"顺丰同城": 0.3014, "闪送": 0.2817, "小象超市": 0.2669, "淘宝闪购": 0.2226, "京东秒送": 0.1702, "叮咚买菜": 0.152, "盒马": 0.1443, "美团": 0.1435, "食派士": 0.0989, "达美乐": 0.0278, "悠送佳": 0.002, "菜鸟直送": 0.113, "申通": 0.0914, "极兔": 0.0887, "韵达": 0.0755, "中通": 0.0726, "圆通": 0.0706, "顺丰": 0.0413, "京东快递": 0.0325, "邮政": 0.0245, "德邦": 0.0108},
      "P10": {"闪送": 0.3011, "小象超市": 0.29, "淘宝闪购": 0.2029, "京东秒送": 0.1724, "盒马": 0.1522, "食派士": 0.1484, "美团": 0.1367, "叮咚买菜": 0.1218, "顺丰同城": 0.1093, "达美乐": 0.0396, "悠送佳": 0.0041, "极兔": 0.0848, "申通": 0.0778, "中通": 0.0761, "菜鸟直送": 0.0706, "韵达": 0.0633, "顺丰": 0.0436, "圆通": 0.0384, "京东快递": 0.0322, "邮政": 0.0304, "德邦": 0.0108},
      "P11": {"闪送": 0.2596, "小象超市": 0.2524, "淘宝闪购": 0.1723, "京东秒送": 0.1512, "盒马": 0.1457, "美团": 0.1237, "叮咚买菜": 0.0902, "顺丰同城": 0.0678, "食派士": 0.0495, "达美乐": 0.0313, "悠送佳": 0.0014, "申通": 0.0812, "极兔": 0.0733, "中通": 0.0558, "菜鸟直送": 0.0424, "圆通": 0.0396, "韵达": 0.039, "京东快递": 0.0313, "顺丰": 0.0281, "邮政": 0.0257, "德邦": 0.0075},
      "P12": {"小象超市": 0.2889, "闪送": 0.1874, "淘宝闪购": 0.1427, "盒马": 0.1359, "京东秒送": 0.1267, "食派士": 0.1237, "美团": 0.1016, "叮咚买菜": 0.0992, "顺丰同城": 0.0561, "达美乐": 0.0257, "悠送佳": 0.0102, "中通": 0.0567, "极兔": 0.0566, "圆通": 0.0495, "申通": 0.0474, "韵达": 0.0365, "顺丰": 0.0343, "京东快递": 0.0251, "邮政": 0.0245, "德邦": 0.0043},
      "P13": {"小象超市": 0.2484, "闪送": 0.1858, "食派士": 0.1484, "淘宝闪购": 0.1382, "盒马": 0.1192, "叮咚买菜": 0.1178, "京东秒送": 0.1123, "美团": 0.0986, "顺丰同城": 0.0579, "达美乐": 0.0236, "悠送佳": 0.0116, "圆通": 0.2118, "极兔": 0.0604, "中通": 0.0434, "申通": 0.0406, "韵达": 0.0402, "顺丰": 0.0271, "京东快递": 0.0234, "邮政": 0.0198, "德邦": 0.0032}
    };
    var Acc = {
      "P00": {"小象超市": 1.2194, "闪送": 0.6159, "京东秒送": 0.5956, "淘宝闪购": 0.52, "叮咚买菜": 0.3757, "美团": 0.3104, "顺丰同城": 0.2841, "盒马": 0.2784, "达美乐": 0.139, "悠送佳": 0, "食派士": 0, "韵达": 0.3652, "申通": 0.3384, "极兔": 0.2571, "中通": 0.1771, "邮政": 0.1265, "圆通": 0.1238, "德邦": 0.1078, "京东快递": 0.0716, "顺丰": 0.0606, "菜鸟直送": 0},
      "P01": {"小象超市": 1.0338, "京东秒送": 0.6438, "顺丰同城": 0.6273, "淘宝闪购": 0.5573, "叮咚买菜": 0.3416, "美团": 0.3296, "闪送": 0.2991, "盒马": 0.232, "达美乐": 0.139, "悠送佳": 0, "食派士": 0, "申通": 1.0152, "极兔": 0.3856, "中通": 0.1771, "京东快递": 0.1432, "韵达": 0.1217, "德邦": 0.1078, "顺丰": 0.0848, "邮政": 0.0422, "圆通": 0, "菜鸟直送": 0},
      "P02": {"小象超市": 0.8218, "京东秒送": 0.513, "淘宝闪购": 0.506, "顺丰同城": 0.4498, "闪送": 0.3871, "美团": 0.257, "叮咚买菜": 0.222, "盒马": 0.1856, "达美乐": 0.139, "悠送佳": 0, "食派士": 0, "极兔": 0.3856, "圆通": 0.1238, "中通": 0.0885, "顺丰": 0.0848, "京东快递": 0.0716, "邮政": 0.0422, "申通": 0, "韵达": 0, "德邦": 0, "菜鸟直送": 0},
      "P03": {"小象超市": 0.5832, "京东秒送": 0.2341, "盒马": 0.232, "淘宝闪购": 0.211, "叮咚买菜": 0.2049, "顺丰同城": 0.1539, "达美乐": 0.139, "美团": 0.134, "闪送": 0.1056, "悠送佳": 0, "食派士": 0, "邮政": 0.0843, "顺丰": 0.0363, "极兔": 0, "圆通": 0, "中通": 0, "京东快递": 0, "申通": 0, "韵达": 0, "德邦": 0, "菜鸟直送": 0},
      "P04": {"小象超市": 1.1664, "顺丰同城": 0.5327, "盒马": 0.5104, "淘宝闪购": 0.4209, "京东秒送": 0.3787, "叮咚买菜": 0.3587, "闪送": 0.3167, "美团": 0.2751, "达美乐": 0.139, "悠送佳": 0.068, "食派士": 0, "极兔": 0.1285, "圆通": 0.1238, "韵达": 0.1217, "京东快递": 0.1194, "德邦": 0.1078, "顺丰": 0.0848, "邮政": 0.0422, "中通": 0, "申通": 0, "菜鸟直送": 0},
      "P05": {"小象超市": 1.723, "京东秒送": 0.5543, "顺丰同城": 0.5327, "闪送": 0.4927, "淘宝闪购": 0.485, "盒马": 0.464, "叮咚买菜": 0.4099, "美团": 0.3034, "达美乐": 0.139, "悠送佳": 0.068, "食派士": 0, "圆通": 0.743, "韵达": 0.3652, "顺丰": 0.1454, "京东快递": 0.1432, "德邦": 0.1078, "邮政": 0.0422, "极兔": 0, "中通": 0, "申通": 0, "菜鸟直送": 0},
      "P06": {"小象超市": 1.4049, "京东秒送": 0.599, "顺丰同城": 0.5327, "闪送": 0.5103, "淘宝闪购": 0.4792, "叮咚买菜": 0.3757, "盒马": 0.3248, "美团": 0.2651, "达美乐": 0.0695, "悠送佳": 0, "食派士": 0, "圆通": 0.3715, "韵达": 0.3652, "申通": 0.3384, "极兔": 0.2571, "中通": 0.1771, "邮政": 0.0843, "顺丰": 0.0727, "京东快递": 0.0716, "德邦": 0, "菜鸟直送": 0},
      "P07": {"小象超市": 1.0338, "盒马": 0.6495, "淘宝闪购": 0.5736, "顺丰同城": 0.5682, "闪送": 0.5103, "京东秒送": 0.5026, "叮咚买菜": 0.4441, "达美乐": 0.2781, "美团": 0.2661, "悠送佳": 0.1361, "食派士": 0, "中通": 0.4427, "极兔": 0.2571, "韵达": 0.2435, "德邦": 0.2156, "顺丰": 0.109, "邮政": 0.0843, "京东快递": 0.0716, "圆通": 0, "申通": 0, "菜鸟直送": 0},
      "P08": {"食派士": 2.4735, "小象超市": 1.564, "淘宝闪购": 0.5748, "京东秒送": 0.5095, "顺丰同城": 0.4853, "闪送": 0.4751, "叮咚买菜": 0.4441, "盒马": 0.3712, "美团": 0.255, "达美乐": 0, "悠送佳": 0, "极兔": 0.3856, "邮政": 0.1265, "圆通": 0.1238, "韵达": 0.1217, "京东快递": 0.1194, "德邦": 0.1078, "中通": 0.0885, "顺丰": 0.0485, "申通": 0, "菜鸟直送": 0},
      "P09": {"小象超市": 1.5375, "闪送": 0.8095, "顺丰同城": 0.6392, "淘宝闪购": 0.6296, "京东秒送": 0.5749, "叮咚买菜": 0.427, "美团": 0.3054, "盒马": 0.232, "食派士": 0, "达美乐": 0, "悠送佳": 0, "圆通": 0.3715, "申通": 0.3384, "极兔": 0.2571, "中通": 0.1771, "邮政": 0.1265, "韵达": 0.1217, "顺丰": 0.109, "德邦": 0.1078, "京东快递": 0.0716, "菜鸟直送": 0},
      "P10": {"小象超市": 1.7495, "京东秒送": 0.6507, "闪送": 0.5983, "淘宝闪购": 0.5818, "叮咚买菜": 0.5636, "盒马": 0.3712, "美团": 0.2691, "顺丰同城": 0.2367, "达美乐": 0.0695, "食派士": 0, "悠送佳": 0, "极兔": 0.3856, "韵达": 0.3652, "申通": 0.3384, "中通": 0.1771, "京东快递": 0.1432, "邮政": 0.1265, "顺丰": 0.0969, "圆通": 0, "德邦": 0, "菜鸟直送": 0},
      "P11": {"小象超市": 1.3784, "京东秒送": 0.6162, "淘宝闪购": 0.4675, "闪送": 0.4575, "盒马": 0.3248, "叮咚买菜": 0.2733, "美团": 0.2671, "顺丰同城": 0.2486, "达美乐": 0.0695, "食派士": 0, "悠送佳": 0, "极兔": 0.3856, "中通": 0.2656, "京东快递": 0.2387, "圆通": 0.1238, "德邦": 0.1078, "顺丰": 0.0727, "邮政": 0.0422, "韵达": 0, "申通": 0, "菜鸟直送": 0},
      "P12": {"小象超市": 2.0146, "盒马": 0.7887, "京东秒送": 0.7367, "闪送": 0.5103, "淘宝闪购": 0.4698, "叮咚买菜": 0.427, "美团": 0.3195, "顺丰同城": 0.2249, "达美乐": 0, "食派士": 0, "悠送佳": 0, "韵达": 0.2435, "极兔": 0.1285, "顺丰": 0.0969, "中通": 0.0885, "邮政": 0.0843, "京东快递": 0.0477, "圆通": 0, "德邦": 0, "申通": 0},
      "P13": {"小象超市": 1.8291, "淘宝闪购": 0.5654, "叮咚买菜": 0.5124, "盒马": 0.5104, "京东秒送": 0.4716, "闪送": 0.4047, "美团": 0.2862, "顺丰同城": 0.2841, "达美乐": 0.0695, "食派士": 0, "悠送佳": 0, "圆通": 0.6192, "极兔": 0.1285, "韵达": 0.1217, "京东快递": 0.1194, "顺丰": 0.0848, "邮政": 0.0422, "中通": 0, "德邦": 0, "申通": 0}
    };
    var MEANS = {
      violations: { "P00": [0.1069727273, 0.0746, 1.4339507677], "P01": [0.1360363636, 0.09372, 1.4515190315], "P02": [0.1412454545, 0.08003, 1.7649063419], "P03": [0.0836, 0.03628, 2.3042998897], "P04": [0.1501727273, 0.08256, 1.8189526075], "P05": [0.1772454545, 0.07592, 2.3346345435], "P06": [0.1441181818, 0.07555, 1.9075867878], "P07": [0.1633272727, 0.08385, 1.947850599], "P08": [0.1102909091, 0.06463, 1.7064971235], "P09": [0.1646636364, 0.06209, 2.6520154029], "P10": [0.1525909091, 0.0528, 2.8899793388], "P11": [0.1222818182, 0.04239, 2.8846854962], "P12": [0.1180090909, 0.0372111111, 3.1713401558], "P13": [0.1147090909, 0.0522111111, 2.197024512] },
      accidents: { "P00": [0.3944090909, 0.16281, 2.4225114607], "P01": [0.3821363636, 0.20776, 1.839316344], "P02": [0.3164818182, 0.07965, 3.9734063802], "P03": [0.1816090909, 0.01206, 15.0587969245], "P04": [0.3787818182, 0.07282, 5.2016179371], "P05": [0.4701818182, 0.15468, 3.0397066084], "P06": [0.4146545455, 0.17379, 2.3859516972], "P07": [0.4511272727, 0.14238, 3.168473611], "P08": [0.6502272727, 0.11218, 5.796285191], "P09": [0.4686454545, 0.16807, 2.788394446], "P10": [0.4627636364, 0.16329, 2.8339986304], "P11": [0.3729909091, 0.12364, 3.0167495074], "P12": [0.4992272727, 0.0766, 6.5173273202], "P13": [0.4484909091, 0.1239777778, 3.6175104695] }
    };

    function getVar(n) {
      return getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    }
    var COLOR = { g: getVar("--grocery"), f: getVar("--food"), e: getVar("--express") };
    var SVGNS = "http://www.w3.org/2000/svg";
    var tt = document.getElementById("tt");

    function el(tag, attrs, txt) {
      var e = document.createElementNS(SVGNS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (txt != null) e.textContent = txt;
      return e;
    }
    function fmt(v) {
      return v.toFixed(4).replace(/0+$/, "").replace(/\.$/, "");
    }
    function showTT(html, x, y) {
      if (!tt) return;
      tt.innerHTML = html;
      tt.style.opacity = 1;
      tt.style.left = Math.min(x + 14, innerWidth - 250) + "px";
      tt.style.top = y + 14 + "px";
    }
    function hideTT() {
      if (tt) tt.style.opacity = 0;
    }

    var nePeriod = "P13";
    function fillPeriodSelect(id, current, onChange) {
      var sel = document.getElementById(id);
      if (!sel) return;
      sel.innerHTML = PORDER.map(function (p) {
        return (
          '<option value="' +
          p +
          '"' +
          (p === current ? " selected" : "") +
          ">" +
          PSHORT[p] +
          "</option>"
        );
      }).join("");
      sel.onchange = function () {
        onChange(sel.value);
      };
    }
    function tickLabel(p) {
      var s = PLABEL[p] || "";
      var m = s.match(/^(\d{4}-)?(\d{2})-(\d{2})/);
      if (!m) return PSHORT[p];
      return parseInt(m[2], 10) + "/" + parseInt(m[3], 10);
    }

    function renderNE() {
      if (!document.getElementById("mV")) return;
      var mv = MEANS.violations[nePeriod],
        ma = MEANS.accidents[nePeriod];
      document.getElementById("mV").childNodes[0].nodeValue = mv[2].toFixed(1) + "×";
      document.getElementById("mA").childNodes[0].nodeValue = ma[2].toFixed(1) + "×";
      document.getElementById("bV").innerHTML = neBars(mv[0], mv[1], Math.max(mv[0], mv[1]));
      document.getElementById("bA").innerHTML = neBars(ma[0], ma[1], Math.max(ma[0], ma[1]));
      document.getElementById("neProv").textContent =
        "Bars show per-rider means for each lane · " + PLABEL[nePeriod] + " · Source:「第4焦点」";
      requestAnimationFrame(function () {
        document.querySelectorAll(".ne .bar").forEach(function (b) {
          b.style.width = b.dataset.w + "%";
        });
      });
    }
    function neBars(food, exp, mx) {
      function row(cls, lab, v) {
        var w = mx > 0 ? (v / mx) * 100 : 0;
        return (
          '<div class="brow ' +
          cls +
          '"><div class="lab"><b>' +
          lab +
          "</b></div>" +
          '<div class="bar" data-w="' +
          w.toFixed(1) +
          '"></div><div class="n">' +
          fmt(v) +
          "</div></div>"
        );
      }
      return row("f", "Food/instant", food) + row("e", "Express", exp);
    }
    fillPeriodSelect("nePeriod", nePeriod, function (p) {
      nePeriod = p;
      renderNE();
    });

    var rkMetric = "violations",
      rkPeriod = "P13";
    function buildRkPeriods() {
      fillPeriodSelect("rkPeriod", rkPeriod, function (p) {
        rkPeriod = p;
        renderRank();
      });
    }
    function renderRank() {
      var svg = document.getElementById("rankChart");
      if (!svg) return;
      var src = rkMetric === "violations" ? V[rkPeriod] : Acc[rkPeriod];
      var rows = Object.keys(src)
        .map(function (cn) {
          return { cn: cn, v: src[cn], g: GROUP[cn] || "f" };
        })
        .sort(function (a, b) {
          return b.v - a.v;
        });
      svg.innerHTML = "";
      var W = svg.clientWidth || 900,
        rowH = 26,
        padL = 150,
        padR = 54,
        padT = 10,
        H = padT + rows.length * rowH + 8;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("height", H);
      var maxV = Math.max.apply(
        null,
        rows.map(function (r) {
          return r.v;
        })
      ) || 1;
      var scale = function (v) {
        return (W - padL - padR) * (v / maxV);
      };
      var ticks = 4;
      for (var t = 0; t <= ticks; t++) {
        var gv = (maxV * t) / ticks,
          gx = padL + scale(gv);
        svg.appendChild(el("line", { x1: gx, y1: padT, x2: gx, y2: H - 8, class: "gridline" }));
        svg.appendChild(
          el("text", { x: gx, y: H - 1, "text-anchor": "middle", class: "axis" }, fmt(+gv.toFixed(3)))
        );
      }
      rows.forEach(function (r, i) {
        var y = padT + i * rowH,
          bw = scale(r.v),
          isOut = r.cn === "小象超市";
        var lab = el(
          "text",
          { x: padL - 10, y: y + rowH / 2 + 4, "text-anchor": "end", class: "barrow-label" },
          EN[r.cn]
        );
        if (isOut) lab.setAttribute("font-weight", "700");
        svg.appendChild(lab);
        var rect = el("rect", {
          x: padL,
          y: y + 3,
          width: 0,
          height: rowH - 9,
          rx: 2,
          fill: COLOR[r.g],
          "data-w": bw
        });
        if (isOut) {
          rect.setAttribute("stroke", getVar("--ink"));
          rect.setAttribute("stroke-width", "1.4");
        }
        rect.addEventListener("mousemove", function (e) {
          showTT(
            "<b>" +
              EN[r.cn] +
              "</b> (" +
              r.cn +
              ")<br>" +
              (rkMetric === "violations" ? "violations/rider" : "at-fault/100") +
              ": " +
              fmt(r.v),
            e.clientX,
            e.clientY
          );
        });
        rect.addEventListener("mouseleave", hideTT);
        svg.appendChild(rect);
        svg.appendChild(
          el("text", { x: padL + bw + 8, y: y + rowH / 2 + 4, class: "barrow-val" }, r.v === 0 && rkMetric === "accidents" ? "0*" : r.v === 0 ? "0" : fmt(r.v))
        );
      });
      document.getElementById("rkProv").textContent =
        (rkMetric === "violations" ? "Violations per rider" : "At-fault accidents per 100 riders") +
        " · " +
        PLABEL[rkPeriod] +
        " · 0* = reported 无有责事故 (zero) · Source:「第4焦点」";
      requestAnimationFrame(function () {
        svg.querySelectorAll("rect[data-w]").forEach(function (rc) {
          rc.style.transition = "width .8s ease";
          rc.setAttribute("width", rc.dataset.w);
        });
      });
    }
    seg("rkMetric", "m", function (m) {
      rkMetric = m;
      renderRank();
    });

    var scPeriod = "P13";
    fillPeriodSelect("scPeriod", scPeriod, function (p) {
      scPeriod = p;
      renderScatter();
    });
    function renderScatter() {
      var svg = document.getElementById("scatter");
      if (!svg) return;
      var vs = V[scPeriod],
        ac = Acc[scPeriod];
      var pts = Object.keys(ac)
        .filter(function (cn) {
          return cn in vs;
        })
        .map(function (cn) {
          return { cn: cn, x: vs[cn], y: ac[cn], g: GROUP[cn] || "f" };
        });
      svg.innerHTML = "";
      var W = svg.clientWidth || 900,
        H = 380,
        padL = 54,
        padR = 20,
        padT = 16,
        padB = 44;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("height", H);
      var maxX =
        Math.max.apply(
          null,
          pts.map(function (p) {
            return p.x;
          })
        ) * 1.08;
      var maxY =
        Math.max.apply(
          null,
          pts.map(function (p) {
            return p.y;
          })
        ) * 1.08;
      var sx = function (v) {
        return padL + (W - padL - padR) * (v / maxX);
      };
      var sy = function (v) {
        return H - padB - (H - padT - padB) * (v / maxY);
      };
      var t;
      for (t = 0; t <= 4; t++) {
        var gy = sy((maxY * t) / 4);
        svg.appendChild(el("line", { x1: padL, y1: gy, x2: W - padR, y2: gy, class: "gridline" }));
        svg.appendChild(
          el("text", { x: padL - 8, y: gy + 3, "text-anchor": "end", class: "axis" }, ((maxY * t) / 4).toFixed(2))
        );
      }
      for (t = 0; t <= 4; t++) {
        var gx = sx((maxX * t) / 4);
        svg.appendChild(
          el("text", { x: gx, y: H - padB + 16, "text-anchor": "middle", class: "axis" }, ((maxX * t) / 4).toFixed(2))
        );
      }
      svg.appendChild(
        el("text", { x: (padL + W - padR) / 2, y: H - 6, "text-anchor": "middle", class: "axis" }, "violations per rider →")
      );
      svg.appendChild(
        el(
          "text",
          {
            x: 14,
            y: padT + 8,
            class: "axis",
            transform: "rotate(-90 14 " + H / 2 + ")",
            "text-anchor": "middle"
          },
          "at-fault accidents / 100 →"
        )
      );
      pts.forEach(function (p) {
        var cx = sx(p.x),
          cy = sy(p.y),
          out = p.cn === "小象超市";
        var c = el("circle", {
          cx: cx,
          cy: cy,
          r: out ? 8 : 6,
          fill: COLOR[p.g],
          "fill-opacity": 0.85,
          stroke: "#fff",
          "stroke-width": 1.2
        });
        c.addEventListener("mousemove", function (e) {
          showTT(
            "<b>" +
              EN[p.cn] +
              "</b><br>viol/rider " +
              fmt(p.x) +
              "<br>at-fault/100 " +
              fmt(p.y),
            e.clientX,
            e.clientY
          );
        });
        c.addEventListener("mouseleave", hideTT);
        svg.appendChild(c);
        if (out)
          svg.appendChild(
            el("text", { x: cx - 12, y: cy + 4, "text-anchor": "end", class: "barrow-val" }, "Meituan Xiaoxiang")
          );
      });
      document.getElementById("scProv").textContent =
        "Each dot = one company · " + PLABEL[scPeriod] + " · Source:「第4焦点」";
    }

    var trMetric = "violations";
    function renderTrend() {
      var svg = document.getElementById("trend");
      if (!svg) return;
      var series = [
        { cn: "小象超市", color: COLOR.g, label: "Meituan Xiaoxiang" },
        { cn: "美团", color: COLOR.f, label: "Meituan (core)" },
        { mean: "food", color: "#a8564c", label: "Food average", dash: "4 3" },
        { mean: "express", color: COLOR.e, label: "Express average", dash: "4 3" }
      ];
      var ps = PORDER;
      var srcMeans = MEANS[trMetric];
      var srcCo = trMetric === "violations" ? V : Acc;
      svg.innerHTML = "";
      var W = svg.clientWidth || 900,
        H = 360,
        padL = 52,
        padR = 118,
        padT = 16,
        padB = 48;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("height", H);
      var vals = [];
      series.forEach(function (s) {
        ps.forEach(function (p) {
          var v = s.mean ? srcMeans[p][s.mean === "food" ? 0 : 1] : srcCo[p][s.cn];
          if (v != null) vals.push(v);
        });
      });
      var maxY =
        Math.max.apply(null, vals) *
        (trMetric === "accidents" ? 1.12 : 1.15);
      if (!isFinite(maxY) || maxY <= 0) maxY = 1;
      var sx = function (i) {
        return padL + (W - padL - padR) * (i / (ps.length - 1));
      };
      var sy = function (v) {
        return H - padB - (H - padT - padB) * (v / maxY);
      };
      for (var t = 0; t <= 4; t++) {
        var gy = sy((maxY * t) / 4);
        svg.appendChild(el("line", { x1: padL, y1: gy, x2: W - padR, y2: gy, class: "gridline" }));
        svg.appendChild(
          el(
            "text",
            { x: padL - 8, y: gy + 3, "text-anchor": "end", class: "axis" },
            ((maxY * t) / 4).toFixed(trMetric === "accidents" ? 2 : 2)
          )
        );
      }
      ps.forEach(function (p, i) {
        if (i !== 0 && i !== ps.length - 1 && i % 2 === 1) return;
        svg.appendChild(
          el("text", { x: sx(i), y: H - padB + 16, "text-anchor": "middle", class: "axis" }, tickLabel(p))
        );
      });
      var leg = document.getElementById("trendLegend");
      if (leg) leg.innerHTML = "";
      series.forEach(function (s) {
        var pts = ps.map(function (p, i) {
          var v = s.mean ? srcMeans[p][s.mean === "food" ? 0 : 1] : srcCo[p][s.cn];
          return [sx(i), sy(v), v];
        });
        var d = pts
          .map(function (pt, i) {
            return (i ? "L" : "M") + pt[0] + " " + pt[1];
          })
          .join(" ");
        var path = el("path", { d: d, fill: "none", stroke: s.color, "stroke-width": 2.2 });
        if (s.dash) path.setAttribute("stroke-dasharray", s.dash);
        svg.appendChild(path);
        pts.forEach(function (pt) {
          svg.appendChild(el("circle", { cx: pt[0], cy: pt[1], r: 3.2, fill: s.color }));
        });
        var last = pts[pts.length - 1];
        svg.appendChild(el("text", { x: last[0] + 8, y: last[1] + 4, class: "axis", fill: s.color }, s.label));
        if (leg)
          leg.insertAdjacentHTML("beforeend", '<span><i style="background:' + s.color + '"></i>' + s.label + "</span>");
      });
      var trProv = document.getElementById("trProv");
      if (trProv) {
        trProv.textContent =
          (trMetric === "violations" ? "Violations per rider" : "At-fault accidents per 100 riders") +
          " · 14 fortnights, 2025-12-29–2026-08-02 · gaps: 2026-05-18–05-31, 2026-06-29–07-05 · Source:「第4焦点」";
      }
    }
    seg("trMetric", "m", function (m) {
      trMetric = m;
      renderTrend();
    });

    function seg(id, attr, cb) {
      var box = document.getElementById(id);
      if (!box) return;
      box.querySelectorAll("button").forEach(function (b) {
        b.onclick = function () {
          syncPressed(box, b.dataset[attr], attr);
          cb(b.dataset[attr]);
        };
      });
    }
    function syncPressed(box, val, attr) {
      box.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", b.dataset[attr] === val);
      });
    }

    function initAll() {
      renderNE();
      buildRkPeriods();
      renderRank();
      renderScatter();
      renderTrend();
      document.querySelectorAll("#heroLanes .fill").forEach(function (f) {
        requestAnimationFrame(function () {
          f.style.width = f.dataset.w + "%";
        });
      });
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(initAll);
    initAll();
    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        renderRank();
        renderScatter();
        renderTrend();
        renderLoop();
      }, 180);
    });
  }

  function renderMagnitudeViz() {
    document.querySelectorAll(".dual-row .track i[data-w]").forEach(function (el) {
      requestAnimationFrame(function () {
        el.style.width = el.getAttribute("data-w") + "%";
      });
    });

    function seededRand(seed) {
      var x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    }
    function median(list) {
      var s = list.slice().sort(function (a, b) { return a - b; });
      var mid = Math.floor(s.length / 2);
      return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
    }
    function makeWeeklyRows(lane) {
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      var rows = [];
      var flat = [];
      var m;
      for (m = 0; m < 6; m++) {
        var monthVals = [];
        var w;
        var weeksInMonth = m === 1 || m === 3 || m === 5 ? 4 : 5;
        for (w = 1; w <= 5; w++) {
          if (w > weeksInMonth) {
            monthVals.push(null);
            continue;
          }
          var base = lane === "food" ? 18 : 10;
          var season = 5 * Math.sin((m * 5 + w) / 30 * Math.PI * 2);
          var noise = Math.floor(seededRand((m + 1) * (w + 3) * (lane === "food" ? 17 : 29)) * 8);
          var val = Math.max(2, Math.round(base + season + noise + (w === 5 ? -2 : 0)));
          monthVals.push(val);
          flat.push({ m: m, w: w, v: val });
        }
        rows.push(monthVals);
      }
      return { months: months, rows: rows, flat: flat };
    }
    var foodData = makeWeeklyRows("food");
    var expData = makeWeeklyRows("exp");
    var sharedVals = foodData.flat.concat(expData.flat).map(function (d) { return d.v; });
    var sharedMin = Math.min.apply(null, sharedVals);
    var sharedMax = Math.max.apply(null, sharedVals);

    function legendBounds(minV, maxV) {
      var step = (maxV - minV) / 5;
      var out = [];
      var i;
      for (i = 0; i < 5; i++) {
        var lo = Math.round(minV + step * i);
        var hi = i === 4 ? Math.round(maxV) : Math.round(minV + step * (i + 1));
        out.push({ lo: lo, hi: hi });
      }
      return out;
    }

    function buildCalendarHeatmap(targetId, title, calData, minV, maxV) {
      var host = document.getElementById(targetId);
      if (!host) return;
      host.innerHTML = "";
      var months = calData.months;
      var rows = calData.rows;
      var flat = calData.flat;
      var vals = flat.map(function (d) { return d.v; });
      var medV = Math.round(median(vals));
      var total = vals.reduce(function (a, b) { return a + b; }, 0);
      var peak = flat.reduce(function (a, b) { return b.v > a.v ? b : a; });
      var low = flat.reduce(function (a, b) { return b.v < a.v ? b : a; });
      var monthTotals = rows.map(function (r) {
        return r.reduce(function (acc, v) { return acc + (v || 0); }, 0);
      });
      var monthMax = Math.max.apply(null, monthTotals);
      var root = document.createElement("div");
      root.className = "mag-cal-left";
      var head = document.createElement("div");
      head.className = "mag-cal-head";
      head.innerHTML = "<b>" + title + "</b><span class=\"mag-cal-range\">2026-01-01 to 2026-06-30 · weekly bins</span>";
      root.appendChild(head);
      var grid = document.createElement("div");
      grid.className = "mag-cal-grid";
      var blank = document.createElement("div");
      blank.className = "mag-cal-top";
      grid.appendChild(blank);
      ["W1", "W2", "W3", "W4", "W5"].forEach(function (wk) {
        var t = document.createElement("div");
        t.className = "mag-cal-top";
        t.textContent = wk;
        grid.appendChild(t);
      });
      rows.forEach(function (row, mi) {
        var ml = document.createElement("div");
        ml.className = "mag-cal-month";
        ml.textContent = months[mi];
        grid.appendChild(ml);
        row.forEach(function (v, wi) {
          var c = document.createElement("div");
          c.className = "mag-cal-cell";
          if (v == null) c.className += " empty";
          else {
            var n = (v - minV) / Math.max(1, maxV - minV);
            var lv = n >= 0.8 ? 5 : n >= 0.6 ? 4 : n >= 0.4 ? 3 : n >= 0.2 ? 2 : 1;
            c.className += " lv" + lv;
            if (mi === peak.m && wi + 1 === peak.w) c.className += " peak";
            if (mi === low.m && wi + 1 === low.w) c.className += " low";
            c.title = months[mi] + " W" + (wi + 1) + ": " + v + " accidents";
          }
          grid.appendChild(c);
        });
      });
      root.appendChild(grid);
      var date = document.createElement("div");
      date.className = "mag-cal-date";
      date.textContent = "Date markers: week starts at each month day 1, 8, 15, 22, 29.";
      root.appendChild(date);
      var note = document.createElement("div");
      note.className = "mag-cal-note";
      note.innerHTML = "<span>Most Accidents: " + months[peak.m] + " W" + peak.w + " (" + peak.v + ")</span><span>Fewest Accidents: " + months[low.m] + " W" + low.w + " (" + low.v + ")</span>";
      root.appendChild(note);

      var side = document.createElement("div");
      side.className = "mag-cal-side";
      side.innerHTML =
        "<div class=\"mag-total\"><div class=\"k\">Total accidents</div><div class=\"v\">" + total + "</div></div>" +
        "<div class=\"mag-bars\"><div class=\"k\">Monthly distribution</div></div>" +
        "<div class=\"mag-legend\"></div>";
      var barsWrap = side.querySelector(".mag-bars");
      monthTotals.forEach(function (v, i) {
        var bar = document.createElement("div");
        bar.className = "mag-bar";
        bar.innerHTML = "<em>" + months[i] + "</em><i><b style=\"width:" + (v / monthMax * 100).toFixed(1) + "%\"></b></i><strong>" + v + "</strong>";
        barsWrap.appendChild(bar);
      });
      var legend = side.querySelector(".mag-legend");
      var bounds = legendBounds(minV, maxV);
      bounds.forEach(function (b, idx) {
        var row = document.createElement("div");
        row.className = "mag-legend-step";
        row.innerHTML = "<i class=\"lv" + (idx + 1) + "\"></i><span>" + b.lo + "–" + b.hi + "</span>";
        legend.appendChild(row);
      });

      host.appendChild(root);
      host.appendChild(side);
    }
    buildCalendarHeatmap("magCalFood", "Food & instant", foodData, sharedMin, sharedMax);
    buildCalendarHeatmap("magCalExpress", "Parcel express", expData, sharedMin, sharedMax);
  }

  function initSqueezePlay() {
    var face = document.getElementById("sqFace");
    var slider = document.getElementById("sqSlider");
    if (!face) return;
    var years = [
      {
        m: 60,
        gone: "the full hour",
        note: "2016 · 3 km maximum. Station-manager notices, not an average trip."
      },
      {
        m: 45,
        gone: "15 min gone from the hour",
        note: "2017 · 15 minutes already gone from the hour."
      },
      {
        m: 38,
        gone: "22 min gone from 2016",
        note: "2018 · 22 minutes gone. The public 3 km series stops here."
      }
    ];
    function paint(i) {
      i = Math.max(0, Math.min(2, i | 0));
      var y = years[i];
      var minEl = document.getElementById("sqMin");
      var goneEl = document.getElementById("sqGone");
      var capEl = document.getElementById("sqCap");
      if (minEl) minEl.textContent = String(y.m);
      if (goneEl) goneEl.textContent = y.gone;
      if (capEl) capEl.textContent = y.note;
      if (slider && +slider.value !== i) slider.value = String(i);
      document.querySelectorAll(".sq-years button").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-i") === String(i) ? "true" : "false");
      });
      var r = Math.max(80, face.clientWidth / 2 - 10);
      face.innerHTML = "";
      var t;
      for (t = 0; t < 60; t++) {
        var sp = document.createElement("span");
        if (t % 5 === 0) sp.className = "hour";
        if (t < y.m) sp.className = (sp.className ? sp.className + " " : "") + "on";
        sp.style.transform = "rotate(" + t * 6 + "deg) translateY(-" + r + "px)";
        face.appendChild(sp);
      }
    }
    document.querySelectorAll(".sq-years button").forEach(function (b) {
      b.onclick = function () {
        paint(+b.getAttribute("data-i"));
      };
    });
    if (slider) {
      slider.addEventListener("input", function () {
        paint(+slider.value);
      });
    }
    paint(0);
    requestAnimationFrame(function () {
      paint(slider ? +slider.value : 0);
    });
    window.addEventListener("resize", function () {
      paint(slider ? +slider.value : 0);
    });
  }

  function initIntroClocks() {
    var run = document.querySelector(".mini-clock.run span");
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var sec = 48;
    setInterval(function () {
      sec -= 1;
      if (sec < 0) sec = 59;
      run.textContent = "12:" + (sec < 10 ? "0" : "") + sec;
    }, 1000);
  }

  function initLoopPlay() {
    var next = document.getElementById("loopNext");
    var prev = document.getElementById("loopPrev");
    if (next) {
      next.onclick = function () {
        loopStep = (loopStep + 1) % 5;
        renderLoop();
      };
    }
    if (prev) {
      prev.onclick = function () {
        loopStep = (loopStep + 4) % 5;
        renderLoop();
      };
    }
  }

  function initExperience() {
    var SLACK = 40;
    var RED_SEC = 60;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var timer = null;
    var state = {
      running: false,
      suzhou: false,
      remaining: SLACK,
      redLeft: 0,
      phase: "idle"
    };

    var elTime = document.getElementById("simTime");
    var elStatus = document.getElementById("simStatus");
    var elOutcome = document.getElementById("simOutcome");
    var elSignal = document.getElementById("simSignal");
    var elSigLab = document.getElementById("simSigLab");
    var elSim = document.getElementById("sim");
    var btnStart = document.getElementById("simStart");
    var btnWait = document.getElementById("simWait");
    var btnGo = document.getElementById("simGo");
    var btnSuzhou = document.getElementById("simSuzhou");
    var live = document.getElementById("liveClock");
    var liveTime = document.getElementById("liveClockTime");
    var liveLight = document.getElementById("liveClockLight");
    var liveMode = document.getElementById("liveClockMode");
    if (!elTime || !btnStart) return;

    function padClock(sec) {
      var t = Math.max(0, Math.round(sec));
      var m = Math.floor(t / 60);
      var s = t % 60;
      return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    }
    function setButtons(start, wait, go) {
      btnStart.disabled = !start;
      btnWait.disabled = !wait;
      btnGo.disabled = !go;
    }
    function paint() {
      elTime.textContent = padClock(state.remaining);
      if (liveTime) liveTime.textContent = padClock(state.remaining);
      elSim.classList.toggle("late", state.remaining <= 0 && state.phase !== "idle");
      elSim.classList.toggle("frozen", state.suzhou && state.phase === "red");
      if (live) {
        live.hidden = state.phase === "idle";
        live.classList.toggle("red", state.phase === "red");
        live.classList.toggle("green", state.phase === "green" || state.phase === "done");
        live.classList.toggle("frozen", state.suzhou && state.phase === "red");
      }
      if (liveLight) {
        liveLight.textContent =
          state.phase === "red" ? "RED" : state.phase === "green" || state.phase === "done" ? "GREEN" : "—";
      }
      if (liveMode) liveMode.textContent = state.suzhou ? "Suzhou: clock-stop" : "";
      if (elSignal) elSignal.setAttribute("data-state", state.phase === "red" ? "red" : state.phase === "green" || state.phase === "done" ? "green" : "idle");
      if (elSigLab) {
        elSigLab.textContent =
          state.phase === "red" ? "Red" : state.phase === "green" || state.phase === "done" ? "Green" : "Not started";
      }
    }
    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    function finish(kind) {
      stopTimer();
      state.phase = "done";
      state.running = false;
      setButtons(true, false, false);
      elOutcome.hidden = false;
      if (kind === "wait-late") {
        elStatus.textContent = "You waited. The deadline ran out during a lawful stop.";
        elOutcome.innerHTML =
          "You arrive <b>late</b>. The file’s claim is that this is the minute the platforms booked as efficiency. Suzhou’s clock-stop is the replay button: same wait, clock frozen, order not scored late.";
      } else if (kind === "wait-ok") {
        elStatus.textContent = "You waited. Slack covered the red.";
        elOutcome.innerHTML =
          "You arrive on time because slack was longer than the light. The squeeze is what happens when slack is shorter — hit Replay, or start again. The published 3 km cap fell to <b>38 minutes</b> by 2018; riders in 2026 still describe a 20–30 minute all-in clock.";
      } else if (kind === "go") {
        state.phase = "green";
        elStatus.textContent = "You went. The order is on time.";
        elOutcome.innerHTML =
          "On time, by running the light. That is the choice the violation file is about — not a cartoon of an ‘evil algorithm,’ a deadline that makes a lawful stop look like delay. In Shanghai’s latest fortnight, about <b>115 of 1,000</b> food/instant riders had a recorded traffic violation.";
      } else if (kind === "suzhou") {
        state.phase = "green";
        elStatus.textContent = "You waited. The clock did not move.";
        elOutcome.innerHTML =
          "On time, without going. Traffic police stripped the red-light wait off the countdown automatically. That is the 2026 Gusu / SIP pilot — the rest of this page tests whether the crash file supports scaling it.";
      }
      paint();
    }
    function tick() {
      if (state.phase !== "red") return;
      state.redLeft -= 0.1;
      if (!(state.suzhou)) state.remaining -= 0.1;
      if (state.remaining < 0) state.remaining = 0;
      paint();
      if (state.redLeft <= 0) {
        if (state.suzhou) finish("suzhou");
        else if (state.remaining <= 0) finish("wait-late");
        else finish("wait-ok");
      }
    }
    function start(suzhou) {
      stopTimer();
      state.suzhou = !!suzhou;
      state.remaining = SLACK;
      state.redLeft = RED_SEC;
      state.phase = "red";
      state.running = true;
      elOutcome.hidden = true;
      elStatus.textContent = state.suzhou
        ? "Red. Suzhou mode: waiting time is not counted. Wait, or go anyway."
        : "Red. Forty seconds left. The light will sit for 60 seconds. Wait, or go.";
      setButtons(false, true, true);
      paint();
      if (reduce) return;
      timer = setInterval(tick, 100);
    }

    btnStart.onclick = function () {
      start(false);
    };
    btnSuzhou.onclick = function () {
      start(true);
    };
    btnWait.onclick = function () {
      if (state.phase !== "red") return;
      setButtons(false, false, false);
      elStatus.textContent = state.suzhou
        ? "Waiting. The clock is frozen."
        : "Waiting. The clock is still running.";
      if (reduce) {
        if (!state.suzhou) state.remaining = Math.max(0, state.remaining - RED_SEC);
        state.redLeft = 0;
        if (state.suzhou) finish("suzhou");
        else if (state.remaining <= 0) finish("wait-late");
        else finish("wait-ok");
      }
    };
    btnGo.onclick = function () {
      if (state.phase !== "red") return;
      finish("go");
    };

    var drawResult = document.getElementById("drawResult");
    function drawLane(lane) {
      var pV = lane === "food" ? 0.11471 : 0.05221;
      var pA = lane === "food" ? 0.0044849 : 0.0012398;
      var n = 1 + Math.floor(Math.random() * 1000);
      var viol = Math.random() < pV;
      var crash = Math.random() < pA;
      var who = lane === "food" ? "food/instant" : "parcel express";
      var bits = [
        "You are rider <b>" + n + "</b> of 1,000 in the <b>" + who + "</b> lane, this fortnight."
      ];
      if (viol && crash)
        bits.push("Recorded traffic violation: <b>yes</b>. At-fault crash: <b>yes</b>.");
      else if (viol) bits.push("Recorded traffic violation: <b>yes</b>. At-fault crash: no.");
      else if (crash) bits.push("Recorded traffic violation: no. At-fault crash: <b>yes</b>.");
      else bits.push("Recorded traffic violation: no. At-fault crash: no.");
      bits.push(
        lane === "food"
          ? "The lane means: 0.1147 violations per rider; 0.449 at-fault accidents per 100 riders."
          : "The lane means: 0.0522 violations per rider; 0.124 at-fault accidents per 100 riders."
      );
      if (drawResult) drawResult.innerHTML = bits.join(" ");
      document.querySelectorAll(".dot.picked").forEach(function (d) {
        d.classList.remove("picked");
      });
      var crowd = document.querySelector(lane === "food" ? ".crowd.food .dots" : ".crowd.exp .dots");
      if (crowd) {
        var dots = crowd.children;
        var idx = n - 1;
        if (dots[idx]) {
          dots[idx].classList.add("picked");
        }
      }
    }
    var drawFood = document.getElementById("drawFood");
    var drawExp = document.getElementById("drawExp");
    if (drawFood) drawFood.onclick = function () { drawLane("food"); };
    if (drawExp) drawExp.onclick = function () { drawLane("exp"); };

    var lateMin = document.getElementById("lateMin");
    var lateVal = document.getElementById("lateVal");
    var chaseBtn = document.getElementById("chaseBtn");
    var reviewBtn = document.getElementById("reviewBtn");
    var chaseResult = document.getElementById("chaseResult");
    if (lateMin && lateVal) {
      lateMin.addEventListener("input", function () {
        lateVal.textContent = lateMin.value;
      });
    }
    function chaseCopy(mins, review) {
      var m = +mins;
      var band =
        m <= 5
          ? "You are with the <b>14.4%</b> of chasers who chase within 5 minutes."
          : m <= 10
            ? "You are with the <b>17.3%</b> of chasers who chase within 10 minutes."
            : "You are with the <b>14.7%</b> of chasers who chase within 15 minutes.";
      var extra = review
        ? " A bad review within 5 minutes of overtime is what <b>6.9%</b> of residents reported doing."
        : m <= 5
          ? " Separately, <b>6.9%</b> issue a bad review within 5 minutes of overtime."
          : "";
      return (
        "The order is <b>" +
        m +
        "</b> minutes late. You chased. <b>46.4%</b> of surveyed residents chase once an order is late. " +
        band +
        extra +
        " <b>74.3%</b> care about speed; <b>71.6%</b> still call the job seriously hazardous. The rider’s deadline just got louder."
      );
    }
    if (chaseBtn && chaseResult) {
      chaseBtn.onclick = function () {
        chaseResult.innerHTML = chaseCopy(lateMin ? lateMin.value : 5, false);
      };
    }
    if (reviewBtn && chaseResult) {
      reviewBtn.onclick = function () {
        chaseResult.innerHTML = chaseCopy(lateMin ? lateMin.value : 5, true);
      };
    }
    document.querySelectorAll(".chase-band").forEach(function (btn) {
      btn.onclick = function () {
        var m = btn.getAttribute("data-m");
        if (lateMin) lateMin.value = m;
        if (lateVal) lateVal.textContent = m;
        document.querySelectorAll(".chase-band").forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        if (chaseResult) chaseResult.innerHTML = chaseCopy(m, false);
      };
    });
  }

  function initHeaderTimerDash() {
    var root = document.getElementById("timerDash");
    if (!root) return;
    var tabs = root.querySelectorAll(".td-tabs button");
    var timeEl = document.getElementById("tdTime");
    var copyEl = document.getElementById("tdCopy");
    var ring = document.getElementById("tdRingFg");
    var todayEl = document.getElementById("tdToday");
    var monthEl = document.getElementById("tdMonth");
    var yearEl = document.getElementById("tdYear");
    var metricsEl = document.getElementById("tdMetrics");
    var orderBtn = document.getElementById("tdOrderBtn");
    if (!timeEl || !copyEl || !ring || !todayEl || !monthEl || !yearEl) return;

    var CONFIG = {
      violations: {
        label: "delivery industry violations in shanghai",
        intervalSec: 86400 / 2000,
        baseline: { today: 2000, month: 60000, year: 730000 }
      },
      accidents: {
        label: "national food rider violation",
        intervalSec: 1.04,
        baseline: { today: 81936, month: 2492211, year: 29906536 }
      },
      order: {
        label: "traffic violation progress toward one order",
        intervalSec: 60
      }
    };

    var state = {
      metric: "violations",
      totalSec: 60,
      leftSec: 60,
      timer: null,
      dayCount: 0,
      monthCount: 0,
      yearCount: 0
      ,
      orderCount: 0,
      orderProgress: 0.0143,
      orderGrowthPerClick: 0.0143
    };

    var C = 2 * Math.PI * 108;
    ring.style.strokeDasharray = String(C);

    function fmt(sec) {
      var s = Math.max(0, sec);
      var m = Math.floor(s / 60);
      var r = Math.floor(s % 60);
      return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
    }

    function staticCounts(metric) {
      var cfg = CONFIG[metric];
      return {
        d: cfg.baseline.today,
        m: cfg.baseline.month,
        y: cfg.baseline.year
      };
    }

    function syncUI() {
      timeEl.textContent = fmt(state.leftSec);
      var p = 1 - state.leftSec / state.totalSec;
      ring.style.strokeDashoffset = String(Math.max(0, Math.min(1, p)) * C);
      if (state.metric === "order") {
        copyEl.textContent = "The probability of a Crash is now";
        timeEl.textContent = (state.orderProgress * 100).toFixed(2) + "%";
        ring.style.strokeDashoffset = String((1 - state.orderProgress) * C);
        if (metricsEl) metricsEl.style.display = "none";
        if (orderBtn) orderBtn.style.display = "inline-flex";
        return;
      }

      if (metricsEl) metricsEl.style.display = "flex";
      if (orderBtn) orderBtn.style.display = "none";
      copyEl.textContent =
        "A " + CONFIG[state.metric].label +
        " event will happen in...";
      todayEl.textContent = String(state.dayCount);
      monthEl.textContent = String(state.monthCount);
      yearEl.textContent = String(state.yearCount);
    }

    function resetCountsAndTimer() {
      if (state.metric === "order") {
        state.totalSec = 60;
        state.leftSec = 60;
        syncUI();
        return;
      }
      var b = staticCounts(state.metric);
      state.dayCount = b.d;
      state.monthCount = b.m;
      state.yearCount = b.y;
      state.totalSec = CONFIG[state.metric].intervalSec;
      state.leftSec = state.totalSec;
      syncUI();
    }

    function tick() {
      if (state.metric === "order") return;
      state.leftSec -= 0.05;
      if (state.leftSec <= 0) {
        state.leftSec = state.totalSec;
      }
      syncUI();
    }

    function setMetric(m) {
      state.metric = m;
      tabs.forEach(function (btn) {
        btn.setAttribute("aria-selected", btn.getAttribute("data-metric") === m ? "true" : "false");
      });
      resetCountsAndTimer();
    }

    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setMetric(btn.getAttribute("data-metric"));
      });
    });

    if (orderBtn) {
      orderBtn.addEventListener("click", function () {
        state.orderCount += 1;
        state.orderProgress = Math.min(1, state.orderProgress + state.orderGrowthPerClick);
        if (state.metric === "order") syncUI();
      });
    }

    resetCountsAndTimer();
    if (state.timer) clearInterval(state.timer);
    state.timer = setInterval(tick, 50);
  }

    function initCitiesMap() {
    var el = document.getElementById("cityHeatMap");
    if (!el || typeof window.L === "undefined") return;
    if (el.dataset.ready === "1") return;

    var map = L.map(el, { zoomControl: true, scrollWheelZoom: false }).setView([28.8, 113.8], 5);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap &copy; CARTO"
    }).addTo(map);

    function cardHtml(o) {
      return (
        "<span class=\"h\">" + o.name + "</span>" +
        "<span class=\"s\">" + o.stat + "</span>" +
        "<span class=\"d\">" + o.defn + "</span>" +
        "<span class=\"f\">" + o.src + "</span>"
      );
    }

    [
      {
        name: "Shanghai",
        lat: 31.2304,
        lng: 121.4737,
        stat: "2017 H1: one delivery rider injured or killed every 2.5 days (average)",
        defn: "Shanghai Public Security Bureau Traffic Police Corps data",
        src: "Shanghai delivery-rider road casualties · first half of 2017"
      },
      {
        name: "Shenzhen",
        lat: 22.5431,
        lng: 114.0579,
        stat: "12 delivery riders injured or killed within three months in 2017",
        defn: "Three-month traffic-police period total",
        src: "Shenzhen delivery-rider road casualties · 2017"
      },
      {
        name: "Chengdu",
        lat: 30.5728,
        lng: 104.0668,
        stat: "2018 Jan–Jul: nearly 10,000 violations, 196 accidents, 155 injuries/deaths (~1 injured or killed per day)",
        defn: "Delivery-rider violations and accidents handled by traffic police",
        src: "Chengdu traffic-police handling figures · first seven months of 2018"
      },
      {
        name: "Guangzhou",
        lat: 23.1291,
        lng: 113.2644,
        stat: "Nearly 2,000 delivery-rider traffic violations handled in September 2018",
        defn: "Monthly violation-case count",
        src: "Guangzhou traffic-police enforcement figure · September 2018"
      },
      {
        name: "Nanjing",
        lat: 32.0603,
        lng: 118.7969,
        stat: "3,242 accidents / 3 deaths / 2,473 injured; 94% violation-liability",
        defn: "All delivery e-bike accidents",
        src: "All delivery e-bike accidents · 2017 H1 · legal-review compilation of traffic-police releases"
      },
      {
        name: "Ningbo (Yinzhou)",
        lat: 29.8163,
        lng: 121.5623,
        stat: "~500 accidents/yr, >half with injury, 30+ serious; ~15,000 violations",
        defn: "Yinzhou district, Ningbo — local traffic-police / procuratorate release",
        src: "Delivery accidents and violations, Yinzhou · 2023 · Zhejiang Procuratorate"
      }
    ].forEach(function (pt) {
      var marker = L.circleMarker([pt.lat, pt.lng], {
        radius: 9,
        weight: 2,
        color: "#0d3556",
        fillColor: "#0088CC",
        fillOpacity: 0.92,
        className: "city-dot"
      }).addTo(map);
      var hit = L.circleMarker([pt.lat, pt.lng], {
        radius: 28,
        weight: 0,
        color: "transparent",
        fillColor: "transparent",
        fillOpacity: 0,
        interactive: true,
        className: "city-hit"
      }).addTo(map);
      marker.bindTooltip(cardHtml(pt), {
        direction: "top",
        offset: [0, -8],
        opacity: 1,
        sticky: true,
        interactive: true,
        permanent: false,
        className: "city-tip"
      });
      var closeTimer = null;
      function clearClose() {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      }
      function scheduleClose() {
        clearClose();
        closeTimer = setTimeout(function () {
          marker.closeTooltip();
        }, 260);
      }

      function openStable() {
        clearClose();
        marker.openTooltip();
      }

      marker.on("mouseover", openStable);
      hit.on("mouseover", openStable);
      marker.on("mouseout", scheduleClose);
      hit.on("mouseout", scheduleClose);
      marker.on("tooltipopen", function () {
        var tip = marker.getTooltip();
        if (!tip || !tip._container) return;
        var node = tip._container;
        node.addEventListener("mouseenter", clearClose);
        node.addEventListener("mouseleave", scheduleClose);
      });
    });

    el.dataset.ready = "1";
    setTimeout(function () { map.invalidateSize(); }, 0);
  }


  function init() {
    fillProvNodes();
    renderCounters();
    renderHeroField();
    renderTimeline();
    renderLoop();
    renderSurvey();
    renderCities();
    renderOutcomes();
    renderFooter();
    renderMagnitudeViz();
    initSqueezePlay();
    initIntroClocks();
    initLoopPlay();
    initReveal();
    initShanghai();
    initExperience();
    initHeaderTimerDash();
    initCitiesMap();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
