import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-normal ring-offset-background transition-all duration-[400ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'font-space-grotesk bg-peridio-purple text-white hover:bg-[#4a3fcc] shadow-button rounded-sm',
        'outline-transparent-primary':
          'font-space-grotesk bg-transparent text-peridio-purple border border-[0.5px] border-[#e1e3e1] hover:bg-peridio-purple hover:text-white rounded-sm',
        'outline-transparent-secondary':
          'font-space-grotesk bg-transparent text-white border border-[1px] border-outline-transparent-secondary hover:bg-peridio-purple hover:text-white rounded-sm',
        secondary:
          'font-space-grotesk bg-white text-peridio-purple hover:bg-peridio-purple hover:text-white rounded-sm',
        'secondary-dark':
          'font-space-grotesk text-white text-center bg-fill-base-shade-4 hover:bg-peridio-purple rounded transition-colors',
      },
      size: {
        xs: 'h-[30px] rounded-md px-2 text-xs',
        sm: 'h-[38px] rounded-md px-3 text-sm',
        default: 'h-[40px] px-4 py-2 text-sm',
        lg: 'h-[42px] rounded-md px-8 ',
        xl: 'h-[48px] rounded-md px-8 ',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
