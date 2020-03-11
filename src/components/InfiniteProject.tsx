import React from 'react'
import { VariableSizeList } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'

import Project from './Project'
import { projects } from '../__test__/projects'
import useWindowSize from './useWindowSize'

const LOADING = 1
const LOADED = 2
let itemStatusMap: { [index: number]: typeof LOADING | typeof LOADED } = {}

const isItemLoaded = (index: number) => !!itemStatusMap[index]
const loadMoreItems = (startIndex: number, stopIndex: number) => {
  for (let index = startIndex; index <= stopIndex; index++) {
    itemStatusMap[index] = LOADING
  }
  return new Promise(resolve =>
    setTimeout(() => {
      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADED
      }
      resolve()
    }, 2500)
  )
}

function Row(props: { index: number; style: React.CSSProperties | undefined }) {
  return itemStatusMap[props.index] === LOADED ? (
    <Project project={projects[0]} idx={props.index} />
  ) : (
    <div
      className="loading"
      style={{
        ...props.style,
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      {`l o a d i n g ${props.index} . . .`}
    </div>
  )
}

function InfiniteProject() {
  const windowSize = useWindowSize()
  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={1000}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => {
        console.log('reffff:', ref)
        return (
          <VariableSizeList
            className="List"
            height={windowSize.height}
            itemCount={1000}
            estimatedItemSize={windowSize.height}
            itemSize={() => windowSize.height}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={windowSize.width}
          >
            {Row}
          </VariableSizeList>
        )
      }}
    </InfiniteLoader>
  )
}

export default InfiniteProject
