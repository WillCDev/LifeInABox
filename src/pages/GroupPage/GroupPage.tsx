import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PageConfig } from 'config'
import { toKebabCase } from 'utils'
import ContentWrapper from 'common/components/ContentWrapper'
import { Button } from '@chakra-ui/react'

const GroupPage: FC<Pick<PageConfig, 'group' | 'projectGroups'>> = ({
  group,
  projectGroups,
}) => (
  <ContentWrapper blurred>
    <h1>All Projects by: {group}</h1>
    {projectGroups.map(({ title }) => (
      <Link key={title} to={`./${toKebabCase(title)}`}>
        <Button>{title}</Button>
      </Link>
    ))}
  </ContentWrapper>
)

export default GroupPage
