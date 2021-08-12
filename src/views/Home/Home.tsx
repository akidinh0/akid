import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import EarnLinkCard from './components/EarnLinkCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 4;
    width: 100%;
  }
  // #token-state {
  //   grid-column: span 3;
  //   width: 100%;
  // }

  // #twiter {
  //   grid-column: span 6;
  //   width: 100%;
  // }

  // #havest-state{
  //   grid-column: span 3;
  //   width: 100%;
  // }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
    #token-state {
      grid-column: span 12;
      width: 100%;
    }

    #twiter {
      grid-column: span 12;
      width: 100%;
    }

    #havest-state{
      grid-column: span 12;
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
    #token-state {
      grid-column: span 3;
      width: 100%;
    }

    #twiter {
      grid-column: span 6;
      width: 100%;
    }

    #havest-state{
      grid-column: span 3;
      width: 100%;
    }
  }
`
const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page style={{maxWidth: '1400px'}}>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="primary">
          {TranslateString(576, 'PUTSWAP')}
        </Heading>
        <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
          {TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')}
        </Heading>
      </Hero>
      <div>
        <Cards>
          <div id="token-state">
            <CakeStats />
            <TotalValueLockedCard />
          </div>
          <div id="twiter" style={{display: 'flex'}}>
            <TwitterCard />
          </div>
       
          <div id="havest-state">
            <FarmStakingCard />
            <EarnLinkCard />
          </div>
        </Cards>
      </div>
    </Page>
  )
}

export default Home
