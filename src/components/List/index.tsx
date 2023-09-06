import React from 'react'
import classNames from 'classnames'

import './style.scss'
import ListItem from '../ListItem'
import listdata from '../../assets/plugin-list.json'

export interface PackageListProps {
  list?: any
  theme?: 'default' | 'dark'
  attributes?: object
}

const PackageList = ({
  theme = 'default',
  attributes,
  list = listdata.list.sort((a, b) => a.title.localeCompare(b.title)),
}: PackageListProps): JSX.Element => {
  const PackageListAttributes = {
    ...attributes,
    className: classNames('miz-package-list', {
      [`miz-package-list--${theme}`]: theme,
    }),
  }

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <ul {...PackageListAttributes}>
      {list.map(
        (item: {
          status: { short: string; description: string }
          name: string
          description: string
          type: string
          source: string
        }) => (
          <ListItem status={item.status.short}>
            <div className="miz-card__body">
              <h3 className="miz-card__title">{item.title}</h3>
              <p className="miz-card__text">{item.description}</p>
              <dl>
                <dt>Package Type</dt>
                <dd>{item.type}</dd>
                <dt>Package Source</dt>
                <dd>{item.source}</dd>
                {item.status.short && (
                  <>
                    <dt>Approval Status</dt>
                    <dd>{capitalizeWord(item.status.short.replace('-', ' '))}</dd>
                  </>
                )}
                {item.status.description && (
                  <>
                    <dt>Status Description</dt>
                    <dd>{item.status.description}</dd>
                  </>
                )}
                {item.name && (
                  <>
                    <dt>Composer Package</dt>
                    <dd>
                      <code>{item.name}</code>
                    </dd>
                  </>
                )}
              </dl>
            </div>
          </ListItem>
        ),
      )}
    </ul>
  )
}

export default PackageList
