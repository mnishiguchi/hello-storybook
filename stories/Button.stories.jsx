import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Bootstrap/Button',
  // https://storybook.js.org/docs/react/api/argtypes#manual-specification
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
      defaultValue: 'danger',
      description: null,
      table: {
        type: {
          summary: 'btn-*',
          detail: `
btn-primary
btn-secondary
btn-success
btn-info
btn-warning
btn-danger
          `
        }
      }
    },
    outline: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: null,
      table: {
        type: {
          summary: 'btn-outline-*',
          detail: `
btn-outline-primary
btn-outline-secondary
btn-outline-success
btn-outline-info
btn-outline-warning
btn-outline-danger
          `
        }
      }
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
      description: null,
      table: {
        type: {
          summary: 'btn-*',
          detail: `
btn-sm
btn-lg
          `
        }
      }
    }
  }
}

function Template({ color, size, outline }) {
  return (
    <button
      className={clsx([
        'btn',
        [outline ? `btn-outline-${color}` : `btn-${color}`],
        [size === 'small' && 'btn-sm'],
        [size === 'medium' && ''],
        [size === 'large' && 'btn-lg']
      ])}
    >
      OK
    </button>
  )
}

export const Example = Template.bind({})
Example.args = {}
