import { Header } from '@components/atoms'
import type { NextPage } from 'next'

type PageProps = {}

const Page: NextPage<PageProps> = () => (
  <>
    <Header {...pageSeo} />
    <section>
      <h1 className="grid place-items-center text-3xl">
        NextJs, Typescript, and Tailwind CSS
        <span className="block w-fit text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-teal-300">
          Template
        </span>
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
