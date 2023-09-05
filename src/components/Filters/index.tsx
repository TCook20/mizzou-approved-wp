import React from 'react'
import classNames from 'classnames'
import { Button, RangeControl, SelectControl } from '@wordpress/components';

import './style.scss'

export interface FiltersProps {
  attributes?: object,
  type: string,
  status: string,
}

const Filters = ({
  attributes,
  type,
  status,
}: FiltersProps): JSX.Element => {
  const FiltersAttributes = {
    ...attributes,
    className: classNames('miz-package-filters'),
  }

  return (
    <div {...FiltersAttributes}>
      <SelectControl
        label="Package Type"
        value={ type }
        options={ [
          {
            value: '',
            label: 'Select Type',
            disabled: true,
          },
          {
            label: 'Plugin',
            value: 'wordpress-plugin',
          },
          {
            label: 'Theme',
            value: 'wordpress-theme',
          },
          {
            label: 'Library',
            value: 'library',
          },
          {
            label: 'Metapackage',
            value: 'metapackage',
          },
        ] }
        __nextHasNoMarginBottom
      />

      <SelectControl
        label="Status"
        value={ status }
        options={ [
          {
            value: '',
            label: 'Select Status',
            disabled: true,
          },
          {
            label: 'Approved',
            value: 'approved',
          },
          {
            label: 'Awaiting Review',
            value: 'awaiting-review',
          },
          {
            label: 'Not Approved',
            value: 'not-approved',
          },
        ] }
        __nextHasNoMarginBottom
      />
    </div>
  )
}

export default Filters