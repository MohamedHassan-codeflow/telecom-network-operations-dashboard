const siteData = [
  {
    "id": "CAI-5G-001",
    "city": "Cairo",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.1,
    "ticket": "N/A",
    "x": 23,
    "y": 31
  },
  {
    "id": "GIZ-5G-002",
    "city": "Giza",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.2,
    "ticket": "N/A",
    "x": 40,
    "y": 54
  },
  {
    "id": "ALE-LTE-003",
    "city": "Alexandria",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.3,
    "ticket": "N/A",
    "x": 57,
    "y": 77
  },
  {
    "id": "MAN-5G-004",
    "city": "Mansoura",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.4,
    "ticket": "N/A",
    "x": 74,
    "y": 20
  },
  {
    "id": "TAN-5G-005",
    "city": "Tanta",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.5,
    "ticket": "N/A",
    "x": 91,
    "y": 43
  },
  {
    "id": "ASW-LTE-006",
    "city": "Aswan",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.6,
    "ticket": "N/A",
    "x": 22,
    "y": 66
  },
  {
    "id": "LUX-5G-007",
    "city": "Luxor",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.7,
    "ticket": "N/A",
    "x": 39,
    "y": 9
  },
  {
    "id": "SUE-5G-008",
    "city": "Suez",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.8,
    "ticket": "N/A",
    "x": 56,
    "y": 32
  },
  {
    "id": "ISM-LTE-009",
    "city": "Ismailia",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.9,
    "ticket": "N/A",
    "x": 73,
    "y": 55
  },
  {
    "id": "FAY-5G-010",
    "city": "Fayoum",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 89.0,
    "ticket": "TT-1110",
    "x": 90,
    "y": 78
  },
  {
    "id": "MIN-5G-011",
    "city": "Minya",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 89.1,
    "ticket": "TT-1111",
    "x": 21,
    "y": 21
  },
  {
    "id": "SOH-LTE-012",
    "city": "Sohag",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 89.2,
    "ticket": "TT-1112",
    "x": 38,
    "y": 44
  },
  {
    "id": "ZAG-5G-013",
    "city": "Zagazig",
    "vendor": "Nokia",
    "status": "Down",
    "availability": 68,
    "ticket": "TT-1113",
    "x": 55,
    "y": 67
  },
  {
    "id": "POR-5G-014",
    "city": "Port Said",
    "vendor": "Ericsson",
    "status": "Down",
    "availability": 69,
    "ticket": "TT-1114",
    "x": 72,
    "y": 10
  },
  {
    "id": "HUR-LTE-015",
    "city": "Hurghada",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.5,
    "ticket": "N/A",
    "x": 89,
    "y": 33
  },
  {
    "id": "DAM-5G-016",
    "city": "Damietta",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.6,
    "ticket": "N/A",
    "x": 20,
    "y": 56
  },
  {
    "id": "CAI-5G-017",
    "city": "Cairo",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.7,
    "ticket": "N/A",
    "x": 37,
    "y": 79
  },
  {
    "id": "GIZ-LTE-018",
    "city": "Giza",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.8,
    "ticket": "N/A",
    "x": 54,
    "y": 22
  },
  {
    "id": "ALE-5G-019",
    "city": "Alexandria",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.0,
    "ticket": "N/A",
    "x": 71,
    "y": 45
  },
  {
    "id": "MAN-5G-020",
    "city": "Mansoura",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.1,
    "ticket": "N/A",
    "x": 88,
    "y": 68
  },
  {
    "id": "TAN-LTE-021",
    "city": "Tanta",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.2,
    "ticket": "N/A",
    "x": 19,
    "y": 11
  },
  {
    "id": "ASW-5G-022",
    "city": "Aswan",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.3,
    "ticket": "N/A",
    "x": 36,
    "y": 34
  },
  {
    "id": "LUX-5G-023",
    "city": "Luxor",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.4,
    "ticket": "N/A",
    "x": 53,
    "y": 57
  },
  {
    "id": "SUE-LTE-024",
    "city": "Suez",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 90.4,
    "ticket": "TT-1124",
    "x": 70,
    "y": 80
  },
  {
    "id": "ISM-5G-025",
    "city": "Ismailia",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 90.5,
    "ticket": "TT-1125",
    "x": 87,
    "y": 23
  },
  {
    "id": "FAY-5G-026",
    "city": "Fayoum",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 90.6,
    "ticket": "TT-1126",
    "x": 18,
    "y": 46
  },
  {
    "id": "MIN-LTE-027",
    "city": "Minya",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 90.7,
    "ticket": "TT-1127",
    "x": 35,
    "y": 69
  },
  {
    "id": "SOH-5G-028",
    "city": "Sohag",
    "vendor": "Ericsson",
    "status": "Down",
    "availability": 58,
    "ticket": "TT-1128",
    "x": 52,
    "y": 12
  },
  {
    "id": "ZAG-5G-029",
    "city": "Zagazig",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.0,
    "ticket": "N/A",
    "x": 69,
    "y": 35
  },
  {
    "id": "POR-LTE-030",
    "city": "Port Said",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.1,
    "ticket": "N/A",
    "x": 86,
    "y": 58
  },
  {
    "id": "HUR-5G-031",
    "city": "Hurghada",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.2,
    "ticket": "N/A",
    "x": 17,
    "y": 81
  },
  {
    "id": "DAM-5G-032",
    "city": "Damietta",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.3,
    "ticket": "N/A",
    "x": 34,
    "y": 24
  },
  {
    "id": "CAI-LTE-033",
    "city": "Cairo",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.4,
    "ticket": "N/A",
    "x": 51,
    "y": 47
  },
  {
    "id": "GIZ-5G-034",
    "city": "Giza",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.5,
    "ticket": "N/A",
    "x": 68,
    "y": 70
  },
  {
    "id": "ALE-5G-035",
    "city": "Alexandria",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.6,
    "ticket": "N/A",
    "x": 85,
    "y": 13
  },
  {
    "id": "MAN-LTE-036",
    "city": "Mansoura",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.7,
    "ticket": "N/A",
    "x": 16,
    "y": 36
  },
  {
    "id": "TAN-5G-037",
    "city": "Tanta",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.8,
    "ticket": "N/A",
    "x": 33,
    "y": 59
  },
  {
    "id": "ASW-5G-038",
    "city": "Aswan",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.0,
    "ticket": "N/A",
    "x": 50,
    "y": 82
  },
  {
    "id": "LUX-LTE-039",
    "city": "Luxor",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 91.9,
    "ticket": "TT-1139",
    "x": 67,
    "y": 25
  },
  {
    "id": "SUE-5G-040",
    "city": "Suez",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 92.0,
    "ticket": "TT-1140",
    "x": 84,
    "y": 48
  },
  {
    "id": "ISM-5G-041",
    "city": "Ismailia",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 92.1,
    "ticket": "TT-1141",
    "x": 15,
    "y": 71
  },
  {
    "id": "FAY-LTE-042",
    "city": "Fayoum",
    "vendor": "Ericsson",
    "status": "Down",
    "availability": 72,
    "ticket": "TT-1142",
    "x": 32,
    "y": 14
  },
  {
    "id": "MIN-5G-043",
    "city": "Minya",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.5,
    "ticket": "N/A",
    "x": 49,
    "y": 37
  },
  {
    "id": "SOH-5G-044",
    "city": "Sohag",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.6,
    "ticket": "N/A",
    "x": 66,
    "y": 60
  },
  {
    "id": "ZAG-LTE-045",
    "city": "Zagazig",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.7,
    "ticket": "N/A",
    "x": 83,
    "y": 83
  },
  {
    "id": "POR-5G-046",
    "city": "Port Said",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.8,
    "ticket": "N/A",
    "x": 14,
    "y": 26
  },
  {
    "id": "HUR-5G-047",
    "city": "Hurghada",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.9,
    "ticket": "N/A",
    "x": 31,
    "y": 49
  },
  {
    "id": "DAM-LTE-048",
    "city": "Damietta",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.0,
    "ticket": "N/A",
    "x": 48,
    "y": 72
  },
  {
    "id": "CAI-5G-049",
    "city": "Cairo",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.1,
    "ticket": "N/A",
    "x": 65,
    "y": 15
  },
  {
    "id": "GIZ-5G-050",
    "city": "Giza",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.2,
    "ticket": "N/A",
    "x": 82,
    "y": 38
  },
  {
    "id": "ALE-LTE-051",
    "city": "Alexandria",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.3,
    "ticket": "N/A",
    "x": 13,
    "y": 61
  },
  {
    "id": "MAN-5G-052",
    "city": "Mansoura",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.4,
    "ticket": "N/A",
    "x": 30,
    "y": 84
  },
  {
    "id": "TAN-5G-053",
    "city": "Tanta",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 93.3,
    "ticket": "TT-1153",
    "x": 47,
    "y": 27
  },
  {
    "id": "ASW-LTE-054",
    "city": "Aswan",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 93.4,
    "ticket": "TT-1154",
    "x": 64,
    "y": 50
  },
  {
    "id": "LUX-5G-055",
    "city": "Luxor",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 93.5,
    "ticket": "TT-1155",
    "x": 81,
    "y": 73
  },
  {
    "id": "SUE-5G-056",
    "city": "Suez",
    "vendor": "Ericsson",
    "status": "Down",
    "availability": 61,
    "ticket": "TT-1156",
    "x": 12,
    "y": 16
  },
  {
    "id": "ISM-LTE-057",
    "city": "Ismailia",
    "vendor": "Nokia",
    "status": "Down",
    "availability": 62,
    "ticket": "TT-1157",
    "x": 29,
    "y": 39
  },
  {
    "id": "FAY-5G-058",
    "city": "Fayoum",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.1,
    "ticket": "N/A",
    "x": 46,
    "y": 62
  },
  {
    "id": "MIN-5G-059",
    "city": "Minya",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.2,
    "ticket": "N/A",
    "x": 63,
    "y": 85
  },
  {
    "id": "SOH-LTE-060",
    "city": "Sohag",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.3,
    "ticket": "N/A",
    "x": 80,
    "y": 28
  },
  {
    "id": "ZAG-5G-061",
    "city": "Zagazig",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.4,
    "ticket": "N/A",
    "x": 11,
    "y": 51
  },
  {
    "id": "POR-5G-062",
    "city": "Port Said",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.5,
    "ticket": "N/A",
    "x": 28,
    "y": 74
  },
  {
    "id": "HUR-LTE-063",
    "city": "Hurghada",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.6,
    "ticket": "N/A",
    "x": 45,
    "y": 17
  },
  {
    "id": "DAM-5G-064",
    "city": "Damietta",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.7,
    "ticket": "N/A",
    "x": 62,
    "y": 40
  },
  {
    "id": "CAI-5G-065",
    "city": "Cairo",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.8,
    "ticket": "N/A",
    "x": 79,
    "y": 63
  },
  {
    "id": "GIZ-LTE-066",
    "city": "Giza",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.9,
    "ticket": "N/A",
    "x": 10,
    "y": 86
  },
  {
    "id": "ALE-5G-067",
    "city": "Alexandria",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 94.7,
    "ticket": "TT-1167",
    "x": 27,
    "y": 29
  },
  {
    "id": "MAN-5G-068",
    "city": "Mansoura",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 94.8,
    "ticket": "TT-1168",
    "x": 44,
    "y": 52
  },
  {
    "id": "TAN-LTE-069",
    "city": "Tanta",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 94.9,
    "ticket": "TT-1169",
    "x": 61,
    "y": 75
  },
  {
    "id": "ASW-5G-070",
    "city": "Aswan",
    "vendor": "Ericsson",
    "status": "Down",
    "availability": 75,
    "ticket": "TT-1170",
    "x": 78,
    "y": 18
  },
  {
    "id": "LUX-5G-071",
    "city": "Luxor",
    "vendor": "Nokia",
    "status": "Down",
    "availability": 76,
    "ticket": "TT-1171",
    "x": 9,
    "y": 41
  },
  {
    "id": "SUE-LTE-072",
    "city": "Suez",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.5,
    "ticket": "N/A",
    "x": 26,
    "y": 64
  },
  {
    "id": "ISM-5G-073",
    "city": "Ismailia",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.6,
    "ticket": "N/A",
    "x": 43,
    "y": 87
  },
  {
    "id": "FAY-5G-074",
    "city": "Fayoum",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.7,
    "ticket": "N/A",
    "x": 60,
    "y": 30
  },
  {
    "id": "MIN-LTE-075",
    "city": "Minya",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.8,
    "ticket": "N/A",
    "x": 77,
    "y": 53
  },
  {
    "id": "SOH-5G-076",
    "city": "Sohag",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.0,
    "ticket": "N/A",
    "x": 8,
    "y": 76
  },
  {
    "id": "ZAG-5G-077",
    "city": "Zagazig",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.1,
    "ticket": "N/A",
    "x": 25,
    "y": 19
  },
  {
    "id": "POR-LTE-078",
    "city": "Port Said",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.2,
    "ticket": "N/A",
    "x": 42,
    "y": 42
  },
  {
    "id": "HUR-5G-079",
    "city": "Hurghada",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.3,
    "ticket": "N/A",
    "x": 59,
    "y": 65
  },
  {
    "id": "DAM-5G-080",
    "city": "Damietta",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.4,
    "ticket": "N/A",
    "x": 76,
    "y": 8
  },
  {
    "id": "CAI-LTE-081",
    "city": "Cairo",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.5,
    "ticket": "N/A",
    "x": 7,
    "y": 31
  },
  {
    "id": "GIZ-5G-082",
    "city": "Giza",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 89.2,
    "ticket": "TT-1182",
    "x": 24,
    "y": 54
  },
  {
    "id": "ALE-5G-083",
    "city": "Alexandria",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 89.3,
    "ticket": "TT-1183",
    "x": 41,
    "y": 77
  },
  {
    "id": "MAN-LTE-084",
    "city": "Mansoura",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 89.4,
    "ticket": "TT-1184",
    "x": 58,
    "y": 20
  },
  {
    "id": "TAN-5G-085",
    "city": "Tanta",
    "vendor": "Nokia",
    "status": "Down",
    "availability": 65,
    "ticket": "TT-1185",
    "x": 75,
    "y": 43
  },
  {
    "id": "ASW-5G-086",
    "city": "Aswan",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.0,
    "ticket": "N/A",
    "x": 6,
    "y": 66
  },
  {
    "id": "LUX-LTE-087",
    "city": "Luxor",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.1,
    "ticket": "N/A",
    "x": 23,
    "y": 9
  },
  {
    "id": "SUE-5G-088",
    "city": "Suez",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.2,
    "ticket": "N/A",
    "x": 40,
    "y": 32
  },
  {
    "id": "ISM-5G-089",
    "city": "Ismailia",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.3,
    "ticket": "N/A",
    "x": 57,
    "y": 55
  },
  {
    "id": "FAY-LTE-090",
    "city": "Fayoum",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.4,
    "ticket": "N/A",
    "x": 74,
    "y": 78
  },
  {
    "id": "MIN-5G-091",
    "city": "Minya",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.5,
    "ticket": "N/A",
    "x": 91,
    "y": 21
  },
  {
    "id": "SOH-5G-092",
    "city": "Sohag",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.6,
    "ticket": "N/A",
    "x": 22,
    "y": 44
  },
  {
    "id": "ZAG-LTE-093",
    "city": "Zagazig",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 99.7,
    "ticket": "N/A",
    "x": 39,
    "y": 67
  },
  {
    "id": "POR-5G-094",
    "city": "Port Said",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 99.8,
    "ticket": "N/A",
    "x": 56,
    "y": 10
  },
  {
    "id": "HUR-5G-095",
    "city": "Hurghada",
    "vendor": "Nokia",
    "status": "Active",
    "availability": 98.0,
    "ticket": "N/A",
    "x": 73,
    "y": 33
  },
  {
    "id": "DAM-LTE-096",
    "city": "Damietta",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 90.6,
    "ticket": "TT-1196",
    "x": 90,
    "y": 56
  },
  {
    "id": "CAI-5G-097",
    "city": "Cairo",
    "vendor": "Nokia",
    "status": "Alarm",
    "availability": 90.7,
    "ticket": "TT-1197",
    "x": 21,
    "y": 79
  },
  {
    "id": "GIZ-5G-098",
    "city": "Giza",
    "vendor": "Ericsson",
    "status": "Alarm",
    "availability": 90.8,
    "ticket": "TT-1198",
    "x": 38,
    "y": 22
  },
  {
    "id": "ALE-LTE-099",
    "city": "Alexandria",
    "vendor": "Nokia",
    "status": "Down",
    "availability": 79,
    "ticket": "TT-1199",
    "x": 55,
    "y": 45
  },
  {
    "id": "MAN-5G-100",
    "city": "Mansoura",
    "vendor": "Ericsson",
    "status": "Active",
    "availability": 98.5,
    "ticket": "N/A",
    "x": 72,
    "y": 68
  }
];

const alarmData = [
  {
    "site": "TAN-5G-005",
    "type": "Site Down",
    "severity": "Critical",
    "time": "6 min ago",
    "solution": "Validate power, transmission link, BBU/RRU reachability, then escalate to field team immediately."
  },
  {
    "site": "ISM-LTE-009",
    "type": "VSWR High",
    "severity": "Major",
    "time": "12 min ago",
    "solution": "Check feeder/jumper connections, antenna alignment, and recent weather impact before dispatch."
  },
  {
    "site": "ZAG-5G-013",
    "type": "Low Throughput",
    "severity": "Major",
    "time": "18 min ago",
    "solution": "Review PRB utilization, interference, backhaul congestion, and recent parameter changes."
  },
  {
    "site": "CAI-5G-017",
    "type": "Fiber Cut",
    "severity": "Critical",
    "time": "24 min ago",
    "solution": "Confirm with transmission NOC, check impacted neighboring sites, and open urgent vendor ticket."
  },
  {
    "site": "TAN-LTE-021",
    "type": "Power Failure",
    "severity": "Critical",
    "time": "30 min ago",
    "solution": "Check rectifier, battery backup, diesel generator, and site access requirements."
  },
  {
    "site": "ISM-5G-025",
    "type": "High Interference",
    "severity": "Major",
    "time": "36 min ago",
    "solution": "Check neighboring cells, external interference source, PCI conflict, and recent optimization changes."
  },
  {
    "site": "ZAG-5G-029",
    "type": "Cell Unavailable",
    "severity": "Critical",
    "time": "42 min ago",
    "solution": "Check cell administrative state, board status, license validity, and restart history."
  },
  {
    "site": "CAI-LTE-033",
    "type": "Packet Loss",
    "severity": "Minor",
    "time": "48 min ago",
    "solution": "Run ping and traceroute, check microwave/fiber quality, and monitor packet loss trend."
  },
  {
    "site": "TAN-5G-037",
    "type": "High CPU Load",
    "severity": "Warning",
    "time": "54 min ago",
    "solution": "Check abnormal traffic, stuck processes, and recent software alarms."
  },
  {
    "site": "ISM-5G-041",
    "type": "S1 Link Down",
    "severity": "Critical",
    "time": "60 min ago",
    "solution": "Validate transport path to core, VLAN/IP configuration, and MME/S1 connectivity."
  },
  {
    "site": "ZAG-LTE-045",
    "type": "RET Failure",
    "severity": "Major",
    "time": "66 min ago",
    "solution": "Check RET cable, AISG chain, antenna configuration, and attempt remote calibration."
  },
  {
    "site": "CAI-5G-049",
    "type": "Clock Sync Lost",
    "severity": "Major",
    "time": "72 min ago",
    "solution": "Check GPS antenna, PTP source, sync status, and holdover duration."
  },
  {
    "site": "TAN-5G-053",
    "type": "Temperature High",
    "severity": "Warning",
    "time": "78 min ago",
    "solution": "Check cabinet cooling, fan alarms, shelter AC, and environmental sensors."
  },
  {
    "site": "ISM-LTE-057",
    "type": "License Expiry",
    "severity": "Minor",
    "time": "84 min ago",
    "solution": "Validate license capacity and expiration date, then coordinate renewal with planning team."
  },
  {
    "site": "ZAG-5G-061",
    "type": "Call Drop Rate High",
    "severity": "Major",
    "time": "90 min ago",
    "solution": "Analyze handover failures, coverage holes, interference, and recent traffic spikes."
  },
  {
    "site": "CAI-5G-065",
    "type": "Handover Failure",
    "severity": "Major",
    "time": "96 min ago",
    "solution": "Check neighbor relations, PCI planning, mobility parameters, and target cell availability."
  },
  {
    "site": "TAN-LTE-069",
    "type": "Backhaul Congestion",
    "severity": "Major",
    "time": "102 min ago",
    "solution": "Review transport utilization, QoS drops, microwave capacity, and peak-hour patterns."
  },
  {
    "site": "ISM-5G-073",
    "type": "Battery Low",
    "severity": "Warning",
    "time": "108 min ago",
    "solution": "Check battery health, rectifier status, power cuts, and expected backup duration."
  },
  {
    "site": "ZAG-5G-077",
    "type": "RRU Communication Lost",
    "severity": "Critical",
    "time": "114 min ago",
    "solution": "Check fiber patching, SFP status, RRU power, and CPRI/eCPRI link alarms."
  },
  {
    "site": "CAI-LTE-081",
    "type": "Uplink Noise Rise",
    "severity": "Minor",
    "time": "120 min ago",
    "solution": "Inspect interference trend, faulty feeders, PIM possibility, and nearby external sources."
  },
  {
    "site": "TAN-5G-085",
    "type": "Data Mismatch",
    "severity": "Minor",
    "time": "126 min ago",
    "solution": "Compare OSS database, planning sheet, and live network configuration."
  },
  {
    "site": "ISM-5G-089",
    "type": "Sector Degraded",
    "severity": "Major",
    "time": "132 min ago",
    "solution": "Check sector KPIs, radio alarms, antenna line, and recent work orders."
  },
  {
    "site": "ZAG-LTE-093",
    "type": "Paging Failure",
    "severity": "Warning",
    "time": "138 min ago",
    "solution": "Check core paging success, tracking area configuration, and sudden traffic changes."
  },
  {
    "site": "CAI-5G-097",
    "type": "VoLTE Drop High",
    "severity": "Major",
    "time": "144 min ago",
    "solution": "Review IMS registration, QCI settings, RF quality, and handover performance."
  }
];

const kpiTrend = [96.1, 97.2, 95.8, 98.4, 97.9, 99.1, 98.6];

const suggestions = Object.fromEntries(alarmData.map(alarm => [alarm.type, alarm.solution]));
