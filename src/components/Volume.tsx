import React from 'react'
import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowProps,
} from 'react-virtualized'

import useWindowSize from './useWindowSize'
import iProject from '../interfaces/project'
import Project from './Project'

interface VolumeProps {
  projects: iProject[]
}

function Volume(props: VolumeProps) {
  const windowSize = useWindowSize()
  // const [size, setSize] = useState(() => windowSize.height)
  const { projects } = props
  console.log('Volume render')

  const cache = new CellMeasurerCache({
    defaultHeight: windowSize.height,
    fixedWidth: true,
  })

  function rowRenderer(props: ListRowProps) {
    const { index, key, parent, style } = props

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        {({ measure, registerChild }) => (
          // 'style' attribute required to position cell (within parent List)
          <div ref={registerChild} style={style}>
            <Project measure={measure} project={projects[index]} idx={index} />
          </div>
        )}
      </CellMeasurer>
    )
  }

  return (
    <List
      height={windowSize.height}
      width={windowSize.width}
      rowCount={projects.length}
      deferredMeasurementCache={cache}
      rowHeight={cache.rowHeight}
      rowRenderer={rowRenderer}
    />
  )
}

export default Volume
