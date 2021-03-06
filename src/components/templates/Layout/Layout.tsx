import { Navbar } from '@components/organisms/Navbar'
import makeStyles from '@utils/makeStyles'

type PageInterface = {
  children: JSX.Element | JSX.Element[]
}

export function Layout({ ...props }: PageInterface) {
  return (
    <div
      className={makeStyles([
        'flex flex-col justify-center items-center m-auto',
        'bg-light text-black dark:bg-trueGray dark:text-white',
        'min-h-screen',
      ])}
    >
      <Navbar />
      <main>{props.children}</main>
    </div>
  )
}
