import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowRight  } from "react-icons/ti";
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'


const StyledEarnLinkCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const EarnLinkCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledEarnLinkCard>
      <CardBody>
        <Heading size="lg" mb="15px" color="primary">
          {TranslateString(1007, 'Earn')}
        </Heading>
        <Heading size="lg" mb="40px" color="primary">
          {TranslateString(999, 'DINO, QUICK, BEL, DFYN, xMARK, GHST, SX')}
        </Heading>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
            {/* <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/> */}
          {/* </Heading> */}
       
          <Text color="textSubtle">{TranslateString(999, 'in Extinction Pools ☄️')}</Text>
          <Link to='/pools'><TiArrowRight style={{fontSize: '30px'}}> </TiArrowRight></Link>
        </div>
      </CardBody>
    </StyledEarnLinkCard>
  )
}

export default EarnLinkCard
