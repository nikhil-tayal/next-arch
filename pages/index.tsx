import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import { Button } from '../src/components/atoms'
import Card from '../src/components/atoms/Card'
import H1 from '../src/components/atoms/H1'

const messagesInFrench = {
  myMessage: "This is our home website, Date {ts, date, ::yyyyMMdd}",
}


const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <Card className='mx-auto w-5/12 mt-20'>
      <H1>
        <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
          <FormattedMessage
            id="myMessage"
            defaultMessage="Today is {ts, date, ::yyyyMMdd}"
            values={{ ts: Date.now() }}
          />
          <br />
        </IntlProvider>
      </H1>
      <div className="flex justify-center">
        <Button variant='outlined' color='secondary' onClick={() => push('login')} className='my-6'>
          Take me to the Login !
      </Button>
      </div>
    </Card>
  )
}

export default Home
