import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'TradeIcon',
    imageLink: './images/Home.png',
    href: '/',
  },
  {
    label: 'Exchange',
    icon: 'TradeIcon',
    imageLink: './images/exchange.png',
    href: 'http://exchange.totem.coinsanjose.io/#/swap',
  },
  {
    label: 'Liquidity',
    icon: 'TradeIcon',
    imageLink: './images/liquidity.png',
    href: 'https://exchange.totem.coinsanjose.io/#/pool',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    imageLink: './images/farms.png',
    href: '/farms',
  },
  {
    label: 'Poles',
    icon: 'PoolIcon',
    imageLink: './images/poles.png',
    href: '/pools',
  },
   {
    label: '',
    icon: 'PoolIcon',
    imageLink: './images/telegram.png',
    href: '/poolIcon1',
  },
  {
    label: '',
    icon: 'TradeIcon',
    imageLink: './images/twitter.png',
    href: '/poolIcon12',
  },
 
]

export default config
