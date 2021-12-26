import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import { Button } from '../src/components/atoms'

const messagesInFrench = {
  myMessage: "This is our home website, Date {ts, date, ::yyyyMMdd}",
}


const Home: NextPage = () => {
  const {push} = useRouter();
  return (
    <>
      <h1 className="text-4xl font-bold underline">
        <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
          <p>
            <FormattedMessage
              id="myMessage"
              defaultMessage="Today is {ts, date, ::yyyyMMdd}"
              values={{ ts: Date.now() }}
            />
            <br />
            {/* <FormattedNumber value={19} style="currency" currency="EUR" /> */}
          </p>
        </IntlProvider>

      </h1>
      <Button variant='outlined' color='secondary' onClick={()=>push('login')}>
        Take me to the Login !
      </Button>
    </>
  )
}

export default Home
