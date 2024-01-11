import type { Content } from '@prismicio/client'
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from '@prismicio/react'

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>
    }
  },
}

type RichTextProps = SliceComponentProps<Content.RichTextSlice>

export default function RichText({ slice }: Readonly<RichTextProps>) {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  )
}
