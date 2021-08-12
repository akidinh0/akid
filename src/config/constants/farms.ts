import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'TOTEM-FTM LP',
    lpAddresses: {
      97: '',
      250: '0x8ecaba9284b1f01fcb2bc5267f46b9b1507321f1',
    },
    tokenSymbol: 'TOTEM',
    tokenAddresses: {
      97: '',
      250: '0xD4d187e545E3F65a239e77081c7404E08ac24D0A',
    },
    decimals: 18,
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'SPIRIT-FTM LP',
    lpAddresses: {
      97: '',
      250: '0x30748322B6E34545DBe0788C421886AEB5297789',
    },
    tokenSymbol: 'SPIRIT',
    tokenAddresses: {
      97: '',
      250: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
    },
    decimals: 18,
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'FTM-USDC LP',
  //   lpAddresses: {
  //     97: '',
  //     250: '0xe7E90f5a767406efF87Fdad7EB07ef407922EC1D',
  //   },
  //   tokenSymbol: 'FTM',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
  //   },
  //   decimals : 18,
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },
  // {
  //   pid: 3,
  //   risk: 3,
  //   lpSymbol: 'WETH-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x613BF4E46b4817015c01c6Bb31C7ae9edAadc26e',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 4,
  //   risk: 3,
  //   lpSymbol: 'WBTC-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x279b2c897737a50405ED2091694F225D83F2D3bA',
  //   },
  //   tokenSymbol: 'WBTC',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 5,
  //   risk: 3,
  //   lpSymbol: 'BNB-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x74fE5Ddc4c27F91a1898ccd5Ac62dFeb2d3dF726',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 6,
  //   risk: 3,
  //   lpSymbol: 'YFI-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x4fc38a2735C7da1d71ccAbf6DeC235a7DA4Ec52C',
  //   },
  //   tokenSymbol: 'YFI',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 7,
  //   risk: 3,
  //   lpSymbol: 'LINK-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0xd061c6586670792331E14a80f3b3Bb267189C681',
  //   },
  //   tokenSymbol: 'LINK',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 8,
  //   risk: 3,
  //   lpSymbol: 'CRV-FTM ',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x374C8ACb146407Ef0AE8F82BaAFcF8f4EC1708CF',
  //   },
  //   tokenSymbol: 'CRV',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'SUSHI-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x9Fe4c0CE5F533e96C2b72d852f190961AD5a7bB3',
  //   },
  //   tokenSymbol: 'SUSHI',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 10,
  //   risk: 3,
  //   lpSymbol: 'BUSD-FUSDT',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x1Ac51904cFAaD15679B3500F0fC41D2971657f80',
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0xc931f61b1534eb21d8c11b24f3f5ab2471d4ab50',
  //   },
  //   quoteTokenSymbol: QuoteToken.FUSDT,
  //   quoteTokenAdresses: contracts.fusdt,
  // },
  // {
  //   pid: 11,
  //   risk: 3,
  //   lpSymbol: 'ZOO-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0xDF18DD2631f02D930071DF7d6FF89bbc3718C62F',
  //   },
  //   tokenSymbol: 'ZOO',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x09e145a1d53c0045f41aeef25d8ff982ae74dd56',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 12,
  //   risk: 3,
  //   lpSymbol: 'GRIM-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x2c18c39622b90318B0124eCFd6d4aC81efcC51db',
  //   },
  //   tokenSymbol: 'GRIM',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x7eC94C4327dC757601B4273cD67014d7760Be97E',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 13,
  //   risk: 3,
  //   lpSymbol: 'HODL-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0xBE7133Ee3a172D2a92c26e40f511f9d089a9b1fe',
  //   },
  //   tokenSymbol: 'HODL',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0xb2da66c4a89d0f93935d1efdb9c9c8d1d3ba9343',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   lpSymbol: 'BUTT-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0x5A14032cD11BEc488e58D90dF3EF3a7C002d1b9F',
  //   },
  //   tokenSymbol: 'BUTT',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0xf42cc7284389fbf749590f26539002ca931323d0',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
  // {
  //   pid: 15,
  //   risk: 3,
  //   lpSymbol: 'SHIT-FTM',
  //   lpAddresses: {
  //     97: '',
  //     250: '0xbc3B0D165Cd8dCc7d7eca3a225d1e5ea85E54E84',
  //   },
  //   tokenSymbol: 'SHIT',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x65414a8581a7571531ea2bcdcba8a3f0c1a1554b',
  //   },
  //   quoteTokenSymbol: QuoteToken.FTM,
  //   quoteTokenAdresses: contracts.wftm,
  // },
 
  // {
  //   pid: 16,
  //   risk: 1,
  //   lpSymbol: 'TOTEM',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     250: '0x31a37aedc0c18aa139e120e1cdc673bbb2063e6f',
  //   },
  //   tokenSymbol: 'TOTEM',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x31a37aedc0c18aa139e120e1cdc673bbb2063e6f',
  //   },
  //   quoteTokenSymbol: QuoteToken.TOTEM,
  //   quoteTokenAdresses: contracts.totem,
  // },
  // {
  //   pid: 3,
  //   risk: 1,
  //   lpSymbol: 'FTM',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     250: '0x30bC196703fCF114Db04823B7c3F32f5E87DAb84',
  //   },
  //   tokenSymbol: 'FTM',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 4,
  //   risk: 1,
  //   lpSymbol: 'SPIRIT',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     250: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
  //   },
  //   tokenSymbol: 'SPIRIT',
  //   tokenAddresses: {
  //     97: '',
  //     250: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
  //   },
  //   quoteTokenSymbol: QuoteToken.SPIRIT,
  //   quoteTokenAdresses: contracts.spirit,
  // },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'ZOO',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      250: '0x562cfe8474f91ae1a6ab98bdafb6fd439416286f',
    },
    decimals: 0,
    tokenSymbol: 'ZOO',
    tokenAddresses: {
      97: '',
      250: '0x09e145a1d53c0045f41aeef25d8ff982ae74dd56',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'TOTEM-USDC',
    lpAddresses: {
      97: '',
      250: '0x3ef9d9081ea8ec47ab0d857dc793f6f0141ebba6',
    },
    decimals: 0,
    tokenSymbol: 'TOTEM',
    tokenAddresses: {
      97: '',
      250: '0xD4d187e545E3F65a239e77081c7404E08ac24D0A',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
