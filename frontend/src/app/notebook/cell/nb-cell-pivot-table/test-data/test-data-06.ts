export const PIVOTTABLE_TEST06 = {
  mdx: 'SELECT NON EMPTY NONEMPTYCROSSJOIN([HomeD].[H1].[ZIP].Members,[Measures].[Population]) ON 0,NON EMPTY [HomeD].[H1].[City].Members ON 1 FROM [CITIES]',
  resp: {
    Info: {
      Error: '',
      TimeStamp: '2020-12-13 16:28:50',
      ResultsComplete: 1,
      PendingResults: 0,
      MDXText: 'SELECT NON EMPTY NONEMPTYCROSSJOIN([HOMED].[H1].[ZIP].MEMBERS,[MEASURES].[POPULATION]) ON 0,NON EMPTY [HOMED].[H1].[CITY].MEMBERS ON 1 FROM [CITIES]',
      QueryKey: 'ptbr2340378122',
      CubeKey: 'CITIES',
      QueryID: 'CITIES||ptbr2340378122',
      Cube: 'CITIES',
      Pivot: '',
      QueryType: 'SELECT',
      ListingSource: '',
      ColCount: 5,
      RowCount: 9
    },
    AxesInfo: [
      {
        '%ID': 'SlicerInfo',
        Text: ''
      },
      {
        '%ID': 'AxisInfo_1',
        Text: 'NON EMPTY NONEMPTYCROSSJOIN([HOMED].[H1].[ZIP].MEMBERS,[MEASURES].[POPULATION])'
      },
      {
        '%ID': 'AxisInfo_2',
        Text: 'NON EMPTY [HOMED].[H1].[CITY].MEMBERS'
      }
    ],
    Result: {
      Axes: [
        {
          '%ID': 'Axis_1',
          Tuples: [
            {
              '%ID': 'Tuple_1',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32006'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 11,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 4,
                  text: '32006',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32006',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_2',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32007'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 12,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 5,
                  text: '32007',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32007',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_3',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 13,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 6,
                  text: '34577',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '34577',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_4',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '36711'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 14,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 7,
                  text: '36711',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '36711',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_5',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '38928'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 15,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 8,
                  text: '38928',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '38928',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            }
          ],
          TupleInfo: [
            {
              '%ID': 'TupleInfo_1',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_2',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_3',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_4',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_5',
              Error: '',
              childSpec: ''
            }
          ]
        },
        {
          '%ID': 'Axis_2',
          Tuples: [
            {
              '%ID': 'Tuple_1',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Cedar Falls'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 3,
                  text: 'Cedar Falls',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Cedar Falls',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_2',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Centerville'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 4,
                  text: 'Centerville',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Centerville',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_3',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Cypress'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 5,
                  text: 'Cypress',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Cypress',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_4',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Elm Heights'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 6,
                  text: 'Elm Heights',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Elm Heights',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_5',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Juniper'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 7,
                  text: 'Juniper',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Juniper',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_6',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Magnolia'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 8,
                  text: 'Magnolia',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Magnolia',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_7',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Pine'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 9,
                  text: 'Pine',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Pine',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_8',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Redwood'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 10,
                  text: 'Redwood',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Redwood',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_9',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Spruce'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 11,
                  text: 'Spruce',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Spruce',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            }
          ],
          TupleInfo: [
            {
              '%ID': 'TupleInfo_1',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_2',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_3',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_4',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_5',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_6',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_7',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_8',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_9',
              Error: '',
              childSpec: ''
            }
          ]
        }
      ],
      CellData: [
        {
          '%ID': 'Cell_1',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_2',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_3',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_4',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_5',
          ValueLogical: 90000,
          Format: '',
          ValueFormatted: '90,000'
        },
        {
          '%ID': 'Cell_6',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_7',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_8',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_9',
          ValueLogical: 49000,
          Format: '',
          ValueFormatted: '49,000'
        },
        {
          '%ID': 'Cell_10',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_11',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_12',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_13',
          ValueLogical: 3000,
          Format: '',
          ValueFormatted: '3,000'
        },
        {
          '%ID': 'Cell_14',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_15',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_16',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_17',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_18',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_19',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_20',
          ValueLogical: 33194,
          Format: '',
          ValueFormatted: '33,194'
        },
        {
          '%ID': 'Cell_21',
          ValueLogical: 10333,
          Format: '',
          ValueFormatted: '10,333'
        },
        {
          '%ID': 'Cell_22',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_23',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_24',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_25',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_26',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_27',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_28',
          ValueLogical: 4503,
          Format: '',
          ValueFormatted: '4,503'
        },
        {
          '%ID': 'Cell_29',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_30',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_31',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_32',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_33',
          ValueLogical: 15060,
          Format: '',
          ValueFormatted: '15,060'
        },
        {
          '%ID': 'Cell_34',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_35',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_36',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_37',
          ValueLogical: 29192,
          Format: '',
          ValueFormatted: '29,192'
        },
        {
          '%ID': 'Cell_38',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_39',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_40',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_41',
          ValueLogical: 5900,
          Format: '',
          ValueFormatted: '5,900'
        },
        {
          '%ID': 'Cell_42',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_43',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_44',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_45',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        }
      ]
    }
  },
  expectations: {
    columnRows: 2,
    columnRowsCells: ['City', '32006', '32007', '34577', '36711', '38928', 'City', 'Population', 'Population', 'Population', 'Population', 'Population'],
    columnRowsCount: 12,
    rows: 9,
    cells: ['Cedar Falls', '', '', '', '', '90,000', 'Centerville', '', '', '', '49,000', '', 'Cypress', '', '', '3,000', '', '', 'Elm Heights', '', '', '', '', '33,194', 'Juniper', '10,333', '', '', '', '', 'Magnolia', '', '', '4,503', '', '', 'Pine', '', '', '15,060', '', '', 'Redwood', '', '29,192', '', '', '', 'Spruce', '5,900', '', '', '', ''],
    cellsCount: 54,
    tableData: {
      tableColumns: [
        [
          {
            name: 'r0c0',
            caption: 'City',
            type: 'rowCaptionColumn'
          },
          {
            name: 'r0c1',
            caption: '32006',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c2',
            caption: '32007',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c3',
            caption: '34577',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c4',
            caption: '36711',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c5',
            caption: '38928',
            type: 'colCaptionColumn'
          }
        ],
        [
          {
            name: 'r1c0',
            caption: 'City',
            type: 'rowCaptionColumn'
          },
          {
            name: 'r1c1',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c2',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c3',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c4',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c5',
            caption: 'Population',
            type: 'colCaptionColumn'
          }
        ]
      ],
      tableRows: [
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Cedar Falls',
            ValueFormatted: 'Cedar Falls'
          },
          r1c1: {
            '%ID': 'Cell_1',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c2: {
            '%ID': 'Cell_2',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_3',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c4: {
            '%ID': 'Cell_4',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_5',
            ValueLogical: 90000,
            Format: '',
            ValueFormatted: '90,000'
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Centerville',
            ValueFormatted: 'Centerville'
          },
          r1c1: {
            '%ID': 'Cell_6',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c2: {
            '%ID': 'Cell_7',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_8',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c4: {
            '%ID': 'Cell_9',
            ValueLogical: 49000,
            Format: '',
            ValueFormatted: '49,000'
          },
          r1c5: {
            '%ID': 'Cell_10',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Cypress',
            ValueFormatted: 'Cypress'
          },
          r1c1: {
            '%ID': 'Cell_11',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c2: {
            '%ID': 'Cell_12',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_13',
            ValueLogical: 3000,
            Format: '',
            ValueFormatted: '3,000'
          },
          r1c4: {
            '%ID': 'Cell_14',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_15',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Elm Heights',
            ValueFormatted: 'Elm Heights'
          },
          r1c1: {
            '%ID': 'Cell_16',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c2: {
            '%ID': 'Cell_17',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_18',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c4: {
            '%ID': 'Cell_19',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_20',
            ValueLogical: 33194,
            Format: '',
            ValueFormatted: '33,194'
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Juniper',
            ValueFormatted: 'Juniper'
          },
          r1c1: {
            '%ID': 'Cell_21',
            ValueLogical: 10333,
            Format: '',
            ValueFormatted: '10,333'
          },
          r1c2: {
            '%ID': 'Cell_22',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_23',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c4: {
            '%ID': 'Cell_24',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_25',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Magnolia',
            ValueFormatted: 'Magnolia'
          },
          r1c1: {
            '%ID': 'Cell_26',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c2: {
            '%ID': 'Cell_27',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_28',
            ValueLogical: 4503,
            Format: '',
            ValueFormatted: '4,503'
          },
          r1c4: {
            '%ID': 'Cell_29',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_30',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Pine',
            ValueFormatted: 'Pine'
          },
          r1c1: {
            '%ID': 'Cell_31',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c2: {
            '%ID': 'Cell_32',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_33',
            ValueLogical: 15060,
            Format: '',
            ValueFormatted: '15,060'
          },
          r1c4: {
            '%ID': 'Cell_34',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_35',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Redwood',
            ValueFormatted: 'Redwood'
          },
          r1c1: {
            '%ID': 'Cell_36',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c2: {
            '%ID': 'Cell_37',
            ValueLogical: 29192,
            Format: '',
            ValueFormatted: '29,192'
          },
          r1c3: {
            '%ID': 'Cell_38',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c4: {
            '%ID': 'Cell_39',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_40',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          }
        },
        {
          r1c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Spruce',
            ValueFormatted: 'Spruce'
          },
          r1c1: {
            '%ID': 'Cell_41',
            ValueLogical: 5900,
            Format: '',
            ValueFormatted: '5,900'
          },
          r1c2: {
            '%ID': 'Cell_42',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c3: {
            '%ID': 'Cell_43',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c4: {
            '%ID': 'Cell_44',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          },
          r1c5: {
            '%ID': 'Cell_45',
            ValueLogical: '',
            Format: '',
            ValueFormatted: ''
          }
        }
      ]
    }
  }
}