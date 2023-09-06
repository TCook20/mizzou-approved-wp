import React from 'react'
import classNames from 'classnames'

import './style.scss'
import ListItem from '../ListItem'
import listdata from '../../assets/plugin-list.json'

export interface PackageListProps {
  list?: any
  theme?: 'default' | 'dark',
  attributes?: object
}

const PackageList = ({
  theme = 'default',
  attributes,
  list = listdata.list.sort((a, b) => a.name.localeCompare(b.name)),
}: PackageListProps): JSX.Element => {
  const PackageListAttributes = {
    ...attributes,
    className: classNames(
      'miz-package-list',
      {
        [`miz-package-list--${theme}`]: theme,
      },
    ),
  }

  return (
    <ul { ...PackageListAttributes }>
      { list.map( (item: { status: { short: string; description: string }; name: string; description: string; type: string; source: string } ) => (
        <ListItem status={ item.status.short }>
          <h3>{ item.title }</h3>
          <p>{ item.description }</p>
          <dl>
            <dt>Package Type</dt>
            <dd>{ item.type }</dd>
            <dt>Package Source</dt>
            <dd>{ item.source }</dd>
            { item.status.short && (
              <><dt>Approval Status</dt><dd>{item.status.short}</dd></>
            ) }
            { item.status.description && (
              <><dt>Status Description</dt><dd>{ item.status.description }</dd></>
            ) }
            { item.name && (
              <><dt>Composer Package</dt><dd><code>{ item.name }</code></dd></>
            ) }
          </dl>
        </ListItem>
      ))}
    </ul>
  )
}

export default PackageList
