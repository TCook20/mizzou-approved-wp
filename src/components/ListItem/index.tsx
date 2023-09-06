import React from 'react'
import classNames from 'classnames'

import './style.scss'

export interface ListItemProps {
  children: React.ReactNode
  attributes?: object
  status: string
}

const ListItem = ({ children, attributes, status }: ListItemProps): JSX.Element => {
  const ListItemAttributes = {
    ...attributes,
    className: classNames('miz-package-list-item', 'miz-card', {
      [`miz-package-list-item--${status}`]: status,
    }),
  }

  return <li {...ListItemAttributes}>{children}</li>
}

export default ListItem
