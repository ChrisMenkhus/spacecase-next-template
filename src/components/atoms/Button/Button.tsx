import makeStyles from '@utils/makeStyles'
import { forwardRef } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  icon?: React.ElementType
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', icon, className = '', ...props },
    ref
  ) => {
    const IconElement = () => {
      if (icon) {
        const Icon = icon
        return <Icon className={styles.icon} />
      } else return <></>
    }

    return (
      <button
        {...props}
        ref={ref}
        type={props.type}
        disabled={props.disabled}
        className={makeStyles([
          styles.container,
          variants[variant],
          sizes[size],
          'disabled:bg-gray-400 disabled:bg-gradient-to-r disabled:from-gray-400 disabled:to-gray-400 disabled:dark:bg-gray-400 disabled:dark:bg-gradient-to-r  disabled:dark:from-gray-400  disabled:dark:to-gray-400',
          className || '',
        ])}
      >
        <span className={styles.text}>{props.children}</span>
        <IconElement />
      </button>
    )
  }
)

const styles = {
  container:
    'flex justify-center items-center rounded border text-black bg-white dark:text-white dark:bg-black hover:scale-105 transition-all border-0',
  text: 'mx-1',
  icon: 'h-4 w-4 mx-1 my-auto',
}

const variants = {
  primary:
    'bg-gradient-to-r text-white dark:text-white shadow-xl shadow-fuchsia-800/20 from-rose-500 to-orange-400',
  secondary:
    'bg-gray-800 dark:bg-gray-700 text-white dark:text-white shadow-xl disabled:bg-gray-400 disabled:dark:bg-gray-400',
}

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-base',
  lg: 'py-2 px-10 text-lg',
  xl: 'py-3 px-10 text-xl',
}

Button.displayName = 'ButtonComponent'
