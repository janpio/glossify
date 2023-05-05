import { useDraggable } from '@dnd-kit/core';
import { faGripDotsVertical } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FragmentType, graphql, useFragment } from '@glossify/schema';

const WordFragment = graphql(`
  fragment WordFragment on Word {
    id
    left
    right
    type
  }
`);

type Props = {
  word: FragmentType<typeof WordFragment>
}

export function Word({ word }: Props) {
  const wordData = useFragment(WordFragment, word);
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: wordData.id
  });

  return (
    <div
      ref={setNodeRef}
      style={!transform ? {} : {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }}
    >
      <span {...listeners} {...attributes}>
        <FontAwesomeIcon icon={faGripDotsVertical} style={{ marginRight: '.5rem' }}/>
      </span>
      {wordData.left}
    </div>
  )
}
