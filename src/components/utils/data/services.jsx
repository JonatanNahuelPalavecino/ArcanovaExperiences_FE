export const services = [
  {
    type: "private_experiences",
    path: "puerto-aventura",
    name: "Yachts from Puerto Aventura to Cozumel",
    description: "Private sailing experience from Puerto aventura to Cozumel.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060561/puerto_aventura_logo_lubv34.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060538/1_puerto_aventura_cazcht.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060541/2_puerto_aventura_cqbwme.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060539/3_puerto_aventura_adiva2.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060540/4_puerto_aventura_sursoj.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060542/5_puerto_aventura_rocbjk.jpg",
    ],
    include: [
      {
        type: "food",
        description:
          "Shrimp ceviche, chicken fajitas, guacamole, fruits and snacks.",
      },
      {
        type: "open_bar",
        description:
          "Beers, waters, soft drinks, juices, vodka, tequila, whiskey, rum, white and red wine and drinks prepared as mixology.",
      },
      {
        type: "accesories",
        description: "Snorkel, vest and paddlesurf equipment.",
      },
    ],
    options: [
      {
        duration: "4 hours",
        title: "Bay & Reef",
        description:
          "Travel to a reef to discover marine life and a secret place of crystal clear water where you can relax or have your own celebration.",
      },
      {
        duration: "6 hours",
        title: "Bay & Private Beach",
        description:
          "We will meet the bay of Puerto Aventuras and an exclusive beach in the Riviera Maya surrounded by nature and with crystal clear water.",
      },
      {
        duration: "8 hours",
        title: "Cozumel 'El Cielo'",
        description:
          "We will visit two reefs full of marine life. 'El Cielo', the house of the starfish. The magical waters of Cielito. Here you will have free time to enjoy this unique paradise!",
      },
    ],
    fleet: [
      {
        id: 1,
        name: "Sun Dancer 48",
        capacity: 12,
        prices: {
          "4_hours": 1450,
          "6_hours": 2000,
          "8_hours": null,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060562/1_sun_eark1e.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060563/2_sun_qbluzx.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060562/3_sun_zv0pl5.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060563/4_sun_emxree.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060566/5_sun_gqqy9i.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060565/6_sun_djug7a.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060566/7_sun_ycmmve.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060567/8_sun_kqg29r.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060567/9_sun_doplcl.jpg",
        ],
      },
      {
        id: 2,
        name: "Flybridge 48",
        capacity: 12,
        prices: {
          "4_hours": 1500,
          "6_hours": 2100,
          "8_hours": null,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060547/1_fly_ffccpv.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060549/2_fly_i6yja8.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060552/3_fly_cuqi8o.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060554/4_fly_quvw5v.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060550/5_fly_pehae0.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060555/6_fly_jtpkdr.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060553/7_fly_uibbaq.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060553/8_fly_etelg9.jpg",
        ],
      },
      {
        id: 3,
        name: "Azimut 44",
        capacity: 12,
        prices: {
          "4_hours": 1800,
          "6_hours": 2400,
          "8_hours": null,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060544/1_azi_odvquu.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060545/2_azi_unux9c.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060546/3_azi_z3lopd.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060546/4_azi_sspfhz.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060547/5_azi_msmhjo.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060549/6_azi_vh4brr.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060550/7_azi_dnfhxj.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060558/8_azi_loklsy.jpg",
        ],
      },
      {
        id: 4,
        name: "Lagoon 42",
        capacity: 12,
        prices: {
          "4_hours": 2150,
          "6_hours": 2900,
          "8_hours": 3800,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060557/1_lag_tbwbfo.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060563/2_lag_kxwruo.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060561/3_lag_oqjdg6.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060565/4_lag_pvp2kq.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060564/5_lag_omtp3v.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060561/6_lag_zaj65n.jpg",
        ],
      },
      {
        id: 5,
        name: "Sun Deluxe 55",
        capacity: 15,
        prices: {
          "4_hours": 2050,
          "6_hours": 2800,
          "8_hours": 3700,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060569/1_sun_f3393h.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060569/2_sun_su7zex.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060569/3_sun_gsqo5x.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060570/4_sun_jdruuk.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060571/5_sun_rjg3br.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060572/6_sun_mc4shh.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060573/7_sun_sati1o.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060573/8_sun_apwjbq.jpg",
        ],
      },
    ],
    extra_fee_note:
      "An additional $15 USD per person dock tax applies to all itineraries.",
  },
  {
    type: "private_experiences",
    path: "cancun",
    name: "Yachts from Cancún to Isla Mujeres",
    description:
      "Private luxury yacht experience from Cancún to Isla Mujeres. Enjoy Playa Norte, Punta Sur, snorkeling, music, drinks, and top-tier service aboard exclusive vessels.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060462/cancun_logo_ubowgx.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060449/1_cancun_ex7rcl.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060449/2_cancun_v6nxwz.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060449/3_cancun_v6gqs0.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060450/4_cancun_apmdhe.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060450/5_cancun_alx5dw.jpg",
    ],
    include: [
      {
        type: "experience",
        description:
          "Navigation from Cancún to Isla Mujeres, including Playa Norte and Punta Sur.",
      },
      {
        type: "snorkel",
        description: "Snorkel at the reef with equipment included.",
      },
      {
        type: "drinks",
        description: "30 beers, 30 waters, 30 soft drinks and ice.",
      },
      {
        type: "service",
        description: "Music, captain, and waiter service.",
      },
    ],
    options: [
      {
        duration: null,
        title: "Reef & Playa Norte",
        description:
          "Discover marine life in the reefs and relax at the most beautiful beach in the Caribbean!",
      },
      {
        duration: null,
        title: "Sunset Punta Sur",
        description:
          "Enjoy the sunset from one of the best spots on the island.",
      },
      {
        duration: null,
        title: "Isla Celebration VIP",
        description:
          "We create the perfect party for you and your guests. It will be unforgettable!",
      },
    ],
    fleet: [
      {
        id: 6,
        name: "sunny Boat",
        capacity: 8,
        prices: {
          "6_hours": null,
          "8_hours": null,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749629/IMG_8518_iucsvj.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749630/IMG_8525_jg6g2y.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749630/IMG_8524_onis1q.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749629/IMG_8523_rnnmwn.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749628/IMG_8517_fnky3z.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749629/IMG_8521_i8tzkm.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749629/IMG_8520_wfhafr.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749628/IMG_8519_w2s6fy.jpg"
        ]
      },
      {
        id: 7,
        name: "Tata 46 ft",
        capacity: 15,
        prices: {
          "6_hours": 16000,
          "8_hours": 18000,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749662/PHOTO-2025-03-15-11-51-45-2_xkoaty.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749661/PHOTO-2025-03-15-11-51-45-4_omznnm.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749661/PHOTO-2025-03-15-11-51-44_nhvgad.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749660/PHOTO-2025-03-15-11-51-46-3_uv4uxe.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749659/PHOTO-2025-03-15-11-51-45-5_jg4gyz.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749658/PHOTO-2025-03-15-11-51-46_b2xo7b.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749657/PHOTO-2025-03-15-11-51-46-4_dxkqmp.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749657/PHOTO-2025-03-15-11-51-46-2_evtvyy.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749657/PHOTO-2025-03-15-11-51-45_ncuzvy.jpg"
        ]
      },
      {
        id: 8,
        name: "Sea Mami 54 ft",
        capacity: 20,
        prices: {
          "6_hours": 26500,
          "8_hours": 28500,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749776/d54f0f86-76a0-4abb-b81f-992453a88841_peuoes.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749774/c5f0be9e-ddb5-4ae2-9f8e-a494a8398703_1_iyqskn.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749775/cd02035a-0ae5-4d82-a9c4-2ba8d5b792a1_1_ck1udu.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749773/c1309e7c-4cbd-42d4-9313-e981f204a99a_2_dggwsa.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749772/9e9ee091-410c-4869-a626-a11dd02c4534_qujy2d.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749769/8f6002a2-eb34-4e3b-9661-a5c7c45a8868_1_sv6yq8.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749768/63da6112-e921-400c-a054-4f134492d7a6_xhtcsu.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749767/18ad4dae-aa77-47cb-bf45-542c2337c10c_f26mbj.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749767/3288b236-7ff8-40c5-9d97-bbdc6908e01d_1_ifzgdk.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749764/1f9482dd-5c0a-4994-9e76-f282a7b0a368_xjrs1s.jpg"
        ]
      },
      {
        id: 9,
        name: "Lux Black Mia 46 ft",
        capacity: 15,
        prices: {
          "6_hours": 17500,
          "8_hours": 19500,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749703/WhatsApp_Image_2025-04-21_at_8.57.31_PM_4_r7g3hr.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749704/WhatsApp_Image_2025-04-21_at_8.57.31_PM_xrhpi9.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749702/WhatsApp_Image_2025-04-21_at_8.57.31_PM_3_trptjg.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749702/WhatsApp_Image_2025-04-21_at_8.57.31_PM_2_pqxlky.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749699/WhatsApp_Image_2025-04-21_at_8.57.30_PM_4_l74agn.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749698/WhatsApp_Image_2025-04-21_at_8.57.30_PM_3_vkexgy.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749697/WhatsApp_Image_2025-04-21_at_8.57.31_PM_1_pjr5mh.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749697/WhatsApp_Image_2025-04-21_at_8.57.30_PM_2_iib0eo.jpg"
        ]
      },
      {
        id: 10,
        name: "Paradise 58 ft",
        capacity: 20,
        prices: {
          "6_hours": 25000,
          "8_hours": 27000,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060454/1_parad_ywhpnj.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060455/2_parad_fhlw5c.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060455/3_parad_qh9bnt.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060456/4_parad_qbshdy.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060460/5_parad_dc4x7v.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060459/6_parad_t9wpso.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060457/7_parad_z9ujwm.jpg",
        ],
      },
      {
        id: 11,
        name: "Oasis 40 ft",
        capacity: 12,
        prices: {
          "6_hours": null,
          "8_hours": null,
        },
        images: [
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749734/2c82f0e3-662c-48e5-834a-4e26d2c52711_boq30o.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749739/6d7f7b85-cf4e-4a87-83a0-60381d6f0839_sbjxii.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749743/eb382780-f56e-4d6a-8121-ee84cbed93b5_gkzm4h.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749742/f34c9cbe-5673-4d94-b2a8-ff8d81e532c3_lte8ny.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749742/e0ebee62-fc08-4810-94aa-c437ac2c97d3_frqecb.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749739/6d7f7b85-cf4e-4a87-83a0-60381d6f0839_sbjxii.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749740/75bb698a-b392-40ea-8f1e-a205703c1f5d_miktcu.jpg",
          "https://res.cloudinary.com/dfwjsmhni/image/upload/v1756749741/a8d4f616-e433-4456-b65d-8b32c4b96acf_infedb.jpg"
        ]
      },
    ],
    extra_fee_note:
      "Optional services include live DJ, decoration, open bar, private transport, photography/video, and buffet service. Ask for birthday experiences too!",
  },
  {
    type: "private_tour", // hecho
    path: "akumal-jungle-aventure",
    name: "Akumal Jungle Aventure",
    description:
      "ATVs, zip lines, cenotes, and pure adrenaline. Ride a Yamaha ATV through private jungle trails, soar through zip lines, explore sacred cenotes, and cleanse your energy in a traditional Mayan temazcal ceremony.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060020/1_atv_aventura_bedxlp.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060020/1_atv_aventura_bedxlp.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060021/2_atv_aventura_njjqbv.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060022/3_atv_aventura_i8xln3.webp",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060022/4_atv_aventura_hc7jle.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060023/5_atv_aventura_fk5kms.jpg",
    ],
    include: [
      {
        type: "Comfortable Travel",
        description:
          "Comfortable roundtrip bus transportation so you can relax throughout the experience.",
      },
      {
        type: "Expert Guidance & Access",
        description:
          "Includes professional guides and entrance to both the archaeological site and natural cenotes.",
      },
      {
        type: "Local Culture & Cuisine",
        description:
          "Enjoy a traditional buffet lunch and take advantage of free time to explore the historic town of Valladolid.",
      },
    ],
  },
  {
    type: "private_tour", // hecho
    path: "bacalar",
    name: "Bacalar - Seven Colors Lagoon Experience",
    description:
      "A peaceful escape of color and calm. Discover the magic of Bacalar, paddle over rainbow-colored water, and unwind in a dreamy beach club setting. A perfect reset for body and soul.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060019/6_bacalar_bbvcna.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060016/1_bacalar_nb9j8u.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060017/2_bacalar_tov70o.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060017/3_bacalar_gffdze.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060019/4_bacalar_s2mktv.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060019/5_bacalar_d53y46.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060019/6_bacalar_bbvcna.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060019/7_bacalar_orwoxj.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060020/8_bacalar_z8io9k.jpg",
    ],
    include: [
      {
        type: "Scenic Adventure & Photo Stops",
        description:
          "Enjoy roundtrip transportation and stop at iconic viewpoints for memorable photos along the way.",
      },
      {
        type: "Lagoon & Cenote Experience",
        description:
          "Start with breakfast at the cenote, then explore the stunning Cenote Azul and kayak for an hour across the Bacalar lagoon.",
      },
      {
        type: "Relaxation & Local Flavors",
        description:
          "Relax at an exclusive beach club for 2 hours and enjoy a delicious lunch with views of the lagoon, all guided by a bilingual expert.",
      },
    ],
  },
  {
    type: "private_tour", // hecho
    path: "chichen-itza",
    name: "Chichen Itza Pyramid Deluxe",
    description:
      "A journey through history, culture, and natural wonders. Step back in time at Chichén Itzá, one of the Seven Wonders of the World. Swim in a crystal-clear cenote, savor authentic Yucatecan food, and explore the colonial charm of Valladolid.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060041/5_chichen_vqlbo1.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060012/1_chichen_fwb049.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060013/2_chichen_brpp0l.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060013/3_chichen_g5kd0j.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060014/4_chichen_caxcw9.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060041/5_chichen_vqlbo1.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060015/6_chichen_iymqpz.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060015/7_chichen_cv6gqe.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060016/8_chichen_fjxjjn.jpg",
    ],
    include: [
      {
        type: "Hassle-Free Transportation",
        description:
          "Comfortable roundtrip bus transportation so you can relax and enjoy the journey.",
      },
      {
        type: "Guided Exploration",
        description:
          "Expert bilingual guides and access to both the archaeological site and stunning natural cenotes.",
      },
      {
        type: "Cultural and Culinary Experience",
        description:
          "Traditional buffet lunch included, plus free time to explore the charming town of Valladolid.",
      },
    ],
  },
  {
    type: "private_tour", // hecho
    path: "cielo-cozumel",
    name: "Cozumel - El Cielo Stargazing Snorkel Tour",
    description:
      "A magical adventure above and below the sea. Sail over clear Caribbean waters to El Cielo, home to the famous starfish. Snorkel at the Palancar and Colombia reefs, enjoy ceviche and drinks on board, and soak up the beauty of Cozumel.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060007/1_el_cielo_x1dmiz.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060007/1_el_cielo_x1dmiz.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060008/2_el_cielo_ngpe4f.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060008/3_el_cielo_kfbwqi.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060009/4_el_cielo_qkgl0z.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060010/5_el_cielo_mv2sch.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060010/6_el_cielo_lf5guj.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060011/7_el_cielo_kx7wdt.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060011/8_el_cielo_e7utoa.jpg",
    ],
    include: [
      {
        type: "Scenic Boat Journey",
        description:
          "Cruise over the turquoise Caribbean waters with a certified guide and optional ferry and transportation available.",
      },
      {
        type: "Snorkeling & Nature",
        description:
          "Snorkel at the stunning Palancar and Colombia reefs, and visit El Cielo, a starfish sanctuary.",
      },
      {
        type: "Flavors & Relaxation",
        description:
          "Enjoy fresh ceviche, tropical fruits, and drinks on board, plus open bar with tequila and beer, and access to a beach club.",
      },
    ],
  },
  {
    type: "private_tour", // hecho
    path: "holbox-magic",
    name: "Holbox Magic Island Tour",
    description:
      "Disconnect from the world, reconnect with paradise. Holbox is where time slows down. Discover its turquoise beaches, flamingos in the wild, and the peaceful charm of Isla Pasión. Enjoy local food, beach clubs, and the freedom to explore by bike or golf cart.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060003/2_holbox_cahdtz.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060003/1_holbox_jm7gll.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060003/2_holbox_cahdtz.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060004/3_holbox_p2etq4.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060004/4_holbox_nuvedf.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060005/5_holbox_xhif2q.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060006/6_holbox_uolj7v.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060006/7_holbox_viesmn.jpg",
    ],
    include: [
      {
        type: "Island Discovery Tour",
        description:
          "Boat ride through mangroves and top scenic spots, including visits to Isla Pasión and Punta Mosquito with flamingo sightings and a natural pool.",
      },
      {
        type: "Local Culture & Freedom",
        description:
          "Enjoy free time to explore Holbox by bike or golf cart at your own pace.",
      },
      {
        type: "All-Inclusive Comfort",
        description:
          "Includes beach club buffet lunch with open bar, bilingual guide, and complete roundtrip transportation.",
      },
    ],
  },
  {
    type: "private_tour", // hecho
    path: "isla-contoy-mujeres",
    name: "Isla Contoy + Isla Mujeres Deluxe",
    description:
      "Two Caribbean gems in one unforgettable day. Explore the untouched paradise of Isla Contoy, snorkel in vibrant reefs, and end your adventure at Playa Norte in Isla Mujeres with cocktails and beach vibes.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059999/4_isla_gap92g.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059998/1_isla_cg5w8w.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059998/2_isla_lvkm3r.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059999/3_isla_pexf3o.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059999/4_isla_gap92g.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060000/5_isla_amad7b.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060001/6_isla_wct66x.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060001/7_isla_ofrhbh.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060002/8_isla_z8k9tx.jpg",
    ],
    include: [
      {
        type: "Kickstart Your Day",
        description:
          "Begin your adventure with a full breakfast at the marina before boarding.",
      },
      {
        type: "Sailing & Snorkeling",
        description:
          "Enjoy a ferry-style boat with open bar and snorkel the reef with included gear.",
      },
      {
        type: "Island Escapade",
        description:
          "Spend over 3 hours on Isla Contoy with lunch and unlimited drinks, and visit the beautiful Playa Norte in Isla Mujeres.",
      },
    ],
  },
  {
    type: "private_tour", //hecho
    path: "isla-mujeres-catamaran-deluxe",
    name: "Isla Mujeres Catamaran Deluxe",
    description:
      "The ultimate Caribbean party on the sea. Picture this: you're sailing over turquoise waters, drink in hand, music playing, surrounded by amazing people, and the sun setting over the ocean. This is not just a tour, it’s an experience.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059995/5_isla_twldel.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059994/1_isla_vsoe84.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059994/2_isla_hifdkt.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059994/3_isla_q0yvtb.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059994/4_isla_iy9k6x.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059995/5_isla_twldel.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059996/6_isla_cqomrn.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059997/7_isla_jmsgra.jpg",
    ],
    include: [
      {
        type: "Open Bar",
        description: "unlimited margaritas, tequila, rum, vodka, and beers.",
      },
      {
        type: "Premium Beach Club",
        description:
          "Access with loungers, umbrellas, chill area, and buffet (fish, chicken, veggies, pizza, and more).",
      },
      {
        type: "Accesories",
        description:
          "Snorkeling at reefs and a sunken ship, with full gear included. Two hours at Playa Norte, one of the most iconic beaches in Mexico. Sunset vibes with music and celebration on board.",
      },
    ],
    extra_fee_note:
      "Perfect for birthdays, bachelor/ette parties, group fun or simply enjoying life.",
  },
  {
    type: "private_tour", // hecho
    path: "secret-spots",
    name: "Secret Spots - Natural Adventure Tour",
    description:
      "Explore the sacred hidden gems of the Riviera Maya. Dive into the energy of untouched cenotes, natural lagoons, and quiet inlets surrounded by raw beauty. This tour reveals nature's best-kept secrets.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059993/7_lugares_vy3ozy.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059989/1_lugares_wbma2i.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059989/2_lugares_f7ijym.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059990/3_lugares_gmj6wl.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059991/4_lugares_pfw35l.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059991/5_lugares_ce7alf.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059992/6_lugares_glcoza.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059993/7_lugares_vy3ozy.jpg",
    ],
    include: [
      {
        type: "Underwater Exploration",
        description:
          "Snorkel with marine life and access the beautiful Yal-Ku inlet for a unique aquatic experience.",
      },
      {
        type: "Natural Wonders Tour",
        description:
          "Visit the stunning Kaan Luum Lagoon and explore both open and cave cenotes.",
      },
      {
        type: "Comfort, Culture & Views",
        description:
          "Enjoy traditional lunch and drinks, roundtrip transportation, scenic photo stops, and guidance from an expert guide.",
      },
    ],
  },
  {
    type: "private_tour", // hecho
    path: "sian-kaan",
    name: "Sian Kaan Deluxe",
    description:
      "A hidden paradise for nature lovers. Embark on a breathtaking boat journey through the Sian Ka'an biosphere, spotting dolphins, turtles, manatees, and more. Swim in a natural pool and enjoy every moment in one of the Riviera Maya's most magical places.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059988/1_sian_gqc5j9.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059988/1_sian_gqc5j9.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059987/2_sian_jbbrqe.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059988/3_sian_t0gypq.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059988/4_sian_dnwrhd.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059988/6_sian_jpllv7.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754059988/7_sian_gtasqa.jpg",
    ],
    include: [
      {
        type: "Seamless Transportation & Guidance",
        description:
          "Roundtrip transportation and a bilingual expert guide ensure a smooth and informative experience from start to finish.",
      },
      {
        type: "Punta Allen Boat Adventure",
        description:
          "Enjoy a 3-hour boat tour through Punta Allen with opportunities to spot dolphins, birds, crocodiles, and even manatees.",
      },
      {
        type: "Swim & Savor",
        description:
          "Take a refreshing swim in a natural pool and indulge in a tasty box lunch followed by a delicious meal with drinks.",
      },
    ],
  },
  {
    type: "private_tour", //hecho
    path: "tulum-deluxe-experience",
    name: "Tulum Deluxe Experience",
    description:
      "Culture, nature, and tropical energy in one unforgettable day. Discover the Mayan ruins of Tulum with ocean views, swim in four magical cenotes, and recharge with a delicious buffet lunch. Bring your camera: this day is full of postcard-worthy moments.",
    foto: "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060027/6_tulum_bxyytp.jpg",
    images: [
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060025/1_tulum_cnbvnz.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060025/2_tulum_ae96cn.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060033/3_tulum_iiuqx4.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060026/4_tulum_z3gfr0.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060026/5_tulum_snzjep.jpg",
      "https://res.cloudinary.com/dfwjsmhni/image/upload/v1754060027/6_tulum_bxyytp.jpg",
    ],
    include: [
      {
        type: "Tulum Experience",
        description:
          "Guided tour of the Tulum archaeological site, with time for photos at the iconic Tulum sign and the Mother Nature sculpture.",
      },
      {
        type: "Cenote Adventure",
        description:
          "Swim in four different cenotes at Casa Tortuga park, surrounded by stunning natural scenery.",
      },
      {
        type: "Comfort and Included Services",
        description:
          "Includes buffet lunch, drinks on board, bilingual guide, and roundtrip transportation.",
      },
    ],
  },
];
