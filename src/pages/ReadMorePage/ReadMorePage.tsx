import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Heading, useBreakpointValue } from '@chakra-ui/react'
import ContentWrapper from 'common/components/ContentWrapper'
import ExternalLink from 'common/components/ExternalLink'
import styles from './ReadMorePage.less'

const ReadMorePage: FC = () => {
  const navigate = useNavigate()
  const buttonSize = useBreakpointValue({
    base: 'lg',
    md: 'md',
    sm: 'xs',
  })

  return (
    <ContentWrapper blurred height="100%">
      <section className={styles.section}>
        <Heading className={styles.heading}>Living In A Box</Heading>
        <p>
          <strong>“Living in a Box”</strong> is a documentary style film
          produced by Open Arts, an arts and disability organisation based in
          Belfast. It tells the story of Open Arts through the 2020 – 2021
          lockdowns and restrictions, mostly from the perspective of our
          participants. The inspiration for the documentary was to highlight the
          daily challenges faced by disabled people and help others understand
          the disproportionate affect Covid has had on them. Engaging in the
          arts digitally was a lifeline for disabled people and remains so for
          many. One of our participants noted “now people without a disability
          know what it’s like to have a disability and the challenges it poses.”
          Not being able to leave our houses we were all “living in a box.”
        </p>
        <br />
        <p>
          Our Mission is to inspire and support the creativity and artistic
          development of disabled people. This website is an opportunity to
          share the catalogue of remarkable creative work that was produced by
          participants from our core programme over 15 months of the pandemic.
          Due to the scale of work produced we wanted to ensure the artistic
          skill of our participants was recognised.
        </p>
        <br />
        <p>
          While this film focuses on our core programme for disabled adults, we
          also run multiple other projects each year to engage more disabled of
          all ages. Even during 2020-2021, we facilitated online workshops for
          older people and continued our partnership project, In Tune, which is
          for children, who are blind/visually impaired, have autism or
          additional complex needs.
        </p>
        <br />
        <p>
          There is no similar participatory work happening in N.I., with the
          ambition and scope; multiple art forms with so many individuals with
          such varying disabilities and additional support needs: our activities
          engage people with physical disabilities, learning disabilities,
          sensory impairments, and mental health issues.
        </p>
        <br />
        <p>
          Our Vision is a society that actively values and promotes the
          creativity and artistic contribution of disabled people. If you’d like
          more information about the work we do, check out our website{' '}
          <ExternalLink
            to="https://www.openartsni.org"
            label="Link to the Open Arts website"
          >
            www.openartsni.org
          </ExternalLink>{' '}
          or email{' '}
          <a
            aria-label="Click to send an email to open arts"
            href="mailto:info@openartsni.org"
          >
            info@openartsni.org
          </a>
        </p>
        <br />
        <Button size={buttonSize} onClick={() => navigate('/')}>
          Back
        </Button>
      </section>
    </ContentWrapper>
  )
}

export default ReadMorePage
