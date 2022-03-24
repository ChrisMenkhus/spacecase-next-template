import { Button, Header } from '@components/atoms'
import { CodeIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'

type PageProps = {}

const Page: NextPage<PageProps> = () => (
  <>
    <Header {...pageSeo} />
    <section>
      <h1 className="grid place-items-center text-3xl">
        NextJs, Typescript, and Tailwind CSS
        <span className="block w-fit text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
          Template
        </span>
        <div className="grid gap-4 place-items-start py-16">
          <Button>Primary</Button>
          <Button disabled>Primary Disabled</Button>

          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled className="bg-red-500">
            Secondary Disabled
          </Button>
          <Button
            variant="secondary"
            className="bg-red-500 dark:bg-red-500"
            icon={CodeIcon}
          >
            Custom Class
          </Button>
          <Button variant="secondary" icon={CodeIcon} size="sm">
            small
          </Button>
          <Button variant="secondary" icon={CodeIcon} size="md">
            medium
          </Button>
          <Button variant="secondary" icon={CodeIcon} size="lg">
            large
          </Button>
          <Button variant="secondary" icon={CodeIcon} size="xl">
            XL
          </Button>
        </div>
      </h1>
    </section>
  </>
)

const pageSeo = {
  title: 'Spacecase Next Template',
  description:
    'Spacecase NextJs Template built for starting up projects quickly.',
}

Page.displayName = 'HomePage'
export default Page
