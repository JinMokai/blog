let aboutData =  [
  {
    url: "IMG_20210321_184810.jpg",
    alt: "20210321_184810",
    info: "2021-3-21日南昌楼梯独照",
    place: "南昌",
    land: false,
    pro: false,
  },
  {
    url: "mmexport1616329068492.jpg",
    alt: "1616329068492",
    info: "2021-3-21日与好友张合照",
    place: "南昌",
    land: false,
    pro: false,
  },
  {
    url: "IMG_20230107_112445.webp",
    alt: "2023-1-7",
    info: "2023-1-7日鄱阳永福寺庙塔拍摄",
    place: "鄱阳",
    land: false,
    pro: false,
  },
  {
    url: "IMG_20230107_103524.jpg",
    alt: "2023-1-7",
    info: "2023-1-7日鄱阳楼拍摄",
    place: "鄱阳",
    land: true,
    pro: false,
  },
  {
    url: "mmexport1661335245227.jpg",
    alt: "2022-8-24",
    info: "2022-8-24日杭州伞博物馆",
    place: "杭州",
    land: false,
    pro: true,
  },
  {
    url: "20230204.jpg",
    alt: "2023-2-4",
    info: "2023-2-4日鄱阳县上士湖鄱阳湖瓦屑坝博物馆湖边",
    place: "鄱阳",
    land: false,
    pro: false,
  },
  {
    url: "IMG_20230218_192205.jpg",
    alt: "2023-2-18",
    info: "2023-2-18日新余学院拍摄",
    place: "新余",
    land: false,
    pro: false,
  },
  {
    url: "IMG_20230226_153940.jpg",
    alt: "2023-2-26",
    info: "2023-2-26日新余学院图书馆拍摄",
    place: "新余",
    land: false,
    pro: false,
  },
  {
    url: "IMG_20230305_145530.jpg",
    alt: "2023-3-5",
    info: "2023-3-5日新余学院行政楼(北)湖",
    place: "新余",
    land: true,
    pro: false,
  },
  {
    url: "IMG_20230313_154713.jpg",
    alt: "2023-3-13",
    info: "2023-3-13日新余学院数计楼",
    place: "新余",
    land: false,
    pro: true,
  },
  {
    url: "IMG_20230408_071454.jpg",
    alt: "2023-4-7",
    info: "2023-4-7日新余学院图书馆一角",
    place: "新余",
    land: true,
    pro: false,
  },
  {
    url: "IMG_20230320_165111.jpg",
    alt: "2023-3-20",
    info: "2023-3-13日新余学院数计楼蜜蜂采蜜",
    place: "新余",
    land: false,
    pro: true,
  },
  {
    url: "IMG_20230428_194553.jpg",
    alt: "2023-4-28",
    info: "雨后的晚上，路上没人",
    place: "新余",
    land: false,
    pro: true
  },
  {
    url: "IMG_20230430_153441.jpg",
    alt: "2023-4-30",
    info: "北操场一角拍摄",
    place: "新余",
    land: true,
    pro: false
  },{
    url: "IMG_20230508_181223.jpg",
    alt: "2023-5-8",
    info: "2023-5-8新余学院西边湖拍摄",
    place: "新余",
    land: false,
    pro: true
  },
  {
    url: "IMG_20230508_181258.jpg",
    alt: "2023-5-8",
    info: "2023-5-8新余学院西边湖拍摄",
    place: "新余",
    land: true,
    pro: false
  }
]
for (let i = 0; i < aboutData.length; i++) {
  aboutData[i].url = "/assets/photoList/" + aboutData[i].url
}
// 图片倒序
export default aboutData.reverse()